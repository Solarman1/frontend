<template>
  <v-card  class="pa-2"
        outlined
        tile>
       <h2 class="text-center "> Конструктор бизнес-ланча </h2> 
       <h3  >По будням с 12:00 - 16:00 </h3> 


          <v-stepper v-model="e1">
                <v-stepper-header>
                        <v-stepper-step
                                :complete="e1 > 1"
                                step="1"
                        >
                        Выберите набор
                        </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
      >
        Выберите позиции из меню
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">
        Завершите заказ
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">                
        <v-row  dense
        >
        <v-col class="d-flex justify-center mb-6">
        <a @click="openCalc(1), e1 = 2" >
        <v-card min-width="230" max-width="300px" >
            <v-card-title>
                Комплекс 1  <v-spacer></v-spacer> <div class="green--text text--lighten-1">190 руб.</div>
            </v-card-title>
             <v-list-item-avatar size="40">
                            <v-img src="../../assets/salad.svg">
                            </v-img>
                    </v-list-item-avatar>
                    <v-list-item-avatar size="40">
                            <v-img src="../../assets/soup.svg">
                            </v-img>
                    </v-list-item-avatar>
                    <v-list-item-avatar  size="40">
                            <v-img src="../../assets/tea.svg">
                            </v-img>
                    </v-list-item-avatar>
        </v-card>
        </a>
        </v-col>

        <v-col class="d-flex justify-center mb-6">
        <a @click="openCalc(2), e1 = 2">
        <v-card min-width="230" max-width="300px">
            <v-card-title>
                Комплекс 2 <v-spacer></v-spacer> <div class="green--text text--lighten-1"> 250 руб. </div>
            </v-card-title>
             <v-list-item-avatar size="40">
                            <v-img src="../../assets/salad.svg">
                            </v-img>
                    </v-list-item-avatar>
                    <v-list-item-avatar size="40">
                            <v-img src="../../assets/garnir.svg">
                            </v-img>
                    </v-list-item-avatar>
                    <v-list-item-avatar size="40">
                            <v-img src="../../assets/skewer.svg">
                            </v-img>
                    </v-list-item-avatar>
                    <v-list-item-avatar size="40">
                            <v-img src="../../assets/tea.svg">
                            </v-img>
                    </v-list-item-avatar>
        </v-card>
        </a>
        </v-col>
        </v-row>

        <v-row>
        <v-col class="d-flex justify-center mb-6">
        <a @click="openCalc(3), e1 = 2"> 
        <v-card min-width="230" max-width="300px">
            <v-card-title>
                Комплекс 3   <v-spacer></v-spacer> <div class="green--text text--lighten-1">280 руб.</div>
            </v-card-title>
                    <v-list-item-avatar size="40">
                            <v-img src="../../assets/soup.svg">
                            </v-img>
                    </v-list-item-avatar>
                    <v-list-item-avatar size="40">
                            <v-img src="../../assets/garnir.svg">
                            </v-img>
                    </v-list-item-avatar>
                    <v-list-item-avatar size="40">
                            <v-img src="../../assets/skewer.svg">
                            </v-img>
                    </v-list-item-avatar>
                    <v-list-item-avatar size="40">
                            <v-img src="../../assets/tea.svg">
                            </v-img>
                    </v-list-item-avatar>
        </v-card>
        </a>
        </v-col>

        <v-col  class="d-flex justify-center mb-6">
        <a @click="openCalc(4), e1 = 2">
        <v-card min-width="230" max-width="300px" >
            <v-card-title>
                Комплекс 4  <v-spacer></v-spacer> <div class="green--text text--lighten-1">300 руб.</div> 
            </v-card-title>
             <v-list-item-avatar size="40">
                            <v-img src="../../assets/salad.svg">
                            </v-img>
                    </v-list-item-avatar>
                    <v-list-item-avatar size="40">
                            <v-img src="../../assets/soup.svg">
                            </v-img>
                    </v-list-item-avatar>
                    <v-list-item-avatar size="40">
                            <v-img src="../../assets/garnir.svg">
                            </v-img>
                    </v-list-item-avatar>
                    <v-list-item-avatar size="40">
                            <v-img src="../../assets/skewer.svg">
                            </v-img>
                    </v-list-item-avatar>
                    <v-list-item-avatar size="40">
                            <v-img src="../../assets/tea.svg">
                            </v-img>
                    </v-list-item-avatar>
        </v-card>
        </a>
        </v-col>
        </v-row>

      </v-stepper-content>

      <v-stepper-content step="2">

                <lunch1 v-if="lunch1 == true" @nextPage="nextPage()" @backPage="backPage" @addFormData="getFormData" :salads_data="salads" :soups_data="soups"   :garnir_data="[]" :skewer_data="[]" :drink_data="drink" />
                <lunch1 v-if="lunch2 == true" @nextPage="nextPage()" @backPage="backPage" @addFormData="getFormData" :salads_data="salads" :soups_data="[]"   :garnir_data="garnir" :skewer_data="skewer" :drink_data="drink" />
                <lunch1 v-if="lunch3 == true" @nextPage="nextPage()" @backPage="backPage" @addFormData="getFormData" :salads_data="[]" :soups_data="soups"   :garnir_data="garnir" :skewer_data="skewer" :drink_data="drink" />
                <lunch1 v-if="lunch4 == true" @nextPage="nextPage()" @backPage="backPage" @addFormData="getFormData" :salads_data="salads" :soups_data="soups"   :garnir_data="garnir" :skewer_data="skewer" :drink_data="drink" />

      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          
        >
        <v-card-text class="black--text"><h2>Обед готов</h2></v-card-text>

        <v-simple-table>
                <template v-slot:default>
                <thead>
                        <tr>
                        <th>
                        Тип
                        </th>
                        <th >
                        Цена
                        </th>
                         <th>
                        Состав обеда
                        </th>
                        </tr>
                </thead>
                <tbody>
                        <tr>
                                <td>{{formData.name}}</td>
                                <td>{{formData.price}} руб.</td>
                                <td>{{formData.description}}</td>
                                <!-- <td>{{formData.description.salad}}, {{formData.description.soup}},  {{formData.description.garnir}}, {{formData.description.skewer}}, {{formData.description.drink}}</td>     -->
                        </tr>
                        <v-btn
                                class="ml-5"
                                color="deep-orange darken-1"
                                @click="addToCart(formData)"
                                >
                                        В корзину
                        </v-btn>
                        
                </tbody>
                </template>
        </v-simple-table>  
        
        </v-card>

        <v-btn
        color="primary"
        @click="backPage(2)"
        >
                Назад
        </v-btn>

      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>

  </v-card>
  
