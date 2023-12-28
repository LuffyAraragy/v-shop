<template>
    <div class="app-menu-top container">
        <!-- <div class="app-menu-top__logo">

        </div> -->
        <div class="app-menu-top__city">
            <img src="@/img/menu/pin 1.svg" alt="" class="contact">
            <div class="app-menu-top__city-name app-menu-top__text">
                Екатеринбург
            </div>
        </div>
        <div class="app-menu-top__mail">
            <img src="@/img/menu/mail 1.svg" alt="" class="contact">
            <div class="v-menu-mail-name app-menu-top__text">
                agentstvo@gmail.com
            </div>
        </div>
        <div class="app-menu-top__telephone">
            <img src="@/img/menu/Group.svg" alt="" class="contact">
            <div class="app-menu-top__telephone-name app-menu-top__text">
                +7 (777) 777-77-77
            </div>
        </div>
        <AppButton :hasWhite="true" width="220px" :hasOutline="true" :hasSmall="true" class="">
            Бесплатная консультация
        </AppButton>
        <div class="app-menu-top__like">
            <button class="testButton" @click="consoleLog">
                <img src="@/img/menu/love-and-romance 1.svg" alt="" class="contact">
            </button>
            <button class="testButton" @click="consoleLog">
                <img src="@/img/menu/user 1.svg" alt="" class="contact">
            </button>
        </div>
    </div>
</template>

<script>
import AppButton from './AppButton.vue';
    export default {
        name: "AppMenuTop",
        components: {
            AppButton
        },
        data() {
            return {
                
            }
        },
        methods: {
            consoleLog() {
                console.log("consoleLog()");
            }
        }
    }

</script>

<style lang="scss" scoped>

.testButton {
    border: none;
    background: none;
    cursor: pointer;
}

.app-menu-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1740px;
    height: 70px;
    flex-shrink: 0;
}

.app-menu-top__telephone-name {
    width: 130px;
}

.app-menu-top__text {
    color: #2F2D2D;
    font-family: Geometria;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.app-menu-top__city {
    display: flex;
    gap: 15px;
}
.app-menu-top__mail {
    display: flex;
    gap: 10px;
}
.app-menu-top__telephone {
    display: flex;
    gap: 15px;
}

.app-menu-top {
    /* Расстояние между элементами */
    display: flex;
    gap: 50px;
}

.app-menu-top__logo {
    width: 191px;
    height: 41px;
    flex-shrink: 0;
    background: url(@/img/menu/whitLogo.svg), lightgray 50%;
    background-repeat: no-repeat;
}
.app-menu-top__like {
    display: flex;
    gap: 25px;
}

</style>

