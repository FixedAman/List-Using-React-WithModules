import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
const App = () => {
  const fooditems = ["Milk", "Dal", "Mutton", "Chicken", "Lemon"];
  // const fooditems = [];
  // if (fooditems.length === 0) {
  //   return <h3>im still hungry</h3>;
  // }
  let textToShow = "Item Entered By User ";
  const onChangeHandle = (event) => {
    console.log(event.target.value);
    textToShow = event.target.value;
  };
  return (
    <>
      <Container>
        <h1 className="List-Heading">Food Item</h1>
        <FoodInput onChangeHandle={onChangeHandle} />
        <p>{textToShow}</p>
        <FoodItems items={fooditems} />
        <ErrorMessage items={fooditems} />
      </Container>
      {/* <Container>
        <p>These all are good and healthy for our health</p>
       </Container> */}
    </>
  );
};

export default App;
