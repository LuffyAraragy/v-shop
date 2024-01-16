<template>
    <div class="app-object" v-if="isLoad">
        <div class="app-object__title text__h2 text__h2--black">
            Добавить Объект
        </div>
        <div class="app-object__button-controller">
            <AppButton width="164px" :hasWhite="true" :hasOutline="true" class="app-object__button-rounded-left">
                Продать
            </AppButton>
            <AppButton width="164px" :hasWhite="true" :hasOutline="true" class="app-object__button-rounded-right">
                Сдать
            </AppButton>
        </div>
        <div class="app-object__input-city">
            <div class="app-object__text">
                Город
            </div>
            <AppInput type="text" class="app-object__input" v-model="number[0][0]">
                {{ this.number[0][0] }}
            </AppInput>
        </div>
        <div class="app-object__input-district">
            <div class="app-object__text">
                Район
            </div>
            <AppInput type="text" class="app-object__input" v-model="number[1][0]">

            </AppInput>
        </div>
        <div class="app-object__count-room">
            <div class="app-object__text">
                Количество комнат
            </div>
            <div class="app-object__button-information">
                <AppButton :hasWhite="true" class="app-object__button" @click="saveNumber(2, arrayVObjectItem[5][0])">
                    {{ arrayVObjectItem[5][0] }}
                </AppButton>
                <AppButton :hasWhite="true" class="app-object__button" @click="saveNumber(2, arrayVObjectItem[5][1])">
                    {{ arrayVObjectItem[5][1] }}
                </AppButton>
                <AppButton :hasWhite="true" class="app-object__button" @click="saveNumber(2, arrayVObjectItem[5][2])">
                    {{ arrayVObjectItem[5][2] }}
                </AppButton>
                <AppButton :hasWhite="true" class="app-object__button" @click="saveNumber(2, arrayVObjectItem[5][3])">
                    {{ arrayVObjectItem[5][3] }}
                </AppButton>
                <AppButton :hasWhite="true" class="app-object__button" @click="saveNumber(2, arrayVObjectItem[5][4])">
                    {{ arrayVObjectItem[5][4] }}
                </AppButton>
                <AppButton :hasWhite="true" class="app-object__button" @click="saveNumber(2, arrayVObjectItem[5][5])">
                    {{ arrayVObjectItem[5][5] }}
                </AppButton>
            </div>  
        </div>
        <div class="app-object__input-floor">
            <div class="app-object__text">
                Этаж
            </div>
            <AppInput type="text" class="app-object__input" v-model="number[3][0]">

            </AppInput>
        </div>
        <div class="app-object__condition-room">
            <div class="app-object__text">
                Состояние
            </div>
            <div class="app-object__button-information">
                <AppButton :hasWhite="true" class="app-object__button" @click="saveNumber(4, arrayVObjectItem[8][0])">
                    {{ arrayVObjectItem[8][0] }}
                </AppButton>
                <AppButton :hasWhite="true" class="app-object__button" @click="saveNumber(4, arrayVObjectItem[8][1])">
                    {{ arrayVObjectItem[8][1] }}
                </AppButton>
                <AppButton :hasWhite="true" class="app-object__button" @click="saveNumber(4, arrayVObjectItem[8][2])">
                    {{ arrayVObjectItem[8][2] }}
                </AppButton>
            </div> 
        </div>
        <div class="app-object__input-floor">
            <div class="app-object__text">
                Предполагаемая стоимость продажи
            </div>
            <div class="app-object__button-information">
                <AppInput width="158px" type="text" class="app-object__input-small" v-model="number[5][0]" :placeholder="beforePlaceholder">

                </AppInput>
                <AppInput width="158px" type="text" class="app-object__input-small" v-model="number[6][0]" :placeholder="fromPlaceholder">

                </AppInput>
            </div>
        </div>
        <div class="app-object__input-floor">
            <div class="app-object__text">
                Фамилия
            </div>
            <AppInput type="text" class="app-object__input" v-model="number[7][0]">
            
            </AppInput>
        </div>
        <div class="app-object__input-floor">
            <div class="app-object__text">
                Имя
            </div>
            <AppInput type="text" class="app-object__input" v-model="number[8][0]">

            </AppInput>
        </div>
        <div class="app-object__input-floor">
            <div class="app-object__text">
                Отчество
            </div>
            <AppInput type="text" class="app-object__input" v-model="number[9][0]">
            
            </AppInput>
        </div>
        <div class="app-object__input-floor">
            <div class="app-object__text">
                Телефон
            </div>
            <AppInput type="text" class="app-object__input" v-model="number[10][0]">

            </AppInput>
        </div>
        <div class="app-object__input-floor">
            <div class="app-object__text">
                Электронная почта
            </div>
            <AppInput type="text" class="app-object__input" v-model="number[11][0]">

            </AppInput>
        </div>
        <AppButton :hasWhite="true" width="270px" :hasOutline="true" :hasSmall="true" class="" @click="saveData">
            Разместить объявление
        </AppButton>
    </div>
</template>

<script>

import AppButton from './AppButton.vue';
import AppInput from './AppInput.vue';

export default {
    name: 'AppObject',
    data() {
        return {
            isLoad: false,
            number: [
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
            ],
            number1: [],
            beforePlaceholder: "От                      ₽",
            fromPlaceholder: "До                      ₽",
        }
    },
    components: {
        AppButton,
        AppInput
    },
    props: {
        arrayVObjectItem: Array
    },
    methods: {
        saveData() {
            this.number1 = this.number;
            console.log("Проверка "+this.number1);
            console.log(this.number1[8][0]);
        },
        saveNumber(number, arrayItem) {
            this.number[number] = arrayItem;
            console.log(this.number);
        }
    },
    mounted() {
        setTimeout(() => {
            this.isLoad = true;
        }, 3000);
    },
}

</script>

<style lang="scss" scoped>
.app-object__button {
    padding: 21px 12px;
    color: #000000;
}

.app-object__button-rounded-left {
    border-radius: $radius-left;
}

.app-object__button-rounded-right {
    border-radius: $radius-right;
}

.app-object {
    display: flex;
    flex-direction: column;
    margin: auto;
    gap: 30px;
    max-width: 448px;
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    border-radius: 5px;
    background: #F8F7F7;
    padding: 60px;
}

.app-object__button-controller {
    display: flex;
}

.app-object__input {
    border-radius: 5px;
    border: 2px solid #F3F3F3;
    background: #FFF;
    width: 328px;
    height: 52px;
    flex-shrink: 0;
    padding: 0;
}

.app-object__text {
    margin-bottom: 15px;

    color: #2F2D2D;
    font-family: Geometria;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.app-object__input-small {
    padding: 0;
    height: 52px;
}

.app-object__button-information {
    display: flex;
    gap: 10px;
}

</style>

