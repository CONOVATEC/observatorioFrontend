(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{1382:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return t(9493)}])},9493:function(e,n,t){"use strict";t.r(n);var l=t(5893),o=t(1748);let a=()=>(0,l.jsx)(o.Z,{onSubmit:console.log});n.default=a},1748:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var l=t(5893),o=t(7294),a=t(8981),r=t(5610),i=t(8641),s=t(7741),c=t(7536),u=t(3234),m=t(979),p=t(7026);let b=[{name:"name",label:"Nombre",type:"text"},{name:"last-name",label:"Apellido",type:"text"},{name:"birthday",label:"Cumpleanios",type:"date"},{name:"email",label:"Correo electornico",type:"email"},{name:"genre",label:"Genero",type:"select",options:[{value:"masculino",label:"Masculino"},{value:"femenino",label:"Femenino"},{value:"no-binario",label:"No binario"},{value:"none",label:"No especifica"}]},{name:"roles",label:"Ser parte del Observatorio Joven",type:"select",options:[{value:"voluntario(a)",label:"Voluntario(a)"}]}],d=e=>{let{placeHolder:n,label:t,type:o,name:a,inputProps:r}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u.lX,{children:t}),(0,l.jsx)(m.II,{placeholder:n,type:o,name:a,...r})]})},h=e=>{let{label:n,options:t,name:o,inputProps:a}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u.lX,{children:n}),(0,l.jsx)(p.Ph,{name:o,...a,children:t.map((e,n)=>{let{label:t,value:o}=e;return(0,l.jsx)("option",{value:o,children:t},"".concat(t,"-").concat(n))})})]})},x=e=>{let{onSubmit:n}=e,{handleSubmit:t,register:o,formState:{isSubmitting:u}}=(0,c.cI)();return(0,l.jsx)(a.Zb,{children:(0,l.jsxs)(a.eW,{children:[u&&(0,l.jsx)(r.$,{}),!u&&(0,l.jsxs)(i.gC,{as:"form",onSubmit:t(n),children:[b.map((e,n)=>{let{label:t,name:a,type:r,options:i}=e,s={label:t,name:a};if("select"===r){if(!i)throw Error("not enough options to render");return(0,l.jsx)(h,{...s,options:i},"select-".concat(n))}return(0,l.jsx)(d,{...s,type:r,inputProps:o(a)},"input-".concat(n))}),(0,l.jsx)(s.zx,{type:"submit",children:"Enviar"})]})]})})};var f=(0,o.memo)(x)}},function(e){e.O(0,[155,360,774,888,179],function(){return e(e.s=1382)}),_N_E=e.O()}]);