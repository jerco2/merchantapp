import React from "react";

function Header({ onClick, label }) {
  return (
    <h1 onClick={onClick} className={`w-[14.28%] cursor-pointer`}>
      {label}
    </h1>
  );
}

export default Header;
