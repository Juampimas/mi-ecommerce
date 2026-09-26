import { products as localProducts } from "../products";
import { useEffect, useState } from "react"


function useProducts() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {

        async function getData(){
            setLoading(true)
            try {
                const response = await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (localProducts) {
                            resolve(localProducts)
                        } else {
                            reject(new Error("No se pudieron cargar los productos"))
                        }
                    }, 2000)
                })

                setProducts(response)
                
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        getData()

    },[])

  return {products, loading, error}
}

export default useProducts