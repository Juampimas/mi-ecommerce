import { useState } from 'react'
import { CartContext } from './CartContext'

function CartProvider({children}) {

  const [cart, setCart] = useState([]);

  function getCartQuantity(){
    return cart.reduce((acc, current) => acc + current.count, 0)
  }

  function AddToCart(product){
    const inCart = cart.find((prod) => prod.id === product.id)
    if(inCart){
      setCart(cart.map((prod) => (
        prod.id === product.id 
        ? {...prod, count: prod.count + product.count} 
        : prod
      )))
    } else{
      setCart([...cart, {...product, count:product.count}])
    }
  }

  function RemoveItemFromCart(productId){
    setCart(cart.filter((item) => item.id !== productId))
  }

  function emptyCart(){
    setCart([])
  }

  const cartTotal = cart.reduce((acc, current) => acc + current.price * current.count, 0)
  


  return (
    <CartContext.Provider value={{cart, getCartQuantity, AddToCart, RemoveItemFromCart, cartTotal, emptyCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider