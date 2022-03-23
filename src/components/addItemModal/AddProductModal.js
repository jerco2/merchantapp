import React from "react";
import { useModalToggler } from "../../ModalToggler";
import CloseButton from "./CloseButton";

function AddProductModal() {
  const toggler = useModalToggler();

  return (
    <div
      className={`h-screen w-screen bg-black/20 absolute top-0 left-0 z-10 
      items-center justify-center ${toggler ? "flex" : "hidden"}`}
    >
      <div className={`w-4/5 h-4/5 rounded bg-white p-4 `}>
        <CloseButton />
        <div className={`w-full h-5/6 flex`}>
          <div className={`w-1/2 h-full p-4`}>test</div>
          <div
            className={`w-1/2 h-full border-2 border-y-0 border-r-0 
            border-l-orange-100 p-4`}
          >
            test
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductModal;
