/**
 * Created by loic on 15/01/18.
 */
let map = L.map('mapContainer')
    .setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibG9pY3JvbmRlbCIsImEiOiJjajluNzEweDk0dWNiMzNxdGhmcnF0ZWIyIn0.Re4ujPT0HXaQbX9V5fKL5A'
}).addTo(map);

map.on('moveend', function() {
    console.log(JSON.stringify(map.getBounds()));
});