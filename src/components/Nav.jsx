import { Link } from 'react-router-dom';
import '../styles/Nav.css';
import Cart from './Cart';
import logo from '../images/logo.svg';

function Nav({ cartItems }) {
  return (
    <div className="nav-div">
      <img className="logo" src={logo} alt="logo" />
      <div className="pages">
        <div className="page">
          <Link
            to="/"
            // className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          >
            Homepage
          </Link>
        </div>
        <div className="page">
          <Link
            // className={({ isActive }) => (isActive ? 'active-link' : 'link')}
            to="/shop-page"
          >
            Shop Page
          </Link>
        </div>
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default Nav;
