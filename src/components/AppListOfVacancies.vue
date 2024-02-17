<template>
    <div class="app-list-of-vacancies container" v-if="isLoad">
        <div class="app-list-of-vacancies__title text text--font-weight-800 text--font-size-big">
            Список вакансий
        </div>
        <div class="app-list-of-vacancies__block-cards">
            <div class="app-list-of-vacancies__card" 
                v-for="(array, index) in arrayListOfVacancies" 
                :key="index"
            >
                <div class="app-list-of-vacancies__content">
                    <div class="app-list-of-vacancies__name text text--font-size-normalx2 text--color-black text--font-weight-700">
                        {{ array.name }}
                    </div>
                    <div class="app-list-of-vacancies__money text text--font-size-normalx2 text--color-green text--font-weight-700">
                        {{ array.money }}
                    </div>
                </div>
                <div class="app-list-of-vacancies__city text text--font-size-normal text--color-black text--font-weight-300">
                    {{ array.city }}
                </div>
            </div>
        </div>
        <AppButton class="app-list-of-vacancies__button" width="310px" :hasGreen="true" :hasOutline="true">
            Прислать резюме
        </AppButton>
    </div>
</template>

<script>
import AppButton from './AppButton.vue';

import { vListOfVacancies } from '@/assets/api/apiFooter'

export default {
    name: "AppListOfVacancies",
    components: { 
        AppButton 
    },
    data() {
        return {
            isLoad: false,
            arrayListOfVacancies: [],
        }
    },
    methods: {
        check() {
            vListOfVacancies().then(result =>
            {
                this.arrayListOfVacancies = result
                console.log(this.arrayListOfVacancies);
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
    .app-list-of-vacancies {
        margin: 100px auto;


        &__block-cards {
            margin: 40px 0;
            display: grid;
            gap: 30px;
            grid-template-columns: repeat(2, 1fr);
        }

        &__card {
            display: grid;
            gap: 30px;
            padding: 30px;
            max-width: 540px;
            background-color: #ffffff;
            
            box-shadow: $color-black-gray;
        }

        &__content {
            display: flex;
            justify-content: space-between;
        }

        &__button {
            margin: 0 auto;
        }
    }

</style>