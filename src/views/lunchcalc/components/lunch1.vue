<template>
  <v-card>
    <v-row>

      <v-col v-if="salads_data.length">      
        <v-card min-width="230" max-width="300px">
          <v-list-item-avatar size="40">
            <v-img src="../../../assets/salad.svg" color="green">
            </v-img>
          </v-list-item-avatar>
          <div v-for="item in salads_data"
              :key="item.name" >
            <v-container fluid >            
                <v-radio-group v-model="radioGroup">
                <v-radio
                  color="success"
                  :value="item.name"
                >
                  <template v-slot:label>
                    <div><strong class="success--text">{{item.name}}</strong></div>
                  </template>
                </v-radio>
                <v-card-text>{{ item.description}}</v-card-text>
              </v-radio-group>
            </v-container>
          </div>
        </v-card>
      </v-col>

      <v-col v-if="soups_data.length">       
        <v-card min-width="230" max-width="300px">
          <v-list-item-avatar size="40">
            <v-img src="../../../assets/soup.svg">
            </v-img>
          </v-list-item-avatar>
          <div v-for="item in soups_data"
              :key="item.name" >
            <v-container fluid >
                <v-radio-group v-model="radioGroup2">
                <v-radio
                  color="orange"
                  :value="item.name"
                >
                  <template v-slot:label>
                    <div><strong class="orange--text">{{item.name}}</strong></div>
                  </template>
                </v-radio>
                <v-card-text>{{ item.description}}</v-card-text>
              </v-radio-group>            
            </v-container>
          </div>
        </v-card>
      </v-col>

      <v-col v-if="garnir_data.length">       
        <v-card min-width="230" max-width="300px">
          <v-list-item-avatar size="40">
            <v-img src="../../../assets/garnir.svg">
            </v-img>
          </v-list-item-avatar>
          <div v-for="item in garnir_data"
              :key="item.name" >
            <v-container fluid >
                <v-radio-group v-model="radioGroup3">
                <v-radio
                  color="deep-orange"
                  :value="item.name"
                >
                  <template v-slot:label>
                    <div><strong class="deep-orange--text">{{item.name}}</strong></div>
                  </template>
                </v-radio>
                <v-card-text>{{ item.description}}</v-card-text>
              </v-radio-group>            
            </v-container>
          </div>
        </v-card>
      </v-col>

      <v-col v-if="skewer_data.length">       
        <v-card min-width="230" max-width="300px">
          <v-list-item-avatar size="40">
            <v-img src="../../../assets/skewer.svg">
            </v-img>
          </v-list-item-avatar>
          <div v-for="item in skewer_data"
              :key="item.name" >
            <v-container fluid >
                <v-radio-group v-model="radioGroup4">
                <v-radio
                  color="red"
                  :value="item.name"
                >
                  <template v-slot:label>
                    <div><strong class="red--text">{{item.name}}</strong></div>
                  </template>
                </v-radio>
                <v-card-text>{{ item.description}}</v-card-text>
              </v-radio-group>            
            </v-container>
          </div>
        </v-card>
      </v-col>

      <v-col>  
          <v-card min-width="230" max-width="300px">
            <v-list-item-avatar size="40">
              <v-img src="../../../assets/tea.svg">
              </v-img>
            </v-list-item-avatar>
            <div v-for="item in drink_data"
                :key="item.name" >
              <v-container fluid >
                  <v-radio-group v-model="radioGroup5">
                  <v-radio
                    color="teal"
                    :value="item.name"
                  >
                  <template v-slot:label>
                    <div><strong class="teal--text">{{item.name}}</strong></div>
                  </template>
                  </v-radio>
                  <v-card-text>{{item.description}}</v-card-text>
                </v-radio-group>            
              </v-container>
            </div>
          </v-card> 
      </v-col>

     

    </v-row> 
    <div>
        <v-btn
        color="primary"
        @click="backPage"
        >
               Назад
        </v-btn> 
      
        <v-btn
        class="ml-5"
        color="primary"
        @click="nextPage"
        >
               Далее
        </v-btn>
    </div>
        

            
  </v-card>
  
</template>

<script>
export default {
    data(){
      return {
         radioGroup: 1,
         radioGroup2: 1,
         radioGroup3: 1,
         radioGroup4: 1,
         radioGroup5: 1,
      }
    },
    props: {
      salads_data: {
        type: Array,
        default() {
          return {}
        }
      },
      soups_data: {
        type: Array,
        default() {
          return {}
        }
      },
      garnir_data: {
        type: Array,
        default() {
          return {}
        }
      },
      skewer_data: {
        type: Array,
        default() {
          return {}
        }
      },
      drink_data: {
        type: Array,
        default() {
          return {}
        }
      }
    },
    computed: {
       
    },
    methods: {
        getProducItems(data)
        {
          let res = data.map(function(item){
            console.log(item.name);
            return item.name;
          });
          //this.salads = res;
          console.log(res);
          return res;
        },
        nextPage()
        {
          this.$emit('nextPage');
        },
        backPage()
        {
          this.$emit('backPage');
        }
    },
}
</script>
