<template>
    <div class="app-swiper-slider-component container">
        <div class="app-swiper-slider-component__title text text text--font-weight-800 text--font-size-big">Наши партнеры</div>
        <Swiper class="app-swiper swiper-thumbs container"
            :modules="modules"
            :slides-per-view="3"
            :space-between="30"
            centered-slides="true"
            grab-cursor="true"
            loop="true"
            :freeMode="true"

            navigation
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <SwiperSlide 
                v-for="(array, index) in 12"
                :key="index"
            >
                <!-- TODO: Написать сюда карточку, которая должна пролистываться -->
                <slot>

                </slot>
            </SwiperSlide>
        </Swiper>
    </div>
</template>
<script>

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, A11y, Thumbs, EffectCoverflow } from 'swiper/modules';

export default {
    name: "AppSwiperSliderComponent",
    components: {
        Swiper,
        SwiperSlide
    },
    props: {
        arrayImg: Array
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, A11y, Thumbs, EffectCoverflow],
      };
    },
    
}
</script>
<style lang="scss" scoped>

.app-swiper-slider-component {
    display: grid;
    gap: 40px;
    margin: 100px auto;
    width: 100%;
    height: 100%;

    &__title {
        text-align: center;
    }
}

.app-swiper {
    
}

</style>