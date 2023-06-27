import cart from '../images/cart.png';

function Cart({ cartItems }) {
  return (
    <div className="cart-div" data-testid="cart">
      <img className="cart" src={cart} alt="cart" />
      {cartItems}
    </div>
  );
}

export default Cart;
