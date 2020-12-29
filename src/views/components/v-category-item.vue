<template>
<div class="v-category-item">
           
              <v-card
                class="mx-auto" 
                max-width="344" >

                <router-link :to="{name: 'ProductMenu', query: { 'product': category_data.id }}">
                        <v-img
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.7), rgba(0,0,0,.5)"
                        :src="'http://api.ochag55.ru/storage/categoryImages/'+category_data.image"
                        height="250px"
                        >

                        <v-card-title >
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

</style>