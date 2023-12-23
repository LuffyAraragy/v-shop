<template>
    <div class="card-object">
        <div class="card-object__property-block">
            <div class="card-object__title">

            </div>
            <app-property>

            </app-property>
        </div>
        <div class="card-object__card-block">
            <div class="card-object__title">

            </div>
            <div class="card-object__card">

            </div>
        </div>
        <div class="card-object__description-block block">
            <div class="card-object__title">
                Описание
            </div>
            <div class="card-object__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
        <app-property>

        </app-property>
        <div class="alax">
            <card-item
                v-for="(array, index) in arrayFromCard"
                :key="index"
                :arrayCardService="array"
                
            >

            </card-item>
        </div>
        
        <div class="card-object__location-block block">
            <div class="title">

            </div>
            <div class="card-object__location">
                
            </div>
        </div>
    </div>
</template>

<script>
import AppProperty from './AppProperty.vue'
import CardItem from './CardItem.vue'
import {vCardService} from '@/assets/api/apiFooter'

export default {
    name: "CardObject",
    components: {
        AppProperty,
        CardItem,
    },
    data() {
        return {
            arrayFromCard: [],
            let1: false
        }
    },
    methods: {
        check() {
            vCardService().then(result =>
            {
                this.arrayFromCard = result
                console.log(this.arrayFromCard);
            }); 
            
        }, 
    },
    mounted() {
        this.check();
        setTimeout(() => {
            this.let1 = true;
        }, 3000);
    },
}
</script>

<style lang="scss" scoped>

// .alax {
//     display: flex;
//     height: 200px;
// }
.card-object {
    max-width: 730px;
    margin: 0 auto;
    padding: 0 15px;
    background-color: rgb(252, 172, 252);
    height: 100%;
}

</style>