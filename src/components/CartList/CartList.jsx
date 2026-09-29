import CartItem from "../CartItem/CartItem";

import styles from "./CartList.module.scss"


function CartList({cart}) {

  return (
    <div className={styles.cart_list}>
        <ul>
            {cart.length === 0 
            ? <p className={styles.cart_list_empty}>No hay productos en el carrito</p>
            : cart.map((item) => (
                <CartItem
                    key={item.id}
                    id={item.id}
                    image={item.img}
                    name={item.name}
                    quantity={item.count}
                    price={item.price}
                />
            ))
            }
        </ul>
    </div>
  )
}

export default CartList