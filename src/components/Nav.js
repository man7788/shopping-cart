import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/shop-page">Shop Page</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
