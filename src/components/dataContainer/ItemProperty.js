import React from "react";

function ItemProperty({ label, variable, display }) {
  return (
    <h1 className={`${display} w-full tablet:w-[14.28%]`}>
      <span className={`inline-block tablet:hidden`}>{label} </span>
      <span className={`ml-2 tablet:ml-0`}>{variable}</span>
    </h1>
  );
}

export default ItemProperty;
