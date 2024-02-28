<template>
    <div class="app-delivery-management-page">
        <AppHeaderBlock :imgContent="imgContent">

        </AppHeaderBlock>
        <AppAgent :arrayAgent="arrayCooperationCompany">

        </AppAgent>
        <AppPass>

        </AppPass>
    </div>
</template>
<script>
import AppHeaderBlock from '../components/AppHeaderBlock.vue';

import { vHeaderBlock, vAgent } from '@/assets/api/apiFooter';
import AppPass from '../components/AppPass.vue';
import AppAgent from '../components/AppAgent.vue';


export default {
    name: "PageDeliveryManagement",
    components: {
    AppHeaderBlock,
    AppPass,
    AppAgent
},
    data() {
        return {
            imgContent: [],
            arrayCooperationCompany: [],
        }
    },
    methods: {
        check() {
            vHeaderBlock().then(result =>
            {
                this.imgContent = result
                console.log(this.imgContent);
            });
            vAgent().then(result =>
            {
                this.arrayCooperationCompany = result
                console.log(this.arrayCooperationCompany);
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