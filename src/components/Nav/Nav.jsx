import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import Cart from '../Cart/Cart';
import logo from '../../images/logo.svg';

function Nav({ cartItems }) {
  return (
    <div className={styles.navDiv}>
      <img className={styles.logo} src={logo} alt="logo" />
      <div className={styles.pages}>
        <div className={styles.page}>
          <Link to="/">Homepage</Link>
        </div>
        <div className={styles.page}>
          <Link to="/shop-page">Shop Page</Link>
        </div>
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default Nav;
