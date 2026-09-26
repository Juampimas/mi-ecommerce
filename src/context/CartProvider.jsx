import { CartContext } from './CartContext'

function CartProvider({children}) {
  return (
    <CartContext.Provider value="Holaaa">
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider