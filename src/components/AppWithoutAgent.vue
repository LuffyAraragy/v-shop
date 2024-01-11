<template >
    <div class="without-agent" v-if="isLoad">
        <div class="without-agent__card-services" v-for="(array, index) in arrayWithoutAgent[0]" :key="index">
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
            <app-button :hasGreen="true" :hasAround="true" width="270px" class="">

            </app-button>
        </div>
    </div>
</template>

<script>
import AppButton from './AppButton.vue'

import {vCardAgent} from '@/assets/api/apiFooter'

export default {
  components: { AppButton },
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
    width: 100%;
    height: 100%;
    
}

.without-agent__card-services {
    display: flex;
    flex-direction: column;
    width: 255px;
    height: 351px;
    gap: 20px;
    padding: 20px;
}

.without-agent__img {
    width: 65px;
    height: 65px;
}
</style>