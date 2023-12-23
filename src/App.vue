<template>
  <div class="app">
    <v-menu-top>

    </v-menu-top>
    <address-office>

    </address-office>
    <menu-left>

    </menu-left>
    <!-- <app-swiper-slider>
      
    </app-swiper-slider> -->
    <app-input :placeholder="placeholder" width="200px">
      
    </app-input>
    <AppButton :hasWhite="true" width="270px" :hasOutline="true" :hasSmall="true" class="">
      hello world
    </AppButton>
    <AppButton :hasWhite="true" width="310px" :hasOutline="true" class="">
      hello world
    </AppButton>
    <AppButton :hasGreen="true" width="255px" class="">
      hello world
    </AppButton>
    <AppButton :hasGreen="true" width="270px" class="">
      hello world
    </AppButton>
    <AppButton :hasBlack="true" :hasAround="true" width="270px" class="">
      hello world
    </AppButton>
    <card-item
      v-for="(array, index) in arrayFromCard"
      :key="index"
      :arrayCardService="array"
    >

    </card-item>
    <v-components v-if="let1" :menuLeft="appMenuLeft">

    </v-components>
    
    
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
    <v-object :arrayVObjectItem="arrayVObject">

    </v-object>
    <v-card-object>

    </v-card-object>
    <v-pass>

    </v-pass>
    
    <card-object>

    </card-object>

<div class="swiper-content-1">
  
  <swiper class="v-swiper swiper-thumbs"
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"

    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide><img src="@/img/agent/information-2 1.svg"></swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>

  <!-- <div class="swiper swiper_thumbnail">                                   
    <div class="swiper-wrapper">                                        
        <div class="swiper-slide"><img src="@/img/agent/information-2 1.svg"></div>   
        <div class="swiper-slide"><img src="@/img/agent/information-2 1.svg"></div>   
        <div class="swiper-slide"><img src="@/img/agent/information-2 1.svg"></div>   
    </div>                                                              
  </div>  -->
</div>
    
    <v-swiper-slider>
      
    </v-swiper-slider>

    <header-block>

    </header-block>
    <app-card-location>

    </app-card-location>

    <without-agent>

    </without-agent>
    <div class="movies">
      
    </div>
    <test-movie v-for="movie in movieStore.movies" :key="movie.id" :movie="movie">
      
    </test-movie>
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
import AddressOffice from './components/AddressOffice .vue';


import headerBlock from './components/HeaderBlock.vue'
import { Navigation, Pagination, A11y, Thumbs } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import AppButton from './components/AppButton.vue';
import CardItem from './components/CardItem.vue';
import AppInput from './components/AppInput.vue';
// import AppSwiperSlider from './components/AppSwiperSlider.vue';
import {vCardService, vMenuLeft, vAddObject} from '@/assets/api/apiFooter'
import CardObject from './components/CardObject.vue';
import AppCardLocation from './components/AppCardLocation.vue';
import WithoutAgent from './components/WithoutAgent.vue';

import TestMovie from './components/TestMovie.vue';
import { useMovieStore } from './stores/MovieStore';



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
    headerBlock,
    AppButton,
    CardItem,
    AppInput,
    CardObject,
    AppCardLocation,
    WithoutAgent,
    TestMovie,
    // AppSwiperSlider
    AddressOffice,
  },
  data() {
    return {
      let1: false,
      arrayFromCard: [],
      appMenuLeft: [],
      arrayVObject: [],
      movieStore: useMovieStore()
    }
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
    methods: {
        check() {
            vCardService().then(result =>
            {
                this.arrayFromCard = result
                console.log(this.arrayFromCard);
            }); 
            vMenuLeft().then(result =>
            {
                this.appMenuLeft = result
                console.log(this.appMenuLeft);
            });
            vAddObject().then(result =>
            {
                this.arrayVObject = result
                console.log(this.arrayVObject);
            });
        }, 
    },
    mounted() {
        this.check();
        setTimeout(() => {
            this.let1 = true;
        }, 3000);
    },
}
</script>

<style lang="scss">
@import './assets/variables.scss';

* {
  margin: 0;
  padding: 0;
}

.text {
  font-size: 14px;
  font-family: $font-face;
  font-weight: $font-weight-400;
  color: #2F2D2D;
  font-style: normal;
  line-height: normal;

  &--font-weight-300 {
    font-weight: $font-weight-300;
  }

  &--font-weight-400 {
    font-weight: $font-weight-400;
  }

  &--font-weight-500 {
    font-weight: $font-weight-500;
  }

  &--font-weight-700 {
    font-weight: $font-weight-700;
  }

  &--font-weight-800 {
    font-weight: $font-weight-800;
  }

  &--font-size-sm1 {
    font-size: 10px;
  }

  &--font-size-sm2 {
    font-size: 12px;
  }

  &--font-size-normal {
    font-size: 16px;
  }

  &--font-size-normalx2 {
    font-size: 20px;
  }

  &--font-size-normalx3 {
    font-size: 24px;
  }

  &--font-size-big {
    font-size: 36px;
  }
//цвет текста
  &--color-white {
    color: #FFF;
  }

  &--color-gray {
    color: #949494;
  }

  &--color-green {
    color: #2A7D03;
  }

  &--color-black {
    color: black;
  }
}

.app {
  width: 100%;
  height: 100%;
  background: #F8F7F7;
}

.block {
  padding: 40px 0;
  border-bottom: 1px solid #C4C4C4;
}

.button123 {
  width: 310px;
  height: 60px;
  font-size: 16px;
  border-radius: 5px;
  border: 2px solid #2A7D03;
  background-color: #2A7D03;
  color: #FFF;
  font-family: Geometria;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  transition: 0.4s;
}

.container {
  max-width: 1112px;
  margin: 0 auto;
  padding: 0 15px;
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

// .text {
//   color: #2F2D2D;
//   font-family: Geometria;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
// }

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
