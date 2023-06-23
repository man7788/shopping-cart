import { Link } from 'react-router-dom';

import Cart from './Cart';

function Nav({ cartItems }) {
  return (
    <div>
      <Link to="/">Homepage</Link>
      <br />
      <Link to="/shop-page">Shop Page</Link>
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default Nav;
