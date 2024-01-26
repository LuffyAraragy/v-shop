<template>
    <div class="AppWithoutAgentPage">
        <AppHeaderBlock :imgContent="imgContent">
            
        </AppHeaderBlock>
        <AppWithoutAgent>

        </AppWithoutAgent>
    </div>
</template>

<script>
import AppHeaderBlock from './AppHeaderBlock.vue';
import AppWithoutAgent from './AppWithoutAgent.vue';

import { vHeaderBlock } from '@/assets/api/apiFooter'

export default {
    name: "AppWithoutAgentPage",
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
            vHeaderBlock().then(result =>
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