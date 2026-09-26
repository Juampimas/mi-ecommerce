import styles from "./ItemDetail.module.scss"

function ItemDetail({item}) {

  console.log(item);
  

  return (
    <div className={styles.detail_container}>
        <img src={item?.img} alt={item?.name} />
        <div className={styles.detail_info}>
          <h1>{item?.name}</h1>
          <p className={styles.detail_desc}>{item?.description}</p>
          <p className={styles.detail_price}>${item?.price.toLocaleString()}</p>
          <p className={styles.detail_stock}>Stock: {item?.stock}</p>
          <button className={styles.detail_btn}>Añadir al carrito</button>
        </div>
    </div>
  )
}

export default ItemDetail