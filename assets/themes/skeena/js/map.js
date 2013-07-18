var center = {
    lat: 54,
    lon: -130
};
var zoom = 6;

// Create a map
window.map = L.mapbox.map('map', null, { 
    zoomControl: false,
    keyboard: false,
    markerZoomAnimation: false,
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


function onEachFeature_wide(feature, layer) {
    layer.on('click', function (e) {  
        var zoom = map.getZoom();
        console.log(zoom);
        var point = new L.latLng(e.target.feature.properties.coordinates);
        if (zoom < 8) {
            map.setView(point,zoom+3);
        } 
    });
}

function onEachFeature(feature, layer) {
    var popupContent =  $("#" + feature.properties.popup).html();
    // console.log('opening');
    layer.bindPopup(popupContent, {
        closeButton: true,
        minWidth: 320,
        autoPanPadding: new L.Point(75, 75)
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
                //iconSize: [32, 37],
                iconAnchor: [16, 37],
                popupAnchor: [0, -28]
            })
        });
    },
    onEachFeature: onEachFeature
});
var voicesLayer_wide = L.geoJson(voices_wide, {
    pointToLayer: function (feature, latlng) {
        var image = feature.properties.image;
        if (image === '') {
            image = 'map_voice_wht_90.png';
        }
        return L.marker(latlng, {
            icon: L.icon({
                iconUrl: 'assets/themes/skeena/img/map/' + image,
                //iconSize: [32, 37],
                iconAnchor: [16, 37],
                popupAnchor: [0, -28]
            })
        });
    },
    onEachFeature: onEachFeature_wide
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
    layers_wide.pipeline = layers.pipeline;
});

$.get('assets/themes/skeena/places/places.geojson', function (data) {
    layers.places = new L.GeoJSON(JSON.parse(data), {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: L.divIcon({
                    html: '<img src="assets/themes/skeena/img/map/map_place_plus.png"><span>' + feature.properties.Feature + '</span>',
                    opacity: feature.properties.Class_Deta === 'Town' ? 1: 0
                })
            });
        }
    });
    layers_wide.places = layers.places;
});


var layers = {
    voices: voicesLayer,
    images: imageLayer,
    essays: essayLayer,
};

var layers_wide = {
    voices: voicesLayer_wide,
    images: imageLayer,
    essays: essayLayer
};
var currentLayers = layers_wide;
map.on('zoomstart', function () {
    $.each(currentLayers, function (i, layer) {
        map.removeLayer(layer);
    });
});


map.on('zoomend', function () {
    var zoom = map.getZoom();
    if (zoom < 9) {
        currentLayers = layers_wide;
    } else {
        currentLayers = layers;
    } 
    $('.layer-on').each(function (i, layer) {
        currentLayers[$(layer).data('layer')].addTo(map);
    });
});

$(document).ready(function () {
    var currentLayers = layers_wide;

    $('.leaflet-control-zoom').addClass('hidden');
    $('.legend').on('click', 'li', function (e) {
        var $target = $(e.target);
        $target.toggleClass('layer-on');

        if (($target).hasClass('layer-on')) {
            currentLayers[$target.data('layer')].addTo(map);
        } else {
            map.removeLayer(currentLayers[$target.data('layer')]);
        }
    });
});
