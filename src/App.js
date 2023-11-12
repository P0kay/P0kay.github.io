import { Outlet } from 'react-router-dom';
import './App.scss';
import Sidenav from './components/Sidenav';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App h-full'>
      <Navbar />
      <Sidenav />
      <div className='lg:mt-20 h-full relative'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
