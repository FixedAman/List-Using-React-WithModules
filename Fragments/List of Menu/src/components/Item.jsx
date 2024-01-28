import React from "react";
import style from "./Item.module.css";
const Item = (props) => {
  return (
    <>
      <li className={`${style.kgitem} list-group-item`}>{props.fooditems}</li>
    </>
  );
};

export default Item;
