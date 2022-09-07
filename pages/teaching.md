---
layout: page-fullwidth
permalink: /teaching/
title: "Teaching"
---

<div class="panel radius" markdown="1">
**Table of Contents**
{: #toc }
* TOC
{:toc}
</div>

## Undergraduate Modules

During 2018 and 2019 I taught undergraduate modules in Engineering Courses at the [Federal Institute
Catarinense](https://ifc.edu.br/). Listed below are the modules I worked on each semester.

<!-- Automatically imports items from file _data/teaching.yml -->
<table id="fancytable">
    <!-- Table Header -->
    <tr>
        <th>Term</th>
        <th>Module</th>
        <th>Course</th>
        <th>Institution</th>
        <th>Code</th>
        <th>Credits</th>
    </tr>

    <!-- Table Main Content -->
    {% for item in site.data.teaching %}
    {% if item.class == "undergrad" %}
    <tr>
        <td>{{ item.term }}</td>
        <td>{{ item.module }}</td>
        <td>{{ item.course }}</td>
        <td>{{ item.institution }}</td>
        <td>{{ item.code }}</td>
        <td>{{ item.credits }}</td>
    </tr>
    {% endif %}
    {% endfor %}
</table>

{% include _small-top-button.html %}

## Delivered Trainings

<!-- Automatically imports items from file _data/teaching.yml -->
<table id="fancytable">
    <!-- Table Header -->
    <tr>
        <th>Date</th>
        <th>Title</th>
        <th>Content</th>
        <th>Material</th>
        <th>Institution</th>
    </tr>

    <!-- Table Main Content -->
    {% for item in site.data.teaching %}
    {% if item.class == "training" %}
    <tr>
        <td>{{ item.date }}</td>
        <td>{{ item.title }}</td>
        <td>{% for subitem in item.content %}
            - {{ subitem }} <br>
            {% endfor %}</td>

        <td><a href="{{ item.notes }}"><span class="fas fa-file-alt l15 r15"> </span></a></td>
        <td>{{ item.institution }}</td>
    </tr>
    {% endif %}
    {% endfor %}
</table>

## Internships

<!-- Automatically imports items from file _data/teaching.yml -->
<table id="fancytable">
    <!-- Table Header -->
    <tr>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Job Title</th>
        <th>Main Activities</th>
        <th>Institution</th>
    </tr>

    <!-- Table Main Content -->
    {% for item in site.data.teaching %}
    {% if item.class == "internship" %}
    <tr>
        <td>{{ item.start }}</td>
        <td>{{ item.end }}</td>
        <td>{{ item.title }}</td>
        <td>
            {% for subitem in item.content %}
            - {{ subitem }}<br>
            {% endfor %}
        </td>
        <td>{{ item.institution }}</td>
    </tr>
    {% endif %}
    {% endfor %}
</table>

{% include _small-top-button.html %}