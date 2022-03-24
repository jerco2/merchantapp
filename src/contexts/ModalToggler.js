import React, { useState, useContext } from "react";

const ModalToggler = React.createContext();
const ModalUpdateToggler = React.createContext();

export function useModalToggler() {
  return useContext(ModalToggler);
}
export function useModalUpdateToggler() {
  return useContext(ModalUpdateToggler);
}

export function ModalTogglerProvider({ children }) {
  const [toggle, setToggle] = useState(false);

  function toggleModal() {
    setToggle((prevToggle) => !prevToggle);
  }

  return (
    <ModalToggler.Provider value={toggle}>
      <ModalUpdateToggler.Provider value={toggleModal}>
        {children}
      </ModalUpdateToggler.Provider>
    </ModalToggler.Provider>
  );
}
