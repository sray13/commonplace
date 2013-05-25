---
layout: cover
title: Skeena Voices
tagline: Supporting tagline
class: cover
---
{% include JB/setup %}
<div class="toc-section">
  <div class="masthead">
    <div class="navbar">
      <div>
        <div class="container">
          <ul class="nav">
            <li><a href="javascript:void(0);" id="toc"><em>01</em>Table of Contents</a></li>
            <li><a href="#"><em>02</em> Map</a></li>
            <li></li>
            <li></li>
            <li><a href="#"><em>03</em> About</a></li>
            <li><a href="#"><em>04</em> Issues</a></li>
          </ul>
        </div>
      </div>
    </div><!-- /.navbar -->
  </div>
</div>
<div style="display: none" id="toc-content">
  <div class="container">
      {% for post in site.posts reversed %}
      {% capture col %}{{ forloop.index |modulo:3 }}{% endcapture %}
      {% if col == '1' %}
      <div class="row">
      {% endif %}
        <div class="span4 story">
          <a href="{{ post.url }}">
            <img src="{{ post.toc-img }}" height="150" width="150" class="img-circle">
            <h3 class="story-title">{{ post.title }}</h3>
            <h4 class="story-category">{{ post.category }}</h4>
            <p class="story-author">{{ post.author }}</p>
          </a>
        </div>
      {% if col == '0' or forloop.last %}
      </div>
      {% endif %}
      {% endfor %}
  </div>
</div>