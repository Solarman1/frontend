<template>
<div class="v-category-item">
           
              <v-card
                class="mx-auto" 
                max-width="344" >

                <router-link :to="{name: 'ProductMenu', query: { 'product': category_data.id }}">
                        <v-img
                        class="white--text align-end"
                      
                        :src="'http://api.ochag55.ru/storage/categoryImages/'+category_data.image"
                        height="250px"
                        
                        >

                        <v-card-title class="menuItem" style = " text-shadow: 3px 5px 6px black;">
                        {{category_data.name}}
                        </v-card-title>
                        
                        </v-img>

                         
                </router-link>
              </v-card>    
                    
</div>
    
</template>
<script>
  export default {
    name: "v-category-item",
    components: {
    },
    props: {
      category_data: {
        type: Object,
        default() {
            return {}
        }
      }
    },
    data() {
      return {
      }
    },
    computed: {}
  }
    
</script>

<style>
.menuItem{
  font-size: 30px;
}
@media (max-width: 500px) {

  .menuItem{
  font-size: 25px;
}
}
@media (max-width: 330px) {

  .menuItem{
  font-size: 20px;
}
}
</style>