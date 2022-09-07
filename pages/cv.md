---
layout: curriculum
permalink: /cv/
title: "Curriculum Vitae"
---

<!-- Some content of this page is automatically generated using entries from files in the "_data" folder: 
     - _data/degree.yml
     - _data/employment.yml
     - _data/awards.yml
     - _data/grantPI.yml
     - _data/adminservices.yml
     - _data/training.yml
-->

<!-- To change the talble layout go to "_sass/_09_elements.scss 
     under the /* Fancy table style */ header  (#fancytable css class)
-->

<a class="radius button" href="{{ site.url }}{{ site.baseurl }}/documents/cv/Patricia-Ternes_CV.pdf"> > > PDF copy of my CV is available here < < </a>

<div class="panel radius" markdown="1">
**Table of Contents**
{: #toc }
*  TOC
{:toc}
</div>

## Skills

* Public speaking
* Teaching and mentoring
* Code reading and debugging
* Multiple coding languages
* Software Development
* Working to deadlines and under pressure

{% include _small-top-button.html %}

## Education

<!-- Automatically imports items from file _data/degree.yml -->
<table id="fancytable">
    <!-- Table Header -->
    <tr>
        <th>Degree</th>
        <th>Institution</th>
        <th>Year</th>
    </tr>

    <!-- Table Main Content -->
    {% for item in site.data.degree %}
    <tr>
        <td>{{ item.degree }}</td>
        <td>{{ item.institution }}</td>
        <td>{{ item.year }}</td>
    </tr>
    {% endfor %}
</table>

{% include _small-top-button.html %}

## Employment History

<!-- Automatically imports items from file _data/employment.yml -->
<table id="fancytable">
    <!-- Table Header -->
    <tr>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Job Title</th>
        <th>Employer</th>
    </tr>

    <!-- Table Main Content -->
    {% for item in site.data.employment %}
    <tr>
        <td>{{ item.start }}</td>
        <td>{{ item.end }}</td>
        <td>{{ item.job }}</td>
        <td>{{ item.employer }}</td>
    </tr>
    {% endfor %}
</table>

{% include _small-top-button.html %}

## Awards & Funding

<h3>Awards</h3>

<!-- Automatically imports items from file _data/awards.yml -->
<table id="fancytable">
    <!-- Table Header -->
    <tr>
        <th>Date</th>
        <th>Type</th>
        <th>Description</th>
    </tr>

    <!-- Table Main Content -->
    {% for item in site.data.awards %}
    <tr>
        <td>{{ item.date }}</td>
        <td>{{ item.type }}</td>
        <td>{{ item.description }}</td>
    </tr>
    {% endfor %}
</table>

{% include _small-top-button.html %}

<h3>Research funding as Principal Investigator: Total £ 35,000</h3>

<!-- Automatically imports items from file _data/grantPI.yml -->
<table id="fancytable">
    <!-- Table Header -->
    <tr>
        <th>Year</th>
        <th>Award</th>
        <th>Project Title</th>
        <th>Funder</th>
    </tr>

    <!-- Table Main Content -->
    {% for item in site.data.grantPI %}
    <tr>
        <td>{{ item.year }}</td>
        <td>{{ item.value }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.funder }}</td>
    </tr>
    {% endfor %}
</table>

{% include _small-top-button.html %}

## Publications

For a complete publication list see my [Publication homepage](publications.md).

{% include _small-top-button.html %}

## Campus and Invited talks

For a complete presentation list see my [Presentation homepage](presentations.md).


{% include _small-top-button.html %}

## Admin & Services

<!-- Automatically imports items from file _data/adminservices.yml -->
<table id="fancytable">
    <!-- Table Header -->
    <tr>
        <th>Start Year</th>
        <th>End Year</th>
        <th>Description</th>
        <th>Institution</th>
    </tr>

    <!-- Table Main Content -->
    {% for item in site.data.adminservices %}
    <tr>
        <td>{{ item.start }}</td>
        <td>{{ item.end }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.institution }}</td>
    </tr>
    {% endfor %}
</table>

{% include _small-top-button.html %}

## Professional Training

<!-- Automatically imports items from file _data/training.yml -->
<table id="fancytable">
    <!-- Table Header -->
    <tr>
        <th>Year</th>
        <th>Subject Studied</th>
        <th>Provider</th>
    </tr>

    <!-- Table Main Content -->
    {% for item in site.data.training %}
    <tr>
        <td>{{ item.year }}</td>
        <td>{{ item.subject }}</td>
        <td>{{ item.provider }}</td>
    </tr>
    {% endfor %}
</table>

{% include _small-top-button.html %}