import { useNavigate } from "react-router"


function NotFound() {
    const navigate = useNavigate()
  return (
    <>
        <h1>404 Not Found</h1>
        <button onClick={() => navigate("/")}>Volver Al inicio</button>
    </>
  )
}

export default NotFound