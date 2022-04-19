mapboxgl.accessToken = 'pk.eyJ1IjoiYnVueWF1Y2giLCJhIjoiY2wxd2c2NnZzMGRuZjNqbXRwc3Z0bmRzNCJ9.fy--DxMH6e9kvWy4BO746w';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-79.4512, 43.6568],
zoom: 8
});

const coordinatesGeocoder = function (query) {

 
function coordinateFeature(lng, lat) {
return {
center: [lng, lat],
geometry: {
type: 'Point',
coordinates: [lng, lat]
},
place_name: 'Lat: ' + lat + ' Lng: ' + lng,
place_type: ['coordinate'],
properties: {},
type: 'Feature'
};
}
 


};
 
