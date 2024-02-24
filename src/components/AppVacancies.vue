<template>
    <div class="app-vacancies">
        <AppHeaderBlock :imgContent="imgContent">
                    
        </AppHeaderBlock>
        <AppImgAndText>
            <AppListBenefits>
                
            </AppListBenefits>
        </AppImgAndText>
        <AppListOfVacancies>

        </AppListOfVacancies>    
    </div>
</template>

<script>
import AppImgAndText from './AppImgAndText.vue';
import AppListBenefits from './AppListBenefits.vue';
import AppListOfVacancies from './AppListOfVacancies.vue';
import AppHeaderBlock from './AppHeaderBlock.vue';

import { vHeaderBlockVacancies } from '@/assets/api/apiFooter'


export default {
    name: "AppVacancies",
    components: {
        AppImgAndText,
        AppListBenefits,
        AppListOfVacancies,
        AppHeaderBlock
    },
    data() {
        return {
            imgContent: [],
        }
    },
    methods: {
        check() {
            vHeaderBlockVacancies().then(result =>
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
.app-vacancies {
    
}
</style>