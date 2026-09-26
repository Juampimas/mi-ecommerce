import styles from "./ItemListContainer.module.scss"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react";
import { getProductByCategory, getProducts } from "../../mock/AsyncMock";
import Loader from "../Loader/Loader";
import { useParams } from "react-router";

function ItemListContainer() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {categoryName} = useParams()

  useEffect(() => {

    

    if(categoryName){
      getProductByCategory(categoryName)
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        setError("Error al obtener productos:", error);
      })
      .finally(() => {
        setLoading(false)
      })
    } else {
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
    }

    return () => {
    setLoading(true); 
    setError(null);
  };

  }, [categoryName]);

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