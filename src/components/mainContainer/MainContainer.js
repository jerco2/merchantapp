import React, { useEffect } from "react";
import { useGetData, useGetDataUpdate } from "../../contexts/GetDataContext";

function MainContainer() {
  const items = useGetData();
  const getData = useGetDataUpdate();

  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      getData();
    }
    return () => {
      isApiSubscribed = false;
    };
  }, []);

  return (
    <div className="w-100 h-100 p-4">
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className={`bg-gray-100 rounded flex justify-around p4 m-4`}
          >
            <h1>{item.category}</h1>
            <h1>{item.productname}</h1>
            <h1>{item.price}</h1>
            <h1>{item.size}</h1>
            <h1>{item.cost}</h1>
            <h1>{item.stocks}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default MainContainer;
