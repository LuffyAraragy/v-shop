<template>
    <div class="app-repair" v-if="isLoad">
        <AppHeaderBlock :imgContent="imgContent">
                    
        </AppHeaderBlock>
        <AppWork :arrayWork="arrayWork">

        </AppWork>
        <AppExampleOfWork class="container">
            
        </AppExampleOfWork>
    </div>
</template>

<script>
import AppExampleOfWork from './AppExampleOfWork.vue';
import AppWork from './AppWork.vue';
import AppHeaderBlock from './AppHeaderBlock.vue';

import { vWork, vHeaderBlock } from '@/assets/api/apiFooter'

export default {
    name: "AppRepair",
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
            vWork().then(result =>
                {
                    this.arrayWork = result
                    console.log(this.arrayWork);
                })
            vHeaderBlock().then(result =>
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