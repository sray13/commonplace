var layer = new MM.TemplatedLayer('http://tilestream.apps.ecotrust.org/v2/commonplace/{Z}/{X}/{Y}.png');

var center = {
	lat: 54,
	lon: -130
};
var zoom = 7;

// Create a map
window.map = mapbox.map('map', layer, null, []);



map.centerzoom(center, zoom);

window.markerLayer = mapbox.markers.layer().features(skeenaPlaces).factory(function(f) {
	var img = document.createElement('img');

	var popup = function(e) {
		debugger;
		$(e.target).popover({
			placement: "bottom",
			trigger: "manual",
			animation: "false",
			html: true,
			content: $($(e.target).data('popup')).html()
		}).popover('show');
	}
	img.className = 'marker-image';
	img.setAttribute('src', 'assets/themes/skeena/img/map/' + f.properties.image);
	$(img).data('popup', "#" + f.properties.popup);
	MM.addEvent(img, 'click', popup);
	return img;
});