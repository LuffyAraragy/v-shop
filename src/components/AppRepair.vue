<template>
    <div class="app-repair" v-if="isLoad">
        <AppWork :arrayWork="arrayWork">

        </AppWork>
        <AppExampleOfWork>
            
        </AppExampleOfWork>
    </div>
</template>

<script>
import AppExampleOfWork from './AppExampleOfWork.vue';
import AppWork from './AppWork.vue';
import { vWork } from '@/assets/api/apiFooter'


export default {
    name: "AppRepair",
    components: {
    AppWork,
    AppExampleOfWork
},
    data() {
        return {
            arrayWork: [],
            isLoad: false,
        }
    },
    methods: {
        check() {   
            vWork().then(result =>
                {
                    this.arrayWork = result
                    console.log(this.arrayWork);
                })
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