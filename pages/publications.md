---
layout: page-fullwidth
permalink: /publication/
title: "Publications"
---
<!-- This page is automatically generated using entries from the file "_data/publications.yml" 
     Please use the file "_data/publications.yml" to include new items.
-->

<!-- To change the list layout go to "_sass/_09_elements.scss 
     under the /* Publication list style */ header  (.publication css class)
-->

<div class="panel radius" markdown="1">
**Table of Contents**
{: #toc }
*  TOC
{:toc}
</div>

## Peer-Reviewed Journal Articles

<!-- Automatically imports class "peer-reviewed" items from file _data/publications.yml -->
<ul class="publication">
    {% for item in site.data.publications %}
    {% if item.class == "peer-reviewed" %}
    <li> {{ item.authors }} ({{ item.year }})
        <a href="{{ item.doi }}">{{ item.title }}</a>.
        <i>{{ item.journal }}</i>
        {{ item.volume }}{% if item.number %}({{ item.number }}){% endif %}: {{ item.pages }}.
    </li>
    {% endif %}
    {% endfor %}
</ul>
{% include _small-top-button.html %}

## Accepted for Publication

<!-- Automatically imports class "accepted" items from file _data/publications.yml -->
<ul class="publication">
    {% for item in site.data.publications %}
    {% if item.class == "accepted" %}
    <li> {{ item.authors }} ({{ item.year }}) {{ item.title }}. <i>{{ item.journal }}</i>.</li>
    {% endif %}
    {% endfor %}
</ul>
{% include _small-top-button.html %}

## Under Review

<!-- Automatically imports class "under-review" items from file _data/publications.yml -->
<ul class="publication">
    {% for item in site.data.publications %}
    {% if item.class == "under-review" %}
    <li> {{ item.authors }} ({{ item.year }})
        <a href="{{ item.doi }}">{{ item.title }}</a>.
        <i>{{ item.journal }}</i>.
    </li>
    {% endif %}
    {% endfor %}
</ul>
{% include _small-top-button.html %}

## PhD Thesis

<!-- Automatically imports class "thesis" items from file _data/publications.yml -->
<ul class="publication">
    {% for item in site.data.publications %}
    {% if item.class == "thesis" %}
    <li> {{ item.authors }} ({{ item.year }})
        <a href="{{ item.doi }}">{{ item.title }}</a>.
        <i>{{ item.institution }}</i>, {{ item.address }}.
    </li>
    {% endif %}
    {% endfor %}
</ul>
{% include _small-top-button.html %}

## Master Dissertation

<!-- Automatically imports class "dissertation" items from file _data/publications.yml -->
<ul class="publication">
    {% for item in site.data.publications %}
    {% if item.class == "dissertation" %}
    <li> {{ item.authors }} ({{ item.year }})
        <a href="{{ item.doi }}">{{ item.title }}</a>.
        <i>{{ item.institution }}</i>, {{ item.address }}.
    </li>
    {% endif %}
    {% endfor %}
</ul>