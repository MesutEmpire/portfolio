import{d as u,u as g,o as s,c as l,a as e,F as o,r as i,g as a,t as r,b as d,e as _}from"./index-cde209c0.js";import{_ as f}from"./path.vue_vue_type_script_setup_true_lang-f2b33910.js";const x=e("h2",{class:"text-3xl font-medium relative inline-block floats-none clear-both before:content-['#'] before:text-primary after:stroke"}," decent ",-1),b={class:"w-full grid gap-4 items-start mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"},v={class:"group transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 hover:line-clamp-none z-999"},p={key:0,class:"border border-gray"},y=["src"],k={class:"flex flex-wrap gap-y-2 gap-x-4 text-slate-500 dark:text-gray p-2 border-b border-gray"},w={class:"p-4"},P={class:"text-2xl font-medium"},V={class:"text-color my-4 mx-0 line-clamp-2 group-hover:line-clamp-none"},B={class:"flex gap-2"},D=["href"],N=["href"],$=e("h2",{class:"text-3xl font-medium relative inline-block floats-none clear-both before:content-['#'] before:text-primary after:stroke"}," small ",-1),C={class:"w-full grid gap-4 items-start mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"},F={key:0,class:"border border-gray"},G=["src"],L={class:"flex flex-wrap gap-y-2 gap-x-4 text-slate-500 dark:text-gray p-2 border-b border-gray"},S={class:"p-4"},z={class:"text-2xl font-medium"},A={class:"text-color my-4 mx-0"},E={class:"flex gap-2"},q=["href"],H=u({__name:"decentProjects",setup(m){const n=g();return(h,J)=>(s(),l(o,null,[e("div",null,[x,e("div",b,[(s(!0),l(o,null,i(d(n).getProjectsData,t=>(s(),l("div",v,[t.level==="decent"?(s(),l("div",p,[t.url.img!==""?(s(),l("img",{key:0,src:t.url.img,alt:"",class:"border-b aspect-video"},null,8,y)):a("",!0),e("ul",k,[(s(!0),l(o,null,i(t.technologies,c=>(s(),l("li",null,r(c),1))),256))]),e("div",w,[e("div",P,r(t.name),1),e("div",V,r(t.description),1),e("div",B,[t.url.live!==""?(s(),l("a",{key:0,href:t.url.live,target:"_blank",class:"button_default"},"Live =>",8,D)):a("",!0),e("a",{href:t.url.github,target:"_blank",class:"button_default"},"Github =>",8,N)])])])):a("",!0)]))),256))])]),e("div",null,[$,e("div",C,[(s(!0),l(o,null,i(d(n).getProjectsData,t=>(s(),l("div",null,[t.level==="small"?(s(),l("div",F,[t.url.img!==""?(s(),l("img",{key:0,src:t.url.img,alt:"",class:"border-b aspect-video"},null,8,G)):a("",!0),e("ul",L,[(s(!0),l(o,null,i(t.technologies,c=>(s(),l("li",null,r(c),1))),256))]),e("div",S,[e("div",z,r(t.name),1),e("div",A,r(t.description),1),e("div",E,[e("a",{href:t.url.github,class:"button_default"},"Github =>",8,q)])])])):a("",!0)]))),256))])])],64))}}),I={class:"max-w-5xl p-4 lg:p-0 my-0 mx-auto relative mt-28 flex shrink grow basis-0 flex-col items-center gap-28"},O=u({__name:"ProjectsView",setup(m){return(n,h)=>(s(),l("div",I,[_(f,{name:"All of my projects"}),_(H)]))}});export{O as default};
