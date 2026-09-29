import styles from "./CartItem.module.scss"

import trash from "../../assets/trash.png"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

function CartItem({id, name, image, quantity, price}) {

    const {RemoveItemFromCart} = useContext(CartContext);

  return (
    <li className={styles.cart_item}>
        <img className={styles.cart_item_image} src={image} alt={name} />
        <span className={styles.cart_item_name}>{name}</span>
        <span className={styles.cart_item_qty}>Cant: {quantity}</span>
        <span className={styles.cart_item_price}>${(quantity * price).toLocaleString()}</span>
        <img
            onClick={() => RemoveItemFromCart(id) } 
            className={styles.cart_item_delete} 
            src={trash} 
            alt="Eliminar producto" 
        />
    </li>
  )
}

export default CartItem