<template>
    <div class="v-purpose">
        <div class="v-purpose__title text__h2 text__h2--white">
            Цели компании
        </div>
        <div class="v-purpose__all-step">
            <div class="v-purpose__step">
                <div class="v-purpose__background">
                    <img src="@/img/purpose/customer-service 1.svg" alt="" class="v-purpose__img">
                </div>
                <div class="v-purpose__text  text__16px">
                    Стать Вам другом, соратником и лучшим помощником в делах связанных с недвижимостью
                </div>
            </div>
            <div class="v-purpose__step">
                <div class="v-purpose__background">
                    <img src="@/img/purpose/sydney-opera-house 1.svg" alt="" class="v-purpose__img">
                </div>
                <div class="v-purpose__text  text__16px">
                    Стать Вам другом, соратником и лучшим помощником в делах связанных с недвижимостью
                </div>
            </div>
            <div class="v-purpose__step">
                <div class="v-purpose__background">
                    <img src="@/img/purpose/partnership-handshake 1.svg" alt="" class="v-purpose__img">
                </div>
                <div class="v-purpose__text  text__16px">
                    Стать Вам другом, соратником и лучшим помощником в делах связанных с недвижимостью
                </div>
            </div>
            <div class="v-purpose__step">
                <div class="v-purpose__background">
                    <img src="@/img/purpose/goal 1.svg" alt="" class="v-purpose__img">
                </div>
                <div class="v-purpose__text  text__16px">
                    Стать Вам другом, соратником и лучшим помощником в делах связанных с недвижимостью
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "AppPurpose"
}

</script>

<style lang="scss" scoped>

.v-purpose {
    padding: 100px 0;
    width: 100%;
    height: 100%;
    min-height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(@/img/purpose/179360-OWJAH8-307\ 1.svg);
}
.v-purpose__all-step {
    margin-top: 60px;
    display: flex;
    gap: 30px;
    justify-content: center;
}
.v-purpose__title {
    text-align: center;
}
.v-purpose__background {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px; 
    height: 100px;
    background-color: #2A7D03;;
    border-radius: 50%;
}
.v-purpose__step {
    height: 210;
    width: 255px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.v-purpose__img {
    width: 65px;
    height: 65px;
}

.v-purpose__text {
    width: 255px;
}
</style>