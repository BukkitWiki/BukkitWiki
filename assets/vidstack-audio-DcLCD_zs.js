var o=Object.defineProperty;var a=(t,i,e)=>i in t?o(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e;var r=(t,i,e)=>a(t,typeof i!="symbol"?i+"":i,e);import{N as p}from"./app-Cic8aZhV.js";import{H as d,a as u}from"./vidstack-CSv7rfHP-B1Kpqo5o.js";import"./vidstack-DSYpsFWk-9mx6a0Df.js";class y extends d{constructor(e,s){super(e,s);r(this,"$$PROVIDER_TYPE","AUDIO");r(this,"airPlay");p(()=>{this.airPlay=new u(this.media,s)},this.scope)}get type(){return"audio"}setup(){super.setup(),this.type==="audio"&&this.ctx.notify("provider-setup",this)}get audio(){return this.media}}export{y as AudioProvider};