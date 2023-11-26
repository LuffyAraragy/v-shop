<template>
    <div class="v-object">
        <div class="v-object__title text__h2 text__h2--black">
            Добавить объект
        </div>
        <div class="v-object__button-controller">
            <div class="v-object__sell">
                Продать
            </div>
            <div class="v-object__rent">
                Сдать
            </div>
        </div>
        <div class="v-object__input-city">
            <div class="v-object__text">
                Город
            </div>
            <input type="text" class="v-object__input">
        </div>
        <div class="v-object__input-district">
            <div class="v-object__text">
                Район
            </div>
            <input type="text" class="v-object__input">
        </div>
        <div class="v-object__count-room">
            <div class="v-object__text">
                Количество комнат
            </div>
            <!-- КАКИЕ ТО КНОПКИ НАДО ПОСТАВИТЬ -->
            <button>

            </button>
        </div>
        <div class="v-object__input-floor">
            <div class="v-object__text">
                Этаж
            </div>
            <input type="text" class="v-object__input">
        </div>
        <div class="v-object__condition-room">
            <div class="v-object__text">
                Состояние
            </div>
            <!-- КАКИЕ ТО 3 КНОПКИ НАДО ПОСТАВИТЬ -->
            <button>

            </button>
            <button>

            </button>
            <button>

            </button>
        </div>
        <div class="v-object__input-floor">
            <div class="v-object__text">
                Предполагаемая стоимость продажи
            </div>
            <!-- Тут сделать 2 инпута -->
            <input type="text" class="v-object__input-small">
            <input type="text" class="v-object__input-small">
        </div>
        <div class="v-object__input-floor">
            <div class="v-object__text">
                Фамилия
            </div>
            <input type="text" class="v-object__input">
        </div>
        <div class="v-object__input-floor">
            <div class="v-object__text">
                Имя
            </div>
            <input type="text" class="v-object__input">
        </div>
        <div class="v-object__input-floor">
            <div class="v-object__text">
                Отчество
            </div>
            <input type="text" class="v-object__input">
        </div>
        <div class="v-object__input-floor">
            <div class="v-object__text">
                Телефон
            </div>
            <input type="text" class="v-object__input">
        </div>
        <div class="v-object__input-floor">
            <div class="v-object__text">
                Электронная почта
            </div>
            <input type="text" class="v-object__input">
        </div>
    </div>
</template>

<style>
.v-object {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 448px;
    height: 1505px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #F8F7F7;
}
.v-object__input {
    border-radius: 5px;
    border: 2px solid #F3F3F3;
    background: #FFF;
    width: 328px;
    height: 52px;
    flex-shrink: 0;
}
.v-object__text {
    margin-bottom: 15px;

    color: #2F2D2D;
    font-family: Geometria;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
</style>

<script>

</script>