</template>
<script>
import lunch1 from "../lunchcalc/components/lunch1";
import {mapGetters, mapActions} from 'vuex';

export default {

        components: {
                lunch1,
        },
        data(){
                return{
                        formData: {
                                id: 0,
                                name: '',
                                description: '',
                                price: 0,
                        },
                        e1: 1,
                        lunchType: 0,
                        lunch1: false,
                        lunch2: false,
                        lunch3: false,
                        lunch4: false,
                        
                        salads: [
                                {
                                        id: 1,
                                        name:  'Салат восточный с говядиной и гранатом',
                                        description: 'говядина отварная, маринованная красная капуста, огурцы, гранат, чеснок, кинза, майонез, соус острый', 
                                },
                                {
                                        id: 2,
                                        name : 'Салат летний',
                                        description: 'огурцы, помидоры, перец болгарский, зелень, лук красный, масло оливковое, базилик'
                                },
                                {
                                        id: 3,
                                        name: 'Салат тбилиси',
                                        description: 'говядина отварная, перец болгарский, фасоль, лук красный, грецкий орех, перец чили, кинза'
                                }
                        ],
                        soups: [
                                {
                                        id: 4,
                                        name: 'Лагман',
                                        description: 'мякоть говядины, редька, перец болгарский, лук репчатый, морковь, сельдерей, чеснок, томатная паста'
                                },
                                {
                                        id: 5,
                                        name: 'Харчо',
                                        description: 'говядина, рис, помидор, перец болгарский, перец чили, кинза, лук репчатый, чеснок'
                                },
                                {
                                        id: 6,
                                        name: 'Уха тройная (семга, судак, сазан)',
                                        description: 'семга, лук, морковь, помидоры, перец болгасркий, зелень, картофель, сазан, судак'
                                },
                                {
                                        id: 7,
                                        name: 'Шурпа',
                                        description: 'картофель, морковь, помидоры, лук репчатый, перец болгарский, баранина'
                                }
                        ],
                        garnir: [
                                {
                                        id: 8,
                                        name: 'Булгур с грибами'
                                },
                                {
                                        id: 9,
                                        name: 'Гречка'
                                },
                                {
                                        id: 10,
                                        name: 'Картофельные дольки'
                                },
                                {
                                        id: 11,
                                        name: 'Рис с овощами'
                                },
                                {
                                        id: 12,
                                        name: 'Фасоль с грибами'
                                },
                                {
                                        id: 13,
                                        name: 'Фри'
                                }
                        ],
                        skewer: [
                                {
                                        id: 14,
                                        name: 'Шашлык из Сазана',
                                        description: 'филе сазана, лимоны, соус чесночный'
                                },
                                {
                                        id: 15,
                                        name: 'Шашлык из куриной грудки',
                                        description: 'шашлык из куриной грудки, лук репчатый, соус томатный, зелень'
                                },
                                {
                                        id: 16,
                                        name: 'Шашлык из свиной вырезки',
                                        description: 'свинная вырезка, лук репчатый, соус томатный, зелень'
                                },
                                {
                                        id: 17,
                                        name: 'Печень телячья',
                                        description: 'печень телячья, курдюк, лук репчатый, соус томатный, зелень'
                                },
                                {
                                        id: 18,
                                        name: 'Кебаб из судака',
                                        description: 'фарш из судака, соус чесночный, зелень, лимоны'
                                },
                                {
                                        id: 19,
                                        name: 'Кебаб из курицы',
                                        description: 'фарш куриный, соус томатный, лук репчатый, зелень'
                                },
                        ],
                        drink: [
                                {
                                        id: 20,
                                        name: 'Чай зеленый'
                                },
                                {
                                        id: 21,
                                        name: 'Чай черный'
                                },
                                {
                                        id: 22,
                                        name: 'Морс клюква'
                                },
                                {
                                        id: 23,
                                        name: 'Морс облепиха'
                                },
                                {
                                        id: 24,
                                        name: 'Морс смородина'
                                },
                        ]
                }
        },
        computed: {
                ...mapGetters([
                'CART'
                ]),      

        },
        methods:{
                ...mapActions([
                        'ADD_TO_CART'
                ]),

                addToCart(data){
                        this.ADD_TO_CART(data);
                },

                openCalc(lunchType){
                        switch(lunchType)
                        {
                                case 1:
                                        this.closeOtherLunch();
                                        this.formData.id    = 301;
                                        this.formData.name  = 'Комплекс 1';
                                        this.formData.price = 190; 
                                        this.lunch1 = true;
                                        break;
                                case 2:
                                        this.closeOtherLunch();
                                        this.formData.id    = 302;
                                        this.formData.name  = 'Комплекс 2';
                                        this.formData.price = 250; 
                                        this.lunch2 = true;
                                        break;
                                case 3: 
                                        this.closeOtherLunch();
                                        this.formData.id    = 303;
                                        this.formData.name  = 'Комплекс 3';
                                        this.formData.price = 280; 
                                        this.lunch3 = true;
                                        break;
                                case 4:
                                        this.closeOtherLunch();
                                        this.formData.id    = 304;
                                        this.formData.name  = 'Комплекс 4';
                                        this.formData.price = 300;
                                        this.lunch4 = true;
                                        break;
                        }
                                
                },
                closeOtherLunch()
                {
                        this.lunch1 = false;
                        this.lunch2 = false;
                        this.lunch3 = false;
                        this.lunch4 = false;
                },
                nextPage()
                {
                        this.e1 = 3;
                },
                backPage(page)
                {
                        if(page == 2)
                        {
                                for(let key in this.formData)
                                {
                                        this.formData[key] = '';
                                }
                        }

                        console.log(this.formData);
                        this.e1 = page;  
                },
                getFormData(data)
                {
                        let saladData   = 0;
                        let soupData    = 0;
                        let garnirData  = 0;
                        let skewerData  = 0;
                        let drinkData   = 0;

                        if(data.salad.length)
                        {
                                saladData = this.salads.filter(item => item.name == data.salad);

                                saladData.forEach(element => {
                                        saladData = element.id;
                                });
                        }
                       

                        if(data.soup.length)
                        {
                                soupData = this.soups.filter(item => item.name == data.soup);

                                soupData.forEach(element => {
                                        soupData = element.id;
                                });
                        }


                        if(data.garnir.length)
                        {
                                garnirData = this.garnir.filter(item => item.name == data.garnir);

                                garnirData.forEach(element => {
                                        garnirData = element.id;
                                });
                        }


                        if(data.skewer.length)
                        {
                                skewerData = this.skewer.filter(item => item.name == data.skewer);

                                skewerData.forEach(element => {
                                        skewerData = element.id;
                                });
                        }

                        if(data.drink.length)
                        {
                                drinkData = this.drink.filter(item => item.name == data.drink);

                                drinkData.forEach(element => {
                                        drinkData = element.id;
                                });
                        }

                        let curId = saladData + soupData + garnirData + skewerData + drinkData;

                        let newData = 
                        data.soup+"/ "
                        +data.salad+"/ "
                        +data.garnir+"/ "
                        +data.skewer+"/ "
                        +data.drink;

                        this.formData.id                = curId;
                        this.formData.description       = newData;
                        //console.log(this.formData);            
                }
        },
        mounted(){
            this.$set(this.formData, 'quantity', 1);
        },
}
</script>
