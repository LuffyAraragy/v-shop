<template>
    <teleport to='#app'>
        <div class="app-test" v-if="testModalControllers.isVisibleFormObject">
            <div class="app-object">
                <div class="app-object__exit">
                    <button class="app-object__exit-button text--font-size-normalx2 text--color-green" @click="testModalControllers.isVisibleFormObject = false">
                        + 
                    </button>
                </div>
                <div class="app-object__title text text--font-size-big text--font-weight-700 text--color-black">
                    Добавить объект
                </div>
                <div class="app-object__button-controller">
                    <AppButton class="app-object__sell" width="50%" :hasWhite="true" :hasOutline="true">
                        Продать
                    </AppButton>
                    <AppButton class="app-object__rent" width="50%" :hasWhite="true" :hasOutline="true">
                        Сдать
                    </AppButton>
                </div>
                <div class="app-object__input-city">
                    <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                        Город
                    </div>
                    <AppInput> 

                    </AppInput> 
                </div>
                <div class="app-object__input-district">
                    <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                        Район
                    </div>
                    <AppInput>

                    </AppInput>
                </div>
                <div class="app-object__count-room">
                    <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                        Количество комнат
                    </div>
                    <div class="app-object__container-for-button">
                        <AppButton :hasWhite="true">
                            Студия
                        </AppButton>
                        <AppButton :hasWhite="true">
                            1
                        </AppButton>
                        <AppButton :hasWhite="true">
                            2
                        </AppButton>
                        <AppButton :hasWhite="true">
                            3
                        </AppButton>
                        <AppButton :hasWhite="true">
                            4
                        </AppButton>
                        <AppButton :hasWhite="true">
                            4+
                        </AppButton>
                    </div>
                </div>
                <div class="app-object__input-floor">
                    <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                        Этаж
                    </div>
                    <AppInput>

                    </AppInput>
                </div>
                <div class="app-object__condition-room">
                    <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                        Состояние
                    </div>
                    <div class="app-object__container-for-button">
                        <AppButton :hasWhite="true">
                            Плохое
                        </AppButton>
                        <AppButton :hasWhite="true">
                            Хорошее
                        </AppButton>
                        <AppButton :hasWhite="true">
                            Отличное
                        </AppButton>
                    </div>
                </div>
                <div class="app-object__input-floor">
                    <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                        Предполагаемая стоимость продажи
                    </div>
                    <AppInput>

                    </AppInput>
                    <AppInput>

                    </AppInput>
                </div>
                <div class="app-object__input-floor">
                    <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                        Фамилия
                    </div>
                    <AppInput>

                    </AppInput>
                </div>
                <div class="app-object__input-floor">
                    <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                        Имя
                    </div>
                    <AppInput>

                    </AppInput>
                </div>
                <div class="app-object__input-floor">
                    <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                        Отчество
                    </div>
                    <AppInput>

                    </AppInput>
                </div>
                <div class="app-object__input-floor">
                    <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                        Телефон
                    </div>
                    <AppInput>

                    </AppInput>
                </div>
                <div class="app-object__input-floor">
                    <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                        Электронная почта
                    </div>
                    <AppInput>

                    </AppInput>
                </div>
                <AppButton width="270px" :hasOutline="true" :hasSmall="true">
                    Разместить объявление
                </AppButton>
            </div>
        </div>
        
    </teleport>
</template>

<script>

import AppButton from './AppButton.vue';
import AppInput from './AppInput.vue';

import { testModalController } from '@/assets/api/apiFooter';

export default {
    name: 'AppObject',
    components: {
        AppButton,
        AppInput
    },
    data() {
        return {
            isLoad: false,
        }
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
    setup() {
        let testModalControllers = testModalController();
        
        return {
            testModalControllers
        };
    },
}

</script>

<style lang="scss" scoped>

.app-test {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
    overflow: auto;
}
.app-object {
    display: flex;
    flex-direction: column;
    margin: auto;
    gap: 30px;
    max-width: 448px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #F8F7F7;
    padding: 60px;

    &__exit {
        display: flex;
        justify-content: flex-end;
    }

    &__exit-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 18px;
        height: 18px;
        border: none;
        background: none;
        transform: rotate(45deg);
        font-size: 40px;
        cursor: pointer;
    }

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

