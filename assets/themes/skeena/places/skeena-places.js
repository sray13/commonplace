---
---
var voices = {
    "type": "FeatureCollection",
    "features": []
};
var images = {
    "type": "FeatureCollection",
    "features": []
};
var essays = {
    "type": "FeatureCollection",
    "features": []
};

{% for post in site.posts %}{% if post.latitude && post.longitude %}
{% case post.category %}
{% when 'Voices' %}
voices.features.push({
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
{% when 'Gallery' %}
images.features.push({
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
{% when 'Essay' %}
essays.features.push({
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

{% when 'Feature' %}
essays.features.push({
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
{% endcase %}
{% endif %}{% endfor %}
