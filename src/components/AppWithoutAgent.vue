<template >
    <div class="without-agent container" v-if="isLoad">
        <div class="without-agent__card-services" v-for="(array, index) in arrayWithoutAgent[0]" :key="index">
            <div class="without-agent__block-content">
                    <img :src="require(`@/img/cardAgent/${arrayWithoutAgent[0][index]}`)" alt="" class="without-agent__img">
                <div class="text text--font-weight-700 text--font-size-normalx2 without-agent__title">
                    Консультация
                </div>
                <div class="text text--font-weight-300 text--font-size-normal without-agent__text">
                    Консультация по проведению сделки
                </div>
                <div class="text text--font-weight-800 text--font-size-normal  text--color-green without-agent__price">
                    1231231
                </div>
                
            </div>
            <AppButton width="100%" :hasGreen="true" class="without-agent__button">
                Оставить заявку
            </AppButton>
        </div>
    </div>
</template>

<script>
import AppButton from './AppButton.vue'

import {vCardAgent} from '@/assets/api/apiFooter'

export default {
  components: { 
        AppButton 
    },
    name: 'AppWithoutAgent',
    data() {
        return {
            isLoad: false,
            arrayWithoutAgent: []
        }
    },
    props: {
        arrayVObjectItem: Array
    },
    methods: {
        check() {
            vCardAgent().then(result =>
            {
                this.arrayWithoutAgent = result
                console.log(this.arrayWithoutAgent);
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
.without-agent {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 100px 20px;
    
    
    &__button {
        border-radius: 0px 0px 5px 5px;
    }

    &__card-services {
        background: #ffffff;
    }
}

.without-agent__block-content {
    display: flex;
    padding: 20px;
    flex-direction: column;
    gap: 20px;
    border-radius: 0px 0px 5px 5px;
}

.without-agent__img {
    width: 65px;
    height: 65px;
}
</style>