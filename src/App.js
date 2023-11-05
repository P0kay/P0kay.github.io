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
    navRef.current.classList.toggle('-left-full')
  }
  return (
    <div className='App'>
      <nav className='text-neutral-100 text-2xl fixed top-0 bg-red-900 w-[100%] h-20 z-10  items-center max-lg:hidden'>
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
        <ShrinkBar size="60" color="#d4d4d4" className='lg:hidden h-20 m-6 cursor-pointer relative z-30' onClick={showNavTab} />
      }
      {!sideBarShown &&
        <ExpandBar size="60" color="#d4d4d4" className='lg:hidden h-20 m-6 cursor-pointer relative z-30 flex items-center' onClick={showNavTab} />
      }
      <nav className='text-neutral-100 bg-red-900 text-[200%] lg:hidden absolute -left-full top-0 h-full w-2/4 z-20' ref={navRef}>
        <ul className='pt-12'>
          <li className="cursor-pointer hover:text-neutral-400 text-center m-10 mt-32">
            <NavLink to='about_me' onClick={showNavTab} >
              ABOUT ME
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-neutral-400 text-center m-10 mt-20">
            <NavLink to='projects' onClick={showNavTab} >
              MY PROJECTS
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className='lg:mt-20 h-full'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
