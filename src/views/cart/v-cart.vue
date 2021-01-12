<template>
  <div class='v-cart'>
        <v-card
            class="pa-2"
            outlined
            shaped
            dark
        >
            <router-link :to="{name: 'CategoryMenu'}">
                <div class="v-catalog__link_to_cart">Вернуться к меню</div>
            </router-link>
            <h1>Корзина</h1>
            <p v-if="!cart_data.length">Корзина пуста...</p>
        </v-card>   
    
  
        <template v-if="cart_data.length">
        <!-- <thead>
            <tr>
            <th class="text-center">
               
            </th>
            <th class="text-center">
               Наименование
            </th>
            <th class="text-center">
               Цена продукта
            </th>
            <th class="text-center">
               Количество
            </th>
            <th class="text-center">
               Общая цена
            </th>
            <th class="text-left">
               
            </th>
            </tr>
        </thead>
  <tbody> -->
    <vCartItem
    
     v-for="(item, index) in cart_data"
      :key="item.id"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
    />
       <!-- </tbody> -->
        </template>
 
    <v-card
            class="pa-2"
            outlined
           
            dark
        >
            <h2 v-if="cart_data.length" >
            <p class="total__name"  >Итого:  <strong class="orange--text">{{cartTotalCost}} руб.</strong> </p>
         <p class="total__name"  > Минимальный заказ бесплатной доставки по общему меню составляет <strong class="orange--text">1000 рублей</strong>  </p> 
            <!-- <p> | toFix | formattedPrice}}</p> -->
            </h2>
    </v-card>    
            <v-card
                class="mt-15 mx-auto pa-16"
                v-if="cart_data.length"
                
            >
            <v-card-title  class="text--center">Оформление заказа</v-card-title>

            <template>
              <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                    class="pb-10"
                >

                <v-container>
                
                <v-row >
                   <v-col 
                   cols="12"
                   xs="5"
                  sm="6"
                  md="5"> 
                     <v-text-field
                    v-model="formData.customerName" 
                    :rules="nameRules"
                    name="Name"
                    label="Имя"
                    required
                     solo
                    >
                    </v-text-field>
                     
                   </v-col>

               
                      
                  <v-col cols="12"
                  xs="5"
          sm="6"
          md="5">
                    <v-text-field
                    v-model="formData.customerPhone"
                    :counter="12"
                    :rules="phoneRules"
                    name="Phone"
                    label="Телефон"
                    required
                    solo
                    ></v-text-field>
               
                  </v-col>                  
               
              

                  <v-col cols="12"
                  xs="5"
          sm="7"
          md="6"> 
                   
                   
                    <v-text-field
                    v-model="formData.customerAdres"
                    :rules="adresRules"
                    name="Adres"
                    label="Улица, дом/подьезд/квартира/офис"
                    required
                     solo
                    ></v-text-field>
                 
                 
                  </v-col>
                  
                  <v-col cols="15"
                  xs="5"
          sm="6"
          md="5">
            
                    <v-text-field
                    v-model="formData.customerEmail"
                    :rules="emailRules"
                    name="Email"
                    label="E-mail"
                    required
                     solo
                    ></v-text-field>
                  
                  </v-col>
                    
                

               
                  <v-col cols="12"
                  xs="5"
          sm="6"
          md="3">
                  
                    <v-text-field
                        v-model="formData.deliveryTime"
                        :rules="deliveryTimeRules"
                         solo
                        name="DeliveryTime"
                        color="deep-purple"
                        label="Время заказа"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12"
                  xs="5"
          sm="6"
          md="3">
            
                <label for="PersonsCount">Количество персон(приборы)</label>
                    <v-text-field
                     solo
                        v-model="formData.personsCount"
                        :rules="personsCountRules"
                        name="PersonsCount"
                        color="deep-purple"
                        label="Количество персон(приборы)"
                    ></v-text-field>                 
                  </v-col>
                    </v-row>  
             

                    <v-col xs="10" sm="10" md="10">
                    <v-textarea
                        v-model="formData.description"
                        name="Description"
                        filled
                        
                        label="Комментарий к заказу"
                        auto-grow
                    ></v-textarea>
                    </v-col>
                  
              
                </v-container>

          <v-container fluid>
            <v-radio-group v-model="formData.paymentType">
              <template v-slot:label>
                <div>Способ оплаты</div>
              </template>
              <v-radio @click="paymentCashFalse" value="1" disabled>
                <template v-slot:label>
                  <div>Расчет на сайте</div>
                </template>
              </v-radio>
              <v-radio @click="paymentCashFalse" value="2">
                <template v-slot:label>
                  <div>Расчет по карте курьеру</div>
                </template>
              </v-radio>
              <v-radio @click="paymentCash" value="3">
                <template v-slot:label>
                  <div>Расчет наличными курьеру</div>
                </template>
              </v-radio>
            </v-radio-group>

            <v-row v-if="offlineCash == true" >
                  <v-col md="4">
                  Требуется сдача? Введите с какой купюры. 
                    <v-text-field
                        v-model="formData.sdacha"
                        :rules="sdachaRules"
                        name="Sdacha"
                        color="deep-purple"
                        label="руб."
                    ></v-text-field>
                  </v-col>              
                </v-row>
                
          </v-container>

                    
          <v-container fluid>
              <v-checkbox v-model="checkbox"  :rules="[v => !!v || 'Для офрмления вы должны ознакомиться с правилами оказания услуг']" required>
                <template v-slot:label>
                  <div>
                    Я прочитал и согласен с условиями 
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <a
                          target="_blank"
                          href="/confidance"
                          @click.stop
                          v-on="on"
                        >
                          пользовательского соглашения
                        </a>
                      </template>
                      Открыть 
                    </v-tooltip>
                    и
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <a
                          target="_blank"
                          href="/userpolitic"
                          @click.stop
                          v-on="on"
                        >
                          политики конфиденциальности
                        </a>
                      </template>
                      Открыть 
                    </v-tooltip>
                , даю согласие на обработку персональных данных.
                  </div>
                </template>
              </v-checkbox>
            </v-container>
   
              <v-text class="red" v-if="valid == false">Для оформления заказа заполните пожалуйста все поля формы. </v-text>
         
                <v-dialog
                    v-model="dialog"
                    persistent
                    max-width="290"
                    v-if="valid"
                  >
                  <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        block
                        v-on="on"
                        v-bind="attrs"
                        :disabled="!valid"
                        color="success"
                        class="mr-4"
                        @click="validate"
                        
                        >
                        <!-- type="submit" -->
                        Заказать
                        </v-btn>
                  </template>


                        <v-card>

                        <v-card-title class="Успешно">
                          Заказ успешно офрмлен
                        </v-card-title>
                          <form action="https://www.ochag55.ru/">
                            <v-card-text>В ближайшее время с вами свяжется оператор для потверждения заказа.</v-card-text>
                              <v-card-actions>
                              <v-spacer></v-spacer>
                                <v-btn
                                  color="green darken-1"
                                  text
                                  type="submit"
                                  v-if="deliveryStatus == true"
                                >
                                  Вернуться обратно в магазин
                                </v-btn>
                            </v-card-actions>
                          </form>
                        </v-card>
                  </v-dialog>


                </v-form >
              </template>
            </v-card>   
  </div>
