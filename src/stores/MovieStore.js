import {defineStore} from 'pinia'
import {delayResponse} from '@/assets/utils/utilsPromis'



export let useMovieStore = defineStore('movieStore', {
    state: () => ({
        movies: [
          { 
            id: 1,
            img: ["VladaSteblina.png", "5206 1.png", "23184 1.png"], 
            price: "3 900 000 ₽", 
            icon: "love.svg",
            characteristicsTitle: "Характеристики",
            characteristics: [
              {name:"Этаж:", description: "7"},
              {name:"Всего этажей:", description: "15"},
              {name:"Тип дома: ", description: "Монолитный"},
              {name:"Год постройки ", description: "2019"},
              {name:"Количество комнат: ", description: "2"},
              {name:"Общая площадь: ", description: "73 кв. м."},
              {name:"Жилая площадь: ", description: "56 кв. м."},
              {name:"Площадь кухни: ", description: "12 кв. м."},
            ],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            additionalCharacteristicsTitle: "Дополнительные характеристики",
            additionalCharacteristics: [
              {name:"Этаж:", description: "7"},
              {name:"Всего этажей:", description: "15"},
              {name:"Тип дома: ", description: "Монолитный"},
              {name:"Год постройки ", description: "2019"},
              {name:"Количество комнат: ", description: "2"},
              {name:"Общая площадь: ", description: "73 кв. м."},
              {name:"Жилая площадь: ", description: "56 кв. м."},
              {name:"Площадь кухни: ", description: "12 кв. м."},
            ], 
            address: "ул. Воскресенская 12А", 
            metro: "м. Сокольники", 
            onLiked: false
          },
          { 
            id: 2,
            img: ["VladaSteblina.png", "5206 1.png", "23184 1.png"], 
            price: "3 900 000 ₽", 
            icon: "love.svg",
            characteristicsTitle: "Характеристики",
            characteristics: [
              {name:"Этаж:", description: "7"},
              {name:"Всего этажей:", description: "15"},
              {name:"Тип дома: ", description: "Монолитный"},
              {name:"Год постройки ", description: "2019"},
              {name:"Количество комнат: ", description: "2"},
              {name:"Общая площадь: ", description: "73 кв. м."},
              {name:"Жилая площадь: ", description: "56 кв. м."},
              {name:"Площадь кухни: ", description: "12 кв. м."},
            ],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            additionalCharacteristicsTitle: "Дополнительные характеристики",
            additionalCharacteristics: [ 
              {name:"Этаж:", description: "7"},
              {name:"Всего этажей:", description: "15"},
              {name:"Тип дома: ", description: "Монолитный"},
              {name:"Год постройки ", description: "2019"},
              {name:"Количество комнат: ", description: "2"},
              {name:"Общая площадь: ", description: "73 кв. м."},
              {name:"Жилая площадь: ", description: "56 кв. м."},
              {name:"Площадь кухни: ", description: "12 кв. м."},
            ], 
            address: "ул. Воскресенская 12А", 
            metro: "м. Сокольники", 
            onLiked: false
          },
        ]
    }),
    getters: {

    },
    actions: {
      // search - массив данных или массив объектов
      async getSetTimout(search) {
        return delayResponse(search);
      }
    },

});