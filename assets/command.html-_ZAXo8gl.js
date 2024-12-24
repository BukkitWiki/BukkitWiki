import{_ as l,c as t,l as i,o as n}from"./app-CA4H4kPn.js";const o={};function a(c,e){return n(),t("div",null,e[0]||(e[0]=[i('<h1 id="插件命令" tabindex="-1"><a class="header-anchor" href="#插件命令"><span>插件命令</span></a></h1><h2 id="主命令" tabindex="-1"><a class="header-anchor" href="#主命令"><span>主命令</span></a></h2><blockquote><p>插件的主命令</p><p>正常玩家无需设置任何权限</p></blockquote><ul><li>名称：<code>trmenu</code> <code>menu</code></li><li>权限: <code>trmenu.access</code></li></ul><h2 id="list" tabindex="-1"><a class="header-anchor" href="#list"><span>List</span></a></h2><blockquote><p>列出已加载的菜单</p></blockquote><ul><li>权限: <code>trmenu.command.list</code></li><li>参数 <ul><li>&lt;Filter&gt; 过滤菜单名称</li></ul></li></ul><h2 id="open" tabindex="-1"><a class="header-anchor" href="#open"><span>Open</span></a></h2><blockquote><p>打开指定菜单</p><p>仅限 OP 可以使用指令打开，若需要玩家打开请给菜单编写 <a href="%5Bhttps://hhhhhy.gitbook.io/trmenu-v3/menu/configuration/bindings%5D(https://bukkit.wiki/plugins/plugins/trmenu/menu/configuration/bindings.html)">Bindings</a> 选项</p></blockquote><ul><li>权限: <s><code>trmenu.command.open</code></s></li><li>参数 <ul><li>[ID]:&lt;Page&gt; 菜单名称和指定页码</li><li>&lt;Player&gt; 指定玩家，不填则默认自己</li><li>&lt;菜单参数&gt; 传入的菜单参数，作为变量使用</li></ul></li><li>示例 <ul><li><code>trmenu open Example BlackSKY</code> 为 BlackSKY 玩家打开 Example 菜单</li><li><code>trmenu open Shop:3</code> 为自己打开 Shop 菜单，页码 3</li></ul></li></ul><h2 id="reload" tabindex="-1"><a class="header-anchor" href="#reload"><span>Reload</span></a></h2><blockquote><p>重新载入菜单</p></blockquote><ul><li>权限: <code>trmenu.command.reload</code></li></ul><h2 id="template" tabindex="-1"><a class="header-anchor" href="#template"><span>Template</span></a></h2><blockquote><p>模板创建功能，快速布局菜单（当前仅支持箱子容器）</p></blockquote><ul><li>权限: <code>trmenu.command.template</code></li><li>参数 <ul><li>&lt;Rows&gt; 菜单的行数大小（1~6）</li></ul></li></ul><h2 id="action" tabindex="-1"><a class="header-anchor" href="#action"><span>Action</span></a></h2><blockquote><p>测试 TrMenu 动作</p></blockquote><ul><li>权限: <code>trmenu.command.action</code></li><li>参数 <ul><li>[ID] 执行动作玩家对象的名称</li><li>[Action] 动作行</li></ul></li><li>注意 <ul><li>默认将向命令执行者打印动作返回 &amp; 相关消耗</li><li>隐藏此打印功能需要在动作行最前面加以 <code>#</code> 标记</li></ul></li></ul><h2 id="item" tabindex="-1"><a class="header-anchor" href="#item"><span>Item</span></a></h2><blockquote><p>管理控制物品</p></blockquote><ul><li>权限: <code>trmenu.command.item</code></li><li>参数 <ul><li>[Method] 操作类型 <ul><li>toJson 转换手中物品为 JSON 文本格式</li><li>fromJson 将参数2的文本内容转换为物品对象</li><li>save 保存物品到物品仓库</li><li>get 取得物品从物品仓库</li><li>delete 删除物品自物品仓库</li></ul></li><li>&lt;Value&gt; 值</li></ul></li></ul><h2 id="sounds" tabindex="-1"><a class="header-anchor" href="#sounds"><span>Sounds</span></a></h2><blockquote><p>预览音效</p></blockquote><ul><li>权限: <code>trmenu.command.sounds</code></li><li>参数 <ul><li>&lt;Filter&gt; 过滤音效名称</li></ul></li></ul><h2 id="debug" tabindex="-1"><a class="header-anchor" href="#debug"><span>Debug</span></a></h2><blockquote><p>调试功能</p></blockquote><ul><li>权限: <code>trmenu.command.debug</code></li></ul>',28)]))}const d=l(o,[["render",a],["__file","command.html.vue"]]),s=JSON.parse('{"path":"/plugins/plugins/trmenu/usage/command.html","title":"插件命令","lang":"zh-CN","frontmatter":{"description":"[] 为必填参数，<> 为选填参数","head":[["meta",{"property":"og:url","content":"https://bukkit.wiki/plugins/plugins/trmenu/usage/command.html"}],["meta",{"property":"og:site_name","content":"BukkitWiki"}],["meta",{"property":"og:title","content":"插件命令"}],["meta",{"property":"og:description","content":"[] 为必填参数，<> 为选填参数"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-24T08:12:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-24T08:12:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"插件命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-24T08:12:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"主命令","slug":"主命令","link":"#主命令","children":[]},{"level":2,"title":"List","slug":"list","link":"#list","children":[]},{"level":2,"title":"Open","slug":"open","link":"#open","children":[]},{"level":2,"title":"Reload","slug":"reload","link":"#reload","children":[]},{"level":2,"title":"Template","slug":"template","link":"#template","children":[]},{"level":2,"title":"Action","slug":"action","link":"#action","children":[]},{"level":2,"title":"Item","slug":"item","link":"#item","children":[]},{"level":2,"title":"Sounds","slug":"sounds","link":"#sounds","children":[]},{"level":2,"title":"Debug","slug":"debug","link":"#debug","children":[]}],"git":{"createdTime":1730189348000,"updatedTime":1735027920000,"contributors":[{"name":"嘿鹰","email":"67975790+YsGqHY@users.noreply.github.com","commits":1},{"name":"大阔","email":"1520622465@qq.com","commits":1}]},"readingTime":{"minutes":1.37,"words":411},"filePathRelative":"plugins/plugins/trmenu/usage/command.md","localizedDate":"2024年10月29日","excerpt":"\\n<h2>主命令</h2>\\n<blockquote>\\n<p>插件的主命令</p>\\n<p>正常玩家无需设置任何权限</p>\\n</blockquote>\\n<ul>\\n<li>名称：<code>trmenu</code> <code>menu</code></li>\\n<li>权限: <code>trmenu.access</code></li>\\n</ul>\\n<h2>List</h2>\\n<blockquote>\\n<p>列出已加载的菜单</p>\\n</blockquote>\\n<ul>\\n<li>权限: <code>trmenu.command.list</code></li>\\n<li>参数\\n<ul>\\n<li>&lt;Filter&gt; 过滤菜单名称</li>\\n</ul>\\n</li>\\n</ul>"}');export{d as comp,s as data};
