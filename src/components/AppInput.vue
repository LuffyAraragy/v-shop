<template>
    <input 
        class="app-input"
        :class="innerClass"
        :placeholder="textPlaceholder"
    />

</template>

<script>
export default {
    name: 'AppInput',
    data() {
        return {
            textPlaceholder: "Передаю привет"
        }
    },
    props: {

        disabled: Boolean,
        hasOutline: Boolean,
        hasWhite: Boolean,
        hasGray: Boolean,

        width: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: 'Text'
        },
        placeholder: {
            type: String,
        }
    },
    computed: {
        innerClass() {
            return {
                '--outline': this.hasOutline,
                '--custom-width': this.width,
                '--gray': this.hasGray,
            }
        }
    }
    
}
</script>

<style lang="scss">

@import '../assets/variables.scss';

.app-input {
    padding: 16px 20px;
    text-align: center;
    border-radius: 5px;
    border: none;
    // background: #FFF;
    background: aqua;
    color: #000;

    &.--outline {
        border: 2px solid #F3F3F3;
    }

    &.--custom-width {
        width: v-bind('width');
    }
    &.--gray {
        background-color: #F6F6F6;
    }
}

</style>