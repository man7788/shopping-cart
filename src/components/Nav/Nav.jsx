import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
import Cart from '../Cart/Cart';
import logo from '../../images/logo.svg';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: whitesmoke;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  &.active {
    border-radius: 2rem;
    background: yellowgreen;
  }
`;

function Nav({ cartItems }) {
  return (
    <div className={styles.navDiv}>
      <img className={styles.logo} src={logo} alt="logo" />
      <div className={styles.pages}>
        <div className={styles.page}>
          <StyledLink to="/">Homepage</StyledLink>
        </div>
        <div className={styles.page}>
          <StyledLink to="/shop-page">Shop Page</StyledLink>
        </div>
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default Nav;

Nav.propTypes = {
  cartItems: PropTypes.number,
};
