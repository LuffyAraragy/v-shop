import {defineStore} from 'pinia'
import {delayResponse} from '@/assets/utils/utilsPromis'



export const useMovieStore = defineStore('movieStore', {
    state: () => ({
        movies: [
            {
                id: 1,
                original_title: "Spider-Man",
                overview:
                  "After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.",
                release_date: "2002-05-01",
                isWatched: false,
              },
              {
                id: 2,
                original_title: "The Batman",
                overview:
                  "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
                release_date: "2022-03-01",
                isWatched: false,
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