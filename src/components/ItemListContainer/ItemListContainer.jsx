import styles from "./ItemListContainer.module.scss"

function ItemListContainer({greeting="Bienvenido default"}) {
  return (
    <div className={styles.container}>
        <h1>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer