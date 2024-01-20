<template>
    <div class="app-cooperation" v-if="isLoad">
        <AppAgent :arrayAgent="arrayCooperation">

        </AppAgent>
        <AppAgent :arrayAgent="arrayCooperationCompany">

        </AppAgent>
    </div>
</template>

<script>
import AppAgent from './AppAgent.vue';

import { vAgent, vCompany } from '@/assets/api/apiFooter'


export default {
    name: "AppCooperation",
    components: {
        AppAgent
    },
    data() {
        return {
            isLoad: false,
            arrayCooperation: [],
            arrayCooperationCompany: [],
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