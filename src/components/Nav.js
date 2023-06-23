import { Link } from 'react-router-dom';

import Cart from './Cart';

function Nav({ item }) {
  return (
    <div>
      <Link to="/">Homepage</Link>
      <br />
      <Link to="/shop-page">Shop Page</Link>
      <Cart item={item} />
    </div>
  );
}

export default Nav;
