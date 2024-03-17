<template>
    <div class="app-img-and-text">
        <img src="@/img/imgAndText/imgAndText.svg" alt="" class="app-img-and-text__img">
        <div class="app-img-and-text__content">
            <div class="app-img-and-text__title text text--font-weight-800 text--font-size-big">
                Миссия компании
            </div>
            <div class="app-img-and-text__descriptions text text--font-size-normal">
                <slot>
                    
                </slot>
            </div>
            <div class="app-img-and-text__characteristics" v-if="false">
                <div class="app-img-and-text__content-img-and-text">
                    <img src="" alt="">
                    <div class="text">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "AppImgAndText"
}

</script>

<style lang="scss" scoped>

.app-img-and-text {
    // margin: 60px auto;
    padding: 100px 20px;
    display: flex;
    justify-content: center;
    gap: 30px;
    background-color: #ffffff;

    &__img {
        max-width: 100%;
        min-width: 300px;
    }
    
    &__title {
        margin-top: 25px;
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    &__descriptions {
        max-width: 540px;
    }
}

</style>