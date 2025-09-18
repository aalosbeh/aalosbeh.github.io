---
layout: page
title: Teaching
permalink: /teaching/
---

Courses (recent/selected). Update `_data/teaching.yml` to maintain this list.

<table>
  <thead><tr><th>Code</th><th>Course</th><th>Term</th><th>Link</th></tr></thead>
  <tbody>
  {% for c in site.data.teaching %}
    <tr>
      <td><strong>{{ c.code }}</strong></td>
      <td>{{ c.name }}</td>
      <td>{{ c.term }}</td>
      <td>{% if c.link %}<a href="{{ c.link }}">Syllabus/Repo</a>{% endif %}</td>
    </tr>
  {% endfor %}
  </tbody>
</table>
