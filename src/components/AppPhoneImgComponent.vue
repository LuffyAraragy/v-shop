<template>
    <div class="app-phone-img-component">
        <div class="app-phone-img-component__circle">
            <img src="@/img/phoneImg/Group.svg" alt="" class="app-phone-img-component__img-phone">
        </div>
    </div>
</template>

<script>

export default {
    name: "AppPhoneImgComponent",
}

</script>

<style lang="scss" scoped>
.app-phone-img-component {

    &__circle {
        width: 65px;
        height: 65px;
        border-radius: 50px;
        background-color: #2A7D03;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__img-phone {
        width: 30px;
        height: 30px;
    }
}
</style>