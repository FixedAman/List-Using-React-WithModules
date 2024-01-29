import React from "react";

const ErrorMessage = ({ items }) => {
  if (items.length === 0) {
    return (
      <>
        <h2>Im Hungry Now</h2>
      </>
    );
  }
};
// {
//   fooditems.length === 0 && <h3>im Still Hungry</h3>;
// }

export default ErrorMessage;
