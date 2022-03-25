import AddProductModal from "./components/addItemModal/AddProductModal";
import MainContainer from "./components/mainContainer/MainContainer";
import Topbar from "./components/topbar/Topbar";
import { ModalTogglerProvider } from "./contexts/ModalToggler";
import { ConfirmationContextProdivder } from "./contexts/ConfirmationContext";
import { GetDataContextProvider } from "./contexts/GetDataContext";

function App() {
  return (
    <ModalTogglerProvider>
      <ConfirmationContextProdivder>
        <GetDataContextProvider>
          <Topbar />
          <MainContainer />
          <AddProductModal />
        </GetDataContextProvider>
      </ConfirmationContextProdivder>
    </ModalTogglerProvider>
  );
}

export default App;
