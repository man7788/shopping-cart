import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';

function App() {
  const [cartItems, setCartItems] = useState(0);

  return (
    <div className="app-div">
      <Nav cartItems={cartItems} />
      <Outlet context={{ cartItems, setCartItems }} />
    </div>
  );
}

export default App;

// RouteSwitch -> App       -> Nav  -> Cart
//             -> Homepage
//             -> Shop Page -> Card