</template>
<script>
import vCartItem from './v-cart-item'
import {mapActions} from 'vuex'
import axios from "axios"

export default {
 name: "v-cart",
    components: {
      vCartItem
    },
    props: {
      cart_data: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        offlineCash: false,
        dialog: false,
        deliveryStatus: false,
        valid: true,
        formData: {
          customerName  : '',
          customerPhone : '',
          customerEmail : '',          
          customerAdres : '',
          deliveryTime  : '',
          sdacha        : 0, 
          personsCount  : 0,
          paymentType   : 0,
          description   : '',
          totalPrice    : 0,
        },
        resBasket: [],
      
      deliveryTimeRules: [
        v => !!v || 'Введите желаемое время доставки',
      ], 
      personsCountRules:[
        v => !!v || 'Поле обязательно для заполнения',
        v => /^\d+$/.test(v) || 'Введите число',                  
      ],
      sdachaRules:[
        v => /^\d+$/.test(v) || 'Введите число', 
      ],
      adresRules: [
        v => !!v || 'Введите адрес доставки',
      ],
      phoneRules: [
        v => !!v || 'Введите ваш номер',
      ],
      nameRules: [
        v => !!v || 'Введите имя',
        v => (v && v.length <= 40) || 'Name must be less than 10 characters',
      ],  
      emailRules: [
        v => !!v || 'E-mail поле обязательно для заполнения',
        v => /.+@.+\..+/.test(v) || 'Введите валидный - E-mail адрес',
      ],
      select: null,
      checkbox: false,
      }
    },
    filters: {
    //   formattedPrice,
    //   toFix
    },
    computed: {
      // logdata(){
      //   console.log('cart data');
      //   return console.log(this.cart_data);
      // },
      cartTotalCost() {
        let result = []
        if (this.cart_data.length) {
          
          for (let item of this.cart_data) {
            result.push(item.price * item.quantity)
          }
          result = result.reduce(function (sum, el) {
            return sum + el;
          })
          //console.log(result)
          return result;
        } 
        else {
          return 0
        }
      }
    },
    methods: {
      ...mapActions([
        'DELETE_FROM_CART',
        'INCREMENT_CART_ITEM',
        'DECREMENT_CART_ITEM'
      ]),
      increment(index) {
        this.INCREMENT_CART_ITEM(index)
      },
      decrement(index) {
        this.DECREMENT_CART_ITEM(index)
      },
      deleteFromCart(index) {
        this.DELETE_FROM_CART(index)
      },
      validate () {
        // console.log(this.formData);
        //   console.log('endFormData');  
          //console.log(this.cart_data);
          
          for (let i = 0; i < this.cart_data.length; i++) {
            this.resBasket[i] = {
              orderId: null,
              productId: this.cart_data[i].id,
              productName: this.cart_data[i].name,
              productPrice: this.cart_data[i].price,
              productQuantity: this.cart_data[i].quantity,
              productTotalPrice: this.cart_data[i].price * this.cart_data[i].quantity,
            }
          }
         
          let tempResult = []
          for (let item of this.resBasket) {
            tempResult.push(item.productPrice * item.productQuantity)
          }
          tempResult = tempResult.reduce(function (sum, el) {
            return sum + el;
          })
          //console.log(tempResult);
          this.formData.totalPrice = tempResult;

        //  console.log(this.resBasket);
        //  console.log(this.formData);

        if(this.$refs.form.validate())
        {
          
          axios({
              method: 'post',
              url: 'https://api.ochag55.ru/api/order',
              data: this.formData
          })
          .then((response)=> {
            console.log(response.data.orderId); 
            let id = response.data.orderId;
            
            this.resBasket.forEach(item => {
                  item.orderId = id;
            });
                ///start basket and mail
            axios({
              method: 'post',
              url: 'https://api.ochag55.ru/api/basket',
              data: this.resBasket
            })
            .then( () => {
                this.sendMail();        
              })
            .catch(error => { 
              //console.log('afeter post basket'+this.resBasket);
                console.error(error)
            });
                /// end axios basket and mail
            })
          .catch(error => { 
              console.error(error)
            });
                  
          }
      },
      sendMail()
      {
        axios('https://api.ochag55.ru/api/mailsend', {
                    method: "GET"
                    }).then((response) => {
                      if(response)
                      {
                        this.deliveryStatus  = true;
                        console.log('inside mailsend');
                        console.log(this.deliveryStatus);
                      }  
                    })
                    .catch(error => { 
                        console.error(error)
                    });
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      paymentCash()
      {
        this.offlineCash = true;
      },
      paymentCashFalse()
      {
        this.offlineCash = false;
      }
    }
  }
</script>
<style>
@media (max-width: 776px) {
  .v-data-table > .v-data-table__wrapper > table{
font-size: 20px;
  }


}
</style>