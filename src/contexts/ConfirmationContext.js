import React, { useState, useContext } from "react";

const ConfirmationContext = React.createContext();
const ConfirmationUpdateContext = React.createContext();

export function useConfirmation() {
  return useContext(ConfirmationContext);
}
export function useConfirmationUpdate() {
  return useContext(ConfirmationUpdateContext);
}

export function ConfirmationContextProdivder({ children }) {
  const [confirmation, setConfirmation] = useState(false);

  function showConfirmation() {
    setConfirmation((prevConfirmation) => !prevConfirmation);
  }

  return (
    <ConfirmationContext.Provider value={confirmation}>
      <ConfirmationUpdateContext.Provider value={showConfirmation}>
        {children}
      </ConfirmationUpdateContext.Provider>
    </ConfirmationContext.Provider>
  );
}
