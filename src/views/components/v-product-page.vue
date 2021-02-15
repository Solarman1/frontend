<template>
<div>
<v-card
  class="d-flex align-content-start flex-wrap"
  >
       
       <v-card >
        <v-img
        :src="'https://api.ochag55.ru/storage/productImages/'+productItems[0].image"
        height="300px"
        max-width="450px"
        >
        </v-img>
       </v-card>          
         <div class="text-center">
                 
        <v-card-text>
               <h2>{{productItems[0].name}}</h2> 
        </v-card-text>
    
        <v-card-text>

                {{productItems[0].weight}}

          </v-card-text>

            <v-card-title 
                class="black--text"
                >
                <strong class="green--text text--lighten-1">{{productItems[0].price}}  руб.</strong>
                
                </v-card-title>
    
           <v-card-text>
               
                {{productItems[0].description}}

          </v-card-text>
        <v-btn
            class="ml-5"
            color="deep-orange darken-1"
            @click="addToCart(productItems[0])"
        >
            В корзину
        </v-btn>
         
    </div> 
    
</v-card>

<v-card>
     <div>
        <v-banner class="mb-5"> 
        С этим товаром рекомендуют  
    </v-banner> 
    </div>
    <v-row>         
   
                <v-col
                    v-for="products in dopProductItems"
                    :key="products.id"  
                > 
                
                

                <dopProduct 
                    :dopProduct_data="products"
                     @addToCart="addToCart" 
                />
            </v-col>
    
  </v-row>
</v-card>

  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
//import axios from "axios";
import dopProduct from './v-product-page-dops';

export default {
    data(){
        return {
        }
    },
     components: {
      dopProduct,
    },
    props: {

    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'DOPPRODUCTS',
            'CART'
        ]),
        productItems()  {
            let productSorted = this.PRODUCTS.filter(item => item.id == this.$route.query.product);
            
            return productSorted;
            },
        dopProductItems(){
            let dopProducts = this.DOPPRODUCTS.filter(item => item.productId == this.$route.query.product);
          
            return dopProducts;
        }       

    },

    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'GET_DOPPRODUCTS_FROM_API',
            'ADD_TO_CART'
        ]),

        addToCart(data){
            this.ADD_TO_CART(data).
            then(() => {
            let timeStamp = Date.now().toLocaleString();
            this.messages.unshift(
                {name: 'Товар добавлен', id: timeStamp}
            )
            })
        },
    },

    mounted(){
            if (!this.PRODUCTS.length) {
            this.GET_PRODUCTS_FROM_API();
            }
            if (!this.DOPPRODUCTS.length) {
             this.GET_DOPPRODUCTS_FROM_API();
            
            }
            this.$set(this.dopProductItemsValue, 'quantity', 1);
        },
}
</script>