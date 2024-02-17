<template>
    <div class="app-reviews-page__block-content">
        <div class="mainElement" v-for="(array, indexs) in 4" :key="indexs">
            <AppButton width="200px" class="mainButton" @click="buttonMainForm(indexs)">FORM {{ buttonText }}</AppButton>
            <ul class="app-reviews-page__form hiddenElement">
                <li class="app-reviews-page__element-form" v-for="(array2, index) in 4" :key="index">
                    {{ console.log( this.bufferArrayForm) }}
                    <AppButton width="200px" @click="test1(index, indexs, $event)">
                        Город
                    </AppButton>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import AppButton from './AppButton.vue';


export default {
    name: "AppSearchComponents",
    components: { 
        AppButton 
    },
    data() {
        return {
            bufferArrayForm: [],
            buttonText: '',
            bufferIndex: '',
        }
    },
    methods: {
        check() {
            this.fillingBuffer(); 
        },
        showText(indexForm, event) {
            this.buttonText = event.target.innerText;
            this.bufferArrayForm[indexForm] = this.buttonText;
            console.log("this.bufferArrayForm=: "+this.bufferArrayForm);

            // TODO Перенести в метод, метод filter
            // TODO затестировал массив
            let testBuf = this.bufferArrayForm.filter(element => element == "Город");
            console.log(testBuf);
        },
        test(index) {
            this.bufferIndex = index;
            console.log("bufferIndex=: "+this.bufferIndex);
        },
        fillingBuffer() {
            for (let index = 0; index < 4; index++) {
                this.bufferArrayForm.push(this.buttonText);   
            }
        },
        test1(index, indexForm, event) {
            this.test(index);
            this.showText(indexForm, event);
        },
        buttonMainForm(index) {
            let testBuffer = index;
            console.log("testBuffer=: "+testBuffer);
        }
    },
    mounted() {
        this.check();
        setTimeout(() => {
            this.isLoad = true;
        }, 3000);
    },
}

</script>

<style lang="scss" scoped>
.app-reviews-page {
    &__input {
        width: 200px;
        height: 50px;
        text-align: center;
    }

    &__block-content {
        height: 60px;
        display: flex;
        justify-content: center;
        gap: 30px;
    }

    &__block-Employee {
        display: flex;
    }
}

.mainElement {
    display: grid;
    justify-content: center;
}
.hiddenElement {
  display: none;
}

.mainButton:focus + .hiddenElement {
  display: block; 
}

// TODO кастыль, придумать как поменять, потому что при нажатии на элемент формы скрываеться меню и кнопка не нажимается
.hiddenElement:hover {
  display: block;
}
</style>