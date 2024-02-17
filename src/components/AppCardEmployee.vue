<template>
    <div class="app-card-employee container">
        <div class="app-card-employee__rating-block">
            <img src="@/img/employeeCard/ggg42mxwpm0c5x53d9ys75bxom0oupoj 1.svg" alt="" class="app-card-employee__img img">
            <div class="app-card-employee__grade-block">
                <div class="app-card-employee__stars-block">            
                    <img src="@/img/employeeCard/signs1.svg" alt="" class="app-card-employee__star" v-for="array in 5" :key="array.id">
                </div>
                <img src="@/img/employeeCard/vk.svg" alt="" class="app-card-employee__img">
            </div>
        </div>
        <div class="app-card-employee__title text text--font-size-normalx2 text--font-weight-700">
            Иван Иванов
        </div>
        <!-- TODO ошибка какая то предлагает использовать flex-end -->
        <div class="app-card-employee__text text text--font-size-normal">
            Риелтор с 10-летним стажем
        </div>
        <div class="app-card-employee__description text text--font-weight-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor
        </div>
    </div>
</template>

<script>

export default {
    name: "AppCardEmployee",
}

</script>

<style lang="scss" scoped>
.app-card-employee {
    max-width: 350px;
    padding: 30px 20px 45px 20px;
    background: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.5); 


    &__title {
        margin-top: 30px;
    }

    &__text {
        margin-top: 15px;
    }

    &__description {
        margin-top: 20px;
    }

    &__img {
        border-radius: 50px;
    }

    &__rating-block {
        display: flex;
        justify-content: space-between;
    }

    &__stars-block {
        display: flex;
        gap: 10px;
    }

    &__grade-block {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: flex-end;
    }

    &__star {
        width: 15px;
        height: 15px;
    }

    &__img {
        width: 30px;
        height: 30px;
    }
}

.img {
    width: 100px;
    height: 100px;
}
</style>