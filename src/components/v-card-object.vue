<template>
    <div class="v-card-object">
        <div class="v-card-object__block">
            <div class="v-card-object__title">
                Нужна помощь специалиста?
            </div>
            <img src="@/img/cardObject/5c9b5dd452e03_woman_in_mirror 1.svg" alt="" class="v-card-object__img">
            <div class="v-card-object__name">
                Татьяна
            </div>
            <div class="v-card-object__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </div>
            <button class="button v-card-object__button button--green">
                Заказать звонок
            </button>
            <button class="button v-card-object__button-block">
                <img src="@/img/cardObject/communications 2.svg" alt="">
                <!-- Может этот блок лишний -->
                <div class="v-card-object__text-telephone">
                    Показать телефон
                </div>
            </button>
        </div>
    </div>


    <div class="v-bank">
        <div class="v-bank__content">
            <img src="@/img/bank/39307215501_a6edae48a0_o 2.svg" alt="" class="v-bank__img">
            <div class="v-bank__date-content">
                <div class="v-bank__percent">
                    Росбанк 18%
                </div>
                <div class="v-bank__date">
                    от 28.05.2020
                </div>
            </div>
        </div>
        <div class="v-bank__content">
            <img src="@/img/bank/Dom 1.svg" alt="" class="v-bank__img">
            <div class="v-bank__date-content">
                <div class="v-bank__percent">
                    Росбанк 18%
                </div>
                <div class="v-bank__date">
                    от 28.05.2020
                </div>
            </div>
        </div>
        <div class="v-bank__content">
            <img src="@/img/bank/1356398132 1.svg" alt="" class="v-bank__img">
            <div class="v-bank__date-content">
                <div class="v-bank__percent">
                    Росбанк 18%
                </div>
                <div class="v-bank__date">
                    от 28.05.2020
                </div>
            </div>
        </div>
        <div class="v-bank__content">
            <img src="@/img/bank/058 1.svg" alt="" class="v-bank__img">
            <div class="v-bank__date-content">
                <div class="v-bank__percent">
                    Росбанк 18%
                </div>
                <div class="v-bank__date">
                    от 28.05.2020
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.v-card-object {
    background-color: #FFFFFF;
    width: 350px;
    height: 487px;
    border-radius: 5px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.10);
}
.v-card-object__block {
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.v-card-object__img {
    margin: 20px;
    border-radius: 50%;
}
.v-card-object__name {
    margin-top: 15px;
}
.v-card-object__text {
    margin-top: 19px;
    text-align: center;
}
.v-card-object__button {
    margin-top: 33px;
}
.v-card-object__button-block {
    margin-top: 20px;
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
}
/* Новая задаяа про банк */

.v-bank {
    width: 350px;
    height: 100%;
    flex-shrink: 0;
    border-radius: 5px;
    background: #FFF;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.10);
}

.v-bank__img {
    width: 99px;
    height: 25px;
    flex-shrink: 0;
}

.v-bank__content {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: 290px;
    padding: 30px;
    border-bottom: 1px solid #C4C4C4;
}

.v-bank__date-content {
    display: flex;
    justify-content: space-between;
}

</style>

<script>
export default {
    
}
</script>
