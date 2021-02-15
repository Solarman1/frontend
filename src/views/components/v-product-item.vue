<template>
    
     <v-card
      id="cardMax"
      class="mx-auto my-12" 
      max-width="344" 
      
      >
      
     
      <div
        @click="productPage(product_data.id)"
      >
      <!-- @click.stop="showProductDialog=true" -->
      <a>
      
        <v-img
        :src="'https://api.ochag55.ru/storage/productImages/'+product_data.image"
        height="250px"
        >
        </v-img>

          <v-card-text>
              <div class="productName">
                {{product_data.name}}
              </div>
          </v-card-text>
    

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
          </a>
        </div>
       
        <v-card-actions class="pb-5">

        <v-btn
            class="ml-5"
            color="deep-orange darken-1"
            @click="addToCart"
        >
            В корзину
        </v-btn>

        <v-spacer></v-spacer>
           
       <v-btn
        class="mr-5"
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

      <!-- <productDialog 

        v-model="showProductDialog" 
        :product_image="'https://api.ochag55.ru/storage/productImages/'+product_data.image"
        :product_name="product_data.name"
        :product_weight="product_data.weight"
        :product_price="product_data.price"
        :product_description="product_data.description"
      
      /> -->

    </v-card>
    
     

</template>


<script>
//import productDialog from './v-product-dialog';

  export default {
    name: "v-product-item",
    components: {
      //productDialog,
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
        //showProductDialog: false,
      }
    },
    computed: {},
    methods: {
      addToCart() {
        this.$emit('addToCart', this.product_data);
        
      },
      productPage(id) {
            this.$router.push({name: 'ProductPage', query: { 'product': id }}).catch(()=>{});
        },
    },
    mounted(){
      this.$set(this.product_data, 'quantity', 1);    
    }
  }
    
</script>

<style>

   .priceValue {
  font-size: 35px;
}
  .productName{
/* font-size: 5vm;  */
font-size: 23px;
color: black;
}
/* @media (min-width: 900px) {

  .priceValue {
  font-size: 35px;
}
  .productName{
  font-size: 18px;
}
}
@media (max-width: 390px) {
  

   /* .priceValue {
  font-size: 35px;
}
  .productName{
  font-size: 4.5vw; 
}
}
@media (max-width: 350px) {
#cardMax{
    transform: scale(0.6);
    
  }
 
} */

</style>