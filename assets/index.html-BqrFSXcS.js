import{_ as s,c as a,l as n,o as e}from"./app-xj5diOxb.js";const l={};function t(h,i){return e(),a("div",null,i[0]||(i[0]=[n(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>利用龙核的发包功能实现在服务端执行脚本并返回数据<br><strong>大概功能可以看看配置文件</strong></p><div class="hint-container info"><p class="hint-container-title">QQ交流群 642468469</p></div><h2 id="图片展示" tabindex="-1"><a class="header-anchor" href="#图片展示"><span>图片展示</span></a></h2><figure><img src="https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/20241219063030.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">example</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">js</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">|-</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    return +player.替换变量(&#39;%player_level%&#39;) &gt;= 10</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">args_example</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">js</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">|-</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    输出(args)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">kether_example</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">kether</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">|-</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    check papi &#39;%player_level%&#39; &gt;= 10</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="龙核中的使用方法" tabindex="-1"><a class="header-anchor" href="#龙核中的使用方法"><span>龙核中的使用方法</span></a></h2><p>使用龙核方法</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>方法.发包(&#39;dcscript&#39;,&#39;kether_example&#39;,&#39;func=按钮1&#39;,&#39;gui=testgui&#39;,&#39;bind=123&#39;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>第一个参数为固定内容 必须是 dcscript<br> 第二个参数时是插件中脚本的名称<br> 有三条可选配置 <code>gui</code> <code>func</code> <code>bind</code></p><ul><li><code>gui</code> 是指回调时调用的菜单id</li><li><code>func</code> 是指回调时调用的方法名</li><li><code>bind</code> 是一个自定义的绑定信息 用于识别回调信息</li></ul><p>其余所有参数将被视为<code>参数</code>传给脚本之中<br> 在脚本中使用 <code>args</code>或是<code>参数</code> 进行调用</p><h2 id="我使用的龙核配置" tabindex="-1"><a class="header-anchor" href="#我使用的龙核配置"><span>我使用的龙核配置</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Functions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  按钮1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">|-</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    局部变量.参数.1 ? 方法.消息(&#39;当前等级大于等于10&#39;) : 方法.消息(&#39;当前等级小于10&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">背景</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">texture</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">(w-背景.width)/2 + 120</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">(h-背景.height)/2</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  width</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">200</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  height</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">200</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  texture</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">174,71,252,90</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a_图片</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  texture</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">64,183,130</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">背景.x + 20</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">背景.y + 80</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  scale</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  center</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  shadow</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  width</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">80</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  height</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">20</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  actions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    click_left</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">|-</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      方法.发包(&#39;dcscript&#39;,&#39;kether_example&#39;,&#39;func=按钮1&#39;,&#39;gui=testgui&#39;,&#39;bind=123&#39;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">在我的界面中存在一个按钮，当我点击的时候它会让服务端执行<code>kether_example</code>脚本，脚本执行完之后 服务端会让客户端执行 <code>testgui</code> 菜单中(也就是这个菜单)的 <code>按钮1</code> 方法,我增加了一个绑定信息为<code>123</code></p></div><div class="hint-container tip"><p class="hint-container-title">当玩家点击这个按钮之后，<code>按钮1</code>方法就会被执行</p><p>并且有伴随两个参数</p><ul><li><code>局部变量.参数.0</code> 如果存在为调用时传的 <code>bind</code>值</li><li><code>局部变量.参数.1</code> 为脚本的返回值</li></ul></div>`,17)]))}const r=s(l,[["render",t],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/plugins/plugins/dragoncorescriptenhance/","title":"DragonCoreScriptEnhance —— 龙核脚本增强","lang":"zh-CN","frontmatter":{"title":"DragonCoreScriptEnhance —— 龙核脚本增强","shortTitle":"DragonCoreScriptEnhance","isOriginal":true,"tag":["付费"],"dir":{"link":true},"description":"简介 利用龙核的发包功能实现在服务端执行脚本并返回数据 大概功能可以看看配置文件 QQ交流群 642468469 图片展示 配置文件 龙核中的使用方法 使用龙核方法 第一个参数为固定内容 必须是 dcscript 第二个参数时是插件中脚本的名称 有三条可选配置 gui func bind gui 是指回调时调用的菜单id func 是指回调时调用的方法...","head":[["meta",{"property":"og:url","content":"https://bukkit.wiki/plugins/plugins/dragoncorescriptenhance/"}],["meta",{"property":"og:site_name","content":"BukkitWiki"}],["meta",{"property":"og:title","content":"DragonCoreScriptEnhance —— 龙核脚本增强"}],["meta",{"property":"og:description","content":"简介 利用龙核的发包功能实现在服务端执行脚本并返回数据 大概功能可以看看配置文件 QQ交流群 642468469 图片展示 配置文件 龙核中的使用方法 使用龙核方法 第一个参数为固定内容 必须是 dcscript 第二个参数时是插件中脚本的名称 有三条可选配置 gui func bind gui 是指回调时调用的菜单id func 是指回调时调用的方法..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/20241219063030.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T22:44:17.000Z"}],["meta",{"property":"article:tag","content":"付费"}],["meta",{"property":"article:modified_time","content":"2024-12-18T22:44:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DragonCoreScriptEnhance —— 龙核脚本增强\\",\\"image\\":[\\"https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/20241219063030.png\\"],\\"dateModified\\":\\"2024-12-18T22:44:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"图片展示","slug":"图片展示","link":"#图片展示","children":[]},{"level":2,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]},{"level":2,"title":"龙核中的使用方法","slug":"龙核中的使用方法","link":"#龙核中的使用方法","children":[]},{"level":2,"title":"我使用的龙核配置","slug":"我使用的龙核配置","link":"#我使用的龙核配置","children":[]}],"git":{"createdTime":1734561857000,"updatedTime":1734561857000,"contributors":[{"name":"大阔","email":"1520622465@qq.com","commits":1}]},"readingTime":{"minutes":1.69,"words":508},"filePathRelative":"plugins/plugins/dragoncorescriptenhance/README.md","localizedDate":"2024年12月18日","excerpt":"<h2>简介</h2>\\n<p>利用龙核的发包功能实现在服务端执行脚本并返回数据<br>\\n<strong>大概功能可以看看配置文件</strong></p>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">QQ交流群 642468469</p>\\n</div>\\n<h2>图片展示</h2>\\n<figure><img src=\\"https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/20241219063030.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}');export{r as comp,d as data};
