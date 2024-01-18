<template>
    <div class="app-list-benefits" v-if="isLoad">
        <div class="app-list-benefits__content" 
            v-for="(array, index) in arrayListBenefits"
            :key="index"
        >
            <img :src="require(`@/img/${array.img}`)" alt="" class="app-list-benefits__img">
            <div class="app-list-benefits__description">
                {{ array.description }}
            </div>
        </div>
    </div>
</template>
<script>
import { vListBenefits } from '@/assets/api/apiFooter'

export default {
    name: "AppListBenefits",
    data() {
        return {
            isLoad: false,
            arrayListBenefits: [],
        }
    },
    methods: {
        check() {
            vListBenefits().then(result =>
            {
                this.arrayListBenefits = result
                console.log(this.arrayListBenefits);
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

    &__img {
        width: 30px;
        height: 30px;
    }
}
    
</style>