import { useState } from "react"
import styles from "./ItemCount.module.scss"


function ItemCount({item}) {
  const [count, setCount] = useState(0)

  function handleSubstract(){
    if(count > 1){
      setCount(count - 1)
    }
  }

  function handleAdd(){
    if(count < item?.stock){
        setCount(count + 1)
    }
  }

  return (
    <div className={styles.detail_count_container}>
        <div className={styles.detail_count_btns}>
            <button
                onClick={handleSubstract}
                className={styles.detail_count}
            >
                -
            </button>

            <span>{count}</span>

            <button
                onClick={handleAdd}
                className={styles.detail_count}
            >
                +
            </button>
        </div>
      <button className={styles.detail_btn}>
        Añadir al carrito
      </button>
    </div>
  )
}

export default ItemCount