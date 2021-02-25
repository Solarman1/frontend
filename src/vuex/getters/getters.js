export default {
    PRODUCTS(state){
        return state.products;
    },
    CATEGORYS(state){
        return state.categorys;
    },
    DOPPRODUCTS(state){
        return state.dopProducts;
    },
    CART(state){
        return state.cart;
    },
    CALCRESULT(state){
        return state.calcResultData;
    },
    ORDERID(state){
        return state.orderId;
    },
    CARTITEMSLENGTH(state){
        //arr.reduce((sum, current) => sum + current);
        let total = [];
        state.cart.forEach((item) => {
           total.push(item.quantity);
        });
        let result = total.reduce((sum, current) => sum + current, 0);
        //console.log(result);
        return result;
    }   
}