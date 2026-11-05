---
layout: post
date: "2026-11-05 18:00:00 +0800"
categories: "blog"
permalink: /blog/meituan-local-consumption-mindshare
i18n: true
title: "Can Meituan Hold Local Consumption Mindshare?"
description: "Notes on Meituan's instant delivery network, local consumption entry, and the challenges from short video and AI."
---

{% assign i18n_data = site.data.i18n['meituan-local-consumption-mindshare'][page.lang] %}
{% if i18n_data == nil %}
  {% assign i18n_data = site.data.i18n['meituan-local-consumption-mindshare']['zh-CN'] %}
{% endif %}

{% if i18n_data.body %}
{{ i18n_data.body | markdownify }}
{% endif %}
