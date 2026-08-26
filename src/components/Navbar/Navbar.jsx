import logo from "../../assets/logo.png"

import styles from "./Navbar.module.scss"

import { IoSearch } from "react-icons/io5";
import { IconContext } from "react-icons";

import CartWidget from "../CartWidget/CartWidget";

function Navbar() {
  return (
    <nav className={styles.nav}>
        <ul>
            <li>Inicio</li>
            <li>Juguetes</li>
            <li>Alimentos</li>
            <li>Accesorios</li>
        </ul>
        <img src={logo} alt="logo ecommerce" />
        <IconContext.Provider value={{ size:"1.5rem" }}>
            <div className={styles.search_container}>
                <IoSearch />
                <input type="text"
                    placeholder="Buscar alimentos, juguetes, arnés..."
                />
                <CartWidget />
            </div>
        </IconContext.Provider>
    </nav>
  )
}

export default Navbar