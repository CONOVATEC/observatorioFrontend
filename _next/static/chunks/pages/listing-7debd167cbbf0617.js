(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[105],{6600:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/listing",function(){return r(30)}])},30:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var n=r(5893),i=r(9008),a=r.n(i),o=r(7232),l=r(7294),s=r(6702),d=r(2757),c=r(3717),u=r(4225),m=r(1782),f=r(9734),p=r(7860),x=r(1664),h=r.n(x);let g=()=>{var e,t;let{data:r,error:i,isLoading:a}=(0,f.ZP)("/api/posts",p.Z),{data:o,error:x}=(0,f.ZP)("/api/categories",p.Z),[g,v]=(0,l.useState)(0),[b,w]=(0,l.useState)([]),j=e=>{v(e)},k=[{id:0,name:"Todos",description:""},...null!==(t=null==o?void 0:o.data)&&void 0!==t?t:[]];return(0,l.useEffect)(()=>{w(0===g?null==r?void 0:r.data:null==r?void 0:r.data.filter(e=>e.categoryId===g&&"cover"===e.news_cover))},[g,r]),(0,n.jsxs)(s.K,{as:"section",children:[(0,n.jsx)(d.X,{as:"h3",size:"lg",width:"80%",px:"15px",mx:"auto",mt:8,sx:{textAlign:"start"},children:"\xdaltimas noticias"}),(0,n.jsx)(m.Z,{data:null==r?void 0:null===(e=r.data)||void 0===e?void 0:e.slice(0,3),isLoading:a}),(0,n.jsx)(c.k,{alignItems:"center",justifyContent:"center",gap:3,wrap:"wrap",direction:{base:"column",sm:"row"},children:k.map(e=>(0,n.jsx)(u.z,{variant:g===e.id?"solid":"outline",onClick(){j(e.id)},colorScheme:"brand",borderRadius:"3xl",_dark:{bg:g===e.id?"#2D3748":void 0,color:"white",border:"1px solid #2D3748"},children:e.name},e.id))}),(0,n.jsx)(m.Z,{data:null==b?void 0:b.slice(0,3),isLoading:a}),!a&&(null==b?void 0:b.length)>3&&(0,n.jsx)(u.z,{sx:{mx:"auto",mb:5},w:{base:"80%",sm:"20%"},colorScheme:"brand",_dark:{bg:"#2D3748",color:"white",border:"1px solid #2D3748"},as:h(),href:{pathname:"/listing/[category]",query:{category:k[g].name}},children:"Ver m\xe1s"})]})};var v=(0,l.memo)(g),b=r(8860),w=r(2166);function j(){return(0,n.jsxs)(b.Z,{children:[(0,n.jsx)(a(),{children:(0,n.jsxs)("title",{children:[w.A," - Bolet\xedn de noticias"]})}),(0,n.jsx)(o.Z,{}),(0,n.jsx)(v,{})]})}},1782:function(e,t,r){"use strict";r.d(t,{Z:function(){return O}});var n=r(5893),i=r(7294),a=r(9078),o=r(9259),l=r(5432),s=r(2548),d=r(3179),c=r(917),u=r(6554),m=r(7440),f=r(8925),p=(0,s.m)("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),x=(0,d.gJ)("skeleton-start-color"),h=(0,d.gJ)("skeleton-end-color"),g=(0,c.F4)({from:{opacity:0},to:{opacity:1}}),v=(0,c.F4)({from:{borderColor:x.reference,background:x.reference},to:{borderColor:h.reference,background:h.reference}}),b=(0,u.G)((e,t)=>{let r={...e,fadeDuration:"number"==typeof e.fadeDuration?e.fadeDuration:.4,speed:"number"==typeof e.speed?e.speed:.8},a=(0,m.mq)("Skeleton",r),o=function(){let e=(0,i.useRef)(!0);return(0,i.useEffect)(()=>{e.current=!1},[]),e.current}(),{startColor:c="",endColor:u="",isLoaded:b,fadeDuration:w,speed:j,className:k,fitContent:y,..._}=(0,d.Lr)(r),[A,C]=(0,f.dQ)("colors",[c,u]),S=function(e){let t=(0,i.useRef)();return(0,i.useEffect)(()=>{t.current=e},[e]),t.current}(b),E=(0,l.cx)("chakra-skeleton",k),O={...A&&{[x.variable]:A},...C&&{[h.variable]:C}};if(b){let R=o||S?"none":`${g} ${w}s`;return(0,n.jsx)(s.m.div,{ref:t,className:E,__css:{animation:R},..._})}return(0,n.jsx)(p,{ref:t,className:E,..._,__css:{width:y?"fit-content":void 0,...a,...O,_dark:{...a._dark,...O},animation:`${j}s linear infinite alternate ${v}`}})});b.displayName="Skeleton";var w=r(3990),j=r(607),k=r(6089),y=r(6702),_=r(1293),A=r(2757),C=r(1664),S=r.n(C);let E=e=>{let{data:t,isLoading:r}=e;return(0,n.jsx)(n.Fragment,{children:r?(0,n.jsxs)(a.r,{templateColumns:"repeat(auto-fill, minmax(200px,400px))",autoColumns:"1fr",gap:6,p:"15px",w:"85%",alignSelf:"center",placeContent:"center",children:[(0,n.jsx)(o.P,{w:"100%",children:(0,n.jsx)(b,{height:"400px"})}),(0,n.jsx)(o.P,{w:"100%",children:(0,n.jsx)(b,{height:"400px"})}),(0,n.jsx)(o.P,{w:"100%",children:(0,n.jsx)(b,{height:"400px"})})]}):(0,n.jsx)(a.r,{gap:6,p:"15px",w:"80%",maxW:"80vw",templateColumns:{base:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"},autoRows:"auto",autoFlow:"dense",mx:"auto",children:null==t?void 0:t.map((e,t)=>{let{title:r,id:i,extract:a,user:l,created_at:s,url_image:d,category:c}=e;return(0,n.jsx)(o.P,{w:"100%",children:(0,n.jsx)(w.Z,{as:S(),h:"100%",href:{pathname:"/listing/[category]/[name]",query:{category:c.name,name:r,id:i}},w:"100%",children:(0,n.jsxs)(j.e,{children:[(0,n.jsx)(k.E,{src:d||"https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075063/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOTICIAS/PORTADA_PRINCIPAL_DE_NOTICIAS_velaqw.png",alt:r,borderRadius:"lg",maxH:"400px",w:"100%",h:{sm:"auto",md:"230px",lg:"270px"},objectFit:"cover"}),(0,n.jsxs)(y.K,{mt:"6",spacing:"3",w:"100%",children:[(0,n.jsx)(_.x,{fontSize:"sm",children:"".concat(l.name," | ").concat(s)}),(0,n.jsx)(A.X,{size:"md",children:r}),(0,n.jsx)(_.x,{sx:{display:"-webkit-box",WebkitBoxOrient:"vertical",overflow:"hidden",WebkitLineClamp:1,textOverflow:"ellipsis",width:"100%"},maxWidth:"100%",w:"100%",children:a})]})]})},"post-".concat(i))},i)})})})};var O=E},7232:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(5893),i=r(3717),a=r(8783),o=r(3951),l=r(6336),s=r(7294),d=r(8940),c=r(5432);function u(e,t){var r;let n=(0,c.Kn)(t)?t:{fallback:null!=t?t:"base"},i=function(e){var t,r;let n=(0,c.Kn)(e)?e:{fallback:null!=e?e:"base"},i=(0,d.F)(),a=i.__breakpoints.details.map(({minMaxQuery:e,breakpoint:t})=>({breakpoint:t,query:e.replace("@media screen and ","")})),o=a.map(e=>e.breakpoint===n.fallback),u=function(e,t={}){let{ssr:r=!0,fallback:n}=t,{getWindow:i}=(0,l.O)(),a=Array.isArray(e)?e:[e],o=Array.isArray(n)?n:[n];o=o.filter(e=>null!=e);let[d,c]=(0,s.useState)(()=>a.map((e,t)=>({media:e,matches:r?!!o[t]:i().matchMedia(e).matches})));return(0,s.useEffect)(()=>{let e=i();c(a.map(t=>({media:t,matches:e.matchMedia(t).matches})));let t=a.map(t=>e.matchMedia(t)),r=e=>{c(t=>t.slice().map(t=>t.media===e.media?{...t,matches:e.matches}:t))};return t.forEach(e=>{"function"==typeof e.addListener?e.addListener(r):e.addEventListener("change",r)}),()=>{t.forEach(e=>{"function"==typeof e.removeListener?e.removeListener(r):e.removeEventListener("change",r)})}},[i]),d.map(e=>e.matches)}(a.map(e=>e.query),{fallback:o,ssr:n.ssr}),m=u.findIndex(e=>!0==e);return null!=(r=null==(t=a[m])?void 0:t.breakpoint)?r:n.fallback}(n),a=(0,d.F)();if(!i)return;let u=Array.from((null==(r=a.__breakpoints)?void 0:r.keys)||[]),m=Array.isArray(e)?Object.fromEntries(Object.entries((0,o.Yq)(e,u)).map(([e,t])=>[e,t])):e;return function(e,t,r=o.AV){let n=Object.keys(e).indexOf(t);if(-1!==n)return e[t];let i=r.indexOf(t);for(;i>=0;){let a=r[i];if(e.hasOwnProperty(a)){n=i;break}i-=1}if(-1!==n){let l=r[n];return e[l]}}(m,i,u)}var m=r(6702),f=r(1293),p=r(4225),x=r(7860),h=r(9734),g=r(1664),v=r.n(g);let b=()=>{var e;let{data:t}=(0,h.ZP)("/api/posts",x.Z),r=null==t?void 0:null===(e=t.data)||void 0===e?void 0:e.filter(e=>"cover"===e.news_cover&&"trend"===e.tendencia).sort((e,t)=>e.id<t.id?1:e.id>t.id?-1:0)[0],{url_image:o,title:l,extract:s,category:d,id:c}=null!=r?r:{};return(0,n.jsx)(i.k,{w:"full",h:{base:"50vh",md:"70vh",lg:"80vh"},backgroundImage:"url(".concat(o,")"),backgroundSize:{base:"cover",md:"100% 100%"},backgroundPosition:"center left",children:(0,n.jsx)(a.g,{w:"full",align:"left",justify:"top",padding:4,px:u({base:4,md:8}),bgGradient:"linear(to-r, blackAlpha.600, transparent)",children:(0,n.jsxs)(m.K,{maxW:"2xl",align:"flex-start",spacing:6,children:[(0,n.jsx)(f.x,{color:"white",fontWeight:700,lineHeight:1.2,mt:6,fontSize:u({base:"1xl",md:"2xl",lg:"4xl"}),children:l}),(0,n.jsx)(f.x,{color:"white",fontWeight:300,lineHeight:1.2,maxW:{base:"68%",lg:"100%"},fontSize:u({base:"sm",md:"xl",lg:"2xl"}),sx:{display:"-webkit-box",WebkitBoxOrient:"vertical",overflow:"hidden",WebkitLineClamp:10,textOverflow:"ellipsis",width:"100%"},children:s}),(0,n.jsx)(p.z,{bg:"purple.600",as:v(),color:"black",position:"static",_hover:{bg:"whiteAlpha.500"},size:u({base:"xs",md:"sm",lg:"lg"}),href:{pathname:"/listing/[category]/[name]",query:{category:null==d?void 0:d.name,name:l,id:c}},children:"M\xe1s informaci\xf3n"})]})})})};var w=(0,s.memo)(b)},7860:function(e,t){"use strict";let r=e=>fetch(e).then(e=>e.json());t.Z=r},9078:function(e,t,r){"use strict";r.d(t,{r:function(){return o}});var n=r(6554),i=r(2548),a=r(5893),o=(0,n.G)(function(e,t){let{templateAreas:r,gap:n,rowGap:o,columnGap:l,column:s,row:d,autoFlow:c,autoRows:u,templateRows:m,autoColumns:f,templateColumns:p,...x}=e;return(0,a.jsx)(i.m.div,{ref:t,__css:{display:"grid",gridTemplateAreas:r,gridGap:n,gridRowGap:o,gridColumnGap:l,gridAutoColumns:f,gridColumn:s,gridRow:d,gridAutoFlow:c,gridAutoRows:u,gridTemplateRows:m,gridTemplateColumns:p},...x})});o.displayName="Grid"},9259:function(e,t,r){"use strict";r.d(t,{P:function(){return d}});var n=r(6554),i=r(2548),a=r(7052),o=r(3951),l=r(5893);function s(e){return(0,o.XQ)(e,e=>"auto"===e?"auto":`span ${e}/span ${e}`)}var d=(0,n.G)(function(e,t){let{area:r,colSpan:n,colStart:o,colEnd:d,rowEnd:c,rowSpan:u,rowStart:m,...f}=e,p=(0,a.o)({gridArea:r,gridColumn:s(n),gridRow:s(u),gridColumnStart:o,gridColumnEnd:d,gridRowStart:m,gridRowEnd:c});return(0,l.jsx)(i.m.div,{ref:t,__css:p,...f})});d.displayName="GridItem"},8783:function(e,t,r){"use strict";r.d(t,{g:function(){return o}});var n=r(6702),i=r(6554),a=r(5893),o=(0,i.G)((e,t)=>(0,a.jsx)(n.K,{align:"center",...e,direction:"column",ref:t}));o.displayName="VStack"}},function(e){e.O(0,[445,543,657,860,774,888,179],function(){return e(e.s=6600)}),_N_E=e.O()}]);