import styles from "./Item.module.scss"

function Item({title, description, price, image}) {
  return (
    <div className={styles.card_container}>
        <img src={image} alt={title} />
        <div className={styles.info_container}>
            <p className={styles.prod_title}>{title}</p>
            <p className={styles.prod_desc}>{description}</p>
            <p className={styles.prod_price}>${price.toLocaleString()}</p>
        </div>
    </div>
  )
}

export default Item