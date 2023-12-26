<template>
    <div class="v-card-object">
        <div class="v-card-object__block">
            <div class="v-card-object__title">
                Нужна помощь специалиста?
            </div>
            <img src="@/img/cardObject/5c9b5dd452e03_woman_in_mirror 1.svg" alt="" class="v-card-object__img">
            <div class="v-card-object__name">
                Татьяна
            </div>
            <div class="v-card-object__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </div>
            <button class="button v-card-object__button button--green">
                Заказать звонок
            </button>
            <button class="button v-card-object__button-block">
                <img src="@/img/cardObject/communications 2.svg" alt="">
                <!-- Может этот блок лишний -->
                <div class="v-card-object__text-telephone">
                    Показать телефон
                </div>
            </button>
        </div>
    </div>


    <div class="v-bank">
        <div class="v-bank__content" v-for="(arrays, index) in arrayBank" :key="index">
            <img :src="require(`@/img/bank/${ arrays[0] }`)" alt="" class="v-bank__img">
            <div class="v-bank__date-content">
                <div class="v-bank__percent">
                    {{ arrays[1] }}
                </div>
                <div class="v-bank__date">
                    {{ arrays[2] }}
                </div>
            </div>
        </div>
        
    </div>
<!-- Следующий контент блок -->
    <div class="online-calculator">
        <button class="online-calculator__button">
            Свернуть
        </button>
        <div class="online-calculator__description">
            Онлайн-калькулятор ипотеки
        </div>
        <div class="online-calculator__block-price" v-for="( blockPrice, blockPriceIndex ) in 4" :key="blockPriceIndex">
            <div class="online-calculator__price-description">
                Срок кредитования
            </div>
            <div class="field">
                <input v-model="value[blockPriceIndex]" type="range" min="0" :max="valueMax[blockPriceIndex]" class="slider" />
                <span :v-model="value[blockPriceIndex]">
                    {{ value[blockPriceIndex] }}
                </span>
            </div>
        </div>
        <div class="online-calculator__block-payment">
            <div class="online-calculator__monthly-payment">
                Ежемесячный платёж:
            </div>
            <div class="online-calculator__payment-amount">
                50 000 ₽ / мес
            </div>
        </div>
        <button class="button button--green">
            Получить ипотеку
        </button>
    </div>
</template>

<script>

import {vBank} from '@/assets/api/apiFooter'
// import Slider from '@vueform/slider'
// import { vCardObject } from '@/assets/api/apiFooter'

export default {
    name: "VCardObject",
    components: {

    },
    data() {
        return {
            value: [0,0,0,0],
            valueMax: [4000000, 500000, 240, 100],
            arrayBank: []
        }
    },
    methods: {
        check() {
            vBank().then(result =>{
                this.arrayBank = result
                console.log(this.arrayBank);
            });
        }
    },
    mounted() {
        this.check();
    }  
}
</script>

<style>

.v-card-object {
    background-color: #FFFFFF;
    width: 350px;
    height: 487px;
    border-radius: 5px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.10);
}

.v-card-object__block {
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.v-card-object__img {
    margin: 20px;
    border-radius: 50%;
}

.v-card-object__name {
    margin-top: 15px;
}

.v-card-object__text {
    margin-top: 19px;
    text-align: center;
}

.v-card-object__button {
    margin-top: 33px;
}

.v-card-object__button-block {
    margin-top: 20px;
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
}

/* Новая задаяа про банк */
.v-bank {
    width: 350px;
    height: 100%;
    flex-shrink: 0;
    border-radius: 5px;
    background: #FFF;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.10);
}

.v-bank__img {
    width: 99px;
    height: 25px;
    flex-shrink: 0;
}

.v-bank__content {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: 290px;
    padding: 30px;
    border-bottom: 1px solid #C4C4C4;
}

.v-bank__date-content {
    display: flex;
    justify-content: space-between;
}

.online-calculator {
    display: grid;
    text-align: center;
    justify-content: center;
    width: 350px;
    height: 798px;
    border-radius: 5px 5px 0px 0px;
    background: #FFF;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.10);
}

.online-calculator__button {
    border-radius: 5px 5px 0px 0px;
    border: 1px solid #2A7D03;
    width: 100%;
    height: 100%;
    max-height: 39px;
}

.online-calculator__block-price {
    display: grid;
    height: 117px;
    border-bottom: 1px solid #D3D3D3;;
}

.online-calculator__payment-amount {
    margin-top: 8px;
}

input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 15px;
      height: 15px;
      background: #2A7D03; /* Цвет ползунка */
      cursor: pointer;
      border-radius: 50px;
    }
    
    input[type="range"] {
      -webkit-appearance: none;
      width: 100%;
      height: 1px;
      background: #C4C4C4;
      outline: none;
      opacity: 0.7;
      -webkit-transition: .2s;
      transition: opacity .2s;
      border-radius: 5px;
    }
    
</style>
