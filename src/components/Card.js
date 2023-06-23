import { useState } from 'react';

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

  return (
    <div>
      {itemName}
      <form onSubmit={addToCart}>
        <input onChange={handleChange} value={quantity} type="number"></input>
        <button data-testid="add" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default Card;
