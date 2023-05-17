import React, { useContext, useState } from "react";
import FormCheckout from "./FormCheckout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";

import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

export const FormCheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const checkoutFn = (data) => {
    let total = getTotalPrice();

    let dataOrder = {
      buyer: data,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, dataOrder).then((res) => setOrderId(res.id));

    cart.map((product) =>
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      })
    );
    clearCart();
  };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      correo: "",
      telefono: "",
    },
    onSubmit: checkoutFn,

    validationSchema: Yup.object().shape({
      nombre: Yup.string().required("Este Campo Es Obligatorio"),
      correo: Yup.string()
        .email("Correo Invalido")
        .required("Este Campo Es Obligatorio"),
      telefono: Yup.number()
        .typeError("Por Favor Ingresar Un Numero Valido")
        .required("Este Campo Es Obligatorio"),
    }),
    validateOnChange: false,
  });

  return (
    <div>
      {orderId ? (
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Su Numero De Compra es {orderId}
        </h1>
      ) : (
        <FormCheckout
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};
