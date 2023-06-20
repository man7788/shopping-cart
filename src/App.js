import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import ShopPage from './components/ShopPage';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop-page" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// RouteSwitch -> App       -> Nav  -> Cart
//             -> Homepage
//             -> Shop Page -> Card
