<template>
    <div class="app-property">
        <div class="test block">
            <div class="app-property__data" v-for="(array, index) in 8" :key="index">
                <div class="app-property__type">
                    City
                </div>
                <div class="app-property__description">
                    Ekaterinburg
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "AppProperty"
}
</script>
<style lang="scss">
.test {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 19px;
}
.app-property__data {
    width: 100px;
    display: flex;
}
</style>