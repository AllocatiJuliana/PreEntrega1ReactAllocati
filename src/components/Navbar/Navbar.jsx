import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="carrito">
        <CartWidget />
      </div>
      <div className="logo">
        <img
          src="https://res.cloudinary.com/dlsk3cazy/image/upload/v1680231336/Infinito_Bazar_PNG_oxrmvu.png"
          alt="Logo de la empresa"
        />
      </div>
      <ul>
        <li>Inicio</li>
        <li>Cocina</li>
        <li>Dormitorio</li>
        <li>Deco</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
};
