<template>
    <div class="v-work">
        <div class="text__h2 v-work__title">
            Этапы работ
        </div>
        <div class="v-work__content-all">
            <div class="v-work__content">
                <div class="v-work__all-stages">
                    <div class="v-work__circle">
                        1
                    </div>
                    <img src="@/img/work/multimedia-option 5.svg" alt="" class="v-work__img">

                    <div class="text__20px test1">
                        Вы оставляете заявку
                    </div>
                    <div class="text__h3 test2">
                        Вы оставляете заявку, мы связываемся с Вами 
                        для уточнения подробностей, согласовываем дату и время встречи
                    </div>
                </div>
            </div>
            <div class="v-work__content">
                <div class="v-work__all-stages">
                    <div class="v-work__circle">
                        1
                    </div>
                    <img src="@/img/work/multimedia-option 5.svg" alt="" class="v-work__img">

                    <div class="text__20px test1">
                        Вы оставляете заявку
                    </div>
                    <div class="text__h3 test2">
                        Вы оставляете заявку, мы связываемся с Вами 
                        для уточнения подробностей, согласовываем дату и время встречи
                    </div>
                </div>
            </div>
            <div class="v-work__content">
                <div class="v-work__all-stages">
                    <div class="v-work__circle">
                        1
                    </div>
                    <img src="@/img/work/multimedia-option 5.svg" alt="" class="v-work__img">

                    <div class="text__20px test1">
                        Вы оставляете заявку
                    </div>
                    <div class="text__h3 test2">
                        Вы оставляете заявку, мы связываемся с Вами 
                        для уточнения подробностей, согласовываем дату и время встречи
                    </div>
                </div>
            </div>
            <div class="v-work__content">
                <div class="v-work__all-stages">
                    <div class="v-work__circle">
                        1
                    </div>
                    <img src="@/img/work/multimedia-option 5.svg" alt="" class="v-work__img">

                    <div class="text__20px test1">
                        Вы оставляете заявку
                    </div>
                    <div class="text__h3 test2">
                        Вы оставляете заявку, мы связываемся с Вами 
                        для уточнения подробностей, согласовываем дату и время встречи
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.v-work__title {
    display: flex;
    justify-content: center;
}
.v-work__content-all {
    /* Отцентровать весь контент кроме Этапов работы */
    display: flex;
    justify-content: center;
    column-gap: 30px;
}
.v-work__circle {
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Geometria;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 100% */
    width: 65px; 
    height: 65px;
    background-color: #2A7D03;;
    border-radius: 50%;
}
.v-work__all-stages {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    /* column-gap: 30px; */
    row-gap: 20px;
    width: 255px;
    
}

.test1 {
    grid-row: 2;
    grid-column: 1 / 3;
    max-width: 255px
}

.test2 {
    grid-row: 3;
    grid-column: 1 / 3;
}
</style>
 
<script>

</script>
