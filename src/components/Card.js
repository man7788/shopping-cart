import { useState } from 'react';
import '../styles/Card.css';

function Card({ cartItems, setCartItems, itemName = 'Item Name' }) {
  const [quantity, setQuantity] = useState(0);

  const addToCart = (e) => {
    e.preventDefault();
    setCartItems(Number(cartItems) + Number(quantity));
    setQuantity(0);
  };

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  const addOne = () => {
    setQuantity(quantity + 1);
  };
  const minusOne = () => {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      {itemName}
      <form onSubmit={addToCart}>
        <button onClick={minusOne} type="button">
          -
        </button>
        <input onChange={handleChange} value={quantity} type="number"></input>
        <button onClick={addOne} type="button">
          +
        </button>
        <button type="submit">Add To Cart</button>
      </form>
    </div>
  );
}

export default Card;
