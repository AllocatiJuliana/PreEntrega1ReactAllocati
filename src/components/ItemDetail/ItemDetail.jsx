import React from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

export const ItemDetail = ({ product }) => {
  return (
    <div className="cardDetail">
      <img src={product.img} alt="" />
      <h2>{product.producto}</h2>
      <h3>{product.precio}</h3>
      <Link to="/">Volver al home</Link>
    </div>
  );
};
