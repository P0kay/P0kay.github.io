import { NavLink, Outlet } from 'react-router-dom';
import './App.scss';
import { useRef, useState } from 'react';
import ExpandBar from './components/ExpandBar';
import ShrinkBar from './components/ShrinkBar';

function App() {
  const navRef = useRef(null)
  const [sideBarShown, setSideBarShown] = useState(false)
  const showNavTab = () => {
    setSideBarShown(prev => !prev)
    navRef.current.classList.toggle('translate-x-[-100%]')
  }
  return (
    <div className='App h-full'>
      <nav className='text-neutral-100 text-2xl fixed top-0 bg-red-900 w-[100%] h-20 z-10  items-center max-lg:hidden select-none'>
        <ul className='flex'>
          <li className="m-6 cursor-pointer hover:text-neutral-400">
            <NavLink to='about_me'>
              ABOUT ME
            </NavLink>
          </li>
          <li className="m-6 cursor-pointer hover:text-neutral-400">
            <NavLink to='projects'>
              MY PROJECTS
            </NavLink>
          </li>
        </ul>
      </nav>
      {sideBarShown &&
        <ShrinkBar size="90" color="#d4d4d4" className='lg:hidden m-6 cursor-pointer fixed z-40 flex items-center w-max' onClick={showNavTab} />
      }
      {!sideBarShown &&
        <ExpandBar size="90" color="#d4d4d4" className='lg:hidden m-6 cursor-pointer fixed z-40 flex items-center w-max' onClick={showNavTab} />
      }
      <nav className='text-neutral-100 bg-red-900 text-[200%] lg:hidden fixed duration-150 translate-x-[-100%] top-0 h-full w-2/4 z-30 select-none text-center' ref={navRef}>
        <ul className='pt-12'>
          <li className="cursor-pointer hover:text-neutral-400 m-10 mt-32">
            <NavLink to='about_me' onClick={showNavTab} >
              ABOUT ME
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-neutral-400 m-10 mt-20">
            <NavLink to='projects' onClick={showNavTab} >
              MY PROJECTS
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className='lg:mt-20 h-full relative'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
