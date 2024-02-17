<template>
    <!-- <div class="app-test-movie">
        {{ movie.id }}
    </div> -->
    <div class="test-relative">
        <div>
            ghjbsdgokrtl
            ghjbsdgokrtl
            ghjbsdgokrtl
            ghjbsdgokrtl
            ghjbsdgokrtl
            ghjbsdgokrtl
            ghjbsdgokrtl
            ghjbsdgokrtl
        </div>
        <div class="test-absolute">
            Огурецццццццццццццццццццццццццц
        </div>
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
.test-absolute {
    position: absolute;
}
</style>