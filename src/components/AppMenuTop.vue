<template>
    <div class="app-menu-top">
        <div class="app-menu-top__logo">

        </div>
        <div class="app-menu-top__city">
            <img src="@/img/menu/pin 1.svg" alt="" class="contact">
            <div class="app-menu-top__city-name">
                <button 
                    class="app-menu-top__text-button text text--font-size-normal text--color-black text--font-weight-400"
                    @click="testModalControllers.isVisibleFormRegistration=true"    
                >
                    Екатеринбург
                </button>
            </div>
        </div>
        <div class="app-menu-top__mail">
            <img src="@/img/menu/mail 1.svg" alt="" class="contact">
            <div class="v-menu-mail-name text text--font-size-normal text--color-black text--font-weight-400">
                agentstvo@gmail.com
            </div>
        </div>
        <div class="app-menu-top__telephone">
            <img src="@/img/menu/Group.svg" alt="" class="contact">
            <div class="app-menu-top__telephone-name text text--font-size-normal text--color-black text--font-weight-400">
                +7 (777) 777-77-77
            </div>
        </div>
        <AppButton :hasWhite="true" width="220px" :hasOutline="true" :hasSmall="true">
            Бесплатная консультация
        </AppButton>
        <div class="app-menu-top__like">
            <button class="testButton" @click="consoleLog">
                <img src="@/img/menu/loveGreen.svg" alt="" class="contact" v-if="this.account.usersData[0].isLogin == true" @click="testClickVueRouter">
                <img src="@/img/menu/love-and-romance 1.svg" alt="" class="contact" v-if="this.account.usersData[0].isLogin == false">
            </button>
            <button class="testButton" @click="testModalControllers.isVisibleFormLogin=true">
                <img src="@/img/menu/userGreen.svg" alt="" class="contact" v-if="this.account.usersData[0].isLogin == true">
                <img src="@/img/menu/user 1.svg" alt="" class="contact" v-if="this.account.usersData[0].isLogin == false">
            </button>
        </div>
    </div>
</template>

<script>
import AppButton from './AppButton.vue';

import { testModalController } from '@/assets/api/apiFooter';

import { userAccount } from '@/assets/api/apiFooter';

export default {
    name: "AppMenuTop",
    components: {
        AppButton
    },
    data() {
        return {
            
        }
    },
    methods: {
        testClickVueRouter() {
            this.$router.push('/users/eduardo/AppPrivateOfficePage');
        },
        consoleLog() {
            console.log("consoleLog()");
        }
    },
    setup() {
        let testModalControllers = testModalController();
        let account = userAccount();
        
        return {
            testModalControllers,
            account
        };
    },
}

</script>

<style lang="scss" scoped>

.testButton {
    border: none;
    background: none;
    cursor: pointer;
}

.app-menu-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FFF;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(7.5px);
    height: 70px;
    flex-shrink: 0;
    gap: 15px;

    &__text-button {
        border: none;
        background: none;
        cursor: pointer;
    }
}

.app-menu-top__telephone-name {
    width: 130px;
}

.app-menu-top__city {
    display: flex;
    gap: 15px;
}
.app-menu-top__mail {
    display: flex;
    gap: 10px;
}
.app-menu-top__telephone {
    display: flex;
    
}

.app-menu-top__logo {
    width: 191px;
    height: 41px;
    flex-shrink: 0;
    background: url(@/img/menu/whitLogo.svg), lightgray 50%;
    background-repeat: no-repeat;
}
.app-menu-top__like {
    display: flex;
    gap: 25px;
}

</style>

