(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{1382:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return l(7770)}])},7770:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return g}});var s=l(5893),t=l(7294),o=l(8981),a=l(5610),r=l(8641),i=l(7741),c=l(7536),d=l(3234),x=l(979),h=l(7026);let m=[{name:"name",label:"Nombre",type:"text"},{name:"last-name",label:"Apellido",type:"text"},{name:"birthday",label:"Cumpleanios",type:"date"},{name:"email",label:"Correo electornico",type:"email"},{name:"genre",label:"Genero",type:"select",options:[{value:"masculino",label:"Masculino"},{value:"femenino",label:"Femenino"},{value:"no-binario",label:"No binario"},{value:"none",label:"No especifica"}]},{name:"roles",label:"Ser parte del Observatorio Joven",type:"select",options:[{value:"voluntario(a)",label:"Voluntario(a)"}]}],u=e=>{let{placeHolder:n,label:l,type:t,name:o,inputProps:a}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.lX,{children:l}),(0,s.jsx)(x.II,{placeholder:n,type:t,name:o,...a})]})},p=e=>{let{label:n,options:l,name:t,inputProps:o}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.lX,{children:n}),(0,s.jsx)(h.Ph,{name:t,...o,children:l.map((e,n)=>{let{label:l,value:t}=e;return(0,s.jsx)("option",{value:t,children:l},"".concat(l,"-").concat(n))})})]})},j=e=>{let{onSubmit:n}=e,{handleSubmit:l,register:t,formState:{isSubmitting:d}}=(0,c.cI)();return(0,s.jsx)(o.Zb,{children:(0,s.jsxs)(o.eW,{children:[d&&(0,s.jsx)(a.$,{}),!d&&(0,s.jsxs)(r.gC,{as:"form",onSubmit:l(n),children:[m.map((e,n)=>{let{label:l,name:o,type:a,options:r}=e,i={label:l,name:o};if("select"===a){if(!r)throw Error("not enough options to render");return(0,s.jsx)(p,{...i,options:r},"select-".concat(n))}return(0,s.jsx)(u,{...i,type:a,inputProps:t(o)},"input-".concat(n))}),(0,s.jsx)(i.zx,{type:"submit",children:"Enviar"})]})]})})};var b=(0,t.memo)(j),f=l(6923);let v=()=>(0,s.jsx)(f.Z,{children:(0,s.jsx)(b,{onSubmit:console.log})});var g=v},6923:function(e,n,l){"use strict";l.d(n,{Z:function(){return D}});var s=l(5893),t=l(7294),o=l(1664),a=l.n(o),r=l(8395),i=l(8641),c=l(3887),d=l(5872),x=l(3172),h=l(3382),m=l(7741);let u=e=>{let{menuItems:n}=e;return(0,s.jsxs)(d.v2,{children:[(0,s.jsx)(d.j2,{display:{base:"block",md:"none"},height:"4rem",width:"4em",icon:(0,s.jsx)(h.Uq,{height:"3rem",width:"3rem"}),variant:"outline","aria-label":"Options",as:m.hU}),(0,s.jsx)(d.qy,{display:{md:"none"},width:"100vw",children:n})]})},p=[{label:"Inicio",isCollapsable:!1,href:"/"},{label:"Nosotros",isCollapsable:!0,href:"",subLabels:[{label:"option1",href:""},{label:"option2",href:""}]},{label:"Bolet\xedn",isCollapsable:!1,href:""},{label:"Politicas Juventudes",isCollapsable:!1,href:""},{label:"Capacitaciones",isCollapsable:!0,href:"",subLabels:[{label:"option a",href:""},{label:"option b",href:""}]},{label:"Cont\xe1ctenos",isCollapsable:!1,href:"/contact"}];var j=l(9250),b=l.n(j);let f=()=>{let{colorMode:e,toggleColorMode:n}=(0,r.If)(),l=(0,r.ff)(h.kL,h.NW);return(0,s.jsx)(m.hU,{borderRadius:"50%",variant:"ghost","aria-label":"change color mode",icon:(0,s.jsx)(l,{}),onClick:n})},v=e=>{let{label:n,isCollapsable:l,href:t,listProp:o}=e;return l?(0,s.jsxs)(d.v2,{children:[(0,s.jsxs)(d.j2,{children:[n," ",(0,s.jsx)(h.v4,{})," "]}),o]}):(0,s.jsx)(a(),{href:t,children:n})};var g=(0,t.memo)(v);let y=()=>{let e=(0,r.ff)("none","invert(1)"),n=e=>{e.stopPropagation()};return(0,s.jsxs)(i.Ug,{padding:"1rem",minHeight:100,as:"nav",justifyContent:"space-between",position:"sticky",top:0,backgroundColor:"Background",zIndex:1e3,boxShadow:"0 2px 20px 0px #1D1D1B",children:[(0,s.jsx)(i.xu,{children:(0,s.jsx)(c.Ee,{filter:e,boxSize:"200px",objectFit:"cover",height:"100%",alt:"logo observatorio",src:"https://drive.google.com/uc?export=view&id=1OVvy3iD6Ou-QFZIurS7S4NrqAYk9WFo7"})}),(0,s.jsxs)(i.Ug,{display:{base:"none",md:"flex"},children:[p.map((e,n)=>{var l;return(0,s.jsx)(g,{listProp:(0,s.jsx)(d.qy,{children:null===(l=e.subLabels)||void 0===l?void 0:l.map((e,n)=>{let{label:l,href:t}=e;return(0,s.jsx)(d.sN,{children:(0,s.jsx)(a(),{href:t,children:l})},"sub-menu-item-".concat(n))})}),...e},"data-index-".concat(n))}),(0,s.jsx)(f,{})]}),(0,s.jsxs)(i.Ug,{display:{base:"flex",md:"none"},children:[(0,s.jsx)(f,{}),(0,s.jsx)(u,{menuItems:p.map((e,l)=>{let{label:t,isCollapsable:o,href:r,subLabels:c}=e;return(0,s.jsxs)(d.sN,{as:o?"div":"button",children:[!o&&(0,s.jsx)(a(),{className:b().a,href:r,children:t},"nav-bar-mobile-item-".concat(l)),o&&(0,s.jsx)(x.UQ,{width:"100%",allowToggle:!0,children:(0,s.jsxs)(x.Qd,{width:"100%",children:[(0,s.jsxs)(x.KF,{pl:0,width:"100%",onClick:n,children:[(0,s.jsx)(i.xu,{as:"span",flex:"1",textAlign:"left",children:t}),(0,s.jsx)(x.XE,{})]}),(0,s.jsx)(x.Hk,{pb:4,children:null==c?void 0:c.map((e,n)=>{let{label:l,href:t}=e;return(0,s.jsx)(d.sN,{children:(0,s.jsx)(a(),{className:b().a,href:t,children:l})},"sub-label-".concat(n))})})]})})]},"nav-bar-item-".concat(l))})})]})]})};var w=(0,t.memo)(y),C=l(181),N=l.n(C),k=l(9583);let I=[{name:(0,s.jsx)(k.Am9,{}),href:""},{name:(0,s.jsx)(k.nTm,{}),href:""},{name:(0,s.jsx)(k.l4C,{}),href:""},{name:(0,s.jsx)(k.Zf_,{}),href:""}],S=()=>{let e=e=>{let{text:n,srcImg:l}=e;return(0,s.jsxs)(i.Ug,{display:{base:"none",md:"flex"},children:[(0,s.jsx)(i.xv,{as:"p",color:"white",children:n}),(0,s.jsx)(c.Ee,{boxSize:"100px",objectFit:"cover",height:"100%",alt:"logo conova tec",src:l})]})},n=()=>(0,s.jsx)(i.M5,{width:"80px",display:{base:"block",md:"none"},children:(0,s.jsx)(i.iz,{})});return(0,s.jsxs)(i.Kq,{as:"footer",padding:"2rem",gap:"1rem",bg:"#1D1D1B",children:[(0,s.jsxs)(i.Kq,{flexDirection:{base:"column",md:"row"},alignItems:"center",justifyContent:"space-between",gap:"1rem",children:[(0,s.jsx)(c.Ee,{filter:"invert(1)",boxSize:"200px",objectFit:"cover",height:"100%",alt:"logo observatorio",src:"https://drive.google.com/uc?export=view&id=1OVvy3iD6Ou-QFZIurS7S4NrqAYk9WFo7"}),(0,s.jsx)(n,{}),(0,s.jsx)(i.Ug,{color:"white",className:N().listItems,children:p.map((e,n)=>{var l;return(0,s.jsx)(g,{listProp:(0,s.jsx)(d.qy,{bg:"#1D1D1B",children:null===(l=e.subLabels)||void 0===l?void 0:l.map((e,n)=>{let{label:l,href:t}=e;return(0,s.jsx)(d.sN,{bg:"#1D1D1B",children:(0,s.jsx)(a(),{href:t,children:l})},"sub-menu-item-".concat(n))})}),...e},"data-index-".concat(n))})}),(0,s.jsx)(n,{}),(0,s.jsx)(i.Ug,{color:"white",className:N().listItems,children:I.map((e,n)=>{let{name:l,href:t}=e;return(0,s.jsx)(a(),{href:t,children:l},"social-index".concat(n))})})]}),(0,s.jsx)(i.iz,{display:{base:"none",md:"block"}}),(0,s.jsx)(e,{text:"En asocio con:",srcImg:"https://res.cloudinary.com/df5nwnlnu/image/upload/v1671164559/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/Plan_internacional_q2nt3x.png"}),(0,s.jsxs)(i.Kq,{alignItems:"center",children:[(0,s.jsx)(i.xv,{color:"white",children:"Todos los derechos reservados-2022"}),(0,s.jsx)(e,{text:"Desarrollado por",srcImg:"https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075064/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/INDEX/PNGs%20LOGOS%20ORG/Conovatec_xqvsjs.png"})]})]})};var _=(0,t.memo)(S),E=l(9008),O=l.n(E);let P=["Sociodemogr\xe1fico","Participaci\xf3n Ciudadana","Educaci\xf3n","Violencia de g\xe9nero","Salud","Empleabilidad"],F=e=>{let{children:n}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(O(),{children:[(0,s.jsx)("title",{children:"Observatorio de jovenes en Peru"}),(0,s.jsx)("link",{rel:"stylesheet",type:"text/css",charSet:"UTF-8",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"}),(0,s.jsx)("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"}),(0,s.jsx)("meta",{name:"description",content:"Somos un proyecto del Consejo Metropolitano Participaci\xf3n de la Juventud de Lima, que busca proporcionar datos actualizados sobre las condiciones sociodemogr\xe1ficas, socioecon\xf3micas y realizar una vigilancia a la implementaci\xf3n de las pol\xedticas p\xfablicas en materia de juventud en el Per\xfa."}),(0,s.jsx)("meta",{name:"keywords",content:String(P)}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsx)(w,{}),n,(0,s.jsx)(_,{})]})};var D=(0,t.memo)(F)},181:function(e){e.exports={listItems:"style_listItems__JynyK"}},9250:function(e){e.exports={a:"style_a__ffH1N"}}},function(e){e.O(0,[445,980,360,774,888,179],function(){return e(e.s=1382)}),_N_E=e.O()}]);