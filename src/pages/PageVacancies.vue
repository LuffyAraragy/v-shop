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
import AppImgAndText from '../components/AppImgAndText.vue';
import AppListBenefits from '../components/AppListBenefits.vue';
import AppListOfVacancies from '../components/AppListOfVacancies.vue';
import AppHeaderBlock from '../components/AppHeaderBlock.vue';

import { vHeaderBlockVacancies } from '@/assets/api/apiFooter'


export default {
    name: "PageVacancies",
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