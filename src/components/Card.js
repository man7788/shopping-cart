function Card({ item, setItem }) {
  const addOne = () => {
    setItem(item + 1);
  };

  return (
    <div>
      <div className="item" onClick={addOne}>
        Item
      </div>
    </div>
  );
}

export default Card;
