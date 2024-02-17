<template>
    <div class="all-content">
        <div class="app-information-object">
            <div class="app-information-object__block">
                <div class="app-information-object__title text text--font-weight-800 text--font-size-normalx2">
                    Нужна помощь специалиста?
                </div>
                <img src="@/img/cardObject/5c9b5dd452e03_woman_in_mirror 1.svg" alt="" class="app-information-object__img">
                <div class="app-information-object__name text text--font-weight-700 text--font-size-normal">
                    Татьяна
                </div>
                <div class="app-information-object__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </div>
                <button class="button app-information-object__button button--green">
                    Заказать звонок
                </button>
                <button class="button app-information-object__button-block">
                    <img src="@/img/cardObject/communications 2.svg" alt="">
                    <!-- Может этот блок лишний -->
                    <div class="app-information-object__text-telephone">
                        Показать телефон
                    </div>
                </button>
            </div>
        </div>

        <div class="app-bank">
            <div class="app-bank__content" v-for="(arrays, index) in arrayBank" :key="index">
                <img :src="require(`@/img/bank/${ arrays[0] }`)" alt="" class="app-bank__img">
                <div class="app-bank__date-content">
                    <div class="app-bank__percent text text--font-weight-700">
                        {{ arrays[1] }}
                    </div>
                    <div class="app-bank__date text">
                        {{ arrays[2] }}
                    </div>
                </div>
            </div>
        </div>
    <!-- Следующий контент блок -->
        <div class="app-online-calculator">
            <AppButton class="app-online-calculator__button">
                Свернуть
            </AppButton>
            <div class="app-online-calculator__block-content">
                <div class="app-online-calculator__title text text--font-weight-700 text--font-size-normalx2">
                    Онлайн-калькулятор ипотеки
                </div>
                <div class="app-online-calculator__block-price" v-for="( blockPrice, blockPriceIndex ) in 4" :key="blockPriceIndex">
                    <div class="app-online-calculator__price-description text text--font-weight-500">
                        Срок кредитования
                    </div>
                    <div class="field">
                        <input v-model="value[blockPriceIndex]" type="range" min="0" :max="valueMax[blockPriceIndex]" class="slider" />
                        <span :v-model="value[blockPriceIndex]" class="text text--font-weight-500">
                            {{ value[blockPriceIndex] }}
                        </span>
                    </div>
                </div>
                <div class="app-online-calculator__block-payment">
                    <div class="app-online-calculator__monthly-payment text text--font-weight-500">
                        Ежемесячный платёж:
                    </div>
                    <div class="app-online-calculator__payment-amount text text--font-weight-500 text--color-green">
                        50 000 ₽ / мес
                    </div>
                </div>
                <AppButton class="button button--green">
                    Получить ипотеку
                </AppButton>
            </div>
        </div>
    </div>
    
</template>

<script>

import {vBank} from '@/assets/api/apiFooter'
import AppButton from './AppButton.vue';
// import Slider from '@vueform/slider'
// import { vCardObject } from '@/assets/api/apiFooter'

export default {
    name: "AppInformationObject",
    components: {
    AppButton
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

<style lang="scss" scoped>

.all-content {
    display: grid;
    gap: 40px;
}

.app-online-calculator__block-content {
    
    
}

.app-information-object {
    background-color: #FFFFFF;
    width: 350px;
    height: 487px;
    border-radius: 5px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.10);
}

.app-information-object__block {
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.app-information-object__img {
    margin: 20px;
    border-radius: 50%;
}

.app-information-object__name {
    margin-top: 15px;
}

.app-information-object__text {
    margin-top: 19px;
    text-align: center;
}

.app-information-object__button {
    margin-top: 33px;
}

.app-information-object__button-block {
    margin-top: 20px;
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
}

/* Новая задаяа про банк */
.app-bank {
    width: 350px;
    height: 100%;
    flex-shrink: 0;
    border-radius: 5px;
    background: #FFF;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.10);
}

.app-bank__img {
    width: 99px;
    height: 25px;
    flex-shrink: 0;
}

.app-bank__content {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: 290px;
    padding: 30px;
    border-bottom: 1px solid #C4C4C4;
}

.app-bank__date-content {
    display: flex;
    justify-content: space-between;
}


.app-online-calculator {
    
    width: 350px;
    height: 798px;
    border-radius: 5px 5px 0px 0px;
    background: #FFF;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.10);

    &__block-content {
        display: grid;
        text-align: center;
        justify-content: center;
    }

    &__title {
        margin-top: 50px;
        margin-bottom: 28px;
    }

    &__block-payment {
        margin: 20px 0 30px 0;
    }
}

.app-online-calculator__button {
    border-radius: 5px 5px 0px 0px;
    border: 1px solid #2A7D03;
    width: 100%;
    height: 100%;
    max-height: 39px;
}

.app-online-calculator__block-price {
    display: grid;
    height: 117px;
    border-bottom: 1px solid #D3D3D3;;
}

.app-online-calculator__payment-amount {
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
