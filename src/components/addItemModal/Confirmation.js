import React from "react";
import { useConfirmation } from "../../contexts/ConfirmationContext";
import { useConfirmationUpdate } from "../../contexts/ConfirmationContext";
import { GiConfirmed } from "react-icons/gi";

function ConfirmationModal({ handleSubmit, error, setError }) {
  const toggleConfirmation = useConfirmation();
  const closeModal = useConfirmationUpdate();

  const clickedCancel = () => {
    setError("");
    closeModal();
  };
  return (
    <div
      className={`${
        toggleConfirmation ? "flex" : "hidden"
      } absolute w-screen h-screen top-0 left-0 z-20 bg-black/20 items-center 
      justify-center`}
    >
      <div // ----- Main Container
        className={`w-[300px] h-[200px] bg-white flex flex-col
        items-center justify-center relative rounded-lg overflow-hidden`}
      >
        <div // -------- Modal header
          className={`w-full h-1/5 bg-orange-300 absolute top-0 flex 
          items-center p-4 text-white`}
        >
          <GiConfirmed />
          <span className={`ml-1 text-sm tracking-wider font-semibold `}>
            ADD DATA
          </span>
        </div>
        <p // ------- Modal text
          className={`font-semibold tracking-wider text-sm`}
        >
          Confirm data creation?
        </p>
        <span className={`text-red-500 font-semibold text-sm`}>{error}</span>
        <div className={`w-full flex absolute bottom-0`}>
          <button // ----- YES Button
            className={`w-1/2 border border-gray-300 hover:bg-gray-100 p-4 
            font-semibold tracking-wider text-sm text-green-500`}
            onClick={handleSubmit}
          >
            OK
          </button>
          <button // ------- CANCEL Button
            className={`w-1/2 border border-gray-300 border-l-0 hover:bg-gray-100 p-4
            font-semibold tracking-wider text-sm text-red-500`}
            onClick={clickedCancel}
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
