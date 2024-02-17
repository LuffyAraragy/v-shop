<template>
    <div class="app-main-component" v-if="isLoad">
        <AppMenuTop>

        </AppMenuTop>
        <div class="app-main-component__left-menu">
            <AppMenuLeft :menuLeft="appMenuLeft">

            </AppMenuLeft>
        </div>
        <div class="app-main-component__block">
            <div class="app-main-component__main-content">
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
// import AppAboutCompany from './AppAboutCompany.vue';
import AppAddressOffice from './AppAddressOffice .vue';
import AppFooter from './AppFooter.vue';
import AppMenuLeft from './AppMenuLeft.vue';
import AppMenuTop from './AppMenuTop.vue';
import { vMenuLeft } from '@/assets/api/apiFooter'


export default {
    name: "AppMainComponent",
    components: {
        AppMenuLeft,
        // AppAboutCompany, 
        AppMenuTop,
        AppAddressOffice,
        AppFooter,
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

.app-main-component {
    // margin: 0 auto;
    position: relative;

    &__block {
        // display: flex;
        // position: relative;
    }
// Чёт подсказывает что это костыль
    &__main-content {
        max-width: 100%;
        // margin: 0 auto;
        // padding: 0 20px;

        // TODO позволяет растянуть весь контент на всю длину- это рпо изображение, и другие элементы, если нужно ограничить ихз размер нужно рпописать Container в класс
        flex-basis: 100%;
    }

    &__left-menu {
        z-index: 2;
        position: absolute;
    }
}
</style>