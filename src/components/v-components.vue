<template>
    <div class="v-component">
        <button class="button">
            Привет коля
        </button>
        <button class="button">
            Привет коля
        </button>
        <button class="button">
            Привет коля
        </button>
        <button class="button">
            Привет коля
        </button>
        <!-- Для создания кнопок опд меню покупок "ГЛАВНАЯ СТРАНИЦА" -->
        <button class="button button--rounded-top">
            Rounded-top
        </button>
        <button></button>
        <button class="button button--rounded-top">
            Rounded-top
        </button>
        <button></button>
        <button class="button button--rounded-top">
            Rounded-top
        </button>
        <button></button>
        <button class="button button--rounded-top ">
            Rounded-top
        </button>

        <button class="button button--rounded-left">
            rounded-left
        </button>
        <button class="button button--rounded-right">
            rounded-right
        </button>

        <input type="text" class="input" placeholder="Заглушка">
        <input type="text" class="input" placeholder="Заглушка">
        <input type="text" class="input" placeholder="Заглушка">
        <input type="text" class="input" placeholder="Заглушка">


        <p class="text__h2">
            Всем привет это text__h1
        </p>

        <p class="text__h2 text__h2--white">
            Всем привет это text__h2
        </p>

        <p class="text">
            Всем привет это text
        </p>

        <div class="menu-left">
            <div class="content">
                Ссылка на страницу
            </div>
            <div class="content">
                Ссылка на страницу
            </div>
            <div class="content">
                Ссылка на страницу
            </div><div class="content">
                Ссылка на страницу
            </div>
            <div class="content">
                Ссылка на страницу
            </div>
            <div class="content">
                Ссылка на страницу
            </div>
            <div class="content">
                Ссылка на страницу
            </div>
            <div class="content">
                Ссылка на страницу
            </div>      
        </div>
    </div>
</template>

<style>
    .menu-left {
        display: flex;
        flex-flow: column;
        width: 180px;
        height: 864px;
        flex-shrink: 0;
        background: #FFF;
        box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.05);
        backdrop-filter: blur(7.5px);
    }
    
    .content {
        display: flex;
        align-items: center;
        padding: 15px 20px;
        border-top: 2px solid #C4C4C4;
        max-width: 100%;
        height: 44px;
        color: #2F2D2D;;
        font-family: Geometria;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; 
    }

    .content__h2 {
        font-size: 16px;
        font-weight: 500;
        line-height: normal;
    }

    /* заделки под серый интерфейс 2 */
    .content--black {
        color: #FFF;
    }

    .menu-left--black {
        background: rgba(0, 0, 0, 0.40);
        backdrop-filter: blur(7.5px);
    }
</style>

<script>

</script>