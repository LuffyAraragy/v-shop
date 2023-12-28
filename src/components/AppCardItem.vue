<template>
    <div class="app-card-item" v-if="isLoad">
        <!-- Передаём массив с изображениями -->
        <app-swiper-slider :arrayImgCards="card.img">
            
        </app-swiper-slider>
        <div class="app-card-item__block-content">
            <div class="app-card-item__info-block">
                <div class="text text--font-weight-800 text--font-size-normalx2 price">
                    {{ card.price }}
                </div>
                <img :src="require(`@/img/cardItem/${card.icon}`)" alt="">
            </div>
            <div class="app-card-item__info">
                <div class="text text--color-black card-item__text" 
                    v-for="(text, index) in card.characteristics"
                    :key="index"
                >
                <!-- TODO(Ponosonik): Не правильно применяются стили -->
                {{ text }}
                </div>
            </div>
            <div class="text app-card-item__street">
                {{ card.address }}
            </div>
            <div class="text text--font-weight-300 text--font-size-sm2 app-card-item__text-small">
                {{ card.metro }}
            </div>
            <AppButton width="310px" :hasWhite="true" :hasOutline="true">
                <div>
                    Показать телефон
                </div>
            </AppButton>
        </div>
    </div>
</template>

<script>
import AppSwiperSlider from './AppSwiperSlider.vue';
import AppButton from './AppButton.vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
  components: { 
        AppButton,
        AppSwiperSlider,
    },
    name: "AppCardItem",
    data() {
        return {
            isLoad: false,
        }
    },
    props: {
        card: Array
    },
    mounted() {
        setTimeout(() => {
            this.isLoad = true;
        }, 3000);
    },
}
</script>

<style lang="scss" scoped>

.app-card-item {
    max-width: $size-block-350;

    &__img {
        width: $size-block-20;
        height: $size-block-20;
    }

    &__block-content {
        display: grid;
        gap: $gap-20;   
        max-width: $size-block-310;
        margin: 0 auto;
    }

    &__text {
        border-right: $border-size-1 solid $color-white-gray;
        font-size: $font-size-xl;
        padding-right: $size-block-20; 
    }

    &__text:last-child {
        border-right: 0;
    }

    &__info-block {
        display: flex;
        justify-content: space-between;
    }

    &__info-telephone {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: $gap-15;
    }

    &__info {
        display: flex;
        gap: $gap-20;
        justify-content: space-between;
        
    }
}


</style>