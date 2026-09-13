import { products as localProducts } from "../products";

export async function getProducts() {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (localProducts) {
          resolve(localProducts);
        } else {
          reject(new Error("No se pudieron cargar los productos"));
        }
      }, 2000);
    });
}
