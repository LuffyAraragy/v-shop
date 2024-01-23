<template>
    <div class="app-checkbox-component">
        <input type="checkbox" class="myCheckbox">
        <!-- <label for="myCheckbox" class="app-checkbox-component__block-checkbox"> -->
            <slot class="app-checkbox-component__checkbox">

            </slot>
        <!-- </label> -->
    </div>
</template>

<script>

export default {
    name: "AppCheckboxComponent"
}

</script>

<style lang="scss" scoped>

.app-checkbox-component {
    display: flex;
    gap: 15px;

    &__checkbox {
        text-align: center;
    }
}

.myCheckbox {
    width: 20px;
    height: 20px;
    border: 2px solid #ccc;
    border-radius: 5px;
    position: relative;
}

.myCheckbox:checked::after {
    content: '\2713';
    display: block;
    text-align: center;
    font-size: 16px;
    color: white;
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #2A7D03;
    border-radius: 3px;
}
</style>