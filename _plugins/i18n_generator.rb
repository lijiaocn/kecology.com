module Jekyll
    class I18nGenerator < Generator
      safe true
      priority :high 
  
      def generate(site)
        languages = site.config['languages'] || []
        default_lang = site.config['default_lang']
  
        # 处理 posts
        process_i18n_documents(site.posts.docs, 'posts', site, languages, default_lang)
        
        # 处理 pages
        process_i18n_documents(site.pages, 'pages', site, languages, default_lang)
      end
  
      def process_i18n_documents(docs, type, site, languages, default_lang)
        # 筛选出标记 i18n: true 的文档作为模板
        templates = docs.select { |doc| doc.data['i18n'] }
        final_docs = []
  
        # 移除原始的 i18n 文档
        docs.delete_if { |doc| doc.data['i18n'] }
  
        templates.each do |template|
          # 记录原始 URL
          original_permalink = template.data['permalink'] || template.url
          
          # 保存基础 URL 用于 hreflang 标签
          template.data['base_url'] = original_permalink
          
          # 提取名称用于 i18n 数据查找（如果是 posts）
          # 例如：/tool/black-screen.html -> black-screen
          # 对于 pages（如 index），resource_name 可能是空字符串
          if type == 'posts' && original_permalink && !original_permalink.empty?
            resource_name = original_permalink.split('/').last
            resource_name = resource_name.split('.').first if resource_name.include?('.')
          else
            resource_name = nil
          end
          
          languages.each do |lang|
            # 克隆文档对象
            doc_to_add = template.dup
            
            # 深度复制数据哈希
            cloned_data = template.data.dup
            doc_to_add.instance_variable_set('@data', cloned_data)
            
            # 注入新的语言代码
            doc_to_add.data['lang'] = lang
            
            # 对于 posts：从 i18n 数据文件读取并替换 title 和 description
            if type == 'posts' && site.data['i18n'] && site.data['i18n'][resource_name] && site.data['i18n'][resource_name][lang]
              i18n_data = site.data['i18n'][resource_name][lang]
              doc_to_add.data['title'] = i18n_data['title'] if i18n_data['title']
              doc_to_add.data['description'] = i18n_data['description'] if i18n_data['description']
            end
            
            # 构造 permalink：默认语言不添加前缀，其他语言添加语言前缀
            if lang == default_lang
              doc_to_add.data['permalink'] = original_permalink
            else
              doc_to_add.data['permalink'] = "/#{lang}#{original_permalink}"
            end
  
            # 清除并重新计算 URL/路径
            doc_to_add.instance_variable_set('@url', nil) 
            doc_to_add.instance_variable_set('@destination', nil)
            doc_to_add.url # 触发 URL 重新计算

            # 添加到最终列表
            final_docs << doc_to_add
          end
        end
        
        # 添加所有语言版本的文档
        docs.concat(final_docs)
      end
    end
  end