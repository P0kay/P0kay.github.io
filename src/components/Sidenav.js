import { NavLink, useLocation } from 'react-router-dom';
import routes from '../routes'
import ShrinkBar from '../IconComponents/ShrinkBar';
import ExpandBar from '../IconComponents/ExpandBar';
import { useDispatch, useSelector } from 'react-redux';
import { sidenavValue, switchExpand } from '../redux/slices/sidenavSlice';

function Sidenav() {
    const dispatch = useDispatch()
    const { expanded, className } = useSelector(sidenavValue)
    const { pathname } = useLocation()
    return (
        <>
            {expanded &&
                <ShrinkBar size="90" color="#d4d4d4" className='lg:hidden m-6 cursor-pointer fixed z-40 flex items-center w-max' onClick={() =>
                    dispatch(switchExpand())} />
            }
            {!expanded &&
                <ExpandBar size="90" color="#d4d4d4" className='lg:hidden m-6 cursor-pointer fixed z-40 flex items-center w-max' onClick={() =>
                    dispatch(switchExpand())} />
            }
            <nav className={`text-neutral-100 bg-red-900 text-[200%] lg:hidden fixed duration-150 top-0 h-full w-2/4 z-30 select-none text-center h-full ${className}`}>
                <ul className='pt-36'>
                    {routes.map(route =>
                        <NavLink to={route.path} onClick={e => {
                            pathname === route.path && e.preventDefault()
                        }} key={route.name}>
                            <li className={`cursor-pointer text-left p-8 flex items-center gap-4 hover:bg-red-800 ${pathname === route.path && 'bg-red-800'}`}>
                                {route.icon}
                                {route.name}
                            </li>
                        </NavLink>
                    )}
                </ul>
            </nav>
        </>
    );
}

export default Sidenav;