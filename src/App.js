import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import ShopPage from './components/ShopPage';
import Nav from './components/Nav';

function App() {
  const [cartItems, setCartItems] = useState(0);

  return (
    <>
      {/* <BrowserRouter> */}
      <HashRouter>
        <div class="app-div">
          <Nav cartItems={cartItems} />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/shop-page"
              element={
                <ShopPage cartItems={cartItems} setCartItems={setCartItems} />
              }
            />
          </Routes>
        </div>
      </HashRouter>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;

// RouteSwitch -> App       -> Nav  -> Cart
//             -> Homepage
//             -> Shop Page -> Card
