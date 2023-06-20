import './App.css';
import Homepage from './components/Homepage';
import Nav from './components/Nav';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <Homepage />
      <Nav />
      <Cart />
    </div>
  );
}

export default App;

// RouteSwitch -> App       -> Nav
//             -> Homepage
//             -> Shop Page -> Card
//             -> Cart
