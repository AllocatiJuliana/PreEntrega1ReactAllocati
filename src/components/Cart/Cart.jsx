import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

export const Cart = ({
  cart,
  cleartCartWhithAlert,
  deleteProductById,
  total,
  navigate,
}) => {
  return (
    <div>
      {cart.map((e) => {
        return (
          <div className="cart-carrito " key={e.id}>
            <img src={e.img} alt="" />
            <h3>{e.producto}</h3>
            <h4>{e.precio}</h4>
            <h4>{e.quantity}</h4>
            <button
              style={{ marginBottom: "50px" }}
              onClick={() => deleteProductById(e.id)}
            >
              Eliminar
            </button>
          </div>
        );
      })}
      {cart.length > 0 ? (
        <div className="cart-carrito ">
          <button onClick={() => navigate("/checkout")}>
            Finalizar Compra
          </button>
          <button onClick={cleartCartWhithAlert}>Vaciar Carrito</button>
          <h1>El total del Carrito es ${total}</h1>
        </div>
      ) : (
        <div className="carrito-vacio">
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            CARRITO VACIO
          </h1>
          <Link to="/">
            <button> AGREGAR PRODUCTOS</button>
          </Link>
        </div>
      )}
    </div>
  );
};
