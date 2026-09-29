import styles from "./CartWidget.module.scss"
import { useContext } from "react";


import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router";

function CartWidget() {

  const {getCartQuantity} = useContext(CartContext)

  const navigate = useNavigate()

  return (
    <div onClick={() => {navigate("/cart")}} className={styles.cart_widget}>
      <FaCartShopping className={styles.react_icon} />
      <div className={styles.cart_number}>
        {getCartQuantity() > 0 &&
        <div className={styles.number_circle}>
           <span>{getCartQuantity()}</span>
        </div>
        }
      </div>
    </div>
  )
}

export default CartWidget