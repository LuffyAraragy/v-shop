<template>
  <div class="app">
    <v-components>

    </v-components>
    <v-menu-top>

    </v-menu-top>
    <v-footer>

    </v-footer>
    <v-your-location>

    </v-your-location>
    <v-agent>

    </v-agent>
    <v-work>

    </v-work>
    <v-questions>
      
    </v-questions>
    <v-purpose>

    </v-purpose>
    <v-object>

    </v-object>
    <v-card-object>

    </v-card-object>
    <v-pass>

    </v-pass>
    


<div class="swiper-content-1">
  
  <swiper class="v-swiper swiper-thumbs"
    :modules="modules"
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"

    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>

  <div class="swiper swiper_thumbnail">                                   
    <div class="swiper-wrapper">                                        
        <div class="swiper-slide"><img src="@/img/agent/information-2 1.svg"></div>   
        <div class="swiper-slide"><img src="@/img/agent/information-2 1.svg"></div>   
        <div class="swiper-slide"><img src="@/img/agent/information-2 1.svg"></div>   
    </div>                                                              
  </div> 
</div>
    
    <v-swiper-slider>
      
    </v-swiper-slider>
  </div>
  
</template> 

<script>

import vComponents from './components/v-components.vue';
import vFooter from './components/v-footer.vue';
import vMenuTop from './components/v-menu-top.vue';
import vYourLocation from './components/v-your-location.vue';
import vAgent from './components/v-agent.vue';
import vWork from './components/v-work.vue';
import vQuestions from './components/v-questions.vue';
import vPurpose from './components/v-purpose.vue';
import vObject from './components/v-object.vue';
import vCardObject from './components/v-card-object.vue';
import vPass from './components/v-pass.vue';
import vSwiperSlider from './components/v-swiper-slider.vue';


import { Navigation, Pagination, A11y, Thumbs } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default {
  name: 'App',
  components: {
    vComponents, 
    vFooter,
    vMenuTop,
    vYourLocation,
    vAgent,
    vWork,
    vQuestions,
    vPurpose,
    vObject,
    vCardObject,
    vPass,
    vSwiperSlider,
    Swiper,
    SwiperSlide,
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
        modules: [Navigation, Pagination, A11y, Thumbs],
      };
    },
  
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  
}
.swiper-content-1 {
  width: 500px;
  height: 500px;
  background-color: aqua;
}
.v-swiper {
  width: 300px;
  height: 300px;
  
}


.button {
  width: 310px;
  height: 60px;
  flex-shrink: 0;
  padding: auto;
  font-size: 16px;
  border-radius: 5px;
  border: 2px solid #2A7D03;
  color: #2A7D03;
  
  font-family: Geometria;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  background-color: transparent;

  /* ОТ себя добавил */
  cursor: pointer;
  transition: 0.4s;
  
}
  .button--rounded-top {
    border-radius: 5px 5px 0px 0px;
    
    border-color: #2F2D2D;
    background: #2F2D2D;
    
    color: #FFF;

    font-family: Geometria;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 100% */
  }

  .button--rounded-left {
    border-radius: 5px 0px 0px 5px;
    background: #fff;
    color: #2F2D2D;
    border: 2px solid #2A7D03;
  }
  .button--rounded-right {
    border-radius: 0px 5px 5px 0px;
    background: #fff;
    color: #2F2D2D;
    border: 2px solid #2A7D03;
  }

  .button--green {
    background-color: #2A7D03;
    color: #FFFFFF;
  }

.input {
  width: 200px;
  height: 50px;

  border-radius: 5px;
  border: 2px solid #F3F3F3;
  background: #FFF;
  color: #2F2D2D;
  text-align: center;
  font-family: Geometria;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 40px;
}

.text__h2 {
  color: #2F2D2D;
  font-family: Geometria;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: 40px; 
}
  .text__h2--white {
    color: #FFF;
  }

.text__20px {
  width: 540px;
  flex-shrink: 0;
  color: #2F2D2D;
  font-family: Geometria;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
}

.text {
  color: #2F2D2D;
  font-family: Geometria;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.text__16px {
  color: #FFF;
  font-family: Geometria;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
}
  .text__16px--black {
    color: #2F2D2D;
    font-weight: 400;
  }
.button:hover {
  background: #FFF;
  transition: background 0.4s;
}
.button:focus {
  background: #226702;
  transition: background 0.4s;
}


</style>
