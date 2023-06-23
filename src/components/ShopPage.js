import Card from './Card';

function ShopPage({ cartItems, setCartItems }) {
  return (
    <div>
      Shop Page
      <Card cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
}

export default ShopPage;
