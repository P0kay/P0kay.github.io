import { NavLink, useLocation } from 'react-router-dom';
import routes from '../routes'
import { useEffect, useRef, useState } from 'react';
import ShrinkBar from '../Icons/ShrinkBar';
import ExpandBar from '../Icons/ExpandBar';
function Sidenav() {
    const { pathname } = useLocation()
    const navRef = useRef(null)
    const [sideBarShown, setSideBarShown] = useState(false)
    const switchNavTab = () => {
        setSideBarShown(prev => !prev)
        navRef.current.classList.toggle('translate-x-[-100%]')
    }
    useEffect(() => {
        if (sideBarShown === true) {
            switchNavTab()
        }
    }, [pathname])
    return (
        <>
            {sideBarShown &&
                <ShrinkBar size="90" color="#d4d4d4" className='lg:hidden m-6 cursor-pointer fixed z-40 flex items-center w-max' onClick={switchNavTab} />
            }
            {!sideBarShown &&
                <ExpandBar size="90" color="#d4d4d4" className='lg:hidden m-6 cursor-pointer fixed z-40 flex items-center w-max' onClick={switchNavTab} />
            }
            <nav className='text-neutral-100 bg-red-900 text-[200%] lg:hidden fixed duration-150 translate-x-[-100%] top-0 h-full w-2/4 z-30 select-none text-center' ref={navRef}>
                <ul className='pt-36'>
                    {routes.map(route =>
                        <NavLink to={route.path} onClick={e => {
                            pathname === route.path && e.preventDefault()
                        }} key={route.name}>
                            <li className="cursor-pointer group text-left m-8 p-8 border-b-2 border-red-950 flex items-center gap-4 pl-0">
                                {route.icon}
                                <p className={`${pathname === route.path && 'border-bottom'}  group-hover:border-bottom`}>
                                    {route.name}
                                </p>
                            </li>
                        </NavLink>
                    )}
                </ul>
            </nav>
        </>
    );
}

export default Sidenav;