import { Outlet, useLocation } from 'react-router-dom';
import './App.scss';
import Sidenav from './components/Sidenav';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sidenavValue, switchExpand } from './redux/slices/sidenavSlice';

function App() {
  const { pathname } = useLocation()
  const { expanded } = useSelector(sidenavValue)
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0);
    if (expanded) {
      dispatch(switchExpand())
    }
  }, [pathname])
  return (
    <div className='App'>
      <header>
        <Navbar />
        <Sidenav />
      </header>
      <main className='lg:mt-20 mb-8' onClick={() => {
        if (expanded) {
          dispatch(switchExpand())
        }
      }}>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
