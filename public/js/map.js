mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map',
    style: "mapbox://styles/mapbox/streets-v12",
    center: coordinates,
    zoom: 9
});

map.on('load', () => {
    map.addSource('location-circle', {
        type: 'geojson',
        data: {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: coordinates
            }
        }
    });

    map.addLayer({
        id: 'circle-layer',
        type: 'circle',
        source: 'location-circle',
        paint: {
            'circle-radius': 60,
            'circle-color': '#fe424d',
            'circle-opacity': 0.2,
            'circle-stroke-width': 0
        }
    });
});

const popup = new mapboxgl.Popup({ offset: 25, closeButton: false })
    .setText("Exact location provided after booking.");

const marker = new mapboxgl.Marker({ color: '#fe424d' })
    .setLngLat(coordinates)
    .addTo(map);

const markerElement = marker.getElement();

markerElement.addEventListener('mouseenter', () => {
    popup.setLngLat(coordinates).addTo(map);
});

markerElement.addEventListener('mouseleave', () => {
    popup.remove();
});