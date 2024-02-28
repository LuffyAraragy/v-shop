<template>
    <div class="app-about-company" v-if="isLoad">
        <AppHeaderBlock :imgContent="imgContent">
                    
        </AppHeaderBlock>
        <div class="white-color-controller">
            <AppSwiperSliderComponent class="container">
                <AppCardEmployees>

                </AppCardEmployees>
            </AppSwiperSliderComponent>
        </div>
        
        <AppPass>

        </AppPass>
        <!-- <AppImgAndText>
            <AppListBenefits>

            </AppListBenefits>
        </AppImgAndText> -->
        <AppImgAndText>
            <div class="text">
                Как для каждого охотника, наш трофей - это удовлетворённый клиент, получивший желаемое. 
                На рынке недвижимости мы ориентируемся, как на карте знакомой местности. 
                Всегда знаем, когда надо поторопиться и от кого стоит делать ноги.
                Ведём дела прозрачно и без лишних потерь. Наша цель, чтобы каждый занимал своё место под солнцем!
            </div>
        </AppImgAndText>
        <AppPurpose>

        </AppPurpose>
        <AppInNumbers>

        </AppInNumbers>
        <AppSwiperSliderComponent class="container" :swiperEffect="dataSwiperEffect" swiperCenteredSlides="false">
            <AppCardEmployees>

            </AppCardEmployees>
        </AppSwiperSliderComponent>
        <AppPhotoOffice>

        </AppPhotoOffice>
        <div class="app-about-company__block">
            <div class="app-about-company__block2 container">
                <div class="app-about-company__title text text--font-weight-800 text--font-size-big">
                    Наши партнёры
                </div>
                <Swiper class="v-swiper swiper-thumbs"
                    :modules="modules"
                    :slides-per-view="6"
                    :space-between="10"
                    :centered-slides="false"
                    :grab-cursor="true"
                    :loop="true"
                    :freeMode="true"
                    navigation
                >
                    <SwiperSlide 
                        v-for="(array, index) in imgSwiperContent"
                        :key="index"
                    >
                        <img
                            :src="require(`@/img/${array.img}`)"
                            class="app-about-company__img">
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
</template>
<script>
import AppImgAndText from '../components/AppImgAndText.vue';
import AppPass from '../components/AppPass.vue';
import AppPurpose from '../components/AppPurpose.vue';
import AppInNumbers from '../components/AppInNumbers.vue';
import AppPhotoOffice from '../components/AppPhotoOffice.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, A11y, Thumbs, EffectCoverflow } from 'swiper/modules';
import AppSwiperSliderComponent from '../components/AppSwiperSliderComponent.vue';

import { vOurEmployees, vHeaderBlockAboutCompany, vAppAboutCompanySwiperImg } from '@/assets/api/apiFooter'
import AppCardEmployees from '../components/AppCardEmployees.vue';
// import AppListBenefits from './AppListBenefits.vue';
import AppHeaderBlock from '../components/AppHeaderBlock.vue';


export default {
    name: "PageAboutCompany",
    components: {
        AppPass,
        AppImgAndText,
        AppPurpose,
        AppInNumbers,
        AppPhotoOffice,
        Swiper,
        SwiperSlide,
        AppSwiperSliderComponent,
        AppCardEmployees,
        // AppListBenefits,
        AppHeaderBlock
    },
    data() {
        return {
            isLoad: false,
            arrayOurEmployees: [],
            imgContent: [],
            imgSwiperContent: [],
            dataSwiperEffect: "coverflow",
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
        modules: [Navigation, A11y, Thumbs, EffectCoverflow],
      };
    },
    methods: {
        check() {
            vOurEmployees().then(result =>
            {
                this.arrayFromCard = result
                console.log(this.arrayFromCard);
            });
            vHeaderBlockAboutCompany().then(result =>
            {
                this.imgContent = result
                console.log(this.imgContent);
            });
            vAppAboutCompanySwiperImg().then(result =>
            {
                this.imgSwiperContent = result
                console.log(this.imgSwiperContent);
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

<style lang="scss" scoped>

// .swiper-slide-prev {
//     opacity: 0.5;
// }

// .swiper-slide-next {
//     opacity: 0.5;
// }

.white-color-controller {
    background: #ffffff;

}
.swiper-slide {
    // background: #F8F7F7;
}
.app-about-company {
    &__block {
        background: #ffffff;
    }

    &__title {
        text-align: center;
    }
}
.testeses {

}

.v-swiper {
    padding-top: 40px;
    padding-bottom: 100px;
    width: 100%;

    // background: #ffffff;
}

// .swiper-wrapper {
//     display: flex;
//     align-items: center;
//     justify-content: center;
// }

.swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F8F7F7;
    width: 160px;
    height: 100px;
}

.app-about-company__img {
    width: 50px;
}
    
</style>