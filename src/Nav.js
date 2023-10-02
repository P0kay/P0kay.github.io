import { NavLink, Outlet } from 'react-router-dom';
import './App.scss';
import expandImage from './images/expand.png'
import { useRef } from 'react';

function Nav() {
  const navRef = useRef(null)
  const showNavTab = () => {
    navRef.current.classList.toggle('-left-full')
  }
  return (
    <div className='App'>
      <nav className='text-neutral-100 text-2xl'>
        <ul className='flex max-lg:hidden'>
          <li className="m-6 cursor-pointer hover:text-neutral-400">
            <NavLink to='about_me'>
              About me
            </NavLink>
          </li>
          <li className="m-6 cursor-pointer hover:text-neutral-400">
            <NavLink to='projects'>
              My projects
            </NavLink>
          </li>
        </ul>
      </nav>
      <img src={expandImage} alt="" className='lg:hidden w-10 m-6 cursor-pointer absolute z-10' onClick={showNavTab} />
      <nav className='text-neutral-100 bg-neutral-500 text-2xl lg:hidden absolute -left-full top-0 h-screen w-1/4' ref={navRef}>
        <ul className='pt-6 text-2xl'>
          <li className="cursor-pointer hover:text-neutral-400 text-center m-10 mt-20">
            <NavLink to='about_me'>
              About me
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-neutral-400 text-center m-10">
            <NavLink to='projects'>
              My projects
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Nav;
