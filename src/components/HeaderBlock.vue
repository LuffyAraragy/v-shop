<template>
  <div class="header-block">
    <div class="header-block__all-content">
        <img src="@/img/h1/young.png" alt="" class="header-block__background-img">
        <div class="header-block__title">
            {{ onContent }}
        </div>
        <div class="header-block__content-text"
            v-for="(content, index) in 3"
            :key="index"
        >
            <div class="header-block__img">
                0000
            </div>
            <div class="header-block__text">
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
    name: "HeaderBlock",
    props: ["onContent"]
}
</script>

<style>

.header-block {
    text-align: center;
}

.header-block {
    max-width: 100%;
    max-height: 100%;
}

.header-block__all-content {
    
    max-width: 100%;
    max-height: 100%;
}

.header-block__background-img {
    max-width: 100%;
    max-height: 100%;
}


</style>