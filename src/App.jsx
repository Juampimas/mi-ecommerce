import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
// import { useEffect, useState } from 'react'

function App() {

  // useEffect(() => {
  //   console.log("Hola mundo");
  // },[])

  // const [productos, setProductos] = useState([])

  return (
    <>
      <Navbar />    
      <ItemListContainer
        greeting="¡Bienvenido a mi Petshop!" 
      />
    </>
  )
}

export default App
