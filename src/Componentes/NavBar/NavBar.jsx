import "./NavBar.css";
import { Link } from "react-router-dom";
import { CardWidget } from "../CardWidget/CardWidget";

export const NavBar = () => {
  return (
    <header className="contenedorNavBar">
      <a href="/">
        <h1>Black Mamba Grow Shop</h1>
      </a>

      <ul className="navBar_Items">
        <li>
          <Link to={"/"}>Productos</Link>
        </li>
        <li>
          <Link to={"/productos/picadores"}>Picadores</Link>
        </li>
        <li>
          <Link to={"/productos/sedas"}>Sedas</Link>
        </li>
        <li>
          <Link to={"/productos/tabacos"}>Tabacos</Link>
        </li>
        <li>
          <Link to={"/nosotros"}>Nosotros</Link>
        </li>
        <CardWidget />
      </ul>
    </header>
  );
};

export default NavBar;
