import { useEffect, useState } from "react";
import ItemList from "./ItemList";

import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";

import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoria } = useParams();

  useEffect(() => {
    let consulta;
    const itemCollection = collection(db, "products");

    if (categoria) {
      const itemCollectionFilter = query(
        itemCollection,
        where("categoria", "==", categoria)
      );
      consulta = itemCollectionFilter;
    } else {
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        const products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });

        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoria]);

  if (items.length === 0) {
    return <h1>Cargando-----</h1>;
  }

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
