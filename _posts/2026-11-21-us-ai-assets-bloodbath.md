---
layout: post
date: "2026-11-21 11:45:00 +0800"
categories: "blog"
permalink: /blog/us-ai-assets-bloodbath
i18n: true
title: "Three Shocks in Ten Days: Is the AI Boom in US Stocks Starting to Crack?"
description: "A midterm election, Nvidia's CEO resigning over a scandal, and Anthropic's IPO hit the US AI supply chain in sequence. The last one may matter most — its revenue growth is slowing just as the industry builds out capacity."
---

{% assign i18n_data = site.data.i18n['us-ai-assets-bloodbath'][page.lang] %}
{% if i18n_data == nil %}
  {% assign i18n_data = site.data.i18n['us-ai-assets-bloodbath']['en'] %}
{% endif %}

{% if i18n_data.body %}
{{ i18n_data.body | markdownify }}
{% endif %}
