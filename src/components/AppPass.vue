<template>
    <div class="app-pass">
        <div class="app-pass__title text__h2">
            Сдать объект в управление
        </div>
        <div class="app-pass__all-input">
            <input class="app-pass__input" placeholder="Имя"/>
            <input class="app-pass__input" placeholder="Номер телефона"/>
            <input class="app-pass__input" placeholder="Тип объекта"/>
        </div>
        <button class="button button--green">
            Сдать в управление
        </button>
    </div>

    <div class="app-in-numbers">
        <div class="app-in-numbers__title text__h2">
            О компании в цифрах
        </div>
        <div class="app-in-numbers__all-content">
            <div class="app-in-numbers__all-numbers">
                <div class="app-in-numbers__block-number">
                    <div class="app-in-numbers__number">
                        1537
                    </div>
                    <div class="app-in-numbers__text">
                        Успешно проведенных сделок
                    </div>
                </div>
                <div class="app-in-numbers__block-number">
                    <div class="app-in-numbers__number">
                        1537
                    </div>
                    <div class="app-in-numbers__text">
                        Довольных клиентов
                    </div>
                </div>
                <div class="app-in-numbers__block-number">
                    <div class="app-in-numbers__number">
                        153
                    </div>
                    <div class="app-in-numbers__text">
                        Клиента инвестируют с нами
                    </div>
                </div>
                <div class="app-in-numbers__block-number">
                    <div class="app-in-numbers__number">
                        34
                    </div>
                    <div class="app-in-numbers__text">
                        Объекта в управлении
                    </div>
                </div>
            </div>
            <img src="@/img/numbers/17926 1.svg" alt="" class="app-in-numbers__img">
        </div>
    </div>
</template>

<script>

export default {
    name: "AppPass"
}

</script>

<style lang="scss" scoped>
.app-pass {
    display: grid;
    gap: 40px;
}

.app-pass__input {
    width: 210px;
    height: 46px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #FFF;
}
    .app-pass__input::placeholder {
        padding-left: 20px;
    }

.app-in-numbers__title {
    margin-top: 100px;
    display: flex;
    justify-content: center;
}
.app-in-numbers__all-content {
    margin-top: 60px;
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: center;
}
.app-in-numbers__block-number {
    height: 100%;
}
.app-in-numbers__number {
    color: #2A7D03;
    font-family: Geometria;
    font-size: 60px;
    font-style: normal;
    font-weight: 800;
    line-height: 60px; /* 100% */
    text-align: center;
}
.app-in-numbers__all-numbers {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 350px;
    gap: 30px;
}
.app-in-numbers__text {
    text-align: center;
}
</style>
