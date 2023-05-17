import { BsFillCartPlusFill } from "react-icons/bs";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();

  return (
    <Link to="/cart">
      <div className="carrito">
        <BsFillCartPlusFill size={20} />
        <span>{total}</span>
      </div>
    </Link>
  );
};

export default CartWidget;
