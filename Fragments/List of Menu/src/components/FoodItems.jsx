import React from "react";
import Item from "./Item";

const FoodItems = ({items}) => {
  
  return (
    <>
      <ul className="list-group">
        {items.map((item) => {
          return <Item key={item} fooditems={item} />;
        })}
      </ul>
    </>
  );
};

export default FoodItems;
