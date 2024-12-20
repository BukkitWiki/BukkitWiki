import{_ as s,c as a,l as e,o as n}from"./app-cxM9etLL.js";const l={};function t(h,i){return n(),a("div",null,i[0]||(i[0]=[e(`<p>在使用Gradle打包时，有时想给项目打包为两个或多个不同版本的jar包，比如一个包含所有依赖的jar包，一个不包含依赖的jar包，这时就需要在打包时排除某些文件</p><h2 id="注册一个task" tabindex="-1"><a class="header-anchor" href="#注册一个task"><span>注册一个Task</span></a></h2><div class="language-kts line-numbers-mode" data-highlighter="shiki" data-ext="kts" data-title="kts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">tasks.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">register</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Jar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;buildWithoutDependencies&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="依赖build任务" tabindex="-1"><a class="header-anchor" href="#依赖build任务"><span>依赖build任务</span></a></h2><div class="language-kts line-numbers-mode" data-highlighter="shiki" data-ext="kts" data-title="kts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">tasks.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">register</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Jar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;buildWithoutDependencies&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line highlighted"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    dependsOn</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;build&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置输出的classifier" tabindex="-1"><a class="header-anchor" href="#设置输出的classifier"><span>设置输出的Classifier</span></a></h2><div class="language-kts line-numbers-mode" data-highlighter="shiki" data-ext="kts" data-title="kts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">tasks.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">register</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Jar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;buildWithoutDependencies&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    dependsOn</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;build&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line highlighted"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    archiveClassifier.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;without-dependencies&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="读取原jar包" tabindex="-1"><a class="header-anchor" href="#读取原jar包"><span>读取原jar包</span></a></h2><div class="language-kts line-numbers-mode" data-highlighter="shiki" data-ext="kts" data-title="kts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">tasks.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">register</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Jar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;buildWithoutDependencies&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    dependsOn</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;build&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    archiveClassifier.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;without-dependencies&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line highlighted"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">zipTree</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(tasks.jar.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().archiveFile)) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="排除dependdencies包" tabindex="-1"><a class="header-anchor" href="#排除dependdencies包"><span>排除dependdencies包</span></a></h2><div class="language-kts line-numbers-mode" data-highlighter="shiki" data-ext="kts" data-title="kts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">tasks.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">register</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Jar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;buildWithoutDependencies&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    dependsOn</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;build&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    archiveClassifier.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;without-dependencies&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">zipTree</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(tasks.jar.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().archiveFile)) {</span></span>
<span class="line highlighted"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        exclude</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(project.group.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">toString</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">replace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;.&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">plus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/dependencies/**&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整代码为</p><div class="language-kts line-numbers-mode" data-highlighter="shiki" data-ext="kts" data-title="kts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">tasks.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">register</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Jar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;buildWithoutDependencies&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    dependsOn</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;build&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    archiveClassifier.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;without-dependencies&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">zipTree</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(tasks.jar.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().archiveFile)) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        exclude</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(project.group.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">toString</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">replace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;.&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">plus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/dependencies/**&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样执行<code>gradle buildWithoutDependencies</code>时，会生成一个不包含依赖的jar包和一个包含依赖的jar包</p>`,14)]))}const d=s(l,[["render",t],["__file","Gradle-Exclude-Any-File.html.vue"]]),p=JSON.parse('{"path":"/books/dev/Gradle-Exclude-Any-File.html","title":"使用Gradle打包时排除某些文件","lang":"zh-CN","frontmatter":{"title":"使用Gradle打包时排除某些文件","description":"在使用Gradle打包时，有时想给项目打包为两个或多个不同版本的jar包，比如一个包含所有依赖的jar包，一个不包含依赖的jar包，这时就需要在打包时排除某些文件 注册一个Task 依赖build任务 设置输出的Classifier 读取原jar包 排除dependdencies包 完整代码为 这样执行gradle buildWithoutDepend...","head":[["meta",{"property":"og:url","content":"https://bukkit.wiki/books/dev/Gradle-Exclude-Any-File.html"}],["meta",{"property":"og:site_name","content":"BukkitWiki"}],["meta",{"property":"og:title","content":"使用Gradle打包时排除某些文件"}],["meta",{"property":"og:description","content":"在使用Gradle打包时，有时想给项目打包为两个或多个不同版本的jar包，比如一个包含所有依赖的jar包，一个不包含依赖的jar包，这时就需要在打包时排除某些文件 注册一个Task 依赖build任务 设置输出的Classifier 读取原jar包 排除dependdencies包 完整代码为 这样执行gradle buildWithoutDepend..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-20T19:27:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-20T19:27:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用Gradle打包时排除某些文件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-20T19:27:37.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"注册一个Task","slug":"注册一个task","link":"#注册一个task","children":[]},{"level":2,"title":"依赖build任务","slug":"依赖build任务","link":"#依赖build任务","children":[]},{"level":2,"title":"设置输出的Classifier","slug":"设置输出的classifier","link":"#设置输出的classifier","children":[]},{"level":2,"title":"读取原jar包","slug":"读取原jar包","link":"#读取原jar包","children":[]},{"level":2,"title":"排除dependdencies包","slug":"排除dependdencies包","link":"#排除dependdencies包","children":[]}],"git":{"createdTime":1734722857000,"updatedTime":1734722857000,"contributors":[{"name":"大阔","email":"1520622465@qq.com","commits":1}]},"readingTime":{"minutes":0.72,"words":215},"filePathRelative":"books/dev/Gradle-Exclude-Any-File.md","localizedDate":"2024年12月20日","excerpt":"<p>在使用Gradle打包时，有时想给项目打包为两个或多个不同版本的jar包，比如一个包含所有依赖的jar包，一个不包含依赖的jar包，这时就需要在打包时排除某些文件</p>\\n<h2>注册一个Task</h2>\\n<div class=\\"language-kts line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"kts\\" data-title=\\"kts\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">tasks.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">register</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">Jar</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"buildWithoutDependencies\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{d as comp,p as data};
