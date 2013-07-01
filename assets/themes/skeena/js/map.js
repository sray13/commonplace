var layer = new MM.TemplatedLayer('http://tilestream.apps.ecotrust.org/v2/commonplace/{Z}/{X}/{Y}.png');
var pipeline = new MM.TemplatedLayer('http://tilestream.apps.ecotrust.org/v2/pipeline/{Z}/{X}/{Y}.png');

var layers = {
	"pipeline": pipeline
};

var center = {
	lat: 54,
	lon: -130
};
var zoom = 7;

// Create a map
window.map = mapbox.map('map', layer, null);

map.addLayer(pipeline);
pipeline.parent.style.opacity = 0

map.centerzoom(center, zoom);
//map.ui.zoomer.add();


window.markerLayer = mapbox.markers.layer().features(skeenaPlaces).factory(function(f) {
	var img = document.createElement('img'),
		delayedHideTimer;

	// var popup = function(e) {
	// 	$(e.target).popover({
	// 		placement: "bottom",
	// 		trigger: "manual",
	// 		animation: "false",
	// 		html: true,
	// 		content: $($(e.target).data('popup')).html()
	// 	}).popover('show');
	// }

	// var hide = function (e){
	// 	delayedHideTimer = window.setInterval(function () {delayHide(e)},150);
	// }

	// function delayHide(e) {
	// 	$(e.target).popover('hide');
	// 	clearInterval(delayedHideTimer);
	// }


	img.className = 'marker-image';
	if (f.properties.image === '') {
		f.properties.image = 'map_voice_wht_90.png'
	}
	img.setAttribute('src', 'assets/themes/skeena/img/map/' + f.properties.image);
	$(img).data('popup', "#" + f.properties.popup).addClass(f.properties.category);

	// MM.addEvent(img, 'mouseover', popup);
	// MM.addEvent(img, 'mouseout', hide);
	// MM.addEvent(img, 'click', popup);
	// MM.addEvent(img, 'touch', popup);

	// $('.swiper-root')
	// 	.on('mouseenter','.active-map .popover',function () {
	// 		clearInterval(delayedHideTimer);
	// 	});

 //    $('.swiper-root').on('click','.popover-close', function () {
 //        $(this).parent().parent().fadeOut(100,function () {$(this).remove()});
 //    });

	return img;
});

var interaction = mapbox.markers.interaction(window.markerLayer);
interaction.formatter(function(feature) {
        var o = feature.properties.content;

        return o;
    });


$(document).ready(function () {
	$('.legend').on('click', 'li', function (e) {
		var $target = $(e.target);
		$target.toggleClass('layer-on');

		if (($target).hasClass('layer-on')) {
			layers[$target.data('layer')].parent.style.opacity = 1;
		} else {
			layers[$target.data('layer')].parent.style.opacity = 0;
		}


	});
})