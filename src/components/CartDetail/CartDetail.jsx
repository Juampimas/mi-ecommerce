import styles from "./CartDetail.module.scss"

function CartDetail({cart, cartTotal, emptyCart}) {
  return (
    <div className={styles.cart_detail}>
        <h2>Mi Compra</h2>
        {cart.length === 0 
        ? <p>No hay productos</p>
        : cart.map((item) => (
            <p className={styles.cart_detail_item} key={item.id}>
                <span>x{item.count}</span>
                <span>{item.name}</span>
                <span>${(item.price * item.count).toLocaleString()}</span>
            </p>
        ))}
        <hr />
        <p className={styles.cart_detail_total}>TOTAL: ${cartTotal.toLocaleString()}</p>
        <div className={styles.cart_detail_btns}>
            <button 
                className={styles.cart_detail_buy}
            >
                Finalizar compra
            </button>
            <button 
                className={styles.cart_detail_delete}
                onClick={emptyCart}
            >
                Vaciar carrito
            </button>
        </div>
    </div>
  )
}

export default CartDetail