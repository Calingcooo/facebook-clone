import React from "react";

const Button = ({ buttonName, buttonStyle, onClickHandleF }) => {
  return (
    <button className={buttonStyle} onClick={onClickHandleF}>
      {buttonName}
    </button>
  );
};

export default Button;
