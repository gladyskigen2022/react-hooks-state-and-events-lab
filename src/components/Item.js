import React, {useState} from "react";

function Item({ name, category }) {
  const [inTheCart, setInTheCart] =useState(false);
 // const cart = inTheCart ? "in-Cart": "";
   
  function handleInCart(){
    setInTheCart(!inTheCart)
  }
 // (inTheCart) =>

  return (
    <li className={inTheCart ? "in-Cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleInCart} >"Remove from Cart": "Add to Cart" </button>
    </li>
  );
}

export default Item;
