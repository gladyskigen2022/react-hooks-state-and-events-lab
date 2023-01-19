import React, {useState} from "react";

function Item({ name, category }) {
  const [inTheCart, setInTheCart] =useState(false);
   //(inTheCart? "inTheCat": "")

  function handleInCart(){
    setInTheCart(inTheCart => !inTheCart)
  }

  return (
    <li className="cart">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick = {handleInCart}>{inTheCart? "Add to Cart": "Remove from Cart"}</button>
    </li>
  );
}

export default Item;
