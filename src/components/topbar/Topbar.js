import React from "react";
import AddItemButton from "./AddItemButton";

function Topbar() {
  return (
    <div
      className={`h-[60px] w-screen bg-orange-50 flex items-center 
      justify-end px-4 laptop:px-12 select-none`}
    >
      <AddItemButton />
    </div>
  );
}

export default Topbar;
