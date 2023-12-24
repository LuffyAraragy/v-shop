<template>
  <div class="app-swiper-slider">
    <swiper class="v-swiper swiper-thumbs"
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
    >
      <swiper-slide 
        v-for="(arrayImg, indexs) in arrayImgCards" 
        :key="indexs"
      >
        <img 
          :src="require(`@/img/cardItem/${arrayImg}`)" 
          alt=""
        >
        </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Navigation, Pagination, A11y, Thumbs } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default {
    name: "AppSwiperSlider",
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
      return {

      }
    },
    setup() {
      return {
        modules: [Navigation, Pagination, A11y, Thumbs],
      };
    },
    props: {
      arrayImgCards: Array
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';
.app-swiper-slider {
  width: 100%;
  height: 100%;
}

.v-swiper {
  width: 100%;
  height: 100%;
}

</style>