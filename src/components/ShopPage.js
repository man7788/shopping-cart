import Card from './Card';
import uniqid from 'uniqid';

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

  return (
    <div>
      Shop Page
      {display}
    </div>
  );
}

export default ShopPage;
