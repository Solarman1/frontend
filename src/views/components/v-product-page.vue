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
    <v-col>
    <v-card
    class="mx-auto"
    max-width="344"

  >
    <v-list-item three-line>
      <v-list-item-content>
        
        <v-list-item-title class="headline mb-1">
          Товар 1
        </v-list-item-title>
        <v-list-item-subtitle>Тут будет описание</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        text
        color="deep-orange darken-1"
      >
        Добавить в корзину
        
      </v-btn>
    </v-card-actions>
  </v-card>
</v-col>
  
    <v-col>
  <v-card
    class="mx-auto"
    max-width="344"

  >
    <v-list-item three-line>
      <v-list-item-content>
        
        <v-list-item-title class="headline mb-1">
          Товар 1
        </v-list-item-title>
        <v-list-item-subtitle>Тут будет описание</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        text
        color="deep-orange darken-1"
      >
        Добавить в корзину
        
      </v-btn>
    </v-card-actions>
  </v-card>
</v-col>
  </v-row>
</v-card>

  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    data(){
        return {
            product_id: 0,
            product_name: '',
            product_weight: 0,
            product_price: 0,
            product_description: '', 
        }
    },
    props: {

    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'CART'
        ]),
        productItems()  {
            let productSorted = this.PRODUCTS.filter(item => item.id == this.$route.query.product);
            return productSorted;
            },

    },

    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
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
            // console.log('this route -> ');
            // console.log(this.$route.query.product);

        }
        },
}
</script>