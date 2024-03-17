<template>
    <div class="app-repair" v-if="isLoad">
        <AppHeaderBlock :imgContent="imgContent">
                    
        </AppHeaderBlock>
        <AppWork :arrayWork="arrayWork">

        </AppWork>
        <AppExampleOfWork class="">
            
        </AppExampleOfWork>
        <div class="app-repair__block-button">
            <AppButton width="350px">
                Заказать ремонт
            </AppButton>
        </div>
    </div>
</template>

<script>
import AppExampleOfWork from '../components/AppExampleOfWork.vue';
import AppWork from '../components/AppWork.vue';
import AppHeaderBlock from '../components/AppHeaderBlock.vue';

import { vWork, vHeaderBlockRepair } from '@/assets/api/apiFooter'
import AppButton from '../components/AppButton.vue';

export default {
    name: "PageRepair",
    components: {
    AppWork,
    AppExampleOfWork,
    AppHeaderBlock,
    AppButton
},
    data() {
        return {
            arrayWork: [],
            isLoad: false,
            imgContent: [],
        }
    },
    methods: {
        check() {   
            vWork().then(result =>
                {
                    this.arrayWork = result
                    console.log(this.arrayWork);
                })
            vHeaderBlockRepair().then(result =>
                {
                    this.imgContent = result
                    console.log(this.imgContent);
                }); 
        }
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
.app-repair {

    &__block-button {
        display: flex;
        justify-content: center;
        background: #ffffff;
        padding: 40px 0 100px 0;
    }
}
</style>