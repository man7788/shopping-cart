import cart from '../../images/cart.png';
import styles from './Cart.module.css';

function Cart({ cartItems }) {
  return (
    <div className={styles.cartDiv} data-testid="cart">
      <img className={styles.cart} src={cart} alt="cart" />
      {cartItems}
    </div>
  );
}

export default Cart;
