import styles from "./ItemListContainer.module.scss"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react";
import { getProducts } from "../../mock/AsyncMock";
import Loader from "../Loader/Loader";

function ItemListContainer() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        setError("Error al obtener productos:", error);
      })
      .finally(() => {
        setLoading(false)
      })
  }, []);

    if (loading)
    return (
      <Loader />
    );

  if (error)
    return (
        <p>{error}</p>
    );

  return (
    <div className={styles.container}>
        <ItemList
          productos={items} 
        />
    </div>
  )
}

export default ItemListContainer