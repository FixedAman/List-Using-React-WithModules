import React, { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);
  let onBuyButton = (event, item) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };
  return (
    <>
      <ul className="list-group">
        {items.map((item) => {
          return (
            <Item
              key={item}
              fooditems={item}
              bought={activeItems.includes(item)}
              handleBuyButton={(event) => onBuyButton(event, item)}
            />
          );
        })}
      </ul>
    </>
  );
};

export default FoodItems;
