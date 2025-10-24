module Jekyll
    class I18nPostGenerator < Generator
      safe true
      priority :high 
  
      def generate(site)
        languages = site.config['languages'] || []
        default_lang = site.config['default_lang']
  
        # 筛选出标记 i18n: true 的文章作为模板
        templates = site.posts.docs.select { |post| post.data['i18n'] }
        final_posts = []
  
        # 关键修正步骤 1：安全移除原始的 i18n 文章，防止与新克隆的文章冲突
        # 我们将用处理过、且带有语言前缀的新版本完全替换它们。
        site.posts.docs.delete_if { |doc| doc.data['i18n'] }
  
        templates.each do |template|
          # 记录原始 URL (例如: /tool/ai-chatbot-hub.html)
          original_permalink = template.data['permalink'] || template.url
          
          languages.each do |lang|
            
            # 2. 克隆一个新的文档对象（包括默认语言）
            post_to_add = template.dup
            
            # 3. 关键修正：深度复制数据哈希 (@data)
            # 确保克隆对象拥有自己独立的 @data 结构，防止共享引用。
            cloned_data = template.data.dup # 浅拷贝数据哈希
            post_to_add.instance_variable_set('@data', cloned_data) # 设置新的数据哈希
            
            # 4. 注入新的语言代码
            post_to_add.data['lang'] = lang
            
            # 5. 构造统一的带语言前缀的 permalink
            # 例如：/en/tool/ai-chatbot-hub.html
            post_to_add.data['permalink'] = "/#{lang}#{original_permalink}"
  
            # 6. 清除并重新计算 URL/路径 (解决 URL 冲突)
            post_to_add.instance_variable_set('@url', nil) 
            post_to_add.instance_variable_set('@destination', nil)
            post_to_add.url # 触发 URL 重新计算
  
            # 7. 将文章添加到最终列表
            final_posts << post_to_add
          end
        end
        
        # 8. 加入最终处理过的所有语言版本的文章
        site.posts.docs.concat(final_posts)
      end
    end
  end