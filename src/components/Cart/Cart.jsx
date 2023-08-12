import cart from '../../images/cart.png';
import styles from './Cart.module.css';
import PropTypes from 'prop-types';

function Cart({ cartItems }) {
  return (
    <div className={styles.cartDiv} data-testid="cart">
      <img className={styles.cart} src={cart} alt="cart" />
      {cartItems}
    </div>
  );
}

export default Cart;

Cart.propTypes = {
  cartItems: PropTypes.number,
};
