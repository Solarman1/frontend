<template>

    <v-card
    class="mx-auto"
    max-width="344"

  >
  <div @click="productPage(dopProductItemsValue.id)">
    <a>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class=" mb-1">
          {{dopProductItemsValue.name}}
        </v-list-item-title>
        <v-list-item-subtitle>{{dopProductItemsValue.weight}}</v-list-item-subtitle>
        <v-list-item-subtitle> <strong class="green--text text--lighten-1">{{dopProductItemsValue.price}} руб.</strong></v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      >
      
      <v-img
        :src="'https://api.ochag55.ru/storage/productImages/'+dopProductItemsValue.image"
        
        >
        </v-img>
      </v-list-item-avatar>
    </v-list-item>
</a>
</div>
    <v-card-actions>
      <v-btn
        outlined
        text
        color="deep-orange darken-1"
        @click="addToCart(dopProductItemsValue)"
      >
        Добавить в корзину
        
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    
    
  props: {
      dopProduct_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
  computed: {
      ...mapGetters([
            'PRODUCTS',
            'CART'
        ]),
//console.log(dopProduct_data[i]);
        dopProductItemsValue()  {

                //console.log(this.dopProduct_data.productId);
             let dopNew = [];
                let dopProductSorted = this.PRODUCTS.filter(item => item.id == this.dopProduct_data.dopProductId);
                 dopProductSorted.forEach(element => {
                  dopNew  = element;
                });
               
          
            // console.log('this');
             console.log(dopNew);
            return dopNew;
            },
  },

  methods: {
       ...mapActions([
            'ADD_TO_CART'
        ]),

      addToCart() {
        this.$emit('addToCart', this.dopProductItemsValue);
        
      },
      productPage(id) {
            this.$router.push({name: 'ProductPage', query: { 'product': id }}).catch(()=>{});
        },
  },

  mounted(){
         this.$set(this.dopProductItemsValue, 'quantity', 1);
    },
}
</script>