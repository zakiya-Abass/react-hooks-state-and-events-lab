import React, { useState } from "react";

function Item({ name, description, price }) {
  const [inCart, setInCart] = useState(false);

  const handleClick = () => {
    setInCart(!inCart);
  };

  const buttonText = inCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={inCart ? "in-cart" : ""}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <button onClick={handleClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
