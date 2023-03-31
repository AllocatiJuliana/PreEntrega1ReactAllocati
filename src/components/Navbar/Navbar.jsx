import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <ul>
        <li>Inicio</li>
        <li>Cocina</li>
        <li>Dormitorio</li>
        <li>Deco</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </div>
  );
};
