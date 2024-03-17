<template>
    <div class="app-card-employees">
        <img src="@\img\ourEmployees\11867_original 1.svg" alt="" class="app-card-employees__img">
        <div class="app-card-employees__name">
            Иван Иванов
        </div>
        <div class="app-card-employees__description">
            Риелтор с 10-летним стажем
        </div>
    </div>
</template>
<script>

export default {
    name: "AppCardEmployees",
}

</script>

<style lang="scss" scoped>

.app-card-employees {
    &__img {
        max-width: 100%;
    }
}

</style>