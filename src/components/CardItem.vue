<template>
  <div class="card-item" v-if="this.let">
    <!-- Передаём массив с изображениями -->
    <app-swiper-slider :arrayImgCards="arrayCardService[0]">
        
    </app-swiper-slider>
    <div class="card-item__block-content">
        <div class="card-item__info-block">
            <div class="text text--font-weight-800 text--font-size-normalx2 price">
                {{ arrayCardService[1][0] }}
            </div>
            <img :src="require(`@/img/cardItem/${arrayCardService[1][1]}`)" alt="">
        </div>
        
        <div class="info-item">
            <div class="text text--color-black card-item__text" 
                v-for="(text, index) in arrayCardService[2]"
                :key="index"
            >
            <!-- TODO(Ponosonik): Не правильно применяются стили -->
               {{ text }}
            </div>
        </div>
        <div class="text card-item__street">
            {{ arrayCardService[3][0] }}
        </div>
        <div class="text text--font-weight-300 text--font-size-sm card-item__text-small">
            {{ arrayCardService[4][0] }}
        </div>
        <app-button width="310px" :hasWhite="true" :hasOutline="true">
            <!-- <div :style="{ 'background-image' : 'url(./img/cardItem/phoneWhite.svg)'}" class="card-item__img">
                
            </div> -->
            <div>
                Показать телефон
            </div>
        </app-button>
    </div>
  </div>
</template>

<script>
import AppSwiperSlider from './AppSwiperSlider.vue';

// import {vCardItem} from '@/assets/api/apiFooter'
import AppButton from './AppButton.vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
  components: { 
    AppButton,
    AppSwiperSlider,
    },
    name: "CardItem",
    data() {
        return {
            url123: '../img/cardItem/phoneWhite.svg',
            arrayCard: [],
            let: false,
            isFocused: false
        }
    },
    props: {
        arrayCardService: Array
    },
    // methods: {
    //     check() {
    //         vCardItem().then(result =>
    //         {
    //             this.arrayCard = result
    //             console.log(this.arrayCard);
    //         });  
    //     }, 
    // },
    mounted() {
        // this.check();
        setTimeout(() => {
            this.let = true;
        }, 3000);
    },
    // setup() {
    //   const onSwiper = (swiper) => {
    //     console.log(swiper);
    //   };
    //   const onSlideChange = () => {
    //     console.log('slide change');
    //   };
      
    //   return {
    //     onSwiper,
    //     onSlideChange,
    //     modules: [Navigation, Pagination, A11y, Thumbs],
    //   };
    // },
}
</script>

<style lang="scss" scoped>

// .card-item__img {
//     width: 20px;
//     height: 20px;
//     background-image: url(../img/cardItem/phone-4\ 2.svg);
// }

// .card-item__img:focus {
//     background-image: url(../img/cardItem/love.svg);
// }

.card-item__img {
    width: 20px;
    height: 20px;
    // background-image: url(@/img/cardItem/phoneWhite.svg);
}

.card-item {
    max-width: 350px;
}

.card-item__block-content {
    display: grid;
    gap: 20px;   
    max-width: 310px;
    margin: 0 auto;
}

.info-item {
    display: flex;
    gap: 20px;
    justify-content: space-around;
}

.card-item__text {
    border-right: 2px solid #C4C4C4;
    font-size: 14px;
    
}

.card-item__text:last-child {
    border-right: 0;
}

.card-item__info-block {
    display: flex;
    justify-content: space-between;
}

.card-item__info-telephone {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}

</style>