<template>
    <div class="v-questions">
        <div class="v-questions__information">
            <div class="v-questions__street text__20px">
                191025, Российская Федерация, г. Санкт-Петербург, 
                проспект Невский, дом 90-92, литера А
            </div>
            <div class="v-questions__time-all">
                <div class="v-questions__time">
                    ПН-ПТ с 10:00 до 20:00
                </div>
                <div class="v-questions__time">
                    СБ с 11:00 до 18:00
                </div>
                <div class="v-questions__time">
                    ВС по договоренности
                </div>
            </div>
            <div class="v-questions__connection">
                <div class="v-questions__mail">
                    <img src="@/img/questions/mail.svg" alt="" class="contact">
                    <p class="v-questions__text text__20px">Info@hh-r.ru</p>
                </div>
                <div class="v-questions__telephone-number">
                    <img src="@/img/questions/telephone.svg" alt="" class="contact">
                    <p class="v-questions__text text__20px">+7&nbsp;812&nbsp;333-55-15</p>
                </div>
            </div>
            <div class="v-questions__social-network">
                <img src="@/img/footer/vk.svg" alt="" class="social-network">
                <img src="@/img/footer/media.svg" alt="" class="social-network">
                <img src="@/img/footer/youtube.svg" alt="" class="social-network">
                <img src="@/img/footer/facebook.svg" alt="" class="social-network">
                <img src="@/img/footer/iconfinder.svg" alt="" class="social-network">
            </div>
        </div>
        <div class="v-questions__form">
            
            <div class="v-questions__now text__h2 text__h2--white">
                Остались вопросы?
            </div>
            <div class="v-questions__statement text__16px ">
                Оставьте заявку и мы свяжемся с вами!
            </div>
            
            <div class="v-questions__input-content">
                <input type="text" placeholder="Имя" class="input">
                <input type="text" placeholder="Номер телефона" class="input">
            </div>
            
            <button class="button button--green v-questions__button">
                Оставить заявку
            </button>
        </div>
    </div>
</template>

<style>
.v-questions {
    display: flex;
    width: 1110px;
    height: 438px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #FFF;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.10);
}

.v-questions__social-network {
    display: flex;
    gap: 20px;
}

.v-questions__information {
    display: grid;
    gap: 40px;
}

.v-questions__mail {
    display: flex;
    gap: 20px;
}

.v-questions__telephone-number {
    display: flex;
    gap: 20px;
}

.v-questions__time-all {
    display: grid;
    gap: 15px;
}

.v-questions__time {
    color: #2F2D2D;
    font-family: Geometria;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.v-questions__statement {
    margin-top: 20px;
}

.v-questions__input-content {
    margin-top: 40px;
    display: grid;
    gap: 20px;
}

.v-questions__button {
    margin-top: 30px;
}

.v-questions__form {
    padding: 60px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2F2D2D;
    width: 445px;
    flex-shrink: 0;
}

</style>

<script>

</script>