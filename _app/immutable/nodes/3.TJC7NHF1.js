import{s as g,a as l,c as d,i as b,d as S,b as w}from"../chunks/scheduler.CnU-9-CV.js";import{S as P,i as y,c,a as p,m as u,t as f,b as $,d as _}from"../chunks/index.3A73k27I.js";import{T as A}from"../chunks/Team.BRlR01u0.js";import{A as B}from"../chunks/Annoucement.H5SbxQKs.js";import{d as T}from"../chunks/store.BH74ZMK-.js";function h(a){let t,r,n,s;return t=new A({props:{name:"Blue",score:a[0].teamPoints.blue,order:"row"}}),n=new B({props:{messages:a[1],amount:-1}}),{c(){c(t.$$.fragment),r=l(),c(n.$$.fragment)},l(e){p(t.$$.fragment,e),r=d(e),p(n.$$.fragment,e)},m(e,m){u(t,e,m),b(e,r,m),u(n,e,m),s=!0},p(e,[m]){const o={};m&1&&(o.score=e[0].teamPoints.blue),t.$set(o);const i={};m&2&&(i.messages=e[1]),n.$set(i)},i(e){s||(f(t.$$.fragment,e),f(n.$$.fragment,e),s=!0)},o(e){$(t.$$.fragment,e),$(n.$$.fragment,e),s=!1},d(e){e&&S(r),_(t,e),_(n,e)}}}function q(a,t,r){let n,s;return w(a,T,e=>r(0,s=e)),a.$$.update=()=>{a.$$.dirty&1&&r(1,n=s.messages.filter(e=>e.team==="Blue"))},[s,n]}class z extends P{constructor(t){super(),y(this,t,q,h,g,{})}}export{z as component};
