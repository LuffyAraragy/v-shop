<template>
    <div class="app-pass">
        <div class="app-pass__title text text--font-weight-800 text--font-size-big">
            Сдать объект в управление
        </div>
        <div class="app-pass__text text text--font-size-normalx2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        </div>
        <div class="app-pass__all-input">
            <input class="app-pass__input" placeholder="Имя"/>
            <input class="app-pass__input" placeholder="Номер телефона"/>
            <input class="app-pass__input" placeholder="Тип объекта"/>
        </div>
        <div class="app-pass__button">
            <AppButton width="310px">
                Сдать в управление
            </AppButton>
        </div>
    </div>
</template>

<script>
import AppButton from './AppButton.vue';


export default {
    name: "AppPass",
    components: { 
        AppButton 
    }
}

</script>

<style lang="scss" scoped>
.app-pass {
    display: grid;
    justify-content: center;
    gap: 40px;
}

.app-pass__title {
    text-align: center;
}

.app-pass__text {
    max-width: 920px;
    text-align: center;
}

.app-pass__button {
    display: flex;
    justify-content: center;
}

.app-pass__all-input {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.app-pass__input {
    width: 210px;
    height: 46px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #FFF;
}
.app-pass__input::placeholder {
    padding-left: 20px;
}


</style>
