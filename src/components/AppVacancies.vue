<template>
    <div class="app-vacancies">
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

export default {
    name: "AppVacancies",
    components: {
        AppImgAndText,
        AppListBenefits,
        AppListOfVacancies
    }
}

</script>

<style lang="scss" scoped>
.app-vacancies {
    margin: 100px auto;
}
</style>