<template>
    <div class="app-object-website container" v-if="isLoad">
        <AppMenuTop>

        </AppMenuTop>
        <AppAddressOffice>

        </AppAddressOffice>
        <div class="app-object-website__controller-content">
            <div class="app-object-website__block-information">
                <AppProperty>

                </AppProperty>
                <AppCardLocation>
                    
                </AppCardLocation>
                <AppCardObject>

                </AppCardObject>
                <AppProperty>

                </AppProperty>
                <AppCardItem 
                    v-for="(array, index) in arrayCard"
                    :key="index"
                    :card="array"
                >

                </AppCardItem>
            </div>
            <div class="app-object-website__block-information-transaction">
                <AppInformationObject>

                </AppInformationObject>
            </div>
        </div>
    </div>
</template>

<script>
import AppMenuTop from './AppMenuTop.vue';
import AppAddressOffice  from './AppAddressOffice .vue';
import AppInformationObject from './AppInformationObject.vue'
import AppCardObject from './AppCardObject.vue'
import AppCardLocation from './AppCardLocation.vue'
import AppCardItem from './AppCardItem.vue';
import AppProperty from './AppProperty.vue';
import {vServiceCardList} from '@/assets/api/apiFooter'



export default {
    name: "AppObjectWebsite",
    data() {
        return {
            isLoad: false,
            arrayCard: []
        }
    },
    components: {
        AppMenuTop,
        AppAddressOffice,
        AppInformationObject,
        AppCardObject,
        AppCardLocation,
        AppCardItem,
        AppProperty,
    },
    methods: {
        check() {
            vServiceCardList().then(result =>
            {
                this.arrayCard = result
                console.log(this.arrayCard);
            });
        },
    },

    inject: ["arrayCard"],

    mounted() {
        this.check();
        setTimeout(() => {
            this.isLoad = true;
        }, 3000);
    },
}

</script>

<style lang="scss" scoped>

    .app-object-website__controller-content {
        display: flex;
        gap: 20px;
    }

</style>