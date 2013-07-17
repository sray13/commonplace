---
---
var voices = {
    "type": "FeatureCollection",
    "features": []
};
var voices_wide = {
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

var voicesPoints = {}

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
if (! voicesPoints[[({{post.longitude}}).toFixed(0),({{ post.latitude }}).toFixed(0)].join(':')]) {
	voices_wide.features.push({
		"type": "Feature",
		"geometry": {
			"type": "Point",
			"coordinates": [ ({{post.longitude}}).toFixed(0), ({{ post.latitude }}).toFixed(0) ]
		},
		"properties": {
			"image": "{{ post.map-icon }}",
			"title": "{{ post.title }}",
			"category": "{{ post.category }}",
			"popup": "popup-{{post.url | replace:'/',''}}-content",
			// reversed to keep things interesting
			"coordinates": [ {{ post.latitude }}, {{ post.longitude }} ]
		}
	});	
	voicesPoints[[({{post.longitude}}).toFixed(0),({{ post.latitude }}).toFixed(0)].join(':')] = true;
} else {

	//console.log('already there');
}

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
