import React, { useState } from "react";
import {
  useModalToggler,
  useModalUpdateToggler,
} from "../../contexts/ModalToggler";
import { useGetDataUpdate } from "../../contexts/GetDataContext";
import { useConfirmationUpdate } from "../../contexts/ConfirmationContext";
import { BsCashCoin } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import CloseButton from "./CloseButton";
import InputCategory from "./InputCategory";
import Input from "./Input";
import InputSizes from "./InputSizes";
import Confirmation from "./Confirmation";
import StartFirebase from "../../firebaseConfig";
import { ref, set } from "firebase/database";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddProductModal() {
  const [category, setCategory] = useState("");
  const [productname, setProductname] = useState("");
  const [price, setPrice] = useState("");
  const [stocks, setStocks] = useState("");
  const [cost, setCost] = useState("");
  const [size, setSize] = useState("Regular");
  const [error, setError] = useState("");

  const toggler = useModalToggler();
  const showConfirmation = useConfirmationUpdate();
  const closeModal = useConfirmationUpdate();
  const closeItemCreation = useModalUpdateToggler();
  const getData = useGetDataUpdate();

  const notify = () => toast("Successfully added new item");

  const createItem = () => {
    const db = StartFirebase();
    set(ref(db, "Items/" + productname), {
      category,
      productname,
      price,
      stocks,
      cost,
      size,
    }).then(() => {
      getData();
      closeModal();
      closeItemCreation();
      setInputDefault();
    });
  };

  const handleSubmit = () => {
    if (
      category === "" ||
      productname === "" ||
      price === "" ||
      stocks === "" ||
      cost === ""
    ) {
      setError("Field empty - check your inputs");
    } else {
      createItem();
      notify();
    }
  };

  const setInputDefault = () => {
    setCategory("");
    setProductname("");
    setPrice("");
    setStocks("");
    setCost("");
    setSize("Regular");
    setError("");
  };

  const options = [
    "Burger",
    "Chicken Wings",
    "Coffee-Free",
    "Coffee Base",
    "Fries",
    "Pasta",
    "Pizza",
  ];

  return (
    <div
      className={`h-screen w-screen bg-black/20 absolute top-0 left-0 z-10 
      items-center justify-center ${toggler ? "flex" : "hidden"} select-none
      `}
    >
      <Confirmation // ------- Confirmation modal
        handleSubmit={handleSubmit}
        error={error}
        setError={setError}
      />
      <div className={`w-[90%] tablet:w-auto rounded bg-white p-4 `}>
        <CloseButton // ------- Close Button
        />
        <div className={`w-full h-5/6 flex`}>
          <div className={`h-full p-4 flex flex-col `}>
            <InputCategory // -------- Input Category
              category={category}
              options={options}
              setCategory={setCategory}
            />
            <Input // ---------- Input product name
              variable={productname}
              onChange={(e) => setProductname(e.target.value)}
              label="Product Name"
              placeholder="Sample - product name"
              width="w-full"
            />
            <InputSizes // --------- Input Size
              label="Size"
              category={category}
              variable={size}
              onChange={(e) => setSize(e.target.value)}
            />
            <Input // -------- Input Cost
              variable={cost}
              onChange={(e) => setCost(e.target.value.replace(/\D/g, ""))}
              label="Cost (PHP)"
              placeholder="0.00"
              width="w-[48%]"
              icon={<FaCoins />}
            />
            <div className={`flex justify-between w-full`}>
              <Input // -------- Input price
                variable={price}
                onChange={(e) => setPrice(e.target.value.replace(/\D/g, ""))}
                label="Price (PHP)"
                placeholder="0.00"
                width="w-[48%]"
                icon={<BsCashCoin />}
              />
              <Input // -------- Input stocks
                variable={stocks}
                onChange={(e) => setStocks(e.target.value.replace(/\D/g, ""))}
                label="Stocks"
                placeholder="0"
                width="w-[48%]"
              />
            </div>
            <button
              className={`w-[150px] mx-auto mt-[30px] rounded px-3 py-2 hover:bg-gradient-to-tl hover:from-orange-400 hover:to-orange-300 bg-gradient-to-tl from-orange-300 via-orange-300 to-orange-200 text-white test-sm font-semibold tracking-wider`}
              onClick={showConfirmation}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductModal;
