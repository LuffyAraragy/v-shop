<!--Доделать футер поменять у соцеальных сетей отступы и подуцмать как расположить конент -->
<template>
    <div class="v-footer">
        <div class="v-footer__content">
            <div class="v-footer__menu content-options">
                <div class="v-footer___text-h2">
                    Меню
                </div>
                <div class="v-footer___text-h3">
                    Купить
                </div>
                <div class="v-footer___text-h3">
                    Продать
                </div>
                <div class="v-footer___text-h3">
                    Сдать
                </div>
                <div class="v-footer___text-h3">
                    Снять
                </div>
                <div class="v-footer___text-h3">
                    Без агента
                </div>
            </div>

            <div class="v-footer__this-company content-options">
                <div class="v-footer___text-h2">
                    Наша компания
                </div>
                <div class="v-footer___text-h3">
                    О компании
                </div>
                <div class="v-footer___text-h3">
                    Отзывы
                </div>
                <div class="v-footer___text-h3">
                    Контакты
                </div>
            </div>

            <div class="v-footer__services content-options">
                <div class="v-footer___text-h2">
                    Услуги
                </div>
                <div class="v-footer___text-h3">
                    Ремонт
                </div>
                <div class="v-footer___text-h3">
                    Дизайн
                </div>
            </div>

            <div class="v-footer__cooperation content-options">
                <div class="v-footer___text-h2">
                    Сотрудничество
                </div>
                <div class="v-footer___text-h3">
                    Сотрудничество
                </div>
                <div class="v-footer___text-h3">
                    Сдать в управление
                </div>
            </div>
        </div>
        <div class="v-footer__all-social-network">
            <div class="v-footer__social-network">
                <img src="@/img/footer/vk.svg" alt="" class="social-network">
                <img src="@/img/footer/media.svg" alt="" class="social-network">
                <img src="@/img/footer/youtube.svg" alt="" class="social-network">
                <img src="@/img/footer/facebook.svg" alt="" class="social-network">
                <img src="@/img/footer/iconfinder.svg" alt="" class="social-network">
            </div>
            <div class="mail">
                <img src="@/img/footer/mail.svg" alt="" class="contact">
                <p class="v-footer__text">Info@hh-r.ru</p>
            </div>
            <div class="telephone-number">
                <img src="@/img/footer/telephone.svg" alt="" class="contact">
                <p class="v-footer__text">+7&nbsp;812&nbsp;333-55-15</p>
            </div>
            <div class="v-footer__information">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  magna aliqua.  / @2020. Все права защищены 
            </div>
        </div>
    </div>
</template>

<style>
.v-footer {
    margin: auto;
    width: 100%;
    height: 438px;
    flex-shrink: 0;
    background: #2F2D2D;
    
}

.v-footer__all-social-network {
    display: flex;
    gap: 0px;
    justify-content: space-around;
}
.v-footer__social-network {
    display: flex;
    gap: 20px;
}
.social-network {
    width: 30px;
    height: 30px;
}

.v-footer__content {
    padding-top: 70px;
    display: flex;
    justify-content: space-around;
    
}

.content-options {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    gap: 30px;
}
    .v-footer___text-h2 {
        color: #FFF;
        font-family: Geometria;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    .v-footer___text-h3 {
        color: #FFF;
        font-family: Geometria;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

.v-footer__text {
    color: #FFF;

    font-family: Geometria;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.contact {
    width: 20px;
    height: 20px;
}
.v-footer__information {
    max-width: 421px;
    color: #FFF;
    font-family: Geometria;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 18px; /* 150% */
}
.telephone-number {
    display: flex;
    gap: 25px;
}
.mail {
    display: flex;
    gap: 15px;
}
    
</style>

<script>
    
</script>