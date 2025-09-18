---
layout: page
title: Projects
permalink: /projects/
---

<div class="grid-2">
  {% for p in site.data.projects %}
  <div class="card">
    <h3>{{ p.name }}</h3>
    <p>{{ p.blurb }}</p>
    {% if p.link %}<p><a class="badge" href="{{ p.link }}">Repo / Page</a></p>{% endif %}
  </div>
  {% endfor %}
</div>
