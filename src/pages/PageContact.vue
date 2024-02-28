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
import AppCardLocation from '../components/AppCardLocation.vue';
import AppQuestions from '../components/AppQuestions.vue';
import AppHeaderBlock from '../components/AppHeaderBlock.vue';

import { vHeaderBlockContact } from '@/assets/api/apiFooter'

export default {
    name: "PageContact",
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
            vHeaderBlockContact().then(result =>
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