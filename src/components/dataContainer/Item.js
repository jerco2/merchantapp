import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { HiOutlineSave } from "react-icons/hi";
import StartFirebase from "../../firebaseConfig";
import { update, ref, remove } from "firebase/database";
import { useGetDataUpdate } from "../../contexts/GetDataContext";
import { toast } from "react-toastify";
import ItemProperty from "./ItemProperty";

function Item({ category, productname, price, cost, stocks, size }) {
  const [newStocks, setNewStocks] = useState(stocks);
  const [newPrice, setNewPrice] = useState(price);
  const [newCost, setNewCost] = useState(cost);

  const [toggleEdit, setToggleEdit] = useState(false);
  const getData = useGetDataUpdate();

  const updateItem = () => {
    // ------ update data on database
    const notify = () => toast("Item updated successfully!"); // ------- toast
    if (toggleEdit === true) {
      const db = StartFirebase();
      update(ref(db, "Items/" + productname), {
        productname,
        category,
        price: newPrice,
        size,
        stocks: newStocks,
        cost: newCost,
      });
      getData();
      notify(); // ------ run toast
      setToggleEdit((prevToggleEdit) => !prevToggleEdit);
    } else {
      setToggleEdit((prevToggleEdit) => !prevToggleEdit);
    }
  };

  const deleteData = () => {
    // ------- deletes data from database
    const notify = () => toast("Item successfully deleted!"); // ------- toast
    const db = StartFirebase();
    remove(ref(db, "Items/" + productname))
      .then(() => {
        notify(); // ------- run toast
        getData();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div
      className={`bg-gray-50 my-2 tablet:my-0 shadow tablet:shadow-none 
      flex justify-center p-3 tablet:text-center hover:bg-orange-100
      text-sm font-semibold tracking-wider flex-col items-center tablet:flex-row`}
    >
      <ItemProperty label="CATEGORY:" variable={category} />
      <ItemProperty label="NAME:" variable={productname} />
      <ItemProperty
        label="PRICE: "
        variable={price}
        display={`${toggleEdit ? "hidden" : "block"}`}
      />
      <input
        className={`${
          toggleEdit ? "block" : "hidden"
        } w-full tablet:w-[14.28%] text-center`}
        type="text"
        value={newPrice}
        onChange={(e) => setNewPrice(e.target.value.replace(/\D/g, ""))}
      />
      <ItemProperty label="SIZE: " variable={size} />
      <ItemProperty
        label="STOCKS: "
        variable={stocks}
        display={`${toggleEdit ? "hidden" : "block"}`}
      />
      <input
        className={`${
          toggleEdit ? "block" : "hidden"
        } w-full tablet:w-[14.28%] text-center`}
        type="text"
        value={newStocks}
        onChange={(e) => setNewStocks(e.target.value.replace(/\D/g, ""))}
      />
      <ItemProperty
        label="COST: "
        variable={cost}
        display={`${toggleEdit ? "hidden" : "block"}`}
      />
      <input
        className={`${
          toggleEdit ? "block" : "hidden"
        } w-full tablet:w-[14.28%] text-center`}
        type="text"
        value={newCost}
        onChange={(e) => setNewCost(e.target.value.replace(/\D/g, ""))}
      />

      <div
        className={`w-full tablet:w-[14.28%] flex justify-center mt-4 laptop:mt-0 laptop:justify-end px-4`}
      >
        <button className={` text-xl outline-none`} onClick={updateItem}>
          {toggleEdit ? <HiOutlineSave /> : <AiOutlineEdit />}
        </button>
        <button className={` ml-8 text-xl outline-none `} onClick={deleteData}>
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
}

export default Item;
