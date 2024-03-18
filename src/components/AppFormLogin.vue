<template>
    <teleport to='#app'>
        <div class="test-background" v-if="testModalControllers.isVisibleFormLogin">
            <div class="app-form-login container">
                <div class="app-form-login__all-block"> 
                    <div class="app-form-login__exit">
                        <button class="app-form-login__exit-button text--font-size-normalx2 text--color-green" @click="testModalControllers.isVisibleFormLogin=false">
                            +
                        </button>
                    </div>
                    <div class="app-form-login__title text--font-size-big text--color-black text--font-weight-800">
                        Вход
                    </div>
                    <div class="app-form-login__all-block-content">
                        <div class="app-form-login__block">
                            <div class="app-form-login__telephone text text--font-size-normal text--color-black text--font-weight-500">
                                {{ textPhone }}
                            </div>
                            <input type="text" class="input app-form-login__input" v-model="phone">
                        </div>
                        <div class="app-form-login__block">
                            <div class="app-form-login__telephone text text--font-size-normal text--color-black text--font-weight-500">
                                {{ textPassword }}
                            </div>
                            <input type="text" class="input app-form-login__input" v-model="password">
                        </div>
                    </div>
                    <div class="app-form-login__block-save-forgot-password">
                        <div class="app-form-login__save text text--font-size-normal text--color-black text--font-weight-500">
                            <AppCheckboxComponent>
                                Запомнить меня
                            </AppCheckboxComponent>
                        </div>
                        <div class="">
                            <button 
                                class="app-form-login__text-button text text--font-size-normal text--color-green text--font-weight-500" 
                                @click="testModalControllers.isVisibleFormRestorePassword=true"
                            >
                                Забыли пароль?
                            </button>
                        </div>
                    </div>
                    <!-- TODO ТУТ сделать другую ссылку при клике -->
                    <AppButton 
                        width="100%" 
                        class="app-form-login__button"
                        @click="allOnClick(phone, password); testClickVueRouter();"   
                    >
                        Войти {{ this.account.usersData[0].isLogin }}
                    </AppButton>
                    <div class="app-form-login__block-text-border">
                        <div class="app-form-login__border-line">

                        </div>
                        <div class="app-form-login__gate-text text text--font-size-normal text--color-black text--font-weight-500">
                            Или войти через социальные сети
                        </div>
                        <div class="app-form-login__border-line">

                        </div>
                    </div>
                    <div class="app-form-login__block-social-network">
                        <img :src="require(`@/img/socialNetwork/${array.img}`)" alt="" class="app-form-login__social-network" v-for="(array, index) in socialNetworkIcon" :key="index">
                    </div>
                    <div class="app-form-login__text text--font-size-normal text--color-black text--font-weight-500">
                        Еще не зарегистрированы?
                    </div>
                    <div class="app-form-login__block-button">
                        <button 
                            class="app-form-login__text-button text text--font-size-normal text--color-green text--font-weight-500"
                            @click="closeModalWindow"
                        >
                        {{ this.testModalControllers.isVisibleFormLogin }} 
                            +
                        {{ this.testModalControllers.isVisibleFormRegistration }}
                            Регистрация
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script>
import AppButton from './AppButton.vue';
import AppCheckboxComponent from './AppCheckboxComponent.vue';

import { testModalController } from '@/assets/api/apiFooter';

import { userAccount } from '@/assets/api/apiFooter';


export default {
    name: "AppFormLogin",
    components: {
        AppButton,
        AppCheckboxComponent
    },
    data() {
        return {
            textPhone: "Телефон",
            textPassword: "Пароль",

            idUser: 0,
            phone: "",
            password: "",

            socialNetworkIcon: [
                {img: "vk 1.svg"},
                {img: "iconfinder-ok-4661607_122478 1.svg"},
                {img: "facebook 1.svg"},
                {img: "google-plus_icon-icons.com_66095 1.svg"},
            ],
        }
    },
    setup() {
        let testModalControllers = testModalController();
        let account = userAccount();

        function onLogin(login, password) {
            if(this.account.usersData[0].usersLogin == login &&  this.account.usersData[0].usersPassword == password) {
                this.account.usersData[0].isLogin = true;
            }
        }

        // всё что происходит при нажатие на кнопку ВОЙТИ
        function allOnClick(login, password) {
            this.testModalControllers.isVisibleFormLogin=false;
            this.onLogin(login, password);
        }

        function addTest() {
            alert(testModalController.isVisibleFormLogin);
        }
    
        return {
            testModalControllers,
            account,
            onLogin,
            allOnClick,
            addTest
        };
    },
    methods: {
        testClickVueRouter() {
            this.$router.push('/PagePrivateOffice');
        },
        closeModalWindow() {
            this.testModalController.isVisibleFormLogin = true;
            this.testModalController.isVisibleFormObject = true;
            this.testModalController.isVisibleFormRegistration = true;
            this.testModalController.isVisibleFormRestorePassword = true;
            this.testModalController.isVisibleFormLocationComponent = true;
            this.testModalControllers.isVisibleFormRegistration = true
        },
    }
}

</script>

<style lang="scss" scoped>
.test-background {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}
.app-form-login {
    padding: 60px;
    max-width: 430px;
    height: 721px;
    background-color: #F3F3F3;
    transform: translate(0%, 90px);

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

    &__title {
        text-align: center;
    }
    
    &__all-block-content {
        margin-top: 40px;
    }

    &__border-line {
        width: 100%;
        max-width: 65px; /* Устанавливаем ширину полосы в 50% от ширины блока */
        height: 1px; /* Устанавливаем высоту полосы */
        background-color: #c4c4c4; /* Устанавливаем цвет полосы */
        margin: auto 0;
    }

    &__block-text-border {
        display: flex;
        justify-content: center;
        gap: 12px;
    }

    &__block {
        margin-top: 30px;
    }

    &__input {
        margin-top: 15px;
        max-width: 100%;
    }

    &__button {
        margin: 40px 0;
    }

    &__block-save-forgot-password {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 20px;
    }
    
    &__block-social-network {
        display: flex;
        gap: 24px;
        justify-content: center;
        margin-top: 30px;
    }

    &__save {
        display: flex;
        gap: 15px;
    }

    &__checkbox {
        width: 20px;
        height: 20px;
    }

    &__text {
        text-align: center;
        margin-top: 45px;
    }

    &__block-button {
        display: flex;
        justify-content: center;
        margin-top: 30px;

    }

    &__text-button {
        border: none;
        background: none;
        cursor: pointer;
    }
    
    &__social-network {
        width: 50px;
        height: 50px;
    }
}
</style>