<template>
    <div class="app-cooperation" v-if="isLoad">
        <AppHeaderBlock :imgContent="imgContent">

        </AppHeaderBlock>
        <AppAgent :arrayAgent="arrayCooperation">
            Агентам
        </AppAgent>
        <AppAgent :arrayAgent="arrayCooperationCompany">
            Компаниям
        </AppAgent>
    </div>
</template>

<script>
import AppAgent from '../components/AppAgent.vue';

import { vAgent, vCompany, vHeaderBlockCooperation } from '@/assets/api/apiFooter'
import AppHeaderBlock from '../components/AppHeaderBlock.vue';


export default {
    name: "PageCooperation",
    components: {
    AppAgent,
    AppHeaderBlock
},
    data() {
        return {
            isLoad: false,
            arrayCooperation: [],
            arrayCooperationCompany: [],
            imgContent: [],
        }
    },
    methods: {
        check() {
            vAgent().then(result =>
            {
                this.arrayCooperation = result
                console.log(this.arrayCooperation);
            });
            vCompany().then(result =>
            {
                this.arrayCooperationCompany = result
                console.log(this.arrayCooperationCompany);
            });
            vHeaderBlockCooperation().then(result =>
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