<template>
    <div class="test-movie">
        {{ movie.id }}
    </div>  
</template>

<script>
export default {
    name: "TestMovie",
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