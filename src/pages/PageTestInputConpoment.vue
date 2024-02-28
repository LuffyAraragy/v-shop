<template>
    <div class="app-test-input-component">
        <div class="app-test-input-component__block">
            <input class="app-input app-input--outline" v-model="newTodoText" type="text">

            <div class="app-object__title text text--font-size-big text--font-weight-700 text--color-black">
                Добавить объект
            </div>
            <div class="app-object__button-controller">
                <AppButton class="app-object__sell" width="50%">
                    Продать
                </AppButton>
                <AppButton class="app-object__rent" width="50%">
                    Сдать
                </AppButton>
            </div>
            <div class="app-object__input-city">
                <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                    Город
                </div>
                <input class="app-input app-input--outline" v-model="newTodoText2" type="text">
                <!-- <input class="app-input app-input--outline"v-model="newTodoText2" type="text"> 

                </input>  -->
            </div>
            <div class="app-object__input-district">
                <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                    Район
                </div>
                <input class="app-input app-input--outline" v-model="newTodoText3" type="text">
            </div>
            <div class="app-object__count-room">
                <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                    Количество комнат
                </div>
                <div class="app-object__container-for-button">
                    <AppButton>

                    </AppButton>
                    <AppButton>

                    </AppButton>
                    <AppButton>

                    </AppButton>
                    <AppButton>

                    </AppButton>
                    <AppButton>

                    </AppButton>
                    <AppButton>

                    </AppButton>
                </div>
            </div>
            <div class="app-object__input-floor">
                <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                    Этаж
                </div>
                <input class="app-input app-input--outline" v-model="newTodoText4" type="text">
            </div>
            <div class="app-object__condition-room">
                <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                    Состояние
                </div>
                <div class="app-object__container-for-button">
                    <AppButton>

                    </AppButton>
                    <AppButton>

                    </AppButton>
                    <AppButton>

                    </AppButton>
                </div>
            </div>
            <div class="app-object__input-floor">
                <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                    Предполагаемая стоимость продажи
                </div>
                <input class="app-input app-input--outline" v-model="newTodoText5" type="text">
                <input class="app-input app-input--outline" v-model="newTodoText6" type="text">
            </div>
            <div class="app-object__input-floor">
                <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                    Фамилия
                </div>
                <input class="app-input app-input--outline" v-model="newTodoText7" type="text">
            </div>
            <div class="app-object__input-floor">
                <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                    Имя
                </div>
                <input class="app-input app-input--outline" v-model="newTodoText8">
            </div>
            <div class="app-object__input-floor">
                <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                    Отчество
                </div>
                <input class="app-input app-input--outline" v-model="newTodoText9" type="text">
            </div>
            <div class="app-object__input-floor">
                <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                    Телефон
                </div>
                <input class="app-input app-input--outline" v-model="newTodoText10" type="text">
            </div>
            <div class="app-object__input-floor">
                <div class="app-object__text text text--font-size-normal text--font-weight-500 text--color-black">
                    Электронная почта
                </div>
                <input class="app-input app-input--outline" v-model="newTodoText11" type="text">
            </div>
            <AppButton :hasWhite="true" width="270px" :hasOutline="true" :hasSmall="true" class="" @click="saveData">
                Разместить объявление
            </AppButton>
        </div>

        <label><input class="app-input app-input--outline" v-model="filter" type="radio" value="all"> All</label>
        <label><input class="app-input app-input--outline" v-model="filter" type="radio" value="finished"> Finished</label>
        <label><input class="app-input app-input--outline" v-model="filter" type="radio" value="unfinished"> Unfinished</label>
        <hr>
        <ul>
            <li v-for="todo in filteredTodos" :key="todo.id">
            <input class="app-input app-input--outline" v-model="todo.isFinished" type="checkbox">
            <!-- {{ todo.text }}
            {{ todo.additionalCharacteristics }}
            {{ todo }} -->
            {{ todo }}
            {{ todo.minPrice }}
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
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTodos } from '@/assets/api/apiFooter';
// import input from './input.vue';
import AppButton from '../components/AppButton.vue';


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

</script>

<style lang="scss" scoped>
.app-test-input-component__block {
    display: grid;
}
</style>