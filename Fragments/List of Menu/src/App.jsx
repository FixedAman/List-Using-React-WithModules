import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  // const  fooditems = ["Milk", "Dal", "Mutton", "chicken", "Lemon"];
  const fooditems = [];
  if (fooditems.length === 0) {
    return <h3>im still hungry</h3>;
  }
  return (
    <>
      <h1>Food Item</h1>
      <ul className="list-group">
        {fooditems.map((items) => {
          return (
            <li className="list-group-item" key={items}>
              {items}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
