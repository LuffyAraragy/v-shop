<template>
    <div class="app-photo-office container">
        <div class="app-photo-office__title text text--font-weight-800 text--font-size-big">
            Наш офис
        </div>
        <div class="app-photo-office__block-content">
            <img src="@/img/photoOffice/OCERHB0.svg" alt="">
            <div class="app-photo-office__block-img">
                <img src="@/img/photoOffice/5206.svg" alt="" v-for="(array, index) in 4" :key="index" class="img">
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "AppPhotoOffice",
}

</script>

<style lang="scss" scoped>
    .app-photo-office {
        margin: 100px auto;

        &__block-content {
            margin: 40px 0;
            display: flex;
            gap: 30px;
        }

        &__block-img {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
        }
    }
</style>