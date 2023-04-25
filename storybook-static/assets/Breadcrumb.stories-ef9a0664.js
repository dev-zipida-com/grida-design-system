import{j as c,a as u}from"./jsx-runtime-68f49b4e.js";import{f as g}from"./index.esm-fbcd44e3.js";import{R as y,r as _}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function m({url:e,name:r,icon:n,separator:a,index:t,isLast:o}){const f=b=>r&&u("span",{"aria-hidden":!0,className:"breadcrumb-separator",children:b});return c(y.Fragment,{children:[u("li",{className:"breadcrumb-item",children:c("a",{href:e,className:`breadcrumb-link ${o?"last":""}`,children:[n&&u("span",{className:"breadcrumb-icon",children:n}),u("span",{className:"breadcrumb-name",children:r})]})},t),o?"":f(a||"/")]})}try{m.displayName="BreadcrumbItem",m.__docgenInfo={description:"",displayName:"BreadcrumbItem",props:{url:{defaultValue:null,description:"",name:"url",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!1,type:{name:"boolean"}},separator:{defaultValue:null,description:"",name:"separator",required:!1,type:{name:"string"}}}}}catch{}function l({items:e,separator:r="/"}){return u("nav",{className:"breadcrumb",children:u("ol",{className:"breadcrumb-list",children:e==null?void 0:e.map((n,a,t)=>_.createElement(m,{...n,separator:r,index:a+1,isLast:t.length-1===a,key:a}))})})}try{l.displayName="Breadcrumb",l.__docgenInfo={description:`Breadcrumb 컴포넌트입니다.
- 이동경로는 계층 구조 내에서 현재 위치를 표시합니다.
- 계층 구조에서 더 상위의 상태로 돌아갈 수 있습니다.

## 언제 사용하나요?
- 시스템에 계층 구조에 두 개 이상의 레이어가 있는 경우.
- 사용자에게 현재 위치를 알려야 하는 경우.
- 사용자가 상위 레벨로 다시 이동해야 하는 경우.

\`\`\`js
import { Breadcrumb } from "grida";
\`\`\``,displayName:"Breadcrumb",props:{items:{defaultValue:null,description:"Breadcrumb 아이템의 라우팅 스택 정보",name:"items",required:!1,type:{name:"items[]"}},separator:{defaultValue:{value:"/"},description:"구분자 모양",name:"separator",required:!1,type:{name:"string"}}}}}catch{}const P={title:"Components/Breadcrumb",component:l,tags:["autodocs"],argTypes:{}},C={args:{items:[{url:"#",name:"Home"},{url:"#",name:"Page1"},{url:"#",name:"Page2"}],separator:"/"}},s={args:{items:[{url:"#",name:"Home",icon:u(g,{})},{url:"#",name:"Page1"},{url:"#",name:"Page2"}],separator:"/"}};var i,d,p;C.parameters={...C.parameters,docs:{...(i=C.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    items: [{
      url: '#',
      name: 'Home'
    }, {
      url: '#',
      name: 'Page1'
    }, {
      url: '#',
      name: 'Page2'
    }],
    separator: '/'
  }
}`,...(p=(d=C.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var B,D,A;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: [{
      url: '#',
      name: 'Home',
      icon: <AiFillHome />
    }, {
      url: '#',
      name: 'Page1'
    }, {
      url: '#',
      name: 'Page2'
    }],
    separator: '/'
  }
}`,...(A=(D=s.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const V=["Default","WithIcon"];export{C as Default,s as WithIcon,V as __namedExportsOrder,P as default};
//# sourceMappingURL=Breadcrumb.stories-ef9a0664.js.map
