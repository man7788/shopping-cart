import { Link, NavLink } from 'react-router-dom';
import '../styles/Nav.css';
import Cart from './Cart';
import logo from '../images/logo.svg';

function Nav({ cartItems }) {
  return (
    <div className="nav-div">
      <img className="logo" src={logo} alt="logo" />
      <div className="pages">
        <div className="page">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          >
            Homepage
          </NavLink>
        </div>
        <div className="page">
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link' : 'link')}
            to="/shop-page"
          >
            Shop Page
          </NavLink>
        </div>
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default Nav;
