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
        data() {
            return {
                
            }
        },
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
            border: 4px solid #2A7D03;
            // @include app-transition();
        }
        &.--white:focus {
            color: #fff;
            background: #226702;
        }
        &.--green:hover {
            background: #309003;
            // @include app-transition();
        }
        &.--green:focus {
            color: #fff;
            background: #226702;
        }
        &.--small:focus {
            background-color: #2A7D03;
        }
        &.--black:focus {
            background: #2A7D03;  
        }
        &.--border-around {
            border-radius: 5px 5px 0px 0px;
        }
        &.--custom-width {
            min-width: v-bind('width');
        }
        &.--outline {
            border: 2px solid #2A7D03;
        }
        &.--black {
            background-color: #2F2D2D;
        }
        &.--white {
            background-color: #fff;
            color: #226702;
        }
        &.--green {
            background: #2A7D03;
        }
    //TODO это просто для пометки по размерам блоков в кнопках
    // width: 160px;
    // height: 39px;
    // width: 185px;
    // height: 36px;
    // width: 200px;
    // height: 50px;
    // width: 220px;
    // height: 36px;
    // width: 251px;
    // height: 36px;
    // width: 255px;
    // height: 60px;
    // width: 270px;
    // height: 50px;
        
    // 100%
    // 310 стандрат
    // TODO подумать что с этим делать
        // &.--size-xl {
        //     width: 185px;
        //     height: 36px;
        // }
        // &.--size-2xl {
        //     width: 200px;
        //     height: 50px;
        // }
        // &.--size-3xl {
        //     width: 220px;
        //     height: 36px;
        // }
        // &.--size-4xl {
        //     width: 250px;
        //     height: 36px;
        // }
        // &.--size-5xl {
        //     width: 255px;
        //     height: 60px;
        // }
        // &.--size-6xl {
        //     width: 270px;
        //     height: 50px;
        // }
        // &.--size-7xl {
        //     width: 100%;
        //     height: 100%;
        // }
        &.--rounded {
            border-radius: 5px 5px 0px 0px;
        }
        &:disabled {
            border: 2px solid #C4C4C4;
            color: #C4C4C4;
        }
    }
    </style>