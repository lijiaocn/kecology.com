---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
permalink: /
i18n: true
---

{%- comment -%} 多语言标签页 {%- endcomment -%}
{%- assign default_lang = site.default_lang | default: "en" -%}
{%- assign current_lang = page.lang | default: default_lang -%}
{%- comment -%} 从 _data/i18n/index/[current_lang].yml 读取语言名称数据 {%- endcomment -%}
{%- assign lang_data = site.data.i18n.index[current_lang] -%}

<div class="language-tabs">
{%- for i in (0..site.languages.size) -%}
    {%- if i < site.languages.size -%}
    {%- assign lang_code = site.languages[i] -%}
    {%- assign lang_name = lang_data[lang_code] -%}
    {%- if lang_code == default_lang -%}
        {%- assign lang_url = "/" -%}
    {%- else -%}
        {%- assign lang_url = "/" | append: lang_code | append: "/" -%}
    {%- endif -%}
    <a href="{{ lang_url | relative_url }}" class="tab-button{% if lang_code == current_lang %} active{% endif %}" data-lang="{{ lang_code }}">{{ lang_name }}</a>
    {%- endif -%}
{%- endfor -%}
</div>


{%- if page.list_title -%}
<h2 class="post-list-heading">{{ page.list_title }}</h2>
{%- endif -%}

<!-- 显示当前语言的文章列表 -->
<ul class="post-list">
{%- for post in site.posts -%}
    {%- assign post_lang = post.lang | default: default_lang -%}
    {%- if post_lang == current_lang -%}
    <li class="post-item">
        {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
        <span class="post-meta">{{ post.date | date: date_format }}</span>
        <h3>
        <a class="post-link" href="{{ post.url | relative_url }}">
            {{ post.title | escape }}
        </a>
        </h3>
        {%- if site.show_excerpts -%}
        {{ post.excerpt }}
        {%- endif -%}
    </li>
    {%- endif -%}
{%- endfor -%}
</ul>

