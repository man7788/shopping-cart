import Card from './Card';

function ShopPage({ item, setItem }) {
  return (
    <div>
      Shop Page
      <Card item={item} setItem={setItem} />
    </div>
  );
}

export default ShopPage;
