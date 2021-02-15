<template>
<v-dialog v-model="show"  max-width="500px">
  <v-card>
      <v-img
        :src="product_image"
        height="250px"
        >
        </v-img>
        <v-card-title>

                {{product_name}}

        </v-card-title>
    
        <v-card-text>

                {{product_weight}}

          </v-card-text>

            <v-card-title 
                class="black--text"
                >
                <strong class="green--text text--lighten-1">{{product_price}}  руб.</strong>
                
                </v-card-title>
    
           <v-card-text>

                {{product_description}}

          </v-card-text>

   

    <v-list-item>
        <v-list-item-content>
        
        С этим товаром рекомендуют
        
        </v-list-item-content>
    </v-list-item>
  
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

  
 <v-card-actions>
      <v-btn color="primary" flat @click.stop="show=false">Закрыть</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>

<script>
export default {
  props: {
     value: Boolean,
     product_image: String,
     product_name: String,
     product_weight: Number,
     product_price: Number,
     product_description: String,
  },
  computed: {
    show: {
      get () {
        return this.value
      },
      set (value) {
         this.$emit('input', value)
      }
    }
  },

  methods: {
      
  },

  mounted(){
         
    },
}
</script>