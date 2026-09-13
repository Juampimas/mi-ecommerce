import styles from "./Item.module.scss"

function Item({name, description, price, img}) {
  return (
    <div className={styles.card_container}>
        <img src={img} alt={name} />
        <div className={styles.info_container}>
            <p className={styles.prod_title}>{name}</p>
            <p className={styles.prod_desc}>{description}</p>
            <p className={styles.prod_price}>${price.toLocaleString()}</p>
        </div>
    </div>
  )
}

export default Item