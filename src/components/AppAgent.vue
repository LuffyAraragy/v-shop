<template>
    <div class="app-agent">
        <div class="agent text__h2">
            Агент
        </div>
        <div class="block-content">
            <div class="app-agent__content">
                <div class="circle">
                    <img src="@/img/agent/reward 1.svg" alt="" class="app-agent-img">
                </div>
                <div class="text__20px">
                    Привет
                </div>
            </div>
            <div class="app-agent__content">
                <div class="circle">
                    <img src="@/img/agent/buildings 1.svg" alt="" class="app-agent-img">
                </div>
                <div class="text__20px">
                    Привет
                </div>
            </div>
            <div class="app-agent__content">
                <div class="circle">
                    <img src="@/img/agent/information-2 1.svg" alt="" class="app-agent-img">
                </div>
                <div class="text__20px">
                    Привет
                </div>
            </div>
            <div class="app-agent__content">
                <div class="circle">
                    <img src="@/img/agent/affiliate 1.svg" alt="" class="app-agent-img">
                </div>
                <div class="text__20px">
                    Привет
                </div>
            </div>
        </div>
        <button class="button button--green app-agent__button">
            Связаться
        </button>
    </div>
</template>

<script >
export default {
    name: "AppAgent"
}
</script>

<style lang="scss" scoped>
.app-agent {
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 40px;

    &__button {
        margin: auto;
    }

    &__content {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 19px;
    }
}

.agent {
    text-align: center;
}
.block-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.circle {
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 40px; 
    height: 40px;
    background-color: #226702;
    border-radius: 50%;
}

.app-agent-img {
    
    width: 20px;
    height: 20px;
}

</style>
