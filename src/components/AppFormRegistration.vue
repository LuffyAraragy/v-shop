<template>
    <teleport to='#app'>
        <div class="app-test" v-if="testModalControllers.isVisibleFormRegistration">
            <div class="app-form-registration container">
                <div class="app-form-registration__all-block">
                    <div class="app-form-login__exit">
                        <button class="app-form-registration__exit-button text--font-size-normalx2 text--color-green" @click="testModalControllers.isVisibleFormRegistration=false">
                            +
                        </button>
                    </div>
                    <div class="app-form-registration__title text--font-size-big text--color-black text--font-weight-800">
                        Регистрация
                    </div>
                    <div class="app-form-registration__all-block-content">
                        <div class="app-form-registration__block">
                            <div class="app-form-registration__telephone text text--font-size-normal text--color-black text--font-weight-500">
                                {{ textPhone }}
                            </div>
                            <input 
                                type="text" 
                                class="app-form-registration__input" 
                                v-model="phone"
                            >
                        </div>
                        <div class="app-form-registration__block">
                            <div class="app-form-registration__telephone text text--font-size-normal text--color-black text--font-weight-500">
                                {{ textPassword }}
                            </div>
                            <input 
                                type="text" 
                                class="app-form-registration__input" 
                                v-model="password"
                            >
                        </div>
                        <div class="app-form-registration__block">
                            <div class="app-form-registration__telephone text text--font-size-normal text--color-black text--font-weight-500">
                                {{ textConfirmPassword }}
                            </div>
                            <input 
                                type="text" 
                                class="app-form-registration__input" 
                                v-model="confirmPassword"
                            >
                        </div>
                    </div>
                    <div class="app-form-registration__block-save-forgot-password">
                        <div class="app-form-registration__save text text--font-size-normal text--color-black text--font-weight-500">
                            <AppCheckboxComponent>
                                Запомнить меня
                            </AppCheckboxComponent>
                        </div>
                        <div class="app-form-registration__forgot-password">
                            <button
                                class="app-form-registration__text-button text text--font-size-normal text--color-green text--font-weight-500"
                                @click="testModalControllers.isVisibleFormRestorePassword=true"
                            >
                                Забыли пароль?
                            </button>
                            
                        </div>
                    </div>
                    <AppButton width="100%" class="app-form-registration__button" @click="test(idUser, phone, password)">
                        Зарегистрироваться {{ this.account.usersData }}
                    </AppButton>
                    <div class="app-form-registration__block-text-border">
                        <div class="app-form-registration__border-line">

                        </div>
                        <div class="app-form-registration__gate-text text text--font-size-normal text--color-black text--font-weight-500">
                            Или зарегистрироваться через социальные сети
                        </div>
                        <div class="app-form-registration__border-line">

                        </div>
                    </div>
                    <div class="app-form-registration__block-social-network">
                        <img :src="require(`@/img/socialNetwork/${array.img}`)" alt="" class="app-form-registration__social-network" v-for="(array, index) in socialNetworkIcon" :key="index">
                    </div>
                    <div class="app-form-registration__text text--font-size-normal text--color-black text--font-weight-500">
                        Уже есть аккаунт?
                    </div>
                    <div class="app-form-registration__text-register">
                        <button
                            class="app-form-registration__text-button text text--font-size-normal text--color-green text--font-weight-500"
                            @click="testModalControllers.isVisibleFormLogin=true"
                        >
                            Войти
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

// import { storeToRefs } from 'pinia'
import { userAccount } from '@/assets/api/apiFooter';

export default {
    name: "AppFormRegistration",
    components: {
        AppButton,
        AppCheckboxComponent
    },
    data() {
        return {
            textPhone: "Телефон",
            textPassword: "Пароль",
            textConfirmPassword: "Повторить пароль",

            idUser: 0,
            phone: "",
            password: "",
            confirmPassword: "",

            socialNetworkIcon: [
                {img: "vk 1.svg"},
                {img: "iconfinder-ok-4661607_122478 1.svg"},
                {img: "facebook 1.svg"},
                {img: "google-plus_icon-icons.com_66095 1.svg"},
            ],
        }
    },
    setup() {
        const account = userAccount()
        
        let testModalControllers = testModalController();
        
        function test(idUser, phone, password) {
            account.usersData.push(({
                usersId: idUser,
                usersLogin: phone,
                usersPassword: password,
                isLogin: false,
            }))
        }

        return {
            testModalControllers,
            account,
            test
            
        };
    },
    methods: {
        onLogin() {
            
        }
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
}

.app-form-registration {
    padding: 60px;
    max-width: 430px;
    height: 721px;
    background-color: white;

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

    &__text-register {
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }
    
    &__social-network {
        width: 50px;
        height: 50px;
    }

    &__text-button {
        border: none;
        background: none;
        cursor: pointer;
    }
}
</style>