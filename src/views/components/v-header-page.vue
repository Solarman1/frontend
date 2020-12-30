<template>
    <v-app-bar
      app
      color="#15151d"
      dark
    >
    
      <v-app-bar-nav-icon @click.stop="drawerChange"></v-app-bar-nav-icon>
      <router-link to="/" >
       <v-img
        max-height="150"
        max-width="50"
        src="../../assets/ochag_grill.png"
        >
        </v-img>
      </router-link>
      <v-toolbar-title class="d-none d-lg-block ml-5 text-center white--text"> <router-link to="/" class="white--text"> Кафе-бистро Очаг </router-link> </v-toolbar-title>
      <a href="tel:+7(3812)472211" >
       <v-img
       class="ml-5"
        max-height="150"
        max-width="50"
        src="../../assets/phone-icon.png"
        ></v-img></a>
      
      <strong class="subheading  ml-5 text-h5 text-center text-decoration-none">
       
        <!--  <v-icon>mdi-phone</v-icon>--> <a href="tel:+7(3812)472211" > <span class="d-none d-lg-block white--text">+7(3812)47-22-11</span></a></strong> 
        <v-spacer>  
     </v-spacer>

       
      <v-spacer></v-spacer>
      <span class="d-none d-lg-block  white--text mr-6" >Часы работы: </span>
      <span class="d-none d-lg-block  white--text mr-15" > <p class="timeTwo ">Волочаевская 19/4 - 24 часа <br> Карла Либкнехта 6 - 10:00 - 00:00 </p> </span>
       <v-btn icon x-large class="mr-15">
       <router-link :to="{name: 'Cart', params: {cart_data: CART}}">
          <v-icon>mdi-cart</v-icon>
          : {{CARTITEMSLENGTH}}
        </router-link>  
        </v-btn>
    </v-app-bar>
</template>
<script>

import {eventEmitter} from '../../main';
import {mapActions, mapGetters} from 'vuex'

export default {
     data() {
      return {
      }
    },
    name: "v-header-page",
    props: {
      cart_data: {
        type: Array,
        default() {
          return []
        }
      }
    },
    computed: {
      ...mapGetters([
        'CART',
        'CARTITEMSLENGTH'
      ])
    }, 
    methods: {
      ...mapActions([
      ]),
      drawerChange(){
          eventEmitter.$emit('changeDrawer');
      },      
    },
    // mounted() {
    //   this.ADD_TO_CART()
    //   .then((response)=> 
    //   {
    //     if(response)
    //     {
    //       console.log('up to cart'+response);
    //     }
    //   })
    // },   
}
</script>
<style>
/* .time {
  font-size: 12px;
}
.timeTwo {
  font-size: 8px;
}
@media (min-width: 900px) {
  .time{
  font-size: 18px;
  }
  .timeTwo {
  font-size: 14px;
  }
} */
</style>