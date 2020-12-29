import axios from "axios";

export default{
    GET_PRODUCTS_FROM_API({commit}){
        return axios('https://api.ochag55.ru/api/product', {
            method: "GET"
        }).then((products) => {
            commit('SET_PRODUCTS_TO_STATE', products.data);
            return products;
        }).catch((error) => {
            console.log(error);
            return error;
        })
    },
    GET_CATEGORYS_FROM_API({commit}){
        return axios('https://api.ochag55.ru/api/category', {
            method: "GET"
        }).then((categorys) => {
            commit('SET_CATEGORYS_TO_STATE', categorys.data);
            return categorys;
        }).catch((error) => {
            console.log(error);
            return error;
        })
    },
    GET_ORDERID_FROM_API({commit}){
        return axios('https://api.ochag55.ru/api/orderId', {
            method: "GET"
        }).then((orderId) => {
            commit('SET_ORDERID_TO_STATE', orderId.data);
            return orderId;
        }).catch((error) => {
            console.log(error);
            return error;
        })
    },
}