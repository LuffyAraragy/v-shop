<template>
    <div class="app-test-movie">
        {{ movie.id }}
    </div>  
</template>

<script>
export default {
    name: "AppTestMovie",
    data() {
        return {

        }
    },
    props: {
        movie: {
            type: Object,
            required: true,
            default: () => {},
        }
    }
}
</script>

<style lang="scss">
    
</style>