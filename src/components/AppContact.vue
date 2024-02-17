<template>
    <div class="app-contact">
        <AppHeaderBlock :imgContent="imgContent">
                    
        </AppHeaderBlock>
        <AppCardLocation>

        </AppCardLocation>
        <AppQuestions>

        </AppQuestions>
    </div>
</template>
<script>
import AppCardLocation from './AppCardLocation.vue';
import AppQuestions from './AppQuestions.vue';
import AppHeaderBlock from './AppHeaderBlock.vue';

import { vHeaderBlock } from '@/assets/api/apiFooter'

export default {
    name: "AppContact",
    components: {
        AppQuestions,
        AppCardLocation,
        AppHeaderBlock
    },
    data() {
        return {
            isLoad: false,
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