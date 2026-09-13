import { PuffLoader } from "react-spinners";
import styles from "./Loader.module.scss"


function Loader() {
  return (
    <div className={styles.loader_container}>
      <PuffLoader color="#f59e0b" />
    </div>
  )
}

export default Loader