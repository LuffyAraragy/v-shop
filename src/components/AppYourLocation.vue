<template>
    <div class="app-your-location">
        <div class="app-your-location__text">
            Ваше местоположение
        </div>
        <div class="app-your-location__button-left-right">
            <button class="button button--rounded-left">
                rounded-left
            </button>
            <button class="button button--rounded-right">
                rounded-right
            </button>
        </div>
        <div class="app-your-location__block">
            <input class="input" placeholder="Санкт-Петербург"/>
            <button class="app-your-location__button">
                Выбрать
            </button>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "AppYourLocation"
}
</script>

<style lang="scss" scoped>

.app-your-location {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    height: 645px;
    flex-shrink: 0;
    background-color: rgb(181, 250, 250);

    &__text {
        margin-top: 60px;
        color: #2F2D2D;
        text-align: center;
        font-family: Geometria;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    &__block {
        display: flex;
    }

    &__button-left-right {
        margin-top: 40px;
    }

    &__block {
        margin-top: 35px;
    }

    /* Тут поменять кнопку размеры */
    &__button {
        width: 202px;
        border: 2px solid #2A7D03;
        color: #FFF;
        border-radius: 5px;
        background-color: #2A7D03;
        text-align: center;
        font-family: Geometria;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        cursor: pointer;
        transition: 0.4s;
    }

    &__button:hover {
        background: #FFF;
        color: #2F2D2D;
        transition: background 0.4s;
        transition: color 0.4s;
    }

    &__button:focus {
        background: #226702;
        transition: background 0.4s;
    }
}

</style>
