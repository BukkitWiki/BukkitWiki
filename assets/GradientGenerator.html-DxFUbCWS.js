import{_ as F,f as w,i as d,c,a as e,j as v,v as m,t as k,F as I,r as B,o as p,k as G,n as O}from"./app-ANGHQNbn.js";const P={__name:"GradientGenerator.html",setup(U,{expose:o}){o();const i=w("BukkitWiki"),t=w(["#40b782","#35495e"]),b=w("#40b782"),_=l=>{t.value.length<=2||t.value.splice(l,1)},n=()=>{t.value.push(b.value)},r=l=>{if(l>0){const a=t.value[l];t.value[l]=t.value[l-1],t.value[l-1]=a}},h=l=>{if(l<t.value.length-1){const a=t.value[l];t.value[l]=t.value[l+1],t.value[l+1]=a}},V=d(()=>i.value.split(""));function g(){const l=V.value.length,a=t.value,x=a.length-1;if(l<=1)return[a[0]];const T=s=>({r:parseInt(s.slice(1,3),16),g:parseInt(s.slice(3,5),16),b:parseInt(s.slice(5,7),16)}),Z=(s,f,C)=>`#${((1<<24)+(s<<16)+(f<<8)+C).toString(16).slice(1)}`,H=[];for(let s=0;s<l;s++){const f=s/(l-1),C=Math.min(Math.floor(f*x),x-1),u=T(a[C]),y=T(a[Math.min(C+1,x)]),M=f*x-C,R=Math.round(u.r+M*(y.r-u.r)),q=Math.round(u.g+M*(y.g-u.g)),A=Math.round(u.b+M*(y.b-u.b));H.push(Z(R,q,A))}return H}const L=d(()=>g()),j=d(()=>g().map((l,a)=>"&"+l+i.value[a]).join("")),D=d(()=>`<gradient:${t.value.join(":")}>${i.value}</gradient>`),S=d(()=>g().map((l,a)=>"{"+l+"}"+i.value[a]).join("")),N=d(()=>g().map((l,a)=>"&{"+l+"}"+i.value[a]).join("")),z={textInput:i,colors:t,addColor:b,removeColor:_,addColorToList:n,moveColorUp:r,moveColorDown:h,characters:V,characterColors:g,preview:L,ChatColors:j,MiniMessage:D,CMI:S,TrChat:N,ref:w,computed:d};return Object.defineProperty(z,"__isScriptSetup",{enumerable:!1,value:!0}),z}},W={class:"container"},E={style:{display:"flex"}},J={class:"add-color-container"},K={class:"color-code mcfont"},Q={class:"color-list"},X=["onUpdate:modelValue"],Y={class:"color-code mcfont",style:{"font-size":"1.4rem"}},$=["onClick"],tt=["onClick"],et=["onClick"],ot={class:"preview"},lt={style:{display:"flex","align-items":"center","flex-direction":"column"}},nt={style:{display:"flex","align-items":"center","flex-direction":"column"}},at={style:{display:"flex","align-items":"center","flex-direction":"column"}},rt={style:{display:"flex","align-items":"center","flex-direction":"column"}};function st(U,o,i,t,b,_){return p(),c("div",null,[e("div",W,[e("div",E,[v(e("textarea",{"onUpdate:modelValue":o[0]||(o[0]=n=>t.textInput=n),placeholder:"输入文本",class:"text-input"},null,512),[[m,t.textInput]])]),e("div",J,[v(e("input",{type:"color","onUpdate:modelValue":o[1]||(o[1]=n=>t.addColor=n),class:"color-input"},null,512),[[m,t.addColor]]),e("span",K,k(t.addColor),1),e("button",{class:"add-btn","aria-label":"添加",onClick:t.addColorToList},o[6]||(o[6]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M298.7 213.3V0h-85.4v213.3H0v85.4h213.3V512h85.4V298.7H512v-85.4z"})],-1)]))]),e("div",Q,[(p(!0),c(I,null,B(t.colors,(n,r)=>(p(),c("div",{key:r,class:"color-item"},[v(e("input",{type:"color","onUpdate:modelValue":h=>t.colors[r]=h,class:"color-picker"},null,8,X),[[m,t.colors[r]]]),e("span",Y,k(n),1),e("div",null,[r!==0?(p(),c("button",{key:0,onClick:h=>t.moveColorUp(r),class:"move-btn","aria-label":"向上移动"},o[7]||(o[7]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M10.94 7.94a1.5 1.5 0 0 1 2.12 0l5.658 5.656a1.5 1.5 0 1 1-2.122 2.121L12 11.122l-4.596 4.596a1.5 1.5 0 1 1-2.122-2.12z"})],-1)]),8,$)):G("v-if",!0),r!==t.colors.length-1?(p(),c("button",{key:1,onClick:h=>t.moveColorDown(r),class:"move-btn","aria-label":"向下移动"},o[8]||(o[8]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z"})],-1)]),8,tt)):G("v-if",!0),e("button",{onClick:h=>t.removeColor(r),class:"delete-btn","aria-label":"删除"},o[9]||(o[9]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M5 5h2v2H5zm4 4H7V7h2zm2 2H9V9h2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2zm2-2v2h-2V9zm2-2v2h-2V7zm0 0V5h2v2z"})],-1)]),8,et)])]))),128))]),e("div",ot,[(p(!0),c(I,null,B(t.textInput,(n,r)=>(p(),c("p",{class:"mcfont",key:r,style:O({color:t.preview[r],lineHeight:0})},k(n),5))),128))]),e("div",lt,[o[10]||(o[10]=e("p",null,"消息格式:",-1)),v(e("textarea",{class:"chatColors text-input",disabled:"","onUpdate:modelValue":o[2]||(o[2]=n=>t.ChatColors=n)},null,512),[[m,t.ChatColors]])]),e("div",nt,[o[11]||(o[11]=e("p",null,"MiniMessage:",-1)),v(e("textarea",{class:"chatColors text-input",disabled:"","onUpdate:modelValue":o[3]||(o[3]=n=>t.MiniMessage=n)},null,512),[[m,t.MiniMessage]])]),e("div",at,[o[12]||(o[12]=e("p",null,"CMI:",-1)),v(e("textarea",{class:"chatColors text-input",disabled:"","onUpdate:modelValue":o[4]||(o[4]=n=>t.CMI=n)},null,512),[[m,t.CMI]])]),e("div",rt,[o[13]||(o[13]=e("p",null,"TrChat:",-1)),v(e("textarea",{class:"chatColors text-input",disabled:"","onUpdate:modelValue":o[5]||(o[5]=n=>t.TrChat=n)},null,512),[[m,t.TrChat]])])])])}const dt=F(P,[["render",st],["__scopeId","data-v-e5b1662a"],["__file","GradientGenerator.html.vue"]]),ct=JSON.parse('{"path":"/tools/GradientGenerator.html","title":"渐变文本生成器","lang":"zh-CN","frontmatter":{"title":"渐变文本生成器","icon":"carbon:gradient","order":3,"description":"{{ addColor }} {{ char }} 消息格式: MiniMessage: CMI: TrChat:","head":[["meta",{"property":"og:url","content":"https://bukkit.wiki/tools/GradientGenerator.html"}],["meta",{"property":"og:site_name","content":"BukkitWiki"}],["meta",{"property":"og:title","content":"渐变文本生成器"}],["meta",{"property":"og:description","content":"{{ addColor }} {{ char }} 消息格式: MiniMessage: CMI: TrChat:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-13T04:34:49.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-13T04:34:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"渐变文本生成器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-13T04:34:49.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1731431575000,"updatedTime":1731472489000,"contributors":[{"name":"大阔","email":"1520622465@qq.com","commits":2}]},"readingTime":{"minutes":3.94,"words":1181},"filePathRelative":"tools/GradientGenerator.md","localizedDate":"2024年11月12日","excerpt":"<div class=\\"container\\">\\n    <div style=\\"display: flex;\\">\\n      <textarea v-model=\\"textInput\\" placeholder=\\"输入文本\\" class=\\"text-input\\"></textarea>\\n    </div>\\n    <div class=\\"add-color-container\\">\\n        <input type=\\"color\\" v-model=\\"addColor\\" class=\\"color-input\\">\\n        <span class=\\"color-code mcfont\\">{{ addColor }}</span>\\n        <button class=\\"add-btn\\" aria-label=\\"添加\\" @click=\\"addColorToList\\">\\n          <svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"1em\\" height=\\"1em\\" viewBox=\\"0 0 512 512\\">\\n            <path fill=\\"currentColor\\" d=\\"M298.7 213.3V0h-85.4v213.3H0v85.4h213.3V512h85.4V298.7H512v-85.4z\\"></path>\\n          </svg>\\n        </button>\\n    </div>\\n    <div class=\\"color-list\\">\\n        <template v-for=\\"(color, i) in colors\\" :key=\\"i\\">\\n            <div class=\\"color-item\\">\\n                <input type=\\"color\\" v-model=\\"colors[i]\\" class=\\"color-picker\\">\\n                <span class=\\"color-code mcfont\\" style=\\"font-size: 1.4rem\\">{{ color }}</span>\\n                <div>\\n                    <template v-if=\\"i !== 0\\">\\n                        <button @click=\\"moveColorUp(i)\\" class=\\"move-btn\\" aria-label=\\"向上移动\\">\\n                          <svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"1em\\" height=\\"1em\\" viewBox=\\"0 0 24 24\\">\\n                            <path fill=\\"currentColor\\" d=\\"M10.94 7.94a1.5 1.5 0 0 1 2.12 0l5.658 5.656a1.5 1.5 0 1 1-2.122 2.121L12 11.122l-4.596 4.596a1.5 1.5 0 1 1-2.122-2.12z\\"></path>\\n                          </svg>\\n                        </button>\\n                    </template>\\n                      <template v-if=\\"i !== colors.length - 1\\">\\n                        <button @click=\\"moveColorDown(i)\\" class=\\"move-btn\\" aria-label=\\"向下移动\\">\\n                          <svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"1em\\" height=\\"1em\\" viewBox=\\"0 0 24 24\\">\\n                            <path fill=\\"currentColor\\" d=\\"M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z\\"></path>\\n                          </svg>\\n                        </button>\\n                      </template>\\n                <button @click=\\"removeColor(i)\\" class=\\"delete-btn\\" aria-label=\\"删除\\">\\n                  <svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"1em\\" height=\\"1em\\" viewBox=\\"0 0 24 24\\">\\n                    <path fill=\\"currentColor\\" d=\\"M5 5h2v2H5zm4 4H7V7h2zm2 2H9V9h2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2zm2-2v2h-2V9zm2-2v2h-2V7zm0 0V5h2v2z\\"></path>\\n                  </svg>\\n                </button>\\n                </div>\\n            </div>\\n        </template>\\n    </div>\\n  <div class=\\"preview\\">\\n    <p class=\\"mcfont\\" v-for=\\"(char, index) in textInput\\" :key=\\"index\\" :style=\\"{ color: preview[index],lineHeight:0}\\">\\n        {{ char }}\\n      </p>\\n  </div>\\n  <div style=\\"display: flex; align-items: center; flex-direction: column;\\">\\n    <p>消息格式:</p>\\n    <textarea class=\\"chatColors text-input\\" disabled=\\"\\" v-model=\\"ChatColors\\"></textarea>\\n  </div>\\n  <div style=\\"display: flex; align-items: center; flex-direction: column;\\">\\n    <p>MiniMessage:</p>\\n    <textarea class=\\"chatColors text-input\\" disabled=\\"\\" v-model=\\"MiniMessage\\"></textarea>\\n  </div>\\n  <div style=\\"display: flex; align-items: center; flex-direction: column;\\">\\n    <p>CMI:</p>\\n    <textarea class=\\"chatColors text-input\\" disabled=\\"\\" v-model=\\"CMI\\"></textarea>\\n  </div>\\n  <div style=\\"display: flex; align-items: center; flex-direction: column;\\">\\n    <p>TrChat:</p>\\n    <textarea class=\\"chatColors text-input\\" disabled=\\"\\" v-model=\\"TrChat\\"></textarea>\\n  </div>\\n</div>","autoDesc":true}');export{dt as comp,ct as data};
