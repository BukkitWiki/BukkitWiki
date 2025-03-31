import{_ as s,c as a,j as n,o as e}from"./app-DdBNsIhi.js";const l={};function t(h,i){return e(),a("div",null,i[0]||(i[0]=[n(`<h1 id="快捷绑定" tabindex="-1"><a class="header-anchor" href="#快捷绑定"><span>快捷绑定</span></a></h1><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Shortcuts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Offhand</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: []</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Sneaking-Offhand</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">condition</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;perm *trmenu.shortcut&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      execute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;open: Example&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      deny</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;return&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Right-Click-Player</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;open: Profile&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Sneaking-Right-Click-Player</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [ ]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  PlayerInventory-Border-Left</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [ ]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  PlayerInventory-Border-Right</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [ ]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  PlayerInventory-Border-Middle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [ ]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型" tabindex="-1"><a class="header-anchor" href="#类型"><span>类型</span></a></h2><ul><li>切换副手 OFFHAND</li><li>蹲下 + 切换副手 SNEAKING_OFFHAND</li><li>右键玩家 RIGHT_CLICK_PLAYER</li><li>蹲下 + 右键玩家 SNEAKING_RIGHT_CLICK_PLAYER</li><li>（生存模式下）点击玩家背包外界 PLAYER_INVENTORY_BORDER_LEFT/RIGHT/MIDDLE</li></ul><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h2><ul><li>当 <strong>动作组</strong> 执行结果为 true，将会取消这个事件（例如切换副手）</li><li>为防止干扰游戏体验，所有 [蹲下 + 操作] 的快捷组合需要在 <strong>1.5s</strong> 内完成才能触发</li><li>右键玩家的快捷方式将默认传入菜单参数为目标玩家的名称</li></ul>`,7)]))}const p=s(l,[["render",t]]),k=JSON.parse(`{"path":"/plugins/plugins/trmenu/usage/shortcuts.html","title":"快捷绑定","lang":"zh-CN","frontmatter":{"description":"快捷绑定 配置 类型 切换副手 OFFHAND 蹲下 + 切换副手 SNEAKING_OFFHAND 右键玩家 RIGHT_CLICK_PLAYER 蹲下 + 右键玩家 SNEAKING_RIGHT_CLICK_PLAYER （生存模式下）点击玩家背包外界 PLAYER_INVENTORY_BORDER_LEFT/RIGHT/MIDDLE 注意 当 动...","head":[["meta",{"property":"og:url","content":"https://bukkit.wiki/plugins/plugins/trmenu/usage/shortcuts.html"}],["meta",{"property":"og:site_name","content":"BukkitWiki"}],["meta",{"property":"og:title","content":"快捷绑定"}],["meta",{"property":"og:description","content":"快捷绑定 配置 类型 切换副手 OFFHAND 蹲下 + 切换副手 SNEAKING_OFFHAND 右键玩家 RIGHT_CLICK_PLAYER 蹲下 + 右键玩家 SNEAKING_RIGHT_CLICK_PLAYER （生存模式下）点击玩家背包外界 PLAYER_INVENTORY_BORDER_LEFT/RIGHT/MIDDLE 注意 当 动..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-29T08:09:08.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-29T08:09:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"快捷绑定\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-29T08:09:08.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"类型","slug":"类型","link":"#类型","children":[]},{"level":2,"title":"注意","slug":"注意","link":"#注意","children":[]}],"git":{"createdTime":1730189348000,"updatedTime":1730189348000,"contributors":[{"name":"大阔","email":"1520622465@qq.com","commits":1}]},"readingTime":{"minutes":0.56,"words":169},"filePathRelative":"plugins/plugins/trmenu/usage/shortcuts.md","localizedDate":"2024年10月29日","excerpt":"\\n<h2>配置</h2>\\n<div class=\\"language-yaml line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"yaml\\" data-title=\\"yaml\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">Shortcuts</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">  Offhand</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: []</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">  Sneaking-Offhand</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    - </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">condition</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'perm *trmenu.shortcut'</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">      execute</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'open: Example'</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">      deny</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'return'</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">  Right-Click-Player</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'open: Profile'</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">  Sneaking-Right-Click-Player</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: [ ]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">  PlayerInventory-Border-Left</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: [ ]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">  PlayerInventory-Border-Right</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: [ ]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">  PlayerInventory-Border-Middle</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: [ ]</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{p as comp,k as data};
