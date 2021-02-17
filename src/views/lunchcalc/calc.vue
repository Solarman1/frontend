<template>
  <v-card  class="pa-2"
        outlined
        tile>
       <h2 class="text-center "> Конструктор бизнес-ланча </h2> 
       <h3  >По будням с 12:00 - 16:00 </h3> 
       <v-row  dense
       
       >
        <v-col class="d-flex justify-center mb-6">
        <a @click="openCalc(1)">
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
        <a @click="openCalc(2)">
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
        <a @click="openCalc(3)"> 
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
        <a @click="openCalc(4)">
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

        <v-card>
                <lunch1 v-if="lunch1 == true" />
                <lunch2 v-if="lunch2 == true" />
                <lunch3 v-if="lunch3 == true" />
                <lunch4 v-if="lunch4 == true" />
        </v-card>

  </v-card>
  
</template>
<script>
import lunch1 from "../lunchcalc/components/lunch1";
import lunch2 from "../lunchcalc/components/lunch2";
import lunch3 from "../lunchcalc/components/lunch3";
import lunch4 from "../lunchcalc/components/lunch4";

export default {

        components: {
                lunch1,
                lunch2,
                lunch3,
                lunch4,
        },
        data(){
                return{
                        lunchType: 0,
                        lunch1: false,
                        lunch2: false,
                        lunch3: false,
                        lunch4: false,
                        salads: {
                                1: {
                                        name:  'салат восточный с говядиной и гранатом',
                                        description: 'говядина отварная, маринованная красная капуста, огурцы, гранат, чеснок, кинза, майонез, соус острый', 
                                },
                                2: {
                                        name : 'салат летний',
                                        description: 'огурцы, помидоры, перец болгарский, зелень, лук красный, масло оливковое, базилик'
                                },
                                3: {
                                        name: 'салат тбилиси',
                                        description: 'говядина отварная, перец болгарский, фасоль, лук красный, грецкий орех, перец чили, кинза'
                                }
                        },
                        soups: {
                                1: {
                                        name: 'Лагман',
                                        description: ''
                                }
                        }
                }
        },
        methods:{
                openCalc(lunchType){
                        switch(lunchType)
                        {
                                case 1:
                                        this.closeOtherLunch();
                                        this.lunch1 = true;
                                        break;
                                case 2:
                                        this.closeOtherLunch();
                                        this.lunch2 = true;
                                        break;
                                case 3: 
                                        this.closeOtherLunch();
                                        this.lunch3 = true;
                                        break;
                                case 4:
                                        this.closeOtherLunch();
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
                }
        },
}
</script>
