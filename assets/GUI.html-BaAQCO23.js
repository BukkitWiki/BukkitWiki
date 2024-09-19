import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,f as e,o as l}from"./app-CXqwhhLu.js";const n={};function t(h,i){return l(),a("div",null,i[0]||(i[0]=[e(`<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><p>标准GUI配置文件格式如下</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">menu_title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;TEXT&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">open_command</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">COMMAND</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">open_requirement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">EXPRESSION</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">open_commands</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;[ACTIONTYPE] ACTION&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;[ACTIONTYPE] ACTION&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">inventory_type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;TEXT&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">update_interval</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">items</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="菜单标题" tabindex="-1"><a class="header-anchor" href="#菜单标题"><span>菜单标题</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">menu_title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;TEXT&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>显示在菜单顶部的菜单标题，此处可以使用PAPI变量及颜色代码</p><h2 id="打开命令" tabindex="-1"><a class="header-anchor" href="#打开命令"><span>打开命令</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">open_command</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">COMMAND</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>多个指令</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">open_command</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">COMMAND</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">COMMAND2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于打开菜单的命令，只能是一个单词（中间不能加空格）</p><div class="hint-container info"><p class="hint-container-title">要禁用打开指令只需要删除open_command这一行即可</p></div><h2 id="打开菜单条件" tabindex="-1"><a class="header-anchor" href="#打开菜单条件"><span>打开菜单条件</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">open_requirement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> requirements</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">   TEXT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">     type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&lt;type&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置玩家打开菜单所需条件，更多信息请查看<a href="#TODO(%22%E6%9D%A1%E4%BB%B6%22)">条件</a>页面</p><h2 id="打开后执行动作" tabindex="-1"><a class="header-anchor" href="#打开后执行动作"><span>打开后执行动作</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">open_commands</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;[ACTIONTYPE] ACTION&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;[ACTIONTYPE] ACTION&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当玩家打开菜单时执行的操作</p><h2 id="关闭执行动作" tabindex="-1"><a class="header-anchor" href="#关闭执行动作"><span>关闭执行动作</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">close_commands</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;[ACTIONTYPE] ACTION&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;[ACTIONTYPE] ACTION&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">只有在玩家点击带关闭操作(\`[close]\`)的物品而关闭菜单时才会运行</p></div><h2 id="菜单类型" tabindex="-1"><a class="header-anchor" href="#菜单类型"><span>菜单类型</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">inventory_type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;TEXT&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>默认值：<code>CHEST</code> <br><br> 支持的类型：</p><ul><li><code>ANVIL</code> 铁砧</li><li><code>BARREL</code> 桶</li><li><code>BEACON</code> 信标</li><li><code>BLAST_FURNACE</code> 高炉</li><li><code>BREWING</code> 酿造台</li><li><code>CARTOGRAPHY</code> 制图台</li><li><code>DISPENSER</code> 发射器</li><li><code>DROPPER</code> 投掷器</li><li><code>ENCHANTING</code> 附魔台</li><li><code>ENDER_CHEST</code> 末影箱</li><li><code>FURNACE</code> 熔炉</li><li><code>GRINDSTONE</code> 砂轮</li><li><code>HOPPER</code> 漏斗</li><li><code>LOOM</code> 织布机</li><li><code>PLAYER</code> 玩家</li><li><code>SHULKER_BOX</code> 潜影盒</li><li><code>SMOKER</code> 烟熏炉</li><li><code>WORKBENCH</code> 工作台</li></ul><h2 id="尺寸" tabindex="-1"><a class="header-anchor" href="#尺寸"><span>尺寸</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>默认值: <code>54</code></p><p>支持值:</p><ul><li>9</li><li>18</li><li>27</li><li>36</li><li>45</li><li>54</li></ul><p>用于设置菜单的大小</p><h2 id="注册命令" tabindex="-1"><a class="header-anchor" href="#注册命令"><span>注册命令</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">register_command</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>是否向服务器注册打开命令</p><div class="hint-container info"><p class="hint-container-title">服务器需要重新启动</p></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">- </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;TEXT&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">- </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;TEXT&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">- </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;TEXT&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在此处设置的</p>`,38)]))}const p=s(n,[["render",t],["__file","GUI.html.vue"]]),k=JSON.parse('{"path":"/plugins/plugins/deluxe_menus/Options_Configuration/GUI.html","title":"GUI","lang":"zh-CN","frontmatter":{"title":"GUI","description":"语法 标准GUI配置文件格式如下 菜单标题 显示在菜单顶部的菜单标题，此处可以使用PAPI变量及颜色代码 打开命令 多个指令 用于打开菜单的命令，只能是一个单词（中间不能加空格） 要禁用打开指令只需要删除open_command这一行即可 打开菜单条件 设置玩家打开菜单所需条件，更多信息请查看条件页面 打开后执行动作 当玩家打开菜单时执行的操作 关闭执...","head":[["meta",{"property":"og:url","content":"https://bukkit.wiki/plugins/plugins/deluxe_menus/Options_Configuration/GUI.html"}],["meta",{"property":"og:site_name","content":"BukkitWiki"}],["meta",{"property":"og:title","content":"GUI"}],["meta",{"property":"og:description","content":"语法 标准GUI配置文件格式如下 菜单标题 显示在菜单顶部的菜单标题，此处可以使用PAPI变量及颜色代码 打开命令 多个指令 用于打开菜单的命令，只能是一个单词（中间不能加空格） 要禁用打开指令只需要删除open_command这一行即可 打开菜单条件 设置玩家打开菜单所需条件，更多信息请查看条件页面 打开后执行动作 当玩家打开菜单时执行的操作 关闭执..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-19T14:03:28.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-19T14:03:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"GUI\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-19T14:03:28.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"菜单标题","slug":"菜单标题","link":"#菜单标题","children":[]},{"level":2,"title":"打开命令","slug":"打开命令","link":"#打开命令","children":[]},{"level":2,"title":"打开菜单条件","slug":"打开菜单条件","link":"#打开菜单条件","children":[]},{"level":2,"title":"打开后执行动作","slug":"打开后执行动作","link":"#打开后执行动作","children":[]},{"level":2,"title":"关闭执行动作","slug":"关闭执行动作","link":"#关闭执行动作","children":[]},{"level":2,"title":"菜单类型","slug":"菜单类型","link":"#菜单类型","children":[]},{"level":2,"title":"尺寸","slug":"尺寸","link":"#尺寸","children":[]},{"level":2,"title":"注册命令","slug":"注册命令","link":"#注册命令","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]}],"git":{"createdTime":1726754608000,"updatedTime":1726754608000,"contributors":[{"name":"dakuo","email":"1520622465@qq.com","commits":1}]},"readingTime":{"minutes":1.25,"words":374},"filePathRelative":"plugins/plugins/deluxe_menus/Options_Configuration/GUI.md","localizedDate":"2024年9月19日","autoDesc":true}');export{p as comp,k as data};
