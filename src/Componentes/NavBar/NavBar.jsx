import { Link } from "react-router-dom";
import { CardWidget } from "../CardWidget/CardWidget";

export const NavBar = () => {
  return (
    <nav className="contenedorNavBar">
      <Link to={"/"}>
        <img src="../imagenes/logo-bm.jpg" alt="logo-bm" />
      </Link>

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
          <Link to={"/nosotros"}>Quienes Somos</Link>
        </li>
        <CardWidget />
      </ul>
    </nav>
  );
};

export default NavBar;
