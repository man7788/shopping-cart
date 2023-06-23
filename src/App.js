import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import ShopPage from './components/ShopPage';
import Nav from './components/Nav';

function App() {
  const [item, setItem] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Nav item={item} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/shop-page"
            element={<ShopPage item={item} setItem={setItem} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// RouteSwitch -> App       -> Nav  -> Cart
//             -> Homepage
//             -> Shop Page -> Card
