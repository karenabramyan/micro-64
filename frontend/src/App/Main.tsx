import { Outlet } from 'react-router-dom';
import Navigation from '../Navbar/Navigation';

export default function Main(): JSX.Element {
  return (
    <div className="App">
      <Navigation />
      <br />
      <Outlet />
    </div>
  );
}