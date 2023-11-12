import { Outlet, useLocation } from 'react-router-dom';
import './App.scss';
import Sidenav from './components/Sidenav';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {
  const pathname = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  return (
    <div className='App'>
      <header>
        <Navbar />
        <Sidenav />
      </header>
      <main className='lg:mt-20 mb-8'>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
