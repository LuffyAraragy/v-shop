<template>
    <div class="v-agent">
        <div class="agent text__h2">
            Агент
        </div>
        <div class="block-content">
            <div class="v-agent__content">
                <div class="circle">
                    <img src="@/img/agent/reward 1.svg" alt="" class="v-agent-img">
                </div>
                <div class="text__20px">
                    Привет
                </div>
            </div>
            <div class="v-agent__content">
                <div class="circle">
                    <img src="@/img/agent/buildings 1.svg" alt="" class="v-agent-img">
                </div>
                <div class="text__20px">
                    Привет
                </div>
            </div>
            <div class="v-agent__content">
                <div class="circle">
                    <img src="@/img/agent/information-2 1.svg" alt="" class="v-agent-img">
                </div>
                <div class="text__20px">
                    Привет
                </div>
            </div>
            <div class="v-agent__content">
                <div class="circle">
                    <img src="@/img/agent/affiliate 1.svg" alt="" class="v-agent-img">
                </div>
                <div class="text__20px">
                    Привет
                </div>
            </div>
        </div>
        <button class="button button--green v-agent__button">
            Связаться
        </button>
    </div>
</template>

<style>
.v-agent {
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 40px;
}
.agent {
    text-align: center;
}
.block-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}
.v-agent__button {
    margin: auto;
}
.v-agent__content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 19px;
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

.v-agent-img {
    
    width: 20px;
    height: 20px;
}

</style>

<script>

</script>