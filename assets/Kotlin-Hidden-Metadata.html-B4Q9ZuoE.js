import{_ as s,c as a,l as e,o as t}from"./app-Dsi-1SdY.js";const n={};function l(d,i){return t(),a("div",null,i[0]||(i[0]=[e(`<h2 id="什么是metadata和sourcedebugextension注解" tabindex="-1"><a class="header-anchor" href="#什么是metadata和sourcedebugextension注解"><span>什么是Metadata和SourceDebugExtension注解</span></a></h2><p>Kotlin编译器在编译Kotlin源代码时会生成一些额外的元数据信息,以支持运行时反射等功能。这些元数据主要包含在两个注解中:</p><ul><li><code>kotlin.Metadata</code> - 包含了类、函数、属性等Kotlin特有的元数据信息</li><li><code>kotlin.jvm.internal.SourceDebugExtension</code> - 包含了源码调试相关的信息</li></ul><p>这些注解对于Kotlin运行时库来说是必需的,但在某些情况下我们可能希望隐藏这些信息,比如:</p><ol><li>减小生成的class文件大小</li><li>避免暴露源代码相关的调试信息</li><li>防止反编译时泄露过多的实现细节</li></ol><h2 id="隐藏sourcedebugextension注解" tabindex="-1"><a class="header-anchor" href="#隐藏sourcedebugextension注解"><span>隐藏SourceDebugExtension注解</span></a></h2><p>在 Gradle 中，可以通过配置 <code>kotlinOptions</code> 来隐藏 <code>SourceDebugExtension</code> 注解<br> 修改<code>build.gradle.kts</code>文件</p><div class="language-kts line-numbers-mode" data-highlighter="shiki" data-ext="kts" data-title="kts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">tasks.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">withType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">KotlinCompile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    kotlinOptions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        jvmTarget </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;1.8&quot;</span></span>
<span class="line highlighted"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        freeCompilerArgs </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> listOf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;-Xjvm-default=all&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;-Xno-source-debug-extension&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="隐藏metadata注解" tabindex="-1"><a class="header-anchor" href="#隐藏metadata注解"><span>隐藏Metadata注解</span></a></h2><div class="hint-container warning"><p class="hint-container-title">移除Metadata注解 必须保证你的项目没有使用Kotlin反射库中依赖Metadata注解的功能</p></div><p>需要使用一个gradle插件 <a href="https://github.com/izhangzhihao/unmeta" target="_blank" rel="noopener noreferrer">https://github.com/izhangzhihao/unmeta</a></p><p>在<code>build.gradle.kts</code>文件中引入插件即可</p><div class="language-kts line-numbers-mode" data-highlighter="shiki" data-ext="kts" data-title="kts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">plugins</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    kotlin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;jvm&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;io.github.izhangzhihao.unmeta&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) version </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;1.0.3&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">unmeta</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    enable.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">jar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    mustRunAfter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;unmeta&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个插件会在编译之后使用ASM修改class文件，移除<code>kotlin.Metadata</code>注解</p>`,14)]))}const o=s(n,[["render",l],["__file","Kotlin-Hidden-Metadata.html.vue"]]),p=JSON.parse('{"path":"/books/dev/Kotlin-Hidden-Metadata.html","title":"Kotlin隐藏Metadata和SourceDebugExtension注解","lang":"zh-CN","frontmatter":{"title":"Kotlin隐藏Metadata和SourceDebugExtension注解","description":"什么是Metadata和SourceDebugExtension注解 Kotlin编译器在编译Kotlin源代码时会生成一些额外的元数据信息,以支持运行时反射等功能。这些元数据主要包含在两个注解中: kotlin.Metadata - 包含了类、函数、属性等Kotlin特有的元数据信息 kotlin.jvm.internal.SourceDebugEx...","head":[["meta",{"property":"og:url","content":"https://bukkit.wiki/books/dev/Kotlin-Hidden-Metadata.html"}],["meta",{"property":"og:site_name","content":"BukkitWiki"}],["meta",{"property":"og:title","content":"Kotlin隐藏Metadata和SourceDebugExtension注解"}],["meta",{"property":"og:description","content":"什么是Metadata和SourceDebugExtension注解 Kotlin编译器在编译Kotlin源代码时会生成一些额外的元数据信息,以支持运行时反射等功能。这些元数据主要包含在两个注解中: kotlin.Metadata - 包含了类、函数、属性等Kotlin特有的元数据信息 kotlin.jvm.internal.SourceDebugEx..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-20T19:27:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-20T19:27:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Kotlin隐藏Metadata和SourceDebugExtension注解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-20T19:27:37.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"什么是Metadata和SourceDebugExtension注解","slug":"什么是metadata和sourcedebugextension注解","link":"#什么是metadata和sourcedebugextension注解","children":[]},{"level":2,"title":"隐藏SourceDebugExtension注解","slug":"隐藏sourcedebugextension注解","link":"#隐藏sourcedebugextension注解","children":[]},{"level":2,"title":"隐藏Metadata注解","slug":"隐藏metadata注解","link":"#隐藏metadata注解","children":[]}],"git":{"createdTime":1734722857000,"updatedTime":1734722857000,"contributors":[{"name":"大阔","email":"1520622465@qq.com","commits":1}]},"readingTime":{"minutes":1.06,"words":319},"filePathRelative":"books/dev/Kotlin-Hidden-Metadata.md","localizedDate":"2024年12月20日","excerpt":"<h2>什么是Metadata和SourceDebugExtension注解</h2>\\n<p>Kotlin编译器在编译Kotlin源代码时会生成一些额外的元数据信息,以支持运行时反射等功能。这些元数据主要包含在两个注解中:</p>\\n<ul>\\n<li><code>kotlin.Metadata</code> - 包含了类、函数、属性等Kotlin特有的元数据信息</li>\\n<li><code>kotlin.jvm.internal.SourceDebugExtension</code> - 包含了源码调试相关的信息</li>\\n</ul>\\n<p>这些注解对于Kotlin运行时库来说是必需的,但在某些情况下我们可能希望隐藏这些信息,比如:</p>","autoDesc":true}');export{o as comp,p as data};