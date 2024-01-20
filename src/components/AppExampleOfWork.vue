<template>
    <div class="app-example-of-work container" v-if="isLoad">
        <div class="app-example-of-work__title text text--font-weight-800 text--font-size-big text--color-black">
            Примеры наших работ
        </div>
        <swiper class="v-swiper swiper-thumbs app-example-of-work__top-swiper"
                :modules="modules"
                :slides-per-view="1"
                navigation
                loop="true"
                
                :thumbs="{ swiper: thumbsSwiper }"
            >
            <swiper-slide 
                v-for="(arrayImg, index) in 11" 
                :key="index"
            >
                <img 
                    :src="require(`@/img/cardItem/5206 1.png`)" 
                    alt=""
                    class="app-example-of-work__top-img"
                >
            </swiper-slide>
        </swiper>

        <swiper class="v-swiper swiper-thumbs app-example-of-work__bottom-swiper"
                :modules="modules"
                :slides-per-view="8"
                loop="true"

                watchSlidesProgress="true"
                @swiper="setThumbsSwiper"
            >
            <swiper-slide 
                v-for="(arrayImg, index) in 11" 
                :key="index"
                class="app-example-of-work__slider-children"
            >
                <img 
                    :src="require(`@/img/cardItem/5206 1.png`)" 
                    alt=""
                    class="app-example-of-work__img"
                >
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Navigation, Pagination, A11y, Thumbs } from 'swiper/modules';

import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
    name: "AppExampleOfWork",
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            isLoad: false,
        }
    },
    setup() {
        const thumbsSwiper = ref(null);
        const setThumbsSwiper = (swiper) => {
            thumbsSwiper.value = swiper;
        };
        return {
            modules: [Navigation, Pagination, A11y, Thumbs],
            thumbsSwiper,
            setThumbsSwiper,
        };  
    },
    props: {
      arrayImgCards: Array
    },
    mounted() {
        setTimeout(() => {
            this.isLoad = true;
        }, 3000);
    },
}

</script>

<style lang="scss" scoped>

.app-example-of-work {
    width: 100%;
    height: 100%;
    margin: 100px auto;

    &__title {
        text-align: center;
    }

    &__top-swiper {
        margin-top: 40px;
        margin-bottom: 16px;
        width: 729px;
        height: 486px;

    }

    &__img {
        width: 100%;
        height: 100%;
        max-width: 65px;
        max-height: 44px;
    }

    &__top-img {
        width: 100%;
        height: 100%;
        max-width: 729px;
        max-height: 486px;
    }
}

.swiper-slide {
    display: flex;
    justify-content: center;
}
.app-swiper-slider {
  width: 100%;
  height: 100%;
}

.app-example-of-work__slider-children {
    opacity: 0.4;
}

.swiper-slide-thumb-active {
    opacity: 1;
}

.v-swiper {
  width: 100%;
  height: 100%;
}
</style>