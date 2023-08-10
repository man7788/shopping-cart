import { useState } from 'react';
import styles from './App.module.css';
import Nav from './components/Nav/Nav';
import { Outlet } from 'react-router-dom';

function App() {
  const [cartItems, setCartItems] = useState(0);

  return (
    <div className={styles.appDiv}>
      <Nav cartItems={cartItems} />
      <Outlet context={{ cartItems, setCartItems }} />
    </div>
  );
}

export default App;

// RouteSwitch -> App       -> Nav  -> Cart
//             -> Homepage
//             -> Shop Page -> Card
