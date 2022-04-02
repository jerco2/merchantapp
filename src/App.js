import AddProductModal from "./components/addItemModal/AddProductModal";
import DataContainer from "./components/dataContainer/DataContainer";
import Topbar from "./components/topbar/Topbar";
import { ModalTogglerProvider } from "./contexts/ModalToggler";
import { ConfirmationContextProdivder } from "./contexts/ConfirmationContext";
import { GetDataContextProvider } from "./contexts/GetDataContext";

function App() {
  return (
    <ModalTogglerProvider>
      <ConfirmationContextProdivder>
        <GetDataContextProvider>
          <div className={`overflow-x-hidden h-screen overflow-y-hidden`}>
            <Topbar />
            <DataContainer />
            <AddProductModal />
          </div>
        </GetDataContextProvider>
      </ConfirmationContextProdivder>
    </ModalTogglerProvider>
  );
}

export default App;
