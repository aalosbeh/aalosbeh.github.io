---
layout: page
title: Publications
permalink: /publications/
---

Below is a selected list. Update `_data/pubs.yml` to add more items.

{% assign entries = site.data.pubs | sort: "year" | reverse %}
{% for p in entries %}
- **{{ p.title }}** ({{ p.year }}). {{ p.authors }}. _{{ p.venue }}_. 
  {% if p.pdf %}[<span class="badge">PDF</span>]({{ p.pdf }}){% endif %}
  {% if p.doi %}[<span class="badge">DOI</span>]({{ p.doi }}){% endif %}
  {% if p.code %}[<span class="badge">Code</span>]({{ p.code }}){% endif %}
{% endfor %}
