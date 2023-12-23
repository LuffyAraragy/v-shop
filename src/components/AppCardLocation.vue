<template lang>
    <div id="container" class="app-card-location">
        
    </div>
     <p v-if="error">Ошибка: {{ error }}</p>
    <p v-else-if="position">Широта: {{ left=position.coords.latitude }}, Долгота: {{ right=position.coords.longitude }}</p>
    <p v-else>Определение местоположения…</p>
    <p>
        GHbdtn vbh: {{ this.left }} {{ this.right }}
    </p>
</template>

<script>

import { load } from '@2gis/mapgl';
// import { Directions } from '@2gis/mapgl-directions';

export default {
    name: 'AppCardLocation',
    data() {
        return {
            position: null,
            error: null,
            left: "55.31878",
            right: "25.23584",
            arrayCenter: [],

        }
    },

    mounted() {
            load().then((mapglAPI) => {
            const map = new mapglAPI.Map('container', {
                center: [55.31878, 25.23584],
                zoom: 13,
                key: '5156e6a1-8f37-4c4a-9b4d-748a6a826a9d',
            });
            new mapglAPI.CircleMarker(map, {
                    coordinates: this.arrayCenter,
                    radius: 14,
                    color: '#0088ff',
                    strokeWidth: 4,
                    strokeColor: '#ffffff',
                    stroke2Width: 6,
                    stroke2Color: '#0088ff55',
                });
                
            // const directions = new Directions(map, {
            //     directionsApiKey: '5156e6a1-8f37-4c4a-9b4d-748a6a826a9d',
            // });
            // directions.pedestrianRoute({
            //     points: [
            //         [position.coords.longitude, position.coords.latitude],
            //         [position.coords.longitude+0.04, position.coords.latitude+0.04],
            //     ],
            // });
        // ЗАПРАШИВАЕТ ДАННЫЕ МОЕГО МЕСТОПОЛОЖЕНИЯ  
        if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.position = position;
                // this.arrayCenter = [position.coords.longitude, position.coords.latitude]
                this.arrayCenter = [position.coords.longitude, position.coords.latitude]
                map.setCenter(this.arrayCenter);
                map.setZoom(16);
                console.log("this.arrayCenter " + this.arrayCenter);
                
            },
            (error) => {
                this.error = error.message;
            }
        );
        } else {
        this.error = "Геолокация недоступна";
        }

            // 
        });
        // load().then((mapglAPI) => {});
    }
}


</script>

<style lang="scss">
    #container {
        width: 730px;
        height: 395px;
    }
</style>