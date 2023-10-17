import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import { CardWidget } from "../CardWidget/CardWidget";

export const NavBar = () => {
  return (
    <div className="contenedorNavBar">
      <Link to="/">
        <img src="/imagenes/logo-bm.jpg" alt="" />
      </Link>

      <div className="navBar_Items">
        <li>
          <NavLink to="/categoria/1">Tabacos</NavLink>
        </li>
        <li>
          <NavLink to="/categoria/2">Parafernalia</NavLink>
        </li>
        <li>
          <NavLink to="/categoria/3">Sustratos</NavLink>
        </li>

        <CardWidget />
      </div>
    </div>
  );
};
