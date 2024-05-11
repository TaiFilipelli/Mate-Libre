import axios from "axios";

const productos = axios.create({
    baseURL: "https://api.mercadolibre.com/sites/MLA/search"
});

const producto = axios.create({
    baseURL: "https://api.mercadolibre.com/items/"
})

export const getProducts = async ()=>{
    try {
        const response = await productos.get('/products');
        return response.data;
    } catch (error) {
        throw console.error("Error buscando productos:",error);
    };
};

export const getProduct = async (id)=>{
    try {
        const response = await producto.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        throw console.error("Error buscando producto:",error)
    }
}