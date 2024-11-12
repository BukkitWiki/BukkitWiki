import{_ as s,c as l,k as a,o as n}from"./app-D29acTA2.js";const e={};function t(r,i){return n(),l("div",null,i[0]||(i[0]=[a(`<h1 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h1><h2 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量"><span>全局变量</span></a></h2><p>适用于所有事件的变量</p><ul><li><strong>%player%</strong> (玩家名称)</li><li><strong>%random_min_max%</strong> (随机数 例如: %random_1_10% 将返回一个介于1和10之间的一个随机数)</li><li><strong>%playerarmor_&lt;type&gt;%</strong> (玩家装备的材质 请将&lt;type&gt;换成你想获取的部位(helmet, chestplate, leggings or boots) 例如: %playerarmor_helmet% 获取玩家头部装备的材质)</li><li><strong>%playerarmor_name_&lt;type&gt;%</strong> (玩家装备的名字)</li><li><strong>%block_at_&lt;x&gt;<em>&lt;y&gt;</em>&lt;z&gt;_&lt;world&gt;%</strong> (位于特定位置方块的材质)</li><li><strong>%block_data_at_&lt;x&gt;<em>&lt;y&gt;</em>&lt;z&gt;_&lt;world&gt;%</strong> (在 1.8-1.12 版本中会返回一个数值，在 1.13+ 版本中会返回一个包含多个方块属性的文本。例如，楼梯方块具有方向属性，或小麦方块具有成长值的属性)</li><li><strong>%playerblock_below_&lt;distance&gt;%</strong> (玩家下方一定距离的方块材质 例如: %playerblock_below_1% 将返回玩家正下方的方块材质)</li><li><strong>%playerblock_above_&lt;distance&gt;%</strong> (玩家上方一定距离的方块的材质。例如：%playerblock_above_5% 将返回玩家上方 5 个方块的材质)</li><li><strong>%playerblock_inside%</strong> (玩家所处方块的材质，比如水或一些特殊方块，或站在头方块/半砖上时)</li><li><strong>%player_is_outside%</strong> (检查玩家是否在外部，或者头顶上是否没有方块。它将返回<code>true</code> 或 <code>false</code>)</li><li><strong>%random_player%</strong> (随机选择一名玩家，如果找不到玩家则返回 <code>none</code>)</li><li><strong>%random_player_&lt;world&gt;%</strong> (在某个世界随机选择一名玩家，如果找不到玩家则返回 <code>none</code>)</li><li><strong>%randomword_&lt;word1&gt;-&lt;word2&gt;-&lt;wordN&gt;%</strong> (从提供的列表中随机选择一个单词。每个单词之间应以&quot;-&quot;分隔)</li><li><strong>%is_nearby_&lt;x&gt;<em>&lt;y&gt;</em>&lt;z&gt;<em>&lt;world&gt;</em>&lt;radius&gt;%</strong> (检查玩家是否在特定坐标附近。它将返回 <code>true</code> 或 <code>false</code>)</li><li><strong>%world_time_&lt;world&gt;%</strong> （某个世界的时间，以刻度为单位）</li><li><strong>%world_is_raining%</strong> (检查玩家所在的世界是否正在下雨。它将返回 <code>true</code> 或 <code>false</code>)</li><li><strong>%is_number_&lt;variable&gt;%</strong> (检查某个变量是否位数字 它将返回 <code>true</code> 或 <code>false</code>)</li><li><strong>%empty%</strong> (返回空文本的特殊变量)</li></ul><p>在所有事件的条件和操作中都可以使用 <a href="https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders" target="_blank" rel="noopener noreferrer">PlaceholderAPI</a> 变量</p><h2 id="物品变量" tabindex="-1"><a class="header-anchor" href="#物品变量"><span>物品变量</span></a></h2><p>这些变量可用于大多数和物品有关的事件</p><ul><li><strong>%item%</strong> (物品材质名 参考<a href="https://bukkit.windit.net/javadoc/org/bukkit/Material.html" target="_blank" rel="noopener noreferrer">此页面</a>)</li><li><strong>%item_durability%</strong> (物品的耐久值)</li><li><strong>%item_amount%</strong> (物品的数量)</li><li><strong>%item_name%</strong> (不含颜色代码的物品名)</li><li><strong>%item_color_format_name%</strong> (包括颜色代码的物品名)</li><li><strong>%item_lore%</strong> (物品的描述)</li><li><strong>%item_color_format_lore%</strong> (包括颜色代码的物品描述)</li><li><strong>%item_lore_line_X%</strong> (物品描述的第 X 行)</li><li><strong>%item_color_format_lore_line_X%</strong> (物品描述的第 X 行，包括颜色代码)</li><li><strong>%item_custom_model_data%</strong> (物品的Custom-Model-Data数据值)</li><li><strong>%item_meta%</strong> (物品更多信息的文本，例如药水效果)</li></ul><p>对于 Player Swap Hand 事件 你可以使用%offhand:&lt;变量&gt;% 从副手物品中获取变量<br> 例如：</p><ul><li>%offhand:item%</li><li>%offhand:item_lore%</li></ul><h2 id="方块变量" tabindex="-1"><a class="header-anchor" href="#方块变量"><span>方块变量</span></a></h2><p>这些变量可用于大多数和方块有关的事件</p><ul><li><strong>%block%</strong> (方块材质名 参考<a href="https://bukkit.windit.net/javadoc/org/bukkit/Material.html" target="_blank" rel="noopener noreferrer">此页面</a>)</li><li><strong>%block_x%</strong> (方块的X坐标)</li><li><strong>%block_y%</strong> (方块的Y坐标)</li><li><strong>%block_z%</strong> (方块的Z坐标)</li><li><strong>%block_world%</strong> (方块所在的世界)</li><li><strong>%block_head_texture%</strong> (头方块的材质id，如果无效将返回空文本)</li><li><strong>%block_below_&lt;距离&gt;%</strong> (方块下方一定距离的方块类型。例如：%block_below_1% 将返回方块正下方的方块)</li><li><strong>%block_above_&lt;距离&gt;%</strong> (方块上方一定距离的方块类型。例如：%block_above_1% 将返回方块正上方的方块)</li></ul><h2 id="实体变量" tabindex="-1"><a class="header-anchor" href="#实体变量"><span>实体变量</span></a></h2><p>这些变量可用于大多数和实体相关的事件</p><ul><li><strong>%entity%</strong> (实体类型。参考<a href="https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html" target="_blank" rel="noopener noreferrer">此页面</a>)</li><li><strong>%entity_name%</strong> (不含颜色代码的实体名称)</li><li><strong>%entity_color_format_name%</strong> (包含颜色代码的实体名称)</li><li><strong>%entity_x%</strong> (实体的X坐标)</li><li><strong>%entity_y%</strong> (实体的Y坐标)</li><li><strong>%entity_z%</strong> (实体的Z坐标)</li><li><strong>%entity_world%</strong> (实体所在的世界)</li><li><strong>%entity_uuid%</strong> (实体的uuid)</li></ul><h2 id="受害者变量-直译" tabindex="-1"><a class="header-anchor" href="#受害者变量-直译"><span>受害者变量 (直译)</span></a></h2><p>这些变量可用于多个与受害者相关的事件</p><ul><li><strong>%victim%</strong> (受害者实体类型。参考<a href="https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html" target="_blank" rel="noopener noreferrer">此页面</a>)</li><li><strong>%victim_name%</strong> (不含颜色代码的受害者名称)</li><li><strong>%victim_color_format_name%</strong> (包含颜色代码的受害者名称)</li><li><strong>%victim_x%</strong> (受害者的X坐标)</li><li><strong>%victim_y%</strong> (受害者的Y坐标)</li><li><strong>%victim_z%</strong> (受害者的Z坐标)</li><li><strong>%victim_world%</strong> (受害者所在的世界)</li><li><strong>%victim_uuid%</strong> (受害者的uuid)</li><li><strong>%victim_health%</strong> (受害者实体的健康状况)</li></ul><h2 id="目标变量" tabindex="-1"><a class="header-anchor" href="#目标变量"><span>目标变量</span></a></h2><p>在某些情况下，例如player_attack（玩家攻击）、player_kill（玩家击杀）或entity_interact（实体交互）事件，你需要从目标玩家处获取一个变量。为此，您只需在实际变量前添加&quot;target: &quot;即可</p><ul><li>例如，如果要获取目标的玩家名称，就不能使用%player%，而需要使用%target:player%</li><li>如果需要获取目标玩家的等级，请使用%target:vault_rank%代替%vault_rank%</li></ul><p>下面是一个完整的例子:</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">example</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">player_attack</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    conditions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;%victim% equals PLAYER&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;%item% equals DIAMOND_SWORD&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;%item_name% equals Poison Sword&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    actions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;message: &amp;aApplying poison to: &amp;e%target:player%&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;to_target: give_potion_effect: POISON;120;1&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;to_target: message: &amp;cYou were poisoned by &amp;e%player%&amp;c!&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="至-变量-直译" tabindex="-1"><a class="header-anchor" href="#至-变量-直译"><span>&quot;至&quot;变量 (直译)</span></a></h2><p>使用 <a href="./actions/ToActions">至操作</a>时，可以直接从选定的玩家中获取变量。只需要在实际变量前加<code>to:</code>即可</p><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">example</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">call</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  actions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;console_message: &amp;7Sending a welcome message to all players&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;to_all: message: &amp;eHello &amp;c%to:player%, &amp;ewelcome to the server!&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">example2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">player_command</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  conditions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;%main_command% == /hello&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  actions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;cancel_event: true&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;to_range: 10;false: message: &amp;6%player% says: &amp;7Hello %to:player%!&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="嵌套变量" tabindex="-1"><a class="header-anchor" href="#嵌套变量"><span>嵌套变量</span></a></h2><p>在某些特殊情况下，您需要使用多个变量获得结果，将一个变量嵌套在另一个变量中。例如，使用 PlaceholderAPI 中的数学扩展，您可以使用多个 ConditionalEvents 变量创建一个公式</p><p>例如，如果要获取玩家所在世界的时间，需要使用<code>%world_time_&lt;world&gt;%</code>变量（来自 ConditionalEvents），加上<code>%player_world%</code>变量（来自 PlaceholderAPI）获取玩家所在世界名就可以实现。使用括号&quot;{ }&quot;来实现嵌套功能：</p><ul><li>%world_time_{player_world}%</li></ul><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1"><span>示例</span></a></h3><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Checks the time of the world you are in.</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Remember to download the Player expansion using</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># /papi ecloud download Player</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">example</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">player_command</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    conditions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;%command% == /world-time&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    actions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;cancel_event: true&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;message: Time in your current world: %world_time_{player_world}%&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例2" tabindex="-1"><a class="header-anchor" href="#示例2"><span>示例2</span></a></h3><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Gets the IP of another player by command.</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Remember to download the OtherPlayer expansion using</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># /papi ecloud download OtherPlayer</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">example2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">player_command</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    conditions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;%command% == /ip or %command% startsWith /ip &quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;%player_has_permission_conditionalevents.admin% == no execute error1&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;%args_length% &lt; 1 execute error2&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    actions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;cancel_event: true&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;message: &amp;7IP of &amp;a%arg_1% &amp;7is: %otherplayer_ip_{arg_1}%&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      error1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;cancel_event: true&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;message: &amp;cYou don&#39;t have permissions.&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      error2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;cancel_event: true&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;message: &amp;cYou must use /ip &lt;player&gt;&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36)]))}const p=s(e,[["render",t],["__file","Variables.html.vue"]]),h=JSON.parse('{"path":"/plugins/plugins/conditionalevents/Variables.html","title":"变量","lang":"zh-CN","frontmatter":{"title":"变量","description":"变量 全局变量 适用于所有事件的变量 %player% (玩家名称) %random_min_max% (随机数 例如: %random_1_10% 将返回一个介于1和10之间的一个随机数) %playerarmor_<type>% (玩家装备的材质 请将<type>换成你想获取的部位(helmet, chestplate, leggings or b...","head":[["meta",{"property":"og:url","content":"https://bukkit.wiki/plugins/plugins/conditionalevents/Variables.html"}],["meta",{"property":"og:site_name","content":"BukkitWiki"}],["meta",{"property":"og:title","content":"变量"}],["meta",{"property":"og:description","content":"变量 全局变量 适用于所有事件的变量 %player% (玩家名称) %random_min_max% (随机数 例如: %random_1_10% 将返回一个介于1和10之间的一个随机数) %playerarmor_<type>% (玩家装备的材质 请将<type>换成你想获取的部位(helmet, chestplate, leggings or b..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-12T17:14:39.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-12T17:14:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"变量\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-12T17:14:39.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"全局变量","slug":"全局变量","link":"#全局变量","children":[]},{"level":2,"title":"物品变量","slug":"物品变量","link":"#物品变量","children":[]},{"level":2,"title":"方块变量","slug":"方块变量","link":"#方块变量","children":[]},{"level":2,"title":"实体变量","slug":"实体变量","link":"#实体变量","children":[]},{"level":2,"title":"受害者变量 (直译)","slug":"受害者变量-直译","link":"#受害者变量-直译","children":[]},{"level":2,"title":"目标变量","slug":"目标变量","link":"#目标变量","children":[]},{"level":2,"title":"\\"至\\"变量 (直译)","slug":"至-变量-直译","link":"#至-变量-直译","children":[{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}]},{"level":2,"title":"嵌套变量","slug":"嵌套变量","link":"#嵌套变量","children":[{"level":3,"title":"示例","slug":"示例-1","link":"#示例-1","children":[]},{"level":3,"title":"示例2","slug":"示例2","link":"#示例2","children":[]}]}],"git":{"createdTime":1731431679000,"updatedTime":1731431679000,"contributors":[{"name":"大阔","email":"1520622465@qq.com","commits":1}]},"readingTime":{"minutes":5.02,"words":1506},"filePathRelative":"plugins/plugins/conditionalevents/Variables.md","localizedDate":"2024年11月12日","excerpt":"\\n<h2>全局变量</h2>\\n<p>适用于所有事件的变量</p>\\n<ul>\\n<li><strong>%player%</strong> (玩家名称)</li>\\n<li><strong>%random_min_max%</strong> (随机数 例如: %random_1_10% 将返回一个介于1和10之间的一个随机数)</li>\\n<li><strong>%playerarmor_&lt;type&gt;%</strong> (玩家装备的材质 请将&lt;type&gt;换成你想获取的部位(helmet, chestplate, leggings or boots) 例如: %playerarmor_helmet% 获取玩家头部装备的材质)</li>\\n<li><strong>%playerarmor_name_&lt;type&gt;%</strong> (玩家装备的名字)</li>\\n<li><strong>%block_at_&lt;x&gt;<em>&lt;y&gt;</em>&lt;z&gt;_&lt;world&gt;%</strong> (位于特定位置方块的材质)</li>\\n<li><strong>%block_data_at_&lt;x&gt;<em>&lt;y&gt;</em>&lt;z&gt;_&lt;world&gt;%</strong> (在 1.8-1.12 版本中会返回一个数值，在 1.13+ 版本中会返回一个包含多个方块属性的文本。例如，楼梯方块具有方向属性，或小麦方块具有成长值的属性)</li>\\n<li><strong>%playerblock_below_&lt;distance&gt;%</strong> (玩家下方一定距离的方块材质 例如: %playerblock_below_1% 将返回玩家正下方的方块材质)</li>\\n<li><strong>%playerblock_above_&lt;distance&gt;%</strong> (玩家上方一定距离的方块的材质。例如：%playerblock_above_5% 将返回玩家上方 5 个方块的材质)</li>\\n<li><strong>%playerblock_inside%</strong> (玩家所处方块的材质，比如水或一些特殊方块，或站在头方块/半砖上时)</li>\\n<li><strong>%player_is_outside%</strong> (检查玩家是否在外部，或者头顶上是否没有方块。它将返回<code>true</code> 或 <code>false</code>)</li>\\n<li><strong>%random_player%</strong> (随机选择一名玩家，如果找不到玩家则返回 <code>none</code>)</li>\\n<li><strong>%random_player_&lt;world&gt;%</strong> (在某个世界随机选择一名玩家，如果找不到玩家则返回 <code>none</code>)</li>\\n<li><strong>%randomword_&lt;word1&gt;-&lt;word2&gt;-&lt;wordN&gt;%</strong> (从提供的列表中随机选择一个单词。每个单词之间应以\\"-\\"分隔)</li>\\n<li><strong>%is_nearby_&lt;x&gt;<em>&lt;y&gt;</em>&lt;z&gt;<em>&lt;world&gt;</em>&lt;radius&gt;%</strong> (检查玩家是否在特定坐标附近。它将返回 <code>true</code> 或 <code>false</code>)</li>\\n<li><strong>%world_time_&lt;world&gt;%</strong> （某个世界的时间，以刻度为单位）</li>\\n<li><strong>%world_is_raining%</strong> (检查玩家所在的世界是否正在下雨。它将返回 <code>true</code> 或 <code>false</code>)</li>\\n<li><strong>%is_number_&lt;variable&gt;%</strong> (检查某个变量是否位数字 它将返回 <code>true</code> 或 <code>false</code>)</li>\\n<li><strong>%empty%</strong> (返回空文本的特殊变量)</li>\\n</ul>","autoDesc":true}');export{p as comp,h as data};
