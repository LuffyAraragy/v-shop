<template>
    <!-- TODO Это компонент для H1 каждой страницы -->
  <div class="app-header-block" v-if="isLoad">
    <div class="app-header-block__all-content" :style="{ backgroundImage: 'url(' + require(`@/img/h1/${dynamicImageUrl}`) + ')' }">
        <!-- <img src="@/img/h1/young.png" alt="" class="app-header-block__background-img"> -->
        <div class="app-header-block__block-content" v-for="array in imgContent" :key="array.id">
            <div class="app-header-block__title text text--font-size-big text--font-weight-800 text--color-white">
                {{ array.title }}
            </div>
            <div class="app-header-block__content-text-img">
                <div class="app-header-block__content-text"
                    v-for="(content, index) in array.description"
                    :key="index"
                >
                    <img :src="require(`@/img/${array.icon[index]}`)" alt="">
                    <div class="app-header-block__text text text--font-size-normalx2 text--font-weight-800 text--color-white">
                        {{ array.description[index] }}
                    </div>
                </div>
            </div>
            <div class="app-header-block__block-button">
                <AppButton v-for="arrayButton in array.button" :key="arrayButton.id">
                    {{ arrayButton }}
                </AppButton>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import AppButton from './AppButton.vue';

export default {
    name: "AppHeaderBlock",
    props: {
        imgContent: Array,
    },
    components: { 
        AppButton 
    },
    data() {
        return {
            dynamicImageUrl: 'young.png',
            isLoad: false,
        }
    },
    mounted() {
        setTimeout(() => {
            this.isLoad = true;
        }, 3000);
    },
}
</script>

<style lang="scss" scoped>

.app-header-block {
    max-width: 100%;
    max-height: 100%;

    &__block {
        flex: 1;
    }

    &__block-content {
        display: grid;
        gap: 40px;
        max-width: 100%;
        // margin: 0 auto;
    }

    &__all-content {
        max-width: 100%;
        max-height: 100%;
        padding: 100px 0;
        background-size: no-repeat;
        background-size: cover;
        background-position: center;
    }

    &__title {
        margin: 0 auto;
        max-width: 920px;
        text-align: center;
    }
    
    &__background-img {
        max-width: 100%;
        max-height: 100%;
    }

    &__content-text-img {
        display: flex;
        justify-content: center;
        gap: 70px;
    }

    &__img {
        width: 34px;
        height: 34px;
    }

    &__content-text {
        display: flex;
        gap: 15px;
    }

    &__block-button {
        display: flex;
        justify-content: center;
        gap: 15px;
    }

    &__text {
        display: flex;
        align-items: center;
    }
}




</style>