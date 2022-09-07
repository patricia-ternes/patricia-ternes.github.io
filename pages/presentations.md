---
layout: page-fullwidth
permalink: /presentations/
title: "Presentations"
---
<!-- This page is automatically generated using entries from the file "_data/presentations.yml" 
     Please use the file "_data/presentations.yml" to include new items.
-->

<!-- To change the list layout go to "_sass/_09_elements.scss 
     under the /* Presentation list style */ header  (.presentation css class)

Possible class:
   - presentation
   - poster
   - talk
   - interview
-->

<div class="panel radius" markdown="1">
**Table of Contents**
{: #toc }
* TOC
{:toc}
</div>

## Conference Presentations

<ul class="presentation">
    {% for item in site.data.presentation %}
    {% if item.class == "presentation" %}
    <li> <a href="{{ item.material }}">{{ item.title }}</a>.
        Keynote presentation by {{ item.authors }} at the
        <a href="{{ item.url }}">{{ item.event }}</a>, {{ item.date }}, {{ item.local }}.
    </li>
    {% endif %}
    {% endfor %}
</ul>
{% include _small-top-button.html %}

## Conference Poster Session

<ul class="presentation">
    {% for item in site.data.presentation %}
    {% if item.class == "poster" %}
    <li> <a href="{{ item.material }}">{{ item.title }}</a>.
        Keynote presentation by {{ item.authors }} at the
        <a href="{{ item.url }}">{{ item.event }}</a>, {{ item.date }}, {{ item.local }}.
    </li>
    {% endif %}
    {% endfor %}
</ul>
{% include _small-top-button.html %}

## Campus and Invited Talks

<ul class="presentation">
    {% for item in site.data.presentation %}
    {% if item.class == "talk" %}
    <li> <a href="{{ item.material }}">{{ item.title }}</a>.
        Keynote presentation by {{ item.authors }} at the
        <a href="{{ item.url }}">{{ item.event }}</a>, {{ item.date }}, {{ item.local }}.
    </li>
    {% endif %}
    {% endfor %}
</ul>
{% include _small-top-button.html %}

## Interviews

<ul class="presentation">
    {% for item in site.data.presentation %}
    {% if item.class == "interview" %}
    <li> <a href="{{ item.material }}">{{ item.title }}</a>.
        Keynote presentation by {{ item.authors }} at the
        <a href="{{ item.url }}">{{ item.event }}</a>, {{ item.date }}, {{ item.local }}.
    </li>
    {% endif %}
    {% endfor %}
</ul>
{% include _small-top-button.html %}