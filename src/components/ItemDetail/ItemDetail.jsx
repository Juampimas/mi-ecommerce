import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetail.module.scss"

function ItemDetail({item}) {
  

  return (
    <div className={styles.detail_container}>
        <img src={item?.img} alt={item?.name} />
        <div className={styles.detail_info}>
          <h1>{item?.name}</h1>
          <p className={styles.detail_desc}>{item?.description}</p>
          <p className={styles.detail_desc}>Categoría: {item?.category}</p>
          <p className={styles.detail_price}>${item?.price.toLocaleString()}</p>
          <p className={styles.detail_stock}>Stock: {item?.stock}</p>
          <ItemCount item={item} />
        </div>
    </div>
  )
}

export default ItemDetail