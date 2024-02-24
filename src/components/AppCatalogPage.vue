<template>
    <div class="app-catalog-page container">
        <!-- <AppSearchComponents>
            
        </AppSearchComponents> -->
        <AppFilter>
            
        </AppFilter>
        <label><input class="app-input" v-model="filter" type="radio" value="all"> All</label>
        <label><input class="app-input" v-model="filter" type="radio" value="finished"> Finished</label>
        <label><input class="app-input" v-model="filter" type="radio" value="unfinished"> Unfinished</label>
        <hr>
        <ul>
            <li v-for="todo in filteredTodos" :key="todo.id">
            <input class="app-input" v-model="todo.isFinished" type="checkbox">
            {{ todo }}
            <!-- {{ todo.minPrice }} -->
            </li>
        </ul>
        <label>
            <!-- <input class="app-input app-input--outline"v-model="newTodoText" type="text" @keypress.enter="addTodo"> -->
            New Todo:
            <!-- <input class="app-input app-input--outline"v-model="newTodoText" type="text">
            <input class="app-input app-input--outline"v-model="newTodoText2" type="text">
            <input class="app-input app-input--outline"v-model="newTodoText3" type="text">
            <input class="app-input app-input--outline"v-model="newTodoText4" type="text">
            <input class="app-input app-input--outline"v-model="newTodoText5" type="text">
            <input class="app-input app-input--outline"v-model="newTodoText6" type="text">
            <input class="app-input app-input--outline"v-model="newTodoText7" type="text">
            <input class="app-input app-input--outline"v-model="newTodoText8" type="text">
            <input class="app-input app-input--outline"v-model="newTodoText9" type="text">
            <input class="app-input app-input--outline"v-model="newTodoText10" type="text"> -->
        </label>
        <button :disabled="!newTodoText" @click="addTodo">Add</button>
        <div class="app-catalog-page__card-content">
            <AppCardItem
                v-for="(array, index) in filteredTodos"
                :key="index"
                :card="array"
            >
            
            </AppCardItem>
        </div>
        <div class="app-catalog-page__block-button">
            <AppButton width="100%">
                Показать ещё
            </AppButton>
            <AppButton width="100%" :hasOutline="true" :hasWhite="true">
                Нужна помощь специалиста?
            </AppButton>
        </div>
    </div>
</template>

<script>
import AppCardItem from './AppCardItem.vue';

// import AppTestInputComponent from './AppTestInputConpoment.vue';
import AppFilter from './AppFilter.vue';

import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTodos } from '@/assets/api/apiFooter';

import AppButton from './AppButton.vue';
// import AppSearchComponents from './AppSearchComponents.vue';

export default {
    name: "AppCatalogPage",
    components: {
        AppCardItem,
        AppFilter,
        AppButton
    },
    setup() {
        let cardObject = useTodos();
        const todosStore = useTodos()
        const { filter, filteredTodos } = storeToRefs(todosStore)

        const newTodoText = ref('')
        const newTodoText2 = ref('')
        const newTodoText3 = ref('')
        const newTodoText4 = ref('')
        const newTodoText5 = ref('')
        const newTodoText6 = ref('')
        const newTodoText7 = ref('')
        const newTodoText8 = ref('')
        const newTodoText9 = ref('')
        const newTodoText10 = ref('')
        const newTodoText11 = ref('')

        function addTodo() {
        if (!newTodoText.value) {
            return
        }

        todosStore.addTodo(
            newTodoText.value, 
            newTodoText2.value, 
            newTodoText3.value, 
            newTodoText4.value, 
            newTodoText5.value, 
            newTodoText6.value, 
            newTodoText7.value, 
            newTodoText8.value, 
            newTodoText9.value, 
            newTodoText10.value, 
            newTodoText11.value, 
            )

        newTodoText.value = ''
        newTodoText2.value = ''
        newTodoText3.value = ''
        newTodoText4.value = ''
        newTodoText5.value = ''
        newTodoText6.value = ''
        newTodoText7.value = ''
        newTodoText8.value = ''
        newTodoText9.value = ''
        newTodoText10.value = ''
        newTodoText11.value = ''

        }
        return {
            cardObject,
            filter,
            filteredTodos,
            addTodo
        };
    },
}

</script>

<style lang="scss" scoped>

.app-catalog-page {
    margin-bottom: 100px;

    &__card-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px 30px;
        width: 100%;
        max-width: 500px;
        height: 100%;
    }

    &__block-button {
        margin-top: 40px;
        display: grid;
        gap: 10px;
    }

}

</style>