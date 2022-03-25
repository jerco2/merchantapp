import React, { useState, useContext } from "react";
import axios from "axios";

const GetDataContext = React.createContext();
const GetDataUpdateContext = React.createContext();

export function useGetData() {
  return useContext(GetDataContext);
}
export function useGetDataUpdate() {
  return useContext(GetDataUpdateContext);
}

export function GetDataContextProvider({ children }) {
  const [items, setItems] = useState([]);

  function getData() {
    let temp = [];
    axios
      .get("/.json")
      .then((res) => {
        const x = Object.values(res.data.Items);
        x.forEach((item) => {
          temp.push({
            productname: item.productname,
            category: item.category,
            price: item.price,
            cost: item.cost,
            stocks: item.stocks,
            size: item.size,
          });
        });
        setItems(temp);
      })
      .catch((error) => console.log(error));
  }

  return (
    <GetDataContext.Provider value={items}>
      <GetDataUpdateContext.Provider value={getData}>
        {children}
      </GetDataUpdateContext.Provider>
    </GetDataContext.Provider>
  );
}
