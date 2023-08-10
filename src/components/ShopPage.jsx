import uniqid from 'uniqid';
import { useOutletContext } from 'react-router-dom';
import '../styles/ShopPage.css';
import Card from './Card';

function ShopPage() {
  const { cartItems, setCartItems } = useOutletContext();

  const storage = [
    { itemName: 'Alpha', id: uniqid() },
    { itemName: 'Bravo', id: uniqid() },
    { itemName: 'Charlie', id: uniqid() },
    { itemName: 'Delta', id: uniqid() },
  ];

  const display = storage.map((item) => {
    return (
      <Card
        cartItems={cartItems}
        setCartItems={setCartItems}
        itemName={item.itemName}
        key={item.id}
      />
    );
  });

  return <div className="shop-page">{display}</div>;
}

export default ShopPage;
