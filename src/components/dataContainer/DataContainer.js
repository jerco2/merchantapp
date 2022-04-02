import React, { useEffect, useState } from "react";
import { useGetData, useGetDataUpdate } from "../../contexts/GetDataContext";
import { ToastContainer } from "react-toastify";
import Item from "./Item";
import Header from "./Header";

function DataContainer() {
  const items = useGetData();
  const getData = useGetDataUpdate();

  const [itemsList, setItemsList] = useState([]);

  const sortByCategory = () => {
    setItemsList([]);
    items.sort((a, b) => (a.category > b.category ? 1 : -1));
    setItemsList(items);
  };

  const sortByName = () => {
    setItemsList([]);
    items.sort((a, b) => (a.productname > b.productname ? 1 : -1));
    setItemsList(items);
  };

  const sortByPrice = () => {
    setItemsList([]);
    items.sort((a, b) => (a.price > b.price ? 1 : -1));
    setItemsList(items);
  };

  const sortBySize = () => {
    setItemsList([]);
    items.sort((a, b) => (a.size > b.size ? 1 : -1));
    setItemsList(items);
  };

  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      getData();
    }
    return () => {
      isApiSubscribed = false;
    };
  }, [itemsList, items]);

  useEffect(() => {
    setItemsList(items);
  }, [itemsList]);

  return (
    <div className="w-100 h-screen p-4 bg-orange-50">
      <ToastContainer />
      <div
        className={`w-full bg-gradient-to-tl from-orange-300 to-orange-200 hidden tablet:flex p-3 rounded-t-lg text-white select-none text-sm font-semibold tracking-wider text-center`}
      >
        <Header onClick={sortByCategory} label="CATEGORY" />
        <Header onClick={sortByName} label="NAME" />
        <Header onClick={sortByPrice} label="PRICE" />
        <Header onClick={sortBySize} label="SIZE" />
        <Header label="STOCKS" />
        <Header label="COST" />
        <Header label="ACTION" />
      </div>

      {itemsList.length !== 0 ? (
        <div className={`h-[90%] overflow-y-auto`}>
          {itemsList.map((item, index) => {
            return (
              <Item // -------- Items / Products
                key={index}
                productname={item.productname}
                price={item.price}
                cost={item.cost}
                category={item.category}
                stocks={item.stocks}
                size={item.size}
              />
            );
          })}
        </div>
      ) : (
        <div className={`h-[90%] overflow-y-auto`}>
          {items.map((item, index) => {
            return (
              <Item // -------- Items / Products
                key={index}
                productname={item.productname}
                price={item.price}
                cost={item.cost}
                category={item.category}
                stocks={item.stocks}
                size={item.size}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DataContainer;
