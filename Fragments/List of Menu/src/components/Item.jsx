import React from "react";
import style from "./Item.module.css";
const Item = ({ fooditems ,bought ,handleBuyButton}) => {
  
  return (
    <>
      <li className={`${style.kgitem} list-group-item ${bought && "active"}`}>
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
