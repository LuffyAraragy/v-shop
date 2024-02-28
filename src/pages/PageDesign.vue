<template>
    <div class="app-design" v-if="isLoad">
        <AppHeaderBlock :imgContent="imgContent">
                    
        </AppHeaderBlock>
        <AppWork :arrayWork="arrayWork">

        </AppWork>
        <AppExampleOfWork class="">
            
        </AppExampleOfWork>
    </div>
</template>

<script>
import AppExampleOfWork from '../components/AppExampleOfWork.vue';
import AppWork from '../components/AppWork.vue';
import AppHeaderBlock from '../components/AppHeaderBlock.vue';

import { vWorkDesign, vHeaderBlockDesign } from '@/assets/api/apiFooter'

export default {
    name: "PageDesign",
    components: {
        AppWork,
        AppExampleOfWork,
        AppHeaderBlock
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
            vWorkDesign().then(result =>
                {
                    this.arrayWork = result
                    console.log(this.arrayWork);
                })
            vHeaderBlockDesign().then(result =>
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
    
</style>