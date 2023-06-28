import uniqid from 'uniqid';
import '../styles/ShopPage.css';
import Card from './Card';

function ShopPage({ cartItems, setCartItems }) {
  const storage = ['Alpha', 'Bravo', 'Charlie', 'Delta'];

  const display = storage.map((item) => {
    return (
      <Card
        cartItems={cartItems}
        setCartItems={setCartItems}
        itemName={item}
        key={uniqid()}
      />
    );
  });

  return <div className="shop-page">{display}</div>;
}

export default ShopPage;
