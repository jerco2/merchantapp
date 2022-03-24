import AddProductModal from "./components/addItemModal/AddProductModal";
import MainContainer from "./components/mainContainer/MainContainer";
import Topbar from "./components/topbar/Topbar";
import { ModalTogglerProvider } from "./contexts/ModalToggler";
import { ConfirmationContextProdivder } from "./contexts/ConfirmationContext";

function App() {
  return (
    <ModalTogglerProvider>
      <ConfirmationContextProdivder>
        <Topbar />
        <MainContainer />
        <AddProductModal />
      </ConfirmationContextProdivder>
    </ModalTogglerProvider>
  );
}

export default App;
