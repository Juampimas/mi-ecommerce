import styles from "./Item.module.scss"
import { Link } from "react-router"

function Item({name, description, price, img, prodId}) {
  return (
    <div className={styles.card_container}>
        <img src={img} alt={name} />
        <div className={styles.info_container}>
            <p className={styles.prod_title}>{name}</p>
            <p className={styles.prod_desc}>{description}</p>
            <div className={styles.flex_info}>
              <p className={styles.prod_price}>${price.toLocaleString()}</p>
              <Link 
                className={styles.show_btn}
                to={"/item/"+ prodId}
              >
                Ver mas
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Item