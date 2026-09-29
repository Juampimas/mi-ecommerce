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
          const product = localProducts.find((p) => p.id === Number(productId));
          if (!product) {
            reject(new Error(`No se encontró el producto con id ${productId}`));
            return;
          }
          resolve(product);
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
