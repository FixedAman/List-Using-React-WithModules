import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

const App = () => {
  let [fooditems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let NewFoodItem = event.target.value;
      let newItems = [...fooditems, NewFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="List-Heading">Food Item</h1>
        <FoodInput handleKeyDown={onKeyDown} />

        <FoodItems items={fooditems} />
        <ErrorMessage items={fooditems} />
      </Container>
    </>
  );
};

export default App;
