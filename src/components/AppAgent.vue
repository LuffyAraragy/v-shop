<template>
    <div class="app-agent" v-if="isLoad">
        <div class="app-agent__title text text--font-weight-800 text--font-size-big">
            <slot>
                
            </slot>
        </div>
        <div class="block-content">
            <div class="app-agent__content"
                v-for="(array, index) in arrayAgent" 
                :key="index"
            >
                <div class="circle">
                    <img :src="require(`@/img/${array.img}`)" alt="">
                </div>
                <div class="app-agent__text text text--font-weight-500 text--font-size-normalx2 text--color-black">
                    {{ array.description }}
                </div>
            </div>
        </div>
        <div class="app-agent__button">
            <AppButton width="310px">
                Связаться
            </AppButton>
        </div>
    </div>
</template>

<script >
import AppButton from './AppButton.vue'
export default {
    name: "AppAgent",
    components: { 
        AppButton 
    },
    data() {
        return {
            isLoad: false,
        }
    },
    props: {
        arrayAgent: Array
    },
    mounted() {
        setTimeout(() => {
            this.isLoad = true;
        }, 3000);
    },
}
</script>

<style lang="scss" scoped>
.app-agent {
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin: 100px auto;

    &__content {
        display: flex;
        align-items: center;
        gap: 19px;
        box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.10);
        border-radius: 5px;
        background: #FFF;
        padding: 15px 20px;
        max-width: 540px;
    }

    &__img {
        width: 20px;
        height: 20px;
    }

    &__title {
        text-align: center;
    }

    &__button {
        margin: 0 auto;
    }
}

.block-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.circle {
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 40px; 
    height: 40px;
    background-color: #226702;
    border-radius: 50%;
}

</style>
