<template>
    <div class="v-object" v-if="this.let1">
        <div class="v-object__title text__h2 text__h2--black">
            {{ arrayVObjectItem[0][0] }}
        </div>
        <div class="v-object__button-controller">
            <button class=" button v-object__sell">
                {{ arrayVObjectItem[1][0] }}
            </button>
            <button class="button v-object__rent">
                {{ arrayVObjectItem[1][1] }}
            </button>
        </div>
        <div class="v-object__input-city">
            <div class="v-object__text">
                {{ arrayVObjectItem[2][0] }}
            </div>
            <input type="text" class="v-object__input" v-model="number[0][0]"> 
            {{ this.number[0][0] }} 
        </div>
        <div class="v-object__input-district">
            <div class="v-object__text">
                {{ arrayVObjectItem[3][0] }}
            </div>
            <input type="text" class="v-object__input" v-model="number[1][0]">
        </div>
        <div class="v-object__count-room">
            <div class="v-object__text">
                {{ arrayVObjectItem[4][0] }}
            </div>
            <button  @click="saveNumber(2, arrayVObjectItem[5][0])">
                {{ arrayVObjectItem[5][0] }}
            </button>
            <button  @click="saveNumber(2, arrayVObjectItem[5][1])">
                {{ arrayVObjectItem[5][1] }}
            </button>
            <button  @click="saveNumber(2, arrayVObjectItem[5][2])">
                {{ arrayVObjectItem[5][2] }}
            </button>
            <button  @click="saveNumber(2, arrayVObjectItem[5][3])">
                {{ arrayVObjectItem[5][3] }}
            </button>
            <button  @click="saveNumber(2, arrayVObjectItem[5][4])">
                {{ arrayVObjectItem[5][4] }}
            </button>
            <button  @click="saveNumber(2, arrayVObjectItem[5][5])">
                {{ arrayVObjectItem[5][5] }}
            </button>
        </div>
        <div class="v-object__input-floor">
            <div class="v-object__text">
                {{ arrayVObjectItem[6][0] }}
            </div>
            <input type="text" class="v-object__input" v-model="number[3][0]">
        </div>
        <div class="v-object__condition-room">
            <div class="v-object__text">
                {{ arrayVObjectItem[7][0] }}
            </div>
            <button @click="saveNumber(4, arrayVObjectItem[8][0])">
                {{ arrayVObjectItem[8][0] }}
            </button>
            <button @click="saveNumber(4, arrayVObjectItem[8][1])">
                {{ arrayVObjectItem[8][1] }}
            </button>
            <button @click="saveNumber(4, arrayVObjectItem[8][2])">
                {{ arrayVObjectItem[8][2] }}
            </button>
        </div>
        <div class="v-object__input-floor">
            <div class="v-object__text">
                {{ arrayVObjectItem[9][0] }}
            </div>
            <input type="text" class="v-object__input-small" v-model="number[5][0]">
            <input type="text" class="v-object__input-small" v-model="number[6][0]">
        </div>
        <div class="v-object__input-floor">
            <div class="v-object__text">
                {{ arrayVObjectItem[10][0] }}
            </div>
            <input type="text" class="v-object__input" v-model="number[7][0]">
        </div>
        <div class="v-object__input-floor">
            <div class="v-object__text">
                {{ arrayVObjectItem[11][0] }}
            </div>
            <input type="text" class="v-object__input" v-model="number[8][0]">
        </div>
        <div class="v-object__input-floor">
            <div class="v-object__text">
                {{ arrayVObjectItem[12][0] }}
            </div>
            <input type="text" class="v-object__input" v-model="number[9][0]">
        </div>
        <div class="v-object__input-floor">
            <div class="v-object__text">
                {{ arrayVObjectItem[13][0] }}
            </div>
            <input type="text" class="v-object__input" v-model="number[10][0]">
        </div>
        <div class="v-object__input-floor">
            <div class="v-object__text">
                {{ arrayVObjectItem[14][0] }}
            </div>
            <input type="text" class="v-object__input" v-model="number[11][0]">
        </div>
        <app-button :hasWhite="true" width="270px" :hasOutline="true" :hasSmall="true" class="" @click="saveData">
            {{ arrayVObjectItem[15][0] }}
        </app-button>
    </div>
</template>

<script>

import AppButton from './AppButton.vue';

export default {
    name: 'v-object',
    data() {
        return {
            let1: false,
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
        AppButton
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
            this.let1 = true;
        }, 3000);
    },
}

</script>

<style lang="scss">
.v-object {
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

.v-object__button-controller {
    display: flex;
}

.v-object__input {
    border-radius: 5px;
    border: 2px solid #F3F3F3;
    background: #FFF;
    width: 328px;
    height: 52px;
    flex-shrink: 0;
}
.v-object__text {
    margin-bottom: 15px;

    color: #2F2D2D;
    font-family: Geometria;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
</style>

