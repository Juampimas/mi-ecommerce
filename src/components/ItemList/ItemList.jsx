import Item from "../Item/Item"
import styles from "./ItemList.module.scss"



function ItemList({productos}) {

  return (
    
    <div className={styles.list_container}>
      {productos?.map((prod) => (
        <Item 
          key={prod.id}
          prodId={prod.id}
          name={prod.name}
          description={prod.description}
          price={prod.price}
          img={prod.img}
        />
      ))}
    </div>
  )
}

export default ItemList