<template>
  <div class="app" id="#app">
    <!-- <AppLocationComponent>
      
    </AppLocationComponent> -->
    <!-- <AppFilter>

    </AppFilter> -->
    <!-- <h1>Nested Views</h1>
    <p>
      <router-link to=""></router-link>
      <br />
      <router-link to="/profile">/profile</router-link
      >
      <br />
      <router-link to="/post">/posts</router-link>
      <br />
      <router-link to="/AppAboutCompany">/AppAboutCompany</router-link>
      <br />
      <router-link to="/AppObjectWebsite">/AppObjectWebsite</router-link>
      <br />
      <router-link to="/AppContact">/AppContact</router-link>
      <br />
      <router-link to="/AppVacancies">/AppVacancies</router-link>
      <br />
      <router-link to="/AppCooperation">/AppCooperation</router-link>
      <br />
      <router-link to="/AppRepair">/AppRepair</router-link>
      <br />
      <router-link to="/AppDesign">/AppDesign</router-link>
      <br />
      <router-link to="/AppWithoutAgentPage">/AppWithoutAgentPage</router-link>
      <br />
      <router-link to="/AppDeliveryManagementPage">/AppDeliveryManagementPage</router-link>
      <br />
      <router-link to="/AppReviewsPage">/AppReviewsPage</router-link>
      <br />
      <router-link to="/AppCatalogPage">/AppCatalogPage</router-link>
      <br />
      <router-link to="/AppTestInputConpoment">/AppTestInputConpoment</router-link>
      <br />
      <router-link to="/AppPrivateOfficePage">/AppPrivateOfficePage</router-link>
      <br />
    </p> -->
    <!-- TODO это шаблон всех страниц, сюда передаються данные внутреннего контента через верхнии ссылки to="/post" -->
    <!-- <AppMainComponent>
      
    </AppMainComponent> -->
    <router-view>

    </router-view>
    <!-- <router-view class="app__home-page" name="main">
      
    </router-view>
    <router-view class="app__home-page" name="home">
      
    </router-view> -->
    <!-- TODO формы сайта -->
    <AppFormLogin>

    </AppFormLogin>
    <AppFormRegistration>

    </AppFormRegistration>
    <AppRestorePassword>
      
    </AppRestorePassword>
    <AppObject>

    </AppObject>

  </div>
  
</template> 

<script>


import AppObject from './components/AppObject.vue';

import AppFormLogin from './components/AppFormLogin.vue'
import AppFormRegistration from './components/AppFormRegistration.vue'
import AppRestorePassword from './components/AppRestorePassword.vue'

import { Navigation, Pagination, A11y, Thumbs } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {vCardService, vMenuLeft, vAddObject, vServiceCardList, vHeaderBlock} from '@/assets/api/apiFooter'

import { useMovieStore } from './stores/MovieStore';



export default {
  name: 'App',
  components: {
    // AppComponents,
    // AppFooter,
    // AppYourLocation,
    // AppAgent,
    // AppQuestions,
    // AppPurpose,
    // AppPass,
    // Swiper,
    // SwiperSlide,
    // AppHeaderBlock,
    // AppButton,
    // AppCardItem,
    // AppInput,
    // AppCardObject,
    // AppTestMovie,
    // AppObjectWebsite,
    // AppMenuLeft,
    // AppAboutCompany,
    // AppVacancies,
    // AppContact,
    AppFormLogin,
    AppFormRegistration,
    AppRestorePassword,
    AppObject,
    // AppLocationComponent,
    // AppMainComponent,
    // AppHomePage
},
  data() {
    return {
      isLoad: false,
      arrayFromCard: [],
      appMenuLeft: [],
      arrayVObject: [],
      movieStore: useMovieStore(),
      arrayCard: [],
      imgContent: [],
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
            vHeaderBlock().then(result =>
            {
                this.imgContent = result
                console.log(this.imgContent);
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

.app-test {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
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
    color: #2F2D2D;
  }
}

.app-input {
    max-width: 100%;
    padding: 16px 20px;
    text-align: center;
    border-radius: 5px;
    border: none;
    background: #949494;
    // background: aqua;
    color: #000;

    &--outline {
        border: 2px solid #F3F3F3;
    }

    &--gray {
        background-color: #F6F6F6;
    }

    &--size {
      width: 310px;
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
  // TODO Кастыль
  width: 300px;

  padding: 10px;
  max-width: 100%;
  border-radius: 5px;
  border: 2px solid #F3F3F3;
  background: #ffffff;
  color: #2F2D2D;
  font-family: Geometria;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 40px;

  &--border-none {
    border: none;
  }

  &--text-center {
    text-align: center;
  }

  &--italics:focus {
    font-weight: 800;
    box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.5);
  }

  &--width-size {
    max-width: 310px;
  }
  
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
