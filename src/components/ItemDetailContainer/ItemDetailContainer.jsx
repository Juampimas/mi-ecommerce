import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getProductById } from "../../mock/AsyncMock"

import styles from "./ItemDetailContainer.module.scss"

import ItemDetail from "../ItemDetail/ItemDetail"
import Loader from "../Loader/Loader"

function ItemDetailContainer() {

    const {id} = useParams()
    const [item, setItem] = useState({name:"", description:"", price:0, stock:0, img:""})
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getItem(){
          getProductById(id)
          .then((data) => {
            setItem(data)
          })
          .catch((error) => {
            setError("No se pudo cargar el producto: ",error)           
          })
          .finally(() => {
            setLoading(false)
          })
        }

        getItem()
    },[id])

    if (loading)
    return (
      <Loader />
    );

  if (error)
    return (
        <p>{error}</p>
    );

  return (
    <div className={styles.detail_container}>
      <ItemDetail item={item} />
    </div>
  )
}

export default ItemDetailContainer