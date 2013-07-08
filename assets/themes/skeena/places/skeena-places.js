---
---
var skeenaPlaces = {
    "type": "FeatureCollection",
    "features": []
};
{% for post in site.posts %}{% if post.latitude && post.longitude %}
// {{ post.title }}

skeenaPlaces.features.push({
	"type": "Feature",
	"geometry": {
		"type": "Point",
		"coordinates": [ {{ post.longitude }}, {{ post.latitude }} ]
	},
	"properties": {
		"image": "{{ post.map-icon }}",
		"title": "{{ post.title }}",
		"category": "{{ post.category }}",
		"popup": "popup-{{post.url | replace:'/',''}}-content"
	}
});
{% endif %}{% endfor %}
