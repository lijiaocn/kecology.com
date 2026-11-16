---
layout: post
date: "2026-11-18 11:00:00 +0800"
categories: "blog"
permalink: /blog/grad-school-winter-baby
i18n: true
title: "Why a Chinese Grad Student Timed Her Pregnancy for Winter Break — and Why That's Smart"
description: "A graduate student in China planned to give birth during the winter holiday. The internet called it reckless. I think she worked out the timing better than anyone."
---

{% assign i18n_data = site.data.i18n['grad-school-winter-baby'][page.lang] %}
{% if i18n_data == nil %}
  {% assign i18n_data = site.data.i18n['grad-school-winter-baby']['en'] %}
{% endif %}

{% if i18n_data.body %}
{{ i18n_data.body | markdownify }}
{% endif %}
