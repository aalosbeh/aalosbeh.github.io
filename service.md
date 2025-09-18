---
layout: page
title: Service
permalink: /service/
---

- {% for s in site.data.service %}**{{ s.role }}**, {{ s.org }}{% if forloop.last == false %}; {% endif %}{% endfor %}
