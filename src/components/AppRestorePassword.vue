<template>
    <teleport to='#app'>
        <div class="app-test" v-if="testModalControllers.isVisibleFormRestorePassword">
            <div class="app-restore-password container">
                <div class="app-restore-password__all-block">
                    <div class="app-form-login__exit">
                        <button class="app-restore-password__exit-button text--font-size-normalx2 text--color-green" @click="testModalControllers.isVisibleFormRestorePassword=false">
                            +
                        </button>
                    </div>
                    <div class="app-restore-password__title text--font-size-big text--color-black text--font-weight-800">
                        Восстановить пароль
                    </div>
                    <div class="app-restore-password__all-block-content">
                        <div class="app-restore-password__block" v-for="(array, index) in textInput" :key="index">
                            <div class="app-restore-password__telephone text text--font-size-normal text--color-black text--font-weight-500">
                                {{ array.text }}
                            </div>
                            <input 
                                type="text" 
                                class="app-restore-password__input"
                                v-model="vModel[index].name"
                            >
                        </div>
                    </div>
                    <AppButton width="100%" class="app-restore-password__button">
                        Восстановить
                    </AppButton>
                    <AppButton 
                        width="100%" 
                        class="app-restore-password__button"
                        :hasWhite="true" 
                        :hasOutline="true"
                        @click="testModalControllers.isVisibleFormLogin=true"
                    >
                        Вспомнил пароль
                    </AppButton>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script>
import AppButton from './AppButton.vue';

import { testModalController } from '@/assets/api/apiFooter';

export default {
    name: "AppRestorePassword",
    components: {
        AppButton,
    },
    data() {
        return {
            textInput: [
                {text: "Телефон"},
            ],
            vModel: [
                {name: ""},
            ],
        }
    },
    setup() {
        let testModalControllers = testModalController();
        
        return {
            testModalControllers
        };
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
.app-restore-password {
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
        text-align: center;
        margin-top: 30px;
    }
    
    &__social-network {
        width: 50px;
        height: 50px;
    }
}
</style>