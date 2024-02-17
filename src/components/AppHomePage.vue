<template>
    <div class="app-home-page" v-if="isLoad">
        <div class="app-home-page__1">
            <AppMenuTop>

            </AppMenuTop>
            <div class="app-home-page__left-menu-block">
                <AppMenuLeft :menuLeft="appMenuLeft" class="app-home-page__left-menu" :hasWhite="true">

                </AppMenuLeft>
                <div class="container">
                    <AppAddressOffice class="app-home-page__filter">
                        
                    </AppAddressOffice>
                    <div class="app-home-page__title text text--font-weight-800 text--font-size-big text--color-white">
                        Недвижимость в Санкт-Петербурге
                    </div>
                    <div class="app-home-page__block-filter">
                        <div class="app-home-page__block-button">
                            <AppButton width="160px" :hasBlack="true">
                                Купить
                            </AppButton>
                            <AppButton width="160px" :hasBlack="true">
                                Продать
                            </AppButton>
                            <AppButton width="160px" :hasBlack="true">
                                Снять
                            </AppButton>
                            <AppButton width="160px" :hasBlack="true">
                                Сдать
                            </AppButton>
                        </div>
                        <AppFilter :hasColumn="true">

                        </AppFilter>
                        <AppPhoneImgComponent class="app-home-page__phone-component">

                        </AppPhoneImgComponent>
                    </div>
                </div>
            </div>
            <div class="app-home-page__block">
                
            </div>
        </div>
    </div>
</template>

<script>
import AppAddressOffice from './AppAddressOffice .vue';
import AppButton from './AppButton.vue';
import AppFilter from './AppFilter.vue';
import AppMenuLeft from './AppMenuLeft.vue';
import AppMenuTop from './AppMenuTop.vue';
import AppPhoneImgComponent from './AppPhoneImgComponent.vue';
import { vMenuLeft } from '@/assets/api/apiFooter'


export default {
    name: "AppHomePage",
    components: { 
        AppMenuLeft, 
        AppMenuTop, 
        AppAddressOffice, 
        AppFilter, 
        AppButton, 
        AppPhoneImgComponent 
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

.app-menu-left__link {
    color: aqua;
}

.app-home-page {
    max-width: 100%;
    max-height: 1000px;
    background-position: center;
    background-image: url('@/img/home/2679 1.svg');
    background-repeat: no-repeat;
    // background-size: contain;
    // position: relative;
    
    &__block-filter {
        margin-top: 30px;
    }

    &__1 {
        position: relative;
    }

    &__left-menu {
        position: absolute;
        background: none;
    }
    
    &__left-menu-block {
        height: 1000px;
    }

    &__block-button {
        display: flex;
        gap: 10px;
    }

    &__title {
        margin-top: 160px;
        text-align: center;
    }

    &__phone-component {
        display: flex;
        justify-content: flex-end;
        margin-top: 97px;
    }

}


</style>