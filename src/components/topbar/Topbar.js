import React from "react";
import AddItemButton from "./AddItemButton";
import { MdMenuBook } from "react-icons/md";

function Topbar() {
  return (
    <div
      className={`h-[60px] w-screen bg-orange-50 flex items-center 
      justify-between px-4 laptop:px-12 select-none`}
    >
      <h1 className={`font-bold text-2xl text-orange-400 flex items-center `}>
        <MdMenuBook />
        <span className={`ml-2`}>CRUD-Menu</span>
      </h1>
      <AddItemButton />
    </div>
  );
}

export default Topbar;
