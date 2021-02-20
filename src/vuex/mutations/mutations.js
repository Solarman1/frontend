export default{
    SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products;
    },
    SET_CATEGORYS_TO_STATE: (state, categorys) => {
        state.categorys = categorys;
    },
    SET_DOPPRODUCTS_TO_STATE: (state, dopProducts) => {
        state.dopProducts = dopProducts;
    },
    SET_CART: (state, product) => {
    let isProductExists = false;
        if (state.cart.length) {
            state.cart.map(function (item) {
            if (item.id === product.id) {
                    isProductExists = true;
                    item.quantity++
                }
            })
            if (!isProductExists) {
                state.cart.push(product)
            }
        }    
        else {
                state.cart.push(product)
        }
    },
    SET_ORDERID_TO_STATE: (state, orderId) => {
        orderId.forEach(element => {
            //console.log(element.id);
            state.orderId  = element.id;
            });
        //     console.log('in mutation');
        //    console.log(orderId); 
    },
    REMOVE_FROM_CART: (state, index) => {
        state.cart.splice(index, 1)
    },
    INCREMENT: (state, index) => {
        state.cart[index].quantity++
    },
    DECREMENT: (state, index) => {
        if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--
        }
    }
}