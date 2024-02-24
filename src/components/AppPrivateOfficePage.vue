<template>
    <div class="app-private-office-page container">
        <div class="app-private-office-page__title text text--font-size-big text--font-weight-800 text--color-black">
            Избранные объекты
        </div>
        <div class="app-private-office-page__button-block-link">
            <AppButton class="app-private-office-page__sell" width="160px" :hasWhite="true" :hasOutline="true" @click="filterLikeB">
                Купить
            </AppButton>
            <AppButton class="app-private-office-page__rent" width="160px" :hasWhite="true" :hasOutline="true" @click="filterLikeC">
                Снять
            </AppButton>
        </div>
        <div class="app-private-office-page__card-content">
            <AppCardItem
                v-for="(array, index) in filteredTodos"
                :key="index"
                :card="array"
            >
            
            </AppCardItem>
        </div>
        <div class="app-private-office-page__block-button">
            <AppButton width="100%" :hasOutline="true" :hasWhite="true">
                Нужна помощь специалиста?
            </AppButton>
        </div>
    </div>
</template>

<script>
import AppCardItem from './AppCardItem.vue';

import { storeToRefs } from 'pinia'
import { useTodos } from '@/assets/api/apiFooter';

import AppButton from './AppButton.vue';

export default {
    name: "AppPrivateOfficePage",
    components: {
        AppCardItem,
        AppButton
    },
    setup() {
        const todosStore = useTodos()
        const { filter, filteredTodos } = storeToRefs(todosStore)
        
        return {
            filter,
            filteredTodos,
        };
    },
    methods: {
        filterLikeB() {
            this.filter = "Купить";
        },
        // filterLikeB() {
        //     this.filter = "all";
        // },
        // filterLikeC() {
        //     this.filter = "buy";
        // },
        filterLikeC() {
            this.filter = "Снять";
        },
    }
}

</script>

<style lang="scss" scoped>

.app-private-office-page {
    margin-bottom: 100px;

    &__title {
        margin-top: 60px;
    }

    &__button-block-link {
        display: flex;
        margin: 30px 0;
    }

    &__sell {
        border-radius: 5px 0px 0px 5px;
    }

    &__rent {
        border-radius: 0px 5px 5px 0px;
    }

    &__card-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px 30px;
        width: 100%;
        max-width: 500px;
        height: 100%;
    }

    &__block-button {
        margin-top: 40px;
        display: grid;
        gap: 10px;
    }

}

</style>