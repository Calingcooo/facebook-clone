import React from "react";

const FormHeader = ({ title, titleStyle, subtitle, subtitleStyle, style }) => {
  return (
    <div className={style}>
      <h1 className={titleStyle}>{title}</h1>
      <h5 className={subtitleStyle}>{subtitle}</h5>
    </div>
  );
};

export default FormHeader;
