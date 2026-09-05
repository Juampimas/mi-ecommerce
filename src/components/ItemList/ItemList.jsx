import useProducts from "../../hooks/useProducts"
import Item from "../Item/Item"
import styles from "./ItemList.module.scss"



function ItemList() {

  const {products, loading, error} = useProducts()

  if (loading)
    return (
      <p>Cargando...</p>
    );

  if (error)
    return (
      <p>{error}</p>
    );

  return (
    
    <div className={styles.list_container}>
      {products?.map((prod) => (
        <Item 
          key={prod.id}
          title={prod.title}
          description={prod.description}
          price={prod.price}
          image={prod.image}
        />
      ))}
    </div>
  )
}

export default ItemList