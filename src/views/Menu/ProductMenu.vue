<template>
 <div class="categoryMeny">
  
         <v-container fluid> 
          
            <v-row dense>
              
            <v-overlay
              :opacity="1"
              :value="overlay"
            >
                <v-progress-circular
                  indeterminate
                  color="amber"
                ></v-progress-circular>
            </v-overlay>
                <v-col
                xs="2"
                v-for="products in productItems"
                :key="products.id"     
                > 
                <v-product-item 
                     :product_data="products"
                     @addToCart="addToCart" 
                />
                <!-- <v-list three-line>
                  <template   v-for="products in productItems" >
                    <v-list-item
                      selectable="true"
                      @click="$router.push({name: 'ProductPage', query: { 'product': products.id }}).catch(()=>{})"
                      :key="products.id"
                    >
                      <v-list-item-avatar size="100" tile="true" :rounded="false">
                        <v-img  height="50px" :src="'https://api.ochag55.ru/storage/productImages/'+ products.image"></v-img>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title v-html="products.price"></v-list-item-title>
                        <v-list-item-subtitle v-html="products.name"></v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list> -->
            </v-col> 
        </v-row>   
    </v-container>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import VProductItem from '../components/v-product-item.vue'

export default {
    name: "ProductMenu",
    components: {VProductItem},
    props: {},
    data() {
        return {
          messages: [],
          overlay: true,
          alert: true,
        }

    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'CART'
      ]),
      productItems()  {
          let productSorted = this.PRODUCTS.filter(item => item.categoriId == this.$route.query.product);
          // console.log(productSorted);
          return productSorted;
        }
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

    mounted() {
      if (!this.PRODUCTS.length) {
        this.GET_PRODUCTS_FROM_API();

      } 
      if (this.PRODUCTS) {
        this.overlay = false;
      } 
    },

    updated: function () {
         this.overlay = false;
      },
    beforepdated: function () {
         this.overlay = false;
      }
  }
</script>


<style lang="stylus" scoped>

</style>