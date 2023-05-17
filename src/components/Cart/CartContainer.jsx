import React, { useContext } from "react";
import { Cart } from "./Cart";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const CartContainer = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const navigate = useNavigate();

  const cleartCartWhithAlert = () => {
    Swal.fire({
      title: "¿Estas Seguro Que Queres Eliminar el Carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito Eliminado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Operacion Cancelada", "", "error");
      }
    });
  };

  return (
    <div>
      <Cart
        navigate={navigate}
        total={total}
        cleartCartWhithAlert={cleartCartWhithAlert}
        cart={cart}
        deleteProductById={deleteProductById}
        getTotalPrice={getTotalPrice}
      />
    </div>
  );
};
