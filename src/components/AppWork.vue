<template>
    <div class="app-work">
        <div class="text__h2 app-work__title">
            Этапы работ
        </div>
        <div class="app-work__content-all">
            <div class="app-work__content" v-for="(array, index) in arrayBank2" :key="index">
                <div class="app-work__all-stages">
                    <div class="app-work__circle">
                        {{ index+1 }}
                    </div>
                    <img :src="require(`@/img/work/${array[0]}`)" alt="" class="app-work__img">

                    <div class="text__20px test1">
                        {{ array[1] }}
                    </div>
                    <div class="text__h3 test2">
                        {{ array[2] }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import {vBank2} from '@/assets/api/apiFooter'




export default {
    name: "AppWork",
    
    components: {
        
    },
    data() {
        return {
            arrayBank2: []
        }
    },
    
    methods: {
        check() {   
            vBank2().then(result =>
                {
                    this.arrayBank2 = result
                    console.log(this.arrayBank2);
                })
        }
    },
    mounted() {
        this.check();
        
    }
    
}

</script>

<style lang="scss" scoped>

.app-work__title {
    display: flex;
    justify-content: center;
}

.app-work__content-all {
    /* Отцентровать весь контент кроме Этапов работы */
    display: flex;
    justify-content: center;
    column-gap: 30px;
}

.app-work__circle {
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

.app-work__all-stages {
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
 
