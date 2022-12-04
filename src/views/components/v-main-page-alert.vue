<template>
    <div class="v-main-page-alert">

        <v-dialog
            v-model="ALERTVALUE"
            width="800"
        >
            <v-alert
                :value="MAINPAGEALERTVALUE"
                color="orange"
                border="top"
                transition="scale-transition"
                width="100%"
                >

                <v-row>
                    <v-col>
                            <h2>НОВИНКА!</h2> 
                        <h4>В Очаге доступен к заказу огромный выбор роллов! </h4> 
                        <p>Только на доставку и самовывоз с ул.Гусарова, 33/8 (наша доставка)</p> 
                        <p> Спешите попробовать! </p> 

                        <br/>

                        <v-row>
                            <v-btn
                                color="red"
                                @click="hideDialog()"
                                style="margin-left:15px;"
                                >
                                Закрыть
                            </v-btn>

                            
                            <v-btn
                                class="black--text"
                                color="green"
                                @click="routeToRolls()"
                                style="margin-left:15px;"
                            >
                                Посмотреть ролы
                            </v-btn>
                        </v-row>
                    </v-col>

                    <v-col style="margin-left:65px;">
                        <v-img
                        max-height="250"
                        max-width="350"
                        src="../../assets/sushi.jpg"
                        ></v-img>
                    </v-col>
                </v-row>
            </v-alert>
        </v-dialog> 
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    name: "v-main-page-alert",

    methods: {
        ...mapActions([
            'SET_MAIN_PAGE_ALERT',
            'SET_ALERT_VALUE',
        ]),

        hideDialog(){
            this.SET_MAIN_PAGE_ALERT(false);
            this.SET_ALERT_VALUE(false);
        },

        routeToRolls(){
            this.hideDialog();
            this.$router.push({name: 'ProductMenu', query: { 'product': 43 }});
        }
    },

    
    computed: {
        ...mapGetters([
            'ALERTVALUE',
            'MAINPAGEALERTVALUE',
        ]),
    },

    data(){
        return {
            alert: true,
        }
    },



}
</script>
<style scoped>
</style>