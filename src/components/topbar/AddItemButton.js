import React from "react";
import { AiOutlineInbox } from "react-icons/ai";
import { useModalUpdateToggler } from "../../contexts/ModalToggler";
import { GoDiffAdded } from "react-icons/go";

function AddItemButton() {
  const toggleModal = useModalUpdateToggler();

  return (
    <div
      className={`px-3 py-2 bg-gradient-to-tl from-orange-400 to-orange-200 
      hover:bg-gradient-to-tl hover:from-orange-500 hover:to-orange-300 rounded 
      text-white relative shadow cursor-pointer`}
      onClick={toggleModal}
    >
      <span className={`font-semibold text-xl tablet:hidden`}>
        <GoDiffAdded />
      </span>
      <button className={`tracking-wider hidden items-center tablet:flex`}>
        <AiOutlineInbox /> <span className={`ml-2`}>ADD NEW ITEM</span>
      </button>
    </div>
  );
}

export default AddItemButton;
