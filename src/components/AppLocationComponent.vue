<template>
    <div class="app-location-component">
        <div>
            <!-- TODO Добавить крестик для закрытия страницы абсолютом -->
        </div>
        <div class="app-location-component__title">
            Ваше местоположение
        </div>
        <div class="app-location-component__block-button">
            <AppButton>
                Указать на карте
            </AppButton>
            <AppButton>
                Указать город
            </AppButton>
        </div>
        <div class="app-location-component__block-input">
            <input type="text" placeholder="Санкт-Питербург">
            <AppButton>
                Выбрать
            </AppButton>
        </div>
        <div class="app-location-component__all-city">
            <div class="app-location-component__column">
                Питер
            </div>
            <div class="app-location-component__column">
                Катер
            </div>
            <div class="app-location-component__column">
                Ватер
            </div>
        </div>
    </div>
</template>

<script>
import AppButton from './AppButton.vue';


export default {
    name: "AppLocationComponent",
    components: { 
        AppButton 
    }
}

</script>

<style lang="scss" scoped>

.app-location-component {
    display: grid;
    gap: 35px;
    //TODO может поменять на 700px по параметрам
    max-width: 640px;
    padding: 60px;
    background-color: #F8F7F7;
    
    &__block-button {
        display: flex;
        justify-content: center;
    }

    &__title {
        text-align: center;
    }

    &__block-input {
        display: flex;
        gap: 10px;
        justify-content: center;
    }

    &__all-city {
        display: flex;
        justify-content: space-between;
    }
}

</style>