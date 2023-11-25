import { betaApi, betaApiWithoutSessionId } from "./serviceHelpers";

const createSession = async ()=>{
    const {data} = await betaApiWithoutSessionId.get('/createsession');
    return data;
}
const getAllProducts = async () =>{
    const {data} = await betaApi.get('/products');
    return data;
}
const searchProductsByName = async (name:string) =>{
    const {data} = await betaApi.get(`/search?name=${name}`);
    return data;
}
const addToCartById = async (id:number) =>{
    const data = await betaApi.post(`/add-to-cart?id=${id}`);
    return data;
}
const getCart = async () =>{
    const data = await betaApi.get('/view-cart');
    return data;
}
const subtractFromCartById = async (id:number) =>{
    const data = await betaApi.post(`/subtract-from-cart?id=${id}`);
    return data;
}

export const betaService = ({
    createSession,
    getAllProducts,
    searchProductsByName,
    addToCartById,
    getCart,
    subtractFromCartById,
})