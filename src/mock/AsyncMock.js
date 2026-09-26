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

export async function getProductById(productId) {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (localProducts) {
          resolve(localProducts.find((prod) => prod.id === Number(productId)));
        } else {
          reject(new Error("No se pudo cargar el producto"));
        }
      }, 2000);
    });
}

export async function getProductByCategory(productCategory) {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (localProducts) {
          resolve(localProducts.filter((prod) => prod.category === productCategory));
        } else {
          reject(new Error("No se pudieron cargar los productos"));
        }
      }, 2000);
    });
}
