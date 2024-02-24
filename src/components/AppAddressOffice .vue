<template>
    <div class="app-address-office container">
        <div class="text  text--color-gray">
            Адрес офиса:
        </div>
        <div class="text">
            Санкт-Петербург, Невский проспект 90-92А
        </div>
        <div class="working-hours">
            <div class="text text--font-size-sm1 text--font-weight-300" v-for="(array, index) in 3" :key="index">
                ПН-ПТ с 10:00 до 20:00
            </div>
        </div>
        <AppButton 
            :hasGreen="true" 
            width="185px" 
            class="address-office__button"
            @click="testModalControllers.isVisibleFormObject=true"
        >
            <img src="../img/menuBottom/signs 1.svg" alt="" class="address-office__img">
            Добавить объект
        </AppButton>
    </div>
</template>
<script>
import AppButton from './AppButton.vue'

import { testModalController } from '@/assets/api/apiFooter';

export default {
    name: "AppAddressOffice",
    components: { 
        AppButton 
    },
    data() {
        return {

        }
    },
    setup() {
        let testModalControllers = testModalController();
        return {
            testModalControllers,
        };
    },
    
}
</script>
<style lang="scss">
.app-address-office {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0px 0px 5px 5px;
    background: #FFF;
}

.working-hours {
    display: flex;
    gap: 10px;
}

.address-office__button {
    margin-right: 40px;
}

.address-office__img {
    width: 10px;
    height: 10px;
}
</style>