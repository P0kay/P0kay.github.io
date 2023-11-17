import { NavLink, useLocation } from "react-router-dom";
import routes from "../routes";
function Navbar() {
    const { pathname } = useLocation()
    return (
        <nav className='text-neutral-100 text-2xl fixed top-0 bg-red-900 w-[100%] h-20 z-10  items-center max-lg:hidden select-none'>
            <ul className='flex h-full'>
                {routes.map(route =>
                    <NavLink to={route.path} key={route.name}>
                        <li className={`p-6 cursor-pointer ${pathname === route.path && 'bg-red-800'} hover:bg-red-800`}>
                            <p>
                                {route.name}
                            </p>
                        </li>
                    </NavLink>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;