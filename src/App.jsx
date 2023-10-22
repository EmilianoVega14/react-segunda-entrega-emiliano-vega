import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Nosotros } from "./Componentes/nosotros/Nosotros";
import { ItemDetailConteiner } from "./Componentes/ItemDetailConteiner/ItemDetailConteiner";
import ItemListConteiner from "./Componentes/ItemListContainer/ItemListConteiner";
import NavBar from "./Componentes/NavBar/NavBar";
import "./main.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route path="/productos" element={<ItemListConteiner />} />
          <Route path="/item/:id" element={<ItemDetailConteiner />} />
          <Route
            path="/productos/:categoria"
            element={<ItemListConteiner />}
            itemId={"id:2"}
          />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
