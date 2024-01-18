<template>
    <div class="app-img-and-text container">
        <img src="@/img/imgAndText/imgAndText.svg" alt="">
        <div class="app-img-and-text__content">
            <div class="app-img-and-text__title text text--font-weight-800 text--font-size-big">
                Миссия компании
            </div>
            <div class="app-img-and-text__descriptions text text--font-size-normal">
                <!-- Как для каждого охотника, наш трофей - это удовлетворённый клиент, получивший желаемое. 
                На рынке недвижимости мы ориентируемся, как на карте знакомой местности. 
                Всегда знаем, когда надо поторопиться и от кого стоит делать ноги.
                Ведём дела прозрачно и без лишних потерь. Наша цель, чтобы каждый занимал своё место под солнцем! -->
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
    margin: 60px auto;
    display: flex;
    gap: 30px;
    background-color: #ffffff;

    &__title {
        margin-top: 25px;
    }

    &__content {
        display: grid;
        gap: 40px;
    }

    &__descriptions {
        max-width: 540px;
    }
}

</style>