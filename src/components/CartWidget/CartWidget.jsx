import styles from "./CartWidget.module.scss"

import { FaCartShopping } from "react-icons/fa6";

function CartWidget() {
  return (
    <div className={styles.cart_widget}>
      <FaCartShopping className={styles.react_icon} />
      <div className={styles.cart_number}>
        <div className={styles.number_circle}>
          <span>3</span>
        </div>
      </div>
    </div>
  )
}

export default CartWidget