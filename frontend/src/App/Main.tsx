import { Outlet } from 'react-router-dom';
import Footer from '../features/Navbar/Footer';
import Navigation from '../features/Navbar/Navigation';

export default function Main(): JSX.Element {
  return (
    <div className="App">
      <Navigation />
      <br />
      <Outlet />
      <Footer />
    </div>
  );
}