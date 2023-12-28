<template>
  <div class="app-header-block">
    <div class="app-header-block__all-content">
        <img src="@/img/h1/young.png" alt="" class="app-header-block__background-img">
        <div class="app-header-block__title">
            {{ onContent }}
        </div>
        <div class="app-header-block__content-text"
            v-for="(content, index) in 3"
            :key="index"
        >
            <div class="app-header-block__img">
                0000
            </div>
            <div class="app-header-block__text">
                Гибкая система вознаграджения
            </div>
        </div>
        <button class="button123" :style="onContent">
            Сдать в управление
        </button>
        <button class="button123">
            Сдать в управление
        </button>
    </div>
  </div>
</template>

<script>
export default {
    name: "AppHeaderBlock",
    props: ["onContent"]
}
</script>

<style lang="scss" scoped>

.app-header-block {
    text-align: center;
    max-width: 100%;
    max-height: 100%;

    &__all-content {
        max-width: 100%;
        max-height: 100%;
    }
    
    &__background-img {
        max-width: 100%;
        max-height: 100%;
    }
}




</style>