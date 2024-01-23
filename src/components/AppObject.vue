<template>
    <div class="app-object" v-if="isLoad">
        <div class="app-object__title text text--font-size-big text--font-weight-700 text--color-black">
            Добавить объект
        </div>
        <div class="app-object__button-controller">
            <AppButton class="app-object__sell" width="50%">
                Продать
            </AppButton>
            <AppButton class="app-object__rent" width="50%">
                Сдать
            </AppButton>
        </div>
        <div class="app-object__input-city">
            <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                Город
            </div>
            <AppInput v-model="number[0][0]"> 
                {{ this.number[0][0] }}
            </AppInput> 
        </div>
        <div class="app-object__input-district">
            <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                Район
            </div>
            <AppInput v-model="number[1][0]">

            </AppInput>
        </div>
        <div class="app-object__count-room">
            <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                Количество комнат
            </div>
            <div class="app-object__container-for-button">
                <AppButton  @click="saveNumber(2, arrayVObjectItem[5][0])">
                    {{ arrayVObjectItem[5][0] }}
                </AppButton>
                <AppButton  @click="saveNumber(2, arrayVObjectItem[5][1])">
                    {{ arrayVObjectItem[5][1] }}
                </AppButton>
                <AppButton  @click="saveNumber(2, arrayVObjectItem[5][2])">
                    {{ arrayVObjectItem[5][2] }}
                </AppButton>
                <AppButton  @click="saveNumber(2, arrayVObjectItem[5][3])">
                    {{ arrayVObjectItem[5][3] }}
                </AppButton>
                <AppButton  @click="saveNumber(2, arrayVObjectItem[5][4])">
                    {{ arrayVObjectItem[5][4] }}
                </AppButton>
                <AppButton  @click="saveNumber(2, arrayVObjectItem[5][5])">
                    {{ arrayVObjectItem[5][5] }}
                </AppButton>
            </div>
        </div>
        <div class="app-object__input-floor">
            <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                Этаж
            </div>
            <AppInput v-model="number[3][0]">

            </AppInput>
        </div>
        <div class="app-object__condition-room">
            <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                Состояние
            </div>
            <div class="app-object__container-for-button">
                <AppButton @click="saveNumber(4, arrayVObjectItem[8][0])">
                    {{ arrayVObjectItem[8][0] }}
                </AppButton>
                <AppButton @click="saveNumber(4, arrayVObjectItem[8][1])">
                    {{ arrayVObjectItem[8][1] }}
                </AppButton>
                <AppButton @click="saveNumber(4, arrayVObjectItem[8][2])">
                    {{ arrayVObjectItem[8][2] }}
                </AppButton>
            </div>
        </div>
        <div class="app-object__input-floor">
            <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                Предполагаемая стоимость продажи
            </div>
            <AppInput v-model="number[5][0]">

            </AppInput>
            <AppInput v-model="number[6][0]">

            </AppInput>
        </div>
        <div class="app-object__input-floor">
            <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                Фамилия
            </div>
            <AppInput v-model="number[7][0]">

            </AppInput>
        </div>
        <div class="app-object__input-floor">
            <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                Имя
            </div>
            <AppInput v-model="number[8][0]">

            </AppInput>
        </div>
        <div class="app-object__input-floor">
            <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                Отчество
            </div>
            <AppInput v-model="number[9][0]">

            </AppInput>
        </div>
        <div class="app-object__input-floor">
            <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                Телефон
            </div>
            <AppInput v-model="number[10][0]">

            </AppInput>
        </div>
        <div class="app-object__input-floor">
            <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                Электронная почта
            </div>
            <AppInput v-model="number[11][0]">

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
            number1: []
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
.app-object {
    display: flex;
    flex-direction: column;
    margin: auto;
    gap: 30px;
    max-width: 448px;
    // width: 100%;
    // height: 100%;
    flex-shrink: 0;
    border-radius: 5px;
    background: #F8F7F7;
    padding: 60px;

    &__container-for-button {
        display: flex;
        gap: 10px;
    }

    &__button-controller {
        display: flex;
    }

    &__input {
        border-radius: 5px;
        border: 2px solid #F3F3F3;
        background: #FFF;
        width: 328px;
        height: 52px;
        flex-shrink: 0;
    }

    &__text {
        margin-bottom: 15px;
    }

    &__sell {
        border-radius: 5px 0px 0px 5px;
    }

    &__rent {
        border-radius: 0px 5px 5px 0px;
    }
}
</style>

