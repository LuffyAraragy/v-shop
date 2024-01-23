<template>
    <div class="app-form-registration container">
        <div class="app-form-registration__all-block">
            <div class="app-form-registration__title text--font-size-big text--color-black text--font-weight-800">
                Регистрация
            </div>
            <div class="app-form-registration__all-block-content">
                <div class="app-form-registration__block" v-for="(array, index) in textInput" :key="index">
                    <div class="app-form-registration__telephone text text--font-size-normal text--color-black text--font-weight-500">
                        {{ array.text }}
                    </div>
                    <AppInput class="app-form-registration__input">

                    </AppInput>
                </div>
            </div>
            <div class="app-form-registration__block-save-forgot-password">
                <div class="app-form-registration__save text text--font-size-normal text--color-black text--font-weight-500">
                    <AppCheckboxComponent>
                        Запомнить меня
                    </AppCheckboxComponent>
                </div>
                <div class="app-form-registration__forgot-password text text--font-size-normal text--color-green text--font-weight-500">
                    Забыли пароль?
                </div>
            </div>
            <AppButton width="100%" class="app-form-registration__button">
                Зарегистрироваться
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
            <div class="app-form-registration__text-register text text--font-size-normal text--color-green text--font-weight-500">
                Войти
            </div>
        </div>
        
    </div>
</template>

<script>
import AppButton from './AppButton.vue';
import AppCheckboxComponent from './AppCheckboxComponent.vue';
import AppInput from './AppInput.vue';


export default {
    name: "AppFormRegistration",
    components: {
    AppButton,
    AppInput,
    AppCheckboxComponent
},
    data() {
        return {
            socialNetworkIcon: [
                {img: "vk 1.svg"},
                {img: "iconfinder-ok-4661607_122478 1.svg"},
                {img: "facebook 1.svg"},
                {img: "google-plus_icon-icons.com_66095 1.svg"},
            ],
            textInput: [
                {text: "Телефон"},
                {text: "Пароль"},
                {text: "Повторить пароль"},
            ]
        }
    }
}

</script>

<style lang="scss" scoped>
.app-form-registration {
    padding: 60px;
    max-width: 430px;
    height: 721px;
    background-color: white;

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
        text-align: center;
        margin-top: 30px;
    }
    
    &__social-network {
        width: 50px;
        height: 50px;
    }
}
</style>