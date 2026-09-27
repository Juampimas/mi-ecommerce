import styles from "./NotFound.module.scss"
import { useNavigate } from "react-router"

import not_found from "../../assets/notfound.png"

function NotFound() {
    const navigate = useNavigate()
  return (
    <div className={styles.notfound_container}>
        <img src={not_found} alt="not found" />
        <button className={styles.notfound_btn} onClick={() => navigate("/")}>
            Volver Al inicio
        </button>
    </div>
  )
}

export default NotFound