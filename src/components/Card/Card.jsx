import { useState } from 'react';
import styles from './Card.module.css';
import PropTypes from 'prop-types';

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
    <div className={styles.card}>
      {itemName}
      <form className={styles.form} onSubmit={addToCart}>
        <button onClick={minusOne} type="button">
          -
        </button>
        <input
          name={itemName}
          onChange={handleChange}
          value={quantity}
          type="number"
        ></input>
        <button onClick={addOne} type="button">
          +
        </button>
        <button type="submit">Add To Cart</button>
      </form>
    </div>
  );
}

Card.propTypes = {
  cartItems: PropTypes.number,
  setCartItems: PropTypes.func,
};

export default Card;
