<template>
    <div class="AppWithoutAgentPage">
        <AppHeaderBlock :imgContent="imgContent">
            
        </AppHeaderBlock>
        <AppWithoutAgent>

        </AppWithoutAgent>
    </div>
</template>

<script>
import AppHeaderBlock from '../components/AppHeaderBlock.vue';
import AppWithoutAgent from '../components/AppWithoutAgent.vue';

import { vHeaderBlockWithoutAgent } from '@/assets/api/apiFooter'

export default {
    name: "PageWithoutAgent",
    components: { 
        AppWithoutAgent, 
        AppHeaderBlock 
    },
    data() {
        return {
            imgContent: [],
        }
    },
    methods: {
        check() {
            vHeaderBlockWithoutAgent().then(result =>
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

<style lang="scss" scoped>
    
</style>