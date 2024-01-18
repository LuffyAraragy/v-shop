<template>
    <div class="app-about-company">
        <AppSwiperSliderComponent>
            <AppCardEmployees>

            </AppCardEmployees>
        </AppSwiperSliderComponent>
        <AppPass>

        </AppPass>
        <AppImgAndText>
            <AppListBenefits>

            </AppListBenefits>
        </AppImgAndText>
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
        <AppSwiperSliderComponent>
            <AppCardEmployees>

            </AppCardEmployees>
        </AppSwiperSliderComponent>
        <AppPhotoOffice>

        </AppPhotoOffice>
        <Swiper class="v-swiper swiper-thumbs container"
            :modules="modules"
            :slides-per-view="3"
            :space-between="50"
            centered-slides="true"
            grab-cursor="true"
            loop="true"
            :freeMode="true"

            :watchSlidesProgress="true"
            :watch-slides-visibility="true"

            effect="coverflow"
            :coverflowEffect="{
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 1,
                slideShadows: true,
            }"

            navigation
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <SwiperSlide 
                v-for="(array, index) in 12"
                :key="index"
            >
                <img src="@/img/ourPartners/logo-pik 1.svg" class="app-about-company__img">
            </SwiperSlide>
        </Swiper>
    </div>
</template>
<script>
import AppImgAndText from './AppImgAndText.vue';
import AppPass from './AppPass.vue';
import AppPurpose from './AppPurpose.vue';
import AppInNumbers from './AppInNumbers.vue';
import AppPhotoOffice from './AppPhotoOffice.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, A11y, Thumbs, EffectCoverflow } from 'swiper/modules';
import AppSwiperSliderComponent from './AppSwiperSliderComponent.vue';

import { vOurEmployees } from '@/assets/api/apiFooter'
import AppCardEmployees from './AppCardEmployees.vue';
import AppListBenefits from './AppListBenefits.vue';


export default {
    name: "AppAboutCompany",
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
    AppListBenefits
},
    data() {
        return {
            arrayOurEmployees: [],
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

.v-swiper {
  width: 100%;
  height: 100%;
}
.swiper-thumbs {
    width: 100%;
}

.swiper-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}

.swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F8F7F7;
}

.app-about-company__img {
    width: 50px;
}
    
</style>