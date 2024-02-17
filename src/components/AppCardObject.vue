<template>
    <div class="app-card-object">
        <div class="app-card-object__description-block block">
            <div class="app-card-object__title">
                Описание
            </div>
            <div class="app-card-object__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
    </div>
</template>

<script>
// import CardItem from './CardItem.vue'
import {vCardService} from '@/assets/api/apiFooter'

export default {
    name: "AppCardObject",
    components: {
        // CardItem,
    },
    data() {
        return {
            arrayFromCard: [],
            isLoad: false
        }
    },
    methods: {
        check() {
            vCardService().then(result =>{
                this.arrayFromCard = result
                console.log(this.arrayFromCard);
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
.app-card-object {
    max-width: 730px;
    margin: 0 auto;
    padding: 0 15px;
}

</style>