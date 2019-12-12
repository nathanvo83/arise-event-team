import React from "react";

const Number = props => {
  const { item } = props;
  return (
    <button
      className={
        item.status === true ? "number number-on" : "number number-off"
      }
    >
      {item.value + 1}
    </button>
  );
};

export default Number;
