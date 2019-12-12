import React from "react";
import Number from "./Number";

const Content = props => {
  const { data } = props;

  return (
    <React.Fragment>
      {data.map(item => (
        <Number item={item}></Number>
      ))}
    </React.Fragment>
  );
};

export default Content;
