import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import { useModalUpdateToggler } from "../../ModalToggler";

function CloseButton() {
  const toggleModal = useModalUpdateToggler();
  return (
    <div className={`w-full flex justify-end`}>
      <button
        className={`text-3xl text-orange-200 hover:text-orange-300 rounded-full 
        shadow hover:scale-[120%] ease-in-out duration-500`}
        onClick={toggleModal}
      >
        <IoCloseCircle />
      </button>
    </div>
  );
}

export default CloseButton;
