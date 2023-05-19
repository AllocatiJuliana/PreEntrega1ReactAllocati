import React from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import CounterContainer from "../Counter/CounterContainer";

export const ItemDetail = ({ product, onAdd, cantidadTotal }) => {
  return (
    <div className="cardDetail">
      <img src={product.img} alt="" />
      <h2>{product.producto}</h2>
      <h3>${product.precio}</h3>
      <h4>{product.descripcion}</h4>

      {product.stock > 0 ? (
        <CounterContainer
          stock={product.stock}
          onAdd={onAdd}
          initial={cantidadTotal}
        />
      ) : (
        "Sin Stock Disponible"
      )}

      <Link to="/">
        <button style={{ marginBottom: "50px" }}> Volver al Home</button>
      </Link>
      <Link to="/cart">
        <button style={{ marginBottom: "50px" }}> Terminar la Compra</button>
      </Link>
    </div>
  );
};
