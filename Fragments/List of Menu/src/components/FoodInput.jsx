import React from "react";
import styles from "./FoodInput.module.css"

const FoodInput = ({onChangeHandle}) => {
  
  return <input type="text" placeholder="Enter Your Food Item" className={styles.foodInput} onChange={onChangeHandle} />;
};

export default FoodInput;
