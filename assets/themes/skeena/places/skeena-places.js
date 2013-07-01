---
---
var skeenaPlaces = [];
{% for post in site.posts %}{% if post.latitude && post.longitude %}
// {{ post.title }}
skeenaPlaces.push({
	"geometry": {
		"type": "Point",
		"coordinates": [ {{ post.longitude }}, {{ post.latitude }} ]
	},
	"properties": {
		"image": "{{ post.map-icon }}",
		"title": "{{ post.title }}",
		"content" : $("#popup-{{post.url | replace:'/',''}}-content").html(),
		"category": "{{ post.category }}"
		//"popup": "popup-{{post.url | replace:'/',''}}-content"
	}
});
{% endif %}{% endfor %}


// var skeenaPlaces = [{
// 		"geometry": {
// 			"type": "Point",
// 			"coordinates": [-128.5997, 54.5165]
// 		},
// 		"properties": {
// 			"image": "map_voice_wht.png"
// 		}
// 	}, {
// 		"geometry": {
// 			"type": "Point",
// 			"coordinates": [-128.55, 53.9]
// 		},
// 		"properties": {
// 			"image": "map_voice_wht_90.png"
// 		}
// 	}, {
// 		"geometry": {
// 			"type": "Point",
// 			"coordinates": [-129.2500,53.4333]
// 		},
// 		"properties": {
// 			"image": "map_voice_wht_180.png"
// 		}
// 	}
// ];