<template>
    <div class="app-menu-left">
        <div class="content" v-for="(array, index) in menuLeft" :key="index">
            <img
                v-if="index <= 4"
                :src="require(`@/img/leftMenu/${array.img}`)" 
            >
            <div class="content__text" v-if="index < 5">
                <router-link :to="array.link" class="app-menu-left__link" :class="innerClass">{{ array.dropdownButton }}</router-link>
            </div>
            <div class="text" v-if="index >= 5">
                <router-link :to="array.link" class="app-menu-left__link" :class="innerClass">{{ array.dropdownButton }}</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { testModalController } from '@/assets/api/apiFooter';

export default {
    name: "AppMenuLeft",
    data() {
        return {
            isLoad: false,
        }
    },
    setup() {
        let testModalControllers = testModalController();
        
        return {
            testModalControllers
        };
    },
    props: {
        menuLeft: Array,
        hasWhite: {
            type: Boolean,
            default: false
        },
    },
    computed: {
        innerClass() {
            return {
                '--white': this.hasWhite,
            }
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

.app-menu-left__link {
    text-decoration: none;
    color: #2F2D2D;
}

.--white {
    color: #ffffff;
}
.app-menu-left {
    display: flex;
    flex-flow: column;
    width: 180px;
    height: 864px;
    flex-shrink: 0;
    background: #FFF;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(7px);
}

.content {
    display: flex;
    gap: 7px;
    align-items: center;
    padding: 15px 20px;
    border-top: 2px solid #C4C4C4;
    max-width: 100%;
    height: 44px;
    color: #2F2D2D;;
    font-family: Geometria;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; 
}
</style>