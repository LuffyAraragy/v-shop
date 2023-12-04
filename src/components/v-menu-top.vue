<template>
    <div class="v-menu-top">
        <div class="v-menu-top__logo">

        </div>
        <div class="v-menu-top__city">
            <img src="@/img/menu/pin 1.svg" alt="" class="contact">
            <div class="v-menu-top__city-name v-menu-top__text">
                Санкт-Петербург
            </div>
        </div>
        <div class="v-menu-top__mail">
            <img src="@/img/menu/mail 1.svg" alt="" class="contact">
            <div class="v-menu-mail-name v-menu-top__text">
                agentstvo@gmail.com
            </div>
        </div>
        <div class="v-menu-top__telephone">
            <img src="@/img/menu/Group.svg" alt="" class="contact">
            <div class="v-menu-top__telephone-name v-menu-top__text">
                +7 (905) 345-42-12
            </div>
        </div>
        <div class="button">
            Бесплатная консультация
        </div>
        <div class="v-menu-top__like">
            <img src="@/img/menu/love-and-romance 1.svg" alt="" class="contact">
            <img src="@/img/menu/user 1.svg" alt="" class="contact">
        </div>
    </div>
</template>

<style>
.v-menu-top {
    display: flex;
    align-items: center;
    width: 1740px;
    height: 70px;
    flex-shrink: 0;
}

.v-menu-top__text {
    color: #2F2D2D;
    font-family: Geometria;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.v-menu-top__city {
    display: flex;
    gap: 15px;
}

.v-menu-top__mail {
    display: flex;
    gap: 10px;
}

.v-menu-top__telephone {
    display: flex;
    gap: 15px;
}

.v-menu-top {
    /* Расстояние между элементами */
    display: flex;
    gap: 50px;
}

.v-menu-top__logo {
    width: 191px;
    height: 41px;
    flex-shrink: 0;
    background: url(@/img/menu/whitLogo.svg), lightgray 50%;
    background-repeat: no-repeat;
}

.v-menu-top__like {
    display: flex;
    gap: 25px;
}

</style>

<script>

</script>