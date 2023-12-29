<template>
    <button 
        class="app-button"
        :class="innerClass"
    >
        <slot class="text-button">
            {{ text }}
        </slot>
    </button>
    </template>
    
    <script>
    export default {
        name: 'AppButton',
        props: {
            disabled: Boolean,
            hasOutline: Boolean,
            hasWhite: Boolean,
            hasBlack: Boolean,
            hasSmall: Boolean,
            hasGreen: Boolean,
            hasAround: Boolean,
            // Минимальная ширина которая должна быть по макету
            width: {
                type: String,
                default: ''
            },
            text: {
                type: String,
                default: 'Button'
            }
        },
        computed: {
            innerClass() {
                return {
                    '--outline': this.hasOutline,
                    '--white': this.hasWhite,
                    '--black': this.hasBlack,
                    '--custom-width': this.width,
                    '--small': this.hasSmall,
                    '--rounded': this.hasRounded,
                    '--green': this.hasGreen,
                    '--border-around': this.hasAround,
                }
            }
        }
    }
    </script>
    
    <style lang="scss">
    @import '../assets/variables.scss';

    @mixin app-transition($time: 0.1s) {
        transition: $time ease-in-out;
    }

    .app-button {
        align-items: center;
        background-color: $color-green;
        border: none;
        border-radius: $radius;
        color: $color-white;
        display: flex;
        gap: 15px;
        justify-content: center;
        padding: 20px;
        cursor: pointer;

        @include app-transition();

        &.--white:hover {
            border: $border-size-4 solid $color-green;
            // @include app-transition();
        }

        &.--white:focus {
            color: $color-white;
            background: $color-green-black;
        }

        &.--green:hover {
            background: $color-green-bright;
        }

        &.--green:focus {
            color: $color-white;
            background: $color-green-black;
        }

        &.--small:focus {
            background-color: $color-green;
        }

        &.--black:focus {
            background: $color-green;  
        }

        &.--border-around {
            border-radius: $radius-top;
        }

        &.--custom-width {
            min-width: v-bind('width');
        }

        &.--outline {
            border: $border-size-2 solid $color-green;
        }

        &.--black {
            background-color: $color-gray;
        }

        &.--white {
            background-color: $color-white;
            color: $color-green-black;
        }

        &.--green {
            background: $color-green;
        }
    
        &.--rounded {
            border-radius: $radius-top;
        }

        &:disabled {
            border: $border-size-2 solid $color-white-gray;
            color: $color-white-gray;
        }
    }
    </style>