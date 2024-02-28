<template>
    <div class="layout-default">
        <AppMenuTop>

        </AppMenuTop>
        <div class="layout-default__left-menu">
            <AppMenuLeft :menuLeft="appMenuLeft">

            </AppMenuLeft>
        </div>
        <div class="layout-default__block">
            <div class="layout-default__main-content">
                <AppAddressOffice>

                </AppAddressOffice>
                <!-- TODO ponosonik: Сюда передавать данные блоков -->
                <router-view>
                
                </router-view>
            </div>
        </div>
        <AppFooter>
            
        </AppFooter>
    </div>
</template>
<script>
import AppFooter from '@/components/AppFooter.vue';
import AppMenuTop from '@/components/AppMenuTop.vue';
import AppMenuLeft from '@/components/AppMenuLeft.vue';


import { vMenuLeft } from '@/assets/api/apiFooter'
import AppAddressOffice from '@/components/AppAddressOffice.vue';

export default {
    name: "LayoutDefault",
    components: {
    AppFooter,
    AppMenuTop,
    AppMenuLeft,
    AppAddressOffice
},
    data() {
        return {
            isLoad: false,
            appMenuLeft: [],
        }
    },
    methods: {
        check() {
            vMenuLeft().then(result =>
            {
                this.appMenuLeft = result
                console.log(this.appMenuLeft);
            });  
        },
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
    
.layout-default {
    position: relative;

    &__block {
        // display: flex;
        // position: relative;
    }
    &__main-content {
        max-width: 100%;

        // TODO позволяет растянуть весь контент на всю длину- это рпо изображение, и другие элементы, если нужно ограничить ихз размер нужно рпописать Container в класс
        flex-basis: 100%;
    }

    &__left-menu {
        z-index: 2;
        position: absolute;
    }
}

</style>