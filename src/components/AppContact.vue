<template>
    <div class="app-contact container">
        <AppCardLocation>

        </AppCardLocation>
        <AppQuestions>

        </AppQuestions>
    </div>
</template>
<script>
import AppCardLocation from './AppCardLocation.vue';
import AppQuestions from './AppQuestions.vue';


export default {
    name: "AppContact",
    components: {
        AppQuestions,
        AppCardLocation
    },
    data() {
        return {
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
    
</style>