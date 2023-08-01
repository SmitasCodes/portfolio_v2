import React from "react";

const Card = (props) => {
  return (
    <div className="sm:w-1/3 sm:h-52 relative group ">{props.children}</div>
  );
};

export default Card;
