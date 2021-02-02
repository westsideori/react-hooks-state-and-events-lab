import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  const handleAddToCart = () => {
    setInCart((inCart) => !inCart)
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart} className={inCart ? "Remove" : "Add"}>{inCart ? "Remove From" : "Add To"} Cart</button>
    </li>
  );
}

export default Item;
