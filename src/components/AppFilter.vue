<template>
    <div class="app-filter" :class="innerClass">
        <div class="app-filter__block-input">
            <input type="text" class="input app-filter__input" v-model="inputName1" placeholder="Статус квартиры">
            <input type="text" class="input app-filter__input" v-model="inputName2" placeholder="Количество комнат">
            <input type="text" class="input app-filter__input" v-model="inputName3" placeholder="Цена">
            <input type="text" class="input app-filter__input" v-model="inputName4" placeholder="Адрес">
        </div>
        <div class="app-filter__block-button">
            <AppButton @click="addSaveDataFilter" class="app-filter__button">
                <!-- {{ inputName1 }},
                {{ inputName2 }},
                {{ inputName3 }},
                {{ inputName4 }},
                == {{arrSaveDataFilter}} ==+ {{ this.cardObject.arrayBufferFilter }} -->
                Показать 2327 объектов
            </AppButton>
        </div>
    </div>
</template>

<script>
import AppButton from './AppButton.vue';
import { useTodos } from '@/assets/api/apiFooter';


export default {
    name: "AppFilter",
    components: { 
        AppButton 
    },
    data() {
        return {
            inputName1: "",
            inputName2: "",
            inputName3: "",
            inputName4: "",
            arrSaveDataFilter: [],
        }
    },
    props: {
        hasColumn: {
            type: Boolean,
            default: false
        },
    },
    computed: {
        innerClass() {
            return {
                '--column': this.hasColumn,
            }
        }
    },
    methods: {
        addSaveDataFilter() {
            this.arrSaveDataFilter.push(this.inputName1,this.inputName2,this.inputName3,this.inputName4)
            this.cardObject.arrayBufferFilter = this.arrSaveDataFilter
        }
    },
    setup() {
        let cardObject = useTodos();
        
        return {
            cardObject
        }
    },
}
</script>

<style lang="scss" scoped>

.app-filter {
    display: flex;
    gap: 20px;

    &__block-input {
        max-width: 100%;
        // TODO Кастыль
        display: flex;
        flex-wrap: nowrap;
    }

    &__block-button {
        display: flex;
        justify-content: flex-end;
    }

    &__button {
        // display: flex;
        max-width: 270px;
    }

    &.--column {
        flex-direction: column;
        // justify-content: flex-end;
    }

}


// .app-test-input-component__block {
//     display: grid;
// }
</style>