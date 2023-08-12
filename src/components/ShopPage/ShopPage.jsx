// import uniqid from 'uniqid';
import { useOutletContext } from 'react-router-dom';
import styles from './ShopPage.module.css';
import Card from '../Card/Card';
import useStoreURL from '../UseStoreURL';

function ShopPage() {
  const { cartItems, setCartItems } = useOutletContext();
  const { storeURL, error, loading } = useStoreURL();

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.shopPage}>
      {storeURL.map((item) => {
        return (
          <Card
            cartItems={cartItems}
            setCartItems={setCartItems}
            itemName={item.title}
            key={item.id}
          />
        );
      })}
    </div>
  );
}

export default ShopPage;

// const storage = [
//   { itemName: 'Alpha', id: uniqid() },
//   { itemName: 'Bravo', id: uniqid() },
//   { itemName: 'Charlie', id: uniqid() },
//   { itemName: 'Delta', id: uniqid() },
// ];

// return (
//   <div className={styles.shopPage}>
//     {storage.map((item) => {
//       return (
//         <Card
//         cartItems={cartItems}
//         setCartItems={setCartItems}
//         itemName={item.itemName}
//         key={item.id}
//         />
//         );
//       })}
//   </div>
// );
