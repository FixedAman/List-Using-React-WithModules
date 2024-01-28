import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css"
const App = () => {
  const  fooditems = ["Milk", "Dal", "Mutton", "chicken", "Lemon" ];
  // const fooditems = [];
  // if (fooditems.length === 0) {
  //   return <h3>im still hungry</h3>;
  // }
  return (
    <>
      <h1 className="List-Heading">Food Item</h1>
       <FoodItems items ={fooditems}/>
       <ErrorMessage items ={fooditems}/>
    </>
  );
};

export default App;
