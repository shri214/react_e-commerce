import { NavLink } from 'react-router-dom';
import './style.css';
import TemporaryDrawer from '../NavDrawer';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="shop">
        <strong>
          <NavLink to={'/'}>MeShop.</NavLink>
        </strong>
      </div>
      <ul className="ulList">
        <NavLink to={'/registration'}>Sing Up</NavLink>
        <NavLink to={'/login'}>Login</NavLink>
        <NavLink to={'/profile'}>Profile</NavLink>
        <NavLink to={'/store'}>Store</NavLink>
        <NavLink to={'/cart'}>Cart</NavLink>
      </ul>
      <div className="drawer">
        <TemporaryDrawer />
      </div>
    </nav>
  );
};
export default Navbar;
