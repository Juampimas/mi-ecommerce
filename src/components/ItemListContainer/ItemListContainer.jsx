import styles from "./ItemListContainer.module.scss"
import ItemList from "../ItemList/ItemList"

function ItemListContainer() {
  

  return (
    <div className={styles.container}>
        <ItemList />
    </div>
  )
}

export default ItemListContainer