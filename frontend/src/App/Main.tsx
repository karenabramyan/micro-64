import { Outlet } from 'react-router-dom';
import Footer from '../features/Navbar/Footer';
import Navigation from '../features/Navbar/Navigation';
import './App.css';

export default function Main(): JSX.Element {
  return (
    <div className="App">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
