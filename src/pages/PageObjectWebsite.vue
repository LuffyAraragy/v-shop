<template>
    <div class="app-object-website container" v-if="isLoad">
        <div class="app-object-website__controller-content">
            <div class="app-object-website__block-information">
                <AppExampleOfWork>

                </AppExampleOfWork>
                <!-- TODO Тут будет блок с картинкамикарточкина которую нажали -->
                <!-- {{ movieStore.movies }} -->
                <!-- TODO тут отправить Характеристики -->
                <AppProperty :card="cardObject.todos[cardObject.bufferCounterId].additionalCharacteristics">

                </AppProperty>
                <!-- TODO уже настроенно на местоположение -->
                <AppCardLocation>
                    
                </AppCardLocation>
                <AppCardObject>

                </AppCardObject>
                
                <!-- TODO тут отправить Доп характеристики -->
                <AppProperty :card="cardObject.todos[cardObject.bufferCounterId].characteristics">

                </AppProperty>
                <div class="trtr">
                    <AppSwiperSliderComponent 
                        class="tests"
                        :swiperSlidesPerView="2"
                        :swiperCenteredSlides="false"
                    >
                    <!-- TODO тут добавитьотдельный списко данных лучших резаультатов -->
                        <AppCardItem
                            v-for="(array, index) in filteredTodos"
                            :key="index"
                            :card="array"
                        >
                    
                        </AppCardItem>
                    </AppSwiperSliderComponent>
                </div>
            </div>
            <div class="app-object-website__block-information-transaction">
                <AppInformationObject>

                </AppInformationObject>
            </div>
        </div>
    </div>
</template>

<script>
import AppInformationObject from '../components/AppInformationObject.vue'
import AppCardObject from '../components/AppCardObject.vue'
import AppCardLocation from '../components/AppCardLocation.vue'
import AppCardItem from '../components/AppCardItem.vue';
import AppProperty from '../components/AppProperty.vue';
import {vServiceCardList, vTestCardObject} from '@/assets/api/apiFooter'

import { useTodos } from '@/assets/api/apiFooter';
import AppSwiperSliderComponent from '../components/AppSwiperSliderComponent.vue';
import AppExampleOfWork from '../components/AppExampleOfWork.vue';

import { storeToRefs } from 'pinia'

export default {
    name: "PageObjectWebsite",
    data() {
        return {
            isLoad: false,
            arrayCard: [],
            testCardObject: [],
            buffer: Number,
        }
    },
    setup() {
        let cardObject = useTodos();
        const todosStore = useTodos();
        const { filter, filteredTodos } = storeToRefs(todosStore);
        return {
            cardObject,
            filteredTodos,
            filter,
        };
    },
    components: {
    AppInformationObject,
    AppCardObject,
    AppCardLocation,
    AppCardItem,
    AppProperty,
    AppSwiperSliderComponent,
    AppExampleOfWork
},
    methods: {
        check() {
            vServiceCardList().then(result =>
            {
                this.arrayCard = result
                console.log(this.arrayCard);
            });
            vTestCardObject().then(result =>
            {
                this.testCardObject = result
                console.log(this.testCardObject);
            });
        },
    },

    inject: ["arrayCard"],
    mounted() {
        this.check();
        setTimeout(() => {
            this.isLoad = true;
        }, 3000);
    },
}

</script>

<style lang="scss" scoped>
.swiper-wrapper {
    width: 100px;
}
.app-object-website__controller-content {
    display: flex;
    gap: 20px;
}

.tests {
    max-width: 100%;
    height: 500px;
}
</style>