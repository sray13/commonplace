var center = {
    lat: 54,
    lon: -130
};
var zoom = 7;

// Create a map
window.map = L.mapbox.map('map', null, { 
    zoomControl: false,
    keyboard: false,
    maxBounds:[
        [60.72, -117.07],
        [44.59, -149.32]
    ]
});

map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();

new L.Control.Zoom({ position: 'bottomright' }).addTo(map);
map.addLayer(L.tileLayer('http://tilestream.apps.ecotrust.org/v2/commonplace/{z}/{x}/{y}.png'));
map.setView([center.lat, center.lon], zoom);

function onEachFeature(feature, layer) {
    var popupContent =  $("#" + feature.properties.popup).html();
    layer.bindPopup(popupContent, {
        closeButton: true,
        minWidth: 320
    });
}

var voicesLayer = L.geoJson(voices, {
    pointToLayer: function (feature, latlng) {
        var image = feature.properties.image;
        if (image === '') {
            image = 'map_voice_wht_90.png';
        }
        return L.marker(latlng, {
            icon: L.icon({
                iconUrl: 'assets/themes/skeena/img/map/' + image,
                iconSize: [32, 37],
                iconAnchor: [16, 37],
                popupAnchor: [0, -28]
            })
        });
    },
    onEachFeature: onEachFeature
});

var imageLayer = L.geoJson(images, {
    pointToLayer: function (feature, latlng) {
        var image = feature.properties.image;
        if (image === '') {
            image = 'map_image_wht.png';
        }
        return L.marker(latlng, {
            icon: L.icon({
                iconUrl: 'assets/themes/skeena/img/map/' + image,
                iconAnchor: [16, 37],
                popupAnchor: [0, -28]
            })
        });
    },
    onEachFeature: onEachFeature
});


var essayLayer = L.geoJson(essays, {
    pointToLayer: function (feature, latlng) {
        var image = feature.properties.image;
        if (image === '') {
            image = 'map_essay_wht.png';
        }
        return L.marker(latlng, {
            icon: L.icon({
                iconUrl: 'assets/themes/skeena/img/map/' + image,
                iconAnchor: [16, 37],
                popupAnchor: [0, -28]
            })
        });
    },
    onEachFeature: onEachFeature
});

$.get('assets/themes/skeena/places/pipeline.geojson', function (data) {
    layers.pipeline = new L.GeoJSON(JSON.parse(data), {
        style: {
            "color": "black",
            "weight": 6,
            "opacity": 1
        }
    });
});

$.get('assets/themes/skeena/places/majcities.geojson', function (data) {
    layers.places = new L.GeoJSON(JSON.parse(data), {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: L.divIcon({
                    html: '<img src="assets/themes/skeena/img/map/map_image_wht.png"><span>' + feature.properties.NAME + '</span>'
                })
            });
        }
    });
});


var layers = {
    voices: voicesLayer,
    images: imageLayer,
    essays: essayLayer
};


$(document).ready(function () {
    $('.leaflet-control-zoom').addClass('hidden');
    $('.legend').on('click', 'li', function (e) {
        var $target = $(e.target);
        $target.toggleClass('layer-on');

        if (($target).hasClass('layer-on')) {
            layers[$target.data('layer')].addTo(map);
        } else {
            map.removeLayer(layers[$target.data('layer')]);
        }
    });
});