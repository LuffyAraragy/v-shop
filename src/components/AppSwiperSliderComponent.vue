<template>
    <div class="app-swiper-slider-component">
        <div class="app-swiper-slider-component__title text text text--font-weight-800 text--font-size-big">
            Наши партнеры
        </div>
        <Swiper class="app-swiper swiper-thumbs container"

            :effect=swiperEffect
            :coverflowEffect = '{
                rotate: this.testCoverflowEffect,
                stretch: 22,
                depth: 100,
                modifier: 2,
                slideShadows: true
            }'

            :modules=swiperModules
            :slides-per-view=swiperSlidesPerView
            :space-between=swiperSpaceBetween
            :centered-slides=swiperCenteredSlides
            :grab-cursor=swiperGrabCursor
            :loop=swiperLoop
            :freeMode=swiperNavigation

            navigation
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
import { Navigation, A11y, Thumbs, EffectCoverflow} from 'swiper/modules';

export default {
    name: "AppSwiperSliderComponent",
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            testCoverflowEffect: '0',
        }
    },
    props: {
        // TODO modules -  это список всех работающих стилей
        // swiperEffect - это модель слайдер
        arrayImg: Array,
        // swiperEffect:"'coverflow'",
        // swiperCoverflowEffect:"",
        // swiperModules:"modules",
        // swiperSlidesPerView:"3",
        // swiperSpaceBetween:"30",
        // swiperCenteredSlides:"true",
        // swiperGrabCursor:"true",
        // swiperLoop:"true",
        // swiperFreeMode:"true",
        // swiperNavigation:"true",
        swiperEffect: {
            type: String,
        },
        swiperCoverflowEffect: Array,

        swiperModules: {
            type: Array,
            default: () => [Navigation, A11y, Thumbs, EffectCoverflow]
        },
        swiperSlidesPerView: {
            type: String,
            default: "3"
        },
        swiperSpaceBetween: {
            type: String,
            default: "30"
        },
        swiperCenteredSlides: {
            type: String,
            default: "true"
        },
        swiperGrabCursor: {
            type: String,
            default: "true"
        },
        swiperLoop: {
            type: String,
            default: "true"
        },
        swiperFreeMode: {
            type: String,
            default: "true"
        },
        swiperNavigation: {
            type: String,
            default: "true"
        },
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
    justify-content: center;
    gap: 40px;
    padding: 100px 0;
    width: 100%;
    height: 100%;
    // background: #ffffff;

    &__title {
        text-align: center;
    }
}
// TODO Тут что то поменять с размерами
.app-swiper {
    max-width: 100%;
    // max-width: 1200px;
}

</style>