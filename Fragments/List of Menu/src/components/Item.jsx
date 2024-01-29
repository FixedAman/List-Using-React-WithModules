import React from "react";
import style from "./Item.module.css";
const Item = ({ fooditems  ,handleBuyButton}) => {
  const handleBuyButtonClicked = (event) => {
    console.log(event);
    console.log(`${fooditems} being bought`);
  };
  return (
    <>
      <li className={`${style.kgitem} list-group-item`}>
        <span>{fooditems}</span>
        <button
          className={`${style.button} btn btn-primary `}
          onClick={handleBuyButton}
        >
          buy
        </button>
      </li>
    </>
  );
};

export default Item;
