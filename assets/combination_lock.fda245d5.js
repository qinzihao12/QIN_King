import{d as e,j as a,o as s,c as l,a as t,w as n,b as u,k as o,v as r,t as c,l as i,h as f,m,n as p,q as d,x as v}from"./index.96159c1b.js";import y from"./Matchman.7ff8f9d0.js";const b={key:0,class:"relative full bg-indigo-50 text-center pt-auto justify-center flex items-center"},k=f("1"),_={class:"flex z-20 rounded-lg flex-col w-1/2 h-1/2 justify-center items-center bg-red-100"},h=e({__name:"lock",setup(e){const f=a(""),p=a("qinzihao123"),d=a(!0),v=m("play");return(e,a)=>d.value?(s(),l("div",b,[t(y,{class:"full"},{default:n((()=>[k])),_:1}),u("div",_,[o(u("input",{type:"password","onUpdate:modelValue":a[0]||(a[0]=e=>f.value=e),class:"input1"},null,512),[[r,f.value]]),u("button",{class:"bth1 mt-1",onClick:a[1]||(a[1]=e=>{f.value===p.value?v():alert("密码不对哦")})},"点我"+c(e.name),1)]),t(y,{class:"full"})])):i("",!0)}}),x=""+new URL("lll.90253ffa.mp4",import.meta.url).href,g=[u("source",{src:x,type:"video/mp4"},null,-1)],w=e({__name:"video",props:{src:{type:String,default:"../assets/可能.mp4"}},setup(e){const t=a(null);return p((()=>{})),(e,a)=>(s(),l("video",{ref_key:"a",ref:t,class:"full",controls:""},g,512))}}),j={class:"w-3/4 h-2/3 absolute md:w-2/3 md:h-2/3 bg-black"},q=e({__name:"combination_lock",setup(e){const t=a(!1);return a(null),v("play",(function(){t.value=!0})),(e,a)=>(s(),l("div",j,[t.value?(s(),d(w,{key:1})):(s(),d(h,{key:0}))]))}});export{q as default};