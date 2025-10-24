module Jekyll
    class I18nPageGenerator < Generator
      safe true
      def generate(site)
        languages = site.config['languages'] || [site.config['default_lang']]
        default_lang = site.config['default_lang']

        templates = site.pages.select { |page| page.data['i18n'] }
        templates.each do |template|
          # 1. 为原始模板（默认语言）注入语言变量
          # 这一步是为了让默认语言的 Liquid 逻辑也能知道自己的语言代码
          template.data['lang'] = default_lang
          
          # 获取原始 permalink (例如: /tool/best-bedtime-calculator/)
          original_permalink = template.data['permalink']
  
          # 遍历其他语言
          languages.each do |lang|
            next if lang == default_lang # 跳过默认语言
  
            new_page = template.dup
            # 2. 注入新的语言代码
            new_page.data['lang'] = lang
            
            # 3. 为非默认语言构建带语言前缀的 permalink
            if original_permalink
               # 构造 /zh/tool/best-bedtime-calculator/
               new_page.data['permalink'] = "/#{lang}#{original_permalink}"
            end
            
            # 其他数据注入（如 title 等）也应在这里完成，就像我们上一个回复中讨论的那样
            # ... (省略数据注入逻辑，因为它与此错误无关)
  
            site.pages << new_page
          end
        end
      end
    end
  end