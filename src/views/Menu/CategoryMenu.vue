<template>
    <div v-cloak class="categoryMeny ">
         <!-- <v-img
              src='../../assets/meat.gif'
              height="300px"
              >
              
        </v-img> -->
          <v-card
            class="pa-2"
            outlined
            shaped
            dark
          >
            <div class="menuTitle"><h2> Меню</h2> </div>
          </v-card>
     
          <v-container fluid>   
            <v-row dense>
                <v-col v-for="categorys in CATEGORYS" :key="categorys.id"> 
                  <v-category-item  ref="example-element" :category_data="categorys"  @overlay="onOverlay"/>
                </v-col> 
            </v-row>   
          </v-container>

          <v-overlay
            :opacity="1"
            :value="overlay"
          >
              <v-progress-circular
                indeterminate
                color="amber"
              ></v-progress-circular>
          </v-overlay>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import vCategoryItem from '../components/v-category-item.vue';

export default {
  components: { vCategoryItem },
    name: "CategoryMenu",
    data(){
        return {
            drawer: null,
            overlay: true ,
        }
    },

    created: function () {
      if(this.CATEGORYS)
      {
        this.overlay = false
        // console.log(this.$el);
        // setTimeout(() => {this.overlay = false}, 2000);
      }
    },
    computed:{
      ...mapGetters([
        'CATEGORYS',
      ]),
    },
    methods:{
      ...mapActions([
        'GET_CATEGORYS_FROM_API',
      ]),
      onOverlay(data){
        // console.log('child component said - ', data.count);
        this.overlay = data.overlay;
        
      }
    },
    mounted() {
      if(this.CATEGORYS)
      {
        this.overlay = false
        // console.log(this.$el);
        // setTimeout(() => {this.overlay = false}, 2000);
      }
    },
    updated: function () {
        console.log('update');
         this.overlay = false;
      },
    beforepdated: function () {
         this.overlay = false;
      },
}
</script>
<style scoped>
.menuTitle{
  font-size: 25px;
}
[v-cloak] {
    display: none;
}
</style>