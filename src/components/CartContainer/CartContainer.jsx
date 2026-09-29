import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

import CartDetail from "../CartDetail/CartDetail"
import CartList from "../CartList/CartList"
import styles from "./CartContainer.module.scss"

function CartContainer() {

    const {cart, cartTotal, emptyCart} = useContext(CartContext);

  return (
    <div className={styles.cart_container}>
        <CartList cart={cart} />
        <CartDetail 
            cart={cart}
            cartTotal={cartTotal}
            emptyCart={emptyCart}
        />
    </div>
  )
}

export default CartContainer