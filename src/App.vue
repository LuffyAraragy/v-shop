<template>
  <div class="app">
    <AppMenuLeft :menuLeft="appMenuLeft">

    </AppMenuLeft>
    <AppObjectWebsite>

    </AppObjectWebsite>
    <AppAboutCompany>

    </AppAboutCompany>
    <AppVacancies>
      
    </AppVacancies>
    <AppMenuTop>

    </AppMenuTop>
    <AppAddressOffice>

    </AppAddressOffice>
    <menu-left>

    </menu-left>
    <AppCardItem
      v-for="(array, index) in arrayCard"
      :key="index"
      :card="array"
    >

    </AppCardItem>
    <!-- <app-swiper-slider>
      
    </app-swiper-slider> -->
    <app-input :placeholder="placeholder" width="200px">
      
    </app-input>
    <app-button :hasWhite="true" width="270px" :hasOutline="true" :hasSmall="true" class="">
      hello world
    </app-button>
    <app-button :hasWhite="true" width="310px" :hasOutline="true" class="">
      hello world
    </app-button>
    <app-button :hasGreen="true" width="255px" class="">
      hello world
    </app-button>
    <app-button :hasGreen="true" width="270px" class="">
      hello world
    </app-button>
    <app-button :hasBlack="true" :hasAround="true" width="270px" class="">
      hello world
    </app-button>
    <AppComponents v-if="isLoad" :menuLeft="appMenuLeft">

    </AppComponents>
    
    
    <AppFooter>

    </AppFooter>
    
    <AppYourLocation>

    </AppYourLocation>
    <AppAgent>

    </AppAgent>
    <AppWork>

    </AppWork>
    <AppQuestions>
      
    </AppQuestions>
    <AppPurpose>

    </AppPurpose>
    <AppObject :arrayVObjectItem="arrayVObject">

    </AppObject>
    <AppInformationObject>

    </AppInformationObject>
    <AppPass>

    </AppPass>
    
    <AppCardObject>

    </AppCardObject>

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
</div>
    <AppHeaderBlock>

    </AppHeaderBlock>
    <AppCardLocation>

    </AppCardLocation>

    <AppWithoutAgent>

    </AppWithoutAgent>
    <div class="movies">
      
    </div>
    <AppTestMovie v-for="movie in movieStore.movies" :key="movie.id" :movie="movie">
      
    </AppTestMovie>
  </div>
  
</template> 

<script>

// Основные страницы
import AppAboutCompany from './components/AppAboutCompany.vue';
import AppObjectWebsite from './components/AppObjectWebsite.vue';

import AppComponents from './components/AppComponents.vue';
import AppFooter from './components/AppFooter.vue';
import AppMenuTop from './components/AppMenuTop.vue';
import AppYourLocation from './components/AppYourLocation.vue';
import AppAgent from './components/AppAgent.vue';
import AppWork from './components/AppWork.vue';
import AppQuestions from './components/AppQuestions.vue';
import AppPurpose from './components/AppPurpose.vue';
import AppObject from './components/AppObject.vue';
import AppInformationObject from './components/AppInformationObject.vue';
import AppPass from './components/AppPass.vue';
import AppAddressOffice from './components/AppAddressOffice .vue';
import AppMenuLeft from './components/AppMenuLeft.vue';

import AppHeaderBlock from './components/AppHeaderBlock.vue'
import { Navigation, Pagination, A11y, Thumbs } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import AppButton from './components/AppButton.vue';
import AppCardItem from './components/AppCardItem.vue';
import AppInput from './components/AppInput.vue';
// import AppSwiperSlider from './components/AppSwiperSlider.vue';
import {vCardService, vMenuLeft, vAddObject, vServiceCardList} from '@/assets/api/apiFooter'
import AppCardObject from './components/AppCardObject.vue';
import AppCardLocation from './components/AppCardLocation.vue';
import AppWithoutAgent from './components/AppWithoutAgent.vue';

import AppTestMovie from './components/AppTestMovie.vue';
import { useMovieStore } from './stores/MovieStore';
import AppVacancies from './components/AppVacancies.vue';

export default {
  name: 'App',
  components: {
    AppComponents,
    AppFooter,
    AppMenuTop,
    AppYourLocation,
    AppAgent,
    AppWork,
    AppQuestions,
    AppPurpose,
    AppObject,
    AppInformationObject,
    AppPass,
    Swiper,
    SwiperSlide,
    AppHeaderBlock,
    AppButton,
    AppCardItem,
    AppInput,
    AppCardObject,
    AppCardLocation,
    AppWithoutAgent,
    AppTestMovie,
    AppAddressOffice,
    AppObjectWebsite,
    AppMenuLeft,
    AppAboutCompany,
    AppVacancies
},
  data() {
    return {
      isLoad: false,
      arrayFromCard: [],
      appMenuLeft: [],
      arrayVObject: [],
      movieStore: useMovieStore(),
      arrayCard: [],
    }
  },
  provide() {
    return {
      sharedData: this.testProvide,
      arrayCard: this.arrayCard
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
            vServiceCardList().then(result =>
            {
                this.arrayCard = result
                console.log(this.arrayCard);
            });
        },
    },
    mounted() {
        this.check();
        setTimeout(() => {
            this.isLoad = true;
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
  position: relative;
  width: 100%;
  height: 100%;
  background: #F8F7F7;
}

.block {
  margin: 40px 0;
  padding: 40px 0;
  border-bottom: 1px solid #C4C4C4;
  border-top: 1px solid #C4C4C4;
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
