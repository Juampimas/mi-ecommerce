import logo from "../../assets/logo.png"

import styles from "./Navbar.module.scss"
import { NavLink } from "react-router";

import { IoSearch } from "react-icons/io5";
import { IconContext } from "react-icons";

import CartWidget from "../CartWidget/CartWidget";

function Navbar() {

    const categorias = ["Juguetes", "Alimentos", "Accesorios"]

  return (
    <nav className={styles.nav}>
        <ul>
            <NavLink
                    className={({isActive}) => isActive ? styles.cat_active : styles.cat_not_active}
                    to={`/`}
            >Inicio</NavLink>
            {categorias.map((cat) => (
                <NavLink
                    key={cat}
                    className={({isActive}) => isActive ? styles.cat_active : styles.cat_not_active}
                    to={`/category/${cat}`}
                >{cat}</NavLink>
            ))}
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