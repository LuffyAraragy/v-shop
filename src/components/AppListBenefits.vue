<template>
    <div class="app-list-benefits">
        <div class="app-list-benefits__content" 
            v-for="(array, index) in 6"
            :key="index"
        >
            <img src="@/img/listBenefits/company 1.svg" alt="" class="app-list-benefits__img">
            <div class="app-list-benefits__description">
                Высокий % от сделки
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "AppListBenefits",
}
</script>
<style lang="scss" scoped>

.app-list-benefits {
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 50px;

    &__content {
        display: flex;
        gap: 20px;
    }

    &__img {
        width: 30px;
        height: 30px;
    }

    &__description {
        display: flex;
        align-items: center;
    }
}
    
</style>