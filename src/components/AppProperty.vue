<template>
    <div class="app-property">
        <div class="test block">
            <div class="app-property__data" v-for="(array, index) in card" :key="index">
                <div class="app-property__type text text--color-gray text--font-weight-400 text--font-size-normal">
                    <!-- {{ array.characteristics[0].name }} -->
                    {{ array.name }}
                    <span class="app-property__description text text--color-black text--font-weight-500 text--font-size-normal">
                        <!-- {{ array.characteristics[index].description }} -->
                        {{ array.description }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "AppProperty",
    props: {
        card: Array
    },
}
</script>
<style lang="scss">

.app-property {

    &__data {
        // width: 200px;
        // max-width: 100%;
        display: flex;
    }

    &__type {
        width: 100%;
    }

    &__description {
        width: 100%;
    }
}

.test {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 19px;
}

</style>