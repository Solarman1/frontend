<template>
    <v-card
    class="mx-auto my-12" 
    max-width="600" >
   <div class="d-flex flex-no-wrap justify-space-between">
     <v-avatar
          class="ma-3"
          size="225"
          tile>
        <v-img
        :src="'http://api.ochag55.ru/storage/productImages/'+product_data.image" 
        >
        </v-img>
    </v-avatar>
              <div class="mr-15">

        <v-card-title class="headline"
                  >
         <div class="productName">{{product_data.name}}</div> 
        </v-card-title>

        <v-card-subtitle>
          {{product_data.weight}}
        </v-card-subtitle>
        
          <v-card-text>
              
                <v-card-title 
                class="black--text"
                >
                <div class="priceValue"><strong class="green--text text--lighten-1">{{product_data.price}}  руб.</strong></div>
                
                </v-card-title>
            
          </v-card-text>
                  <v-card-actions class="pb-5">

        <v-btn
            class="mr-8"
            color="deep-orange darken-1"
            @click="addToCart"
        >
            В корзину
        </v-btn>

            

       <v-btn
        class=""
        icon
        text
        @click="show = !show"
      >
      <strong > Состав </strong> 
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          <div> {{product_data.description}}</div>
        </v-card-text>
      </div>
    </v-expand-transition>
              </div>
   


    

    
   </div>
    </v-card>
</template>

<script>
  export default {
    name: "v-product-item",
    components: {
    },
    props: {
      product_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        show: false,
      }
    },
    computed: {},
    methods: {
      addToCart() {
        this.$emit('addToCart', this.product_data);
        
      }
    },
    mounted(){
      this.$set(this.product_data, 'quantity', 1);    
    }
  }
    
</script>

<style>
/* .priceValue {
  font-size: 35px;
}
.productName {
  font-size: 28px;
} */
</style>