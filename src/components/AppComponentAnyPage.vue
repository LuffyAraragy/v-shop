<template>
    <div class="app-component-any-page" v-if="isLoad">
        <div class="app-component-any-page__text-title text text--font-weight-800 text--font-size-big text--color-white">
            {{ arrayAnyPages.mainDescription }}
        </div>
        <div class="app-component-any-page__content-all" v-if="arrayAnyPages.descriptionCapabilities != NaN">
            <div class="app-component-any-page__content" 
                v-for="(array, index) in arrayAnyPages.descriptionCapabilities" 
                :key="index"
            >
                <img :src="require(`@/img/anyPage/${arrayAnyPages.imgIcon}`)" alt="" class="app-component-any-page__img">
                <div class="app-component-any-page__text text text--font-weight-800 text--color-white text--font-size-normalx2">
                    {{ array }}
                </div>
            </div>
        </div>
        <AppButton>
            {{ arrayAnyPages.dropdownButton }}
        </AppButton>
    </div>
</template>

<script>
import AppButton from "./AppButton.vue"

export default {
    name: "AppComponentAnyPage",
    components: {
        AppButton
    },
    data() {
        return {
            isLength3: 3,
            isLoad: false,
        }
    },
    props: {
        arrayAnyPages: Array
    },
    mounted() {
        setTimeout(() => {
            this.isLoad = true;
        }, 3000);
    },
}

</script>

<style lang="scss" scoped>
    
.app-component-any-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    width: 100%;
    height: 100%;
    min-height: 400px;
    min-width: 400px;
    //TODO: Сделать изображение обсалютом
    background-image: url(@/img/anyPage/WithoutAgent.svg);

    &__content-all {
        display: flex;
        gap: 72px;
    }

    &__text {
        display: flex;
        align-items: center;
    }

    &__text-title {
        display: flex;
        align-items: center;
        text-align: center;
    }

    &__content {
        display: flex;
        gap: 15px;
    }

    &__img {
        width: 34px;
        height: 34px;
    }

}

</style>