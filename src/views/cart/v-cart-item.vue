<template>
 <v-row dense >
             <v-col cols="12">    
      <v-card  class="pa-2"
            outlined>          

                <div class="d-flex flex-no-wrap justify-space-between">
                <v-col cols="15"
                  xs="15"
                  sm="15"
                  md="12">
                      <v-card-title
                        class="headline"
                        
                      >{{cart_item_data.name}}
                      </v-card-title>
                       <v-card-subtitle>
                <v-img 
                max-height="110"
                max-width="250"
                :src="'http://api.ochag55.ru/storage/productImages/'+cart_item_data.image">
                </v-img>
                </v-card-subtitle>

                </v-col>
                
             </div>
                    
                  <v-card-title >Цена: {{cart_item_data.price}} руб.</v-card-title>

                   <v-card-actions right>Количество:
                      <span class="quantity__btn" @click="decrementItem"><v-icon>mdi-minus</v-icon></span> 
                         {{cart_item_data.quantity}} 
                      <span class="quantity__btn" @click="incrementItem"><v-icon>mdi-plus</v-icon></span>
                      </v-card-actions>                 
                      
                    <v-card-actions>  
                    Общая цена:  {{this.cart_item_data.price * this.cart_item_data.quantity}} руб.
                    </v-card-actions>    
                    <v-card-actions right>
                    Удалить товар ->  <button @click="deleteFromCart"><v-icon>mdi-delete</v-icon></button>
                    </v-card-actions>
                    
               
            </v-card> 
            </v-col> 
 </v-row>
</template>


<script>
import formattedPrice from "../../filters/price-format";

export default {
    name: "v-cart-item",
    props: {
      cart_item_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {}
    },
    filters: {
    //   toFix,
      formattedPrice
    },
    computed: {
      
    },
    methods: {
      decrementItem() {
        this.$emit('decrement')
      },
      incrementItem() {
        this.$emit('increment')
      },
      deleteFromCart() {
        this.$emit('deleteFromCart')
      }
    }
  }
</script>
<style>
.price_p{
  font-size: 20px;
}

@media (max-width: 776px) {
  .price_p{
font-size: 10px;
  }
}
@media (min-width: 776px) {
  .price_p{
font-size: 25px;
  }
}
</style>

