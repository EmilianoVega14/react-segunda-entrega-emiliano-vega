import ItemDetailConteiner from "./Components/itemDetailConteiner/ItemDetailConteiner";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { NavBar } from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <>
        <BrowserRouter>
          <NavBar />
          <ItemListContainer greetings={"bienvenidos a la web de la Black"} />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:idCategoria"
              element={<ItemListContainer />}
            />
            <Route path="/item/:idItem" element={<ItemDetailConteiner />} />
            <Route path="*" element={<h2>Sitio en construcción</h2>} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
