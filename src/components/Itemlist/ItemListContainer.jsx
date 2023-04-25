import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from "../../productsMock";

import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoria } = useParams();
  console.log(categoria);

  useEffect(() => {
    const productsFiltered = products.filter(
      (prod) => prod.categoria === categoria
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(categoria ? productsFiltered : products);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoria]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
