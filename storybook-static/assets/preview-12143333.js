import{j as p,F as E,a as t}from"./jsx-runtime-68f49b4e.js";import{G as O,P as D,D as S,T as f}from"./constants-19fd263f.js";import"./index-f1f749bf.js";import{T as A,S as g,D as v,P as b,C as R,a as L}from"./index-72cdd209.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-101e339d.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./index-f64090b0.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const{addons:N,useParameter:y}=__STORYBOOK_MODULE_ADDONS__;function M(a){var e=a.globals;return e[O]||""}function B(){return y(D,S)}function P(a,e){N.getChannel().emit(f.REGISTER_THEMES,{defaultTheme:e,themes:a})}__STORYBOOK_MODULE_ADDONS__;const{useEffect:U}=__STORYBOOK_MODULE_ADDONS__;var C="html",K="data-theme",k=function(e){var r=e.themes,o=e.defaultTheme,i=e.parentSelector,s=i===void 0?C:i,m=e.attributeName,n=m===void 0?K:m;return P(Object.keys(r),o),function(T,c){var _=B(),l=_.themeOverride,u=M(c);return U(function(){var d=document.querySelector(s),h=l||u||o;d.setAttribute(n,r[h])},[l,u,s,n]),T()}};__STORYBOOK_MODULE_ADDONS__;module&&module.hot&&module.hot.decline&&module.hot.decline();const V={decorators:[k({themes:{light:"light",dark:"dark"},defaultTheme:"light",attributeName:"data-mode"})],parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},page:()=>p(E,{children:[t(A,{}),t(g,{}),t(v,{}),t(b,{}),t(R,{}),t(L,{})]}),designToken:{defaultTab:"Colors",styleInjection:'@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");'}}};export{V as default};
//# sourceMappingURL=preview-12143333.js.map
