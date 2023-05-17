import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="navContainer">
        <div className="carrito">
          <CartWidget />
        </div>
        <div className="logo">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dlsk3cazy/image/upload/v1680231336/Infinito_Bazar_PNG_oxrmvu.png"
              alt="Logo de la empresa"
            />
          </Link>
        </div>
        <ul>
          <Link to="/">Inicio</Link>
          <Link to="/categoria/Cocina">Cocina</Link>
          <Link to="/categoria/Dormitorio">Dormitorio</Link>
          <Link to="/categoria/Deco">Deco</Link>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
