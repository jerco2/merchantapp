import AddProductModal from "./components/addItemModal/AddProductModal";
import MainContainer from "./components/mainContainer/MainContainer";
import Topbar from "./components/topbar/Topbar";
import { ModalTogglerProvider } from "./ModalToggler";

function App() {
  return (
    <ModalTogglerProvider>
      <Topbar />
      <MainContainer />
      <AddProductModal />
    </ModalTogglerProvider>
  );
}

export default App;
