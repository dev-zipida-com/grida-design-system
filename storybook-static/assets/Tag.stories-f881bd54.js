import{j as k,a as e}from"./jsx-runtime-68f49b4e.js";import{A as S,f as p,c as O,a as r,b as j,d as w,g as R}from"./index.esm-d66c4e4b.js";import{R as a}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const M={default:{style:"tag-default",icon:p},primary:{style:"tag-primary",icon:p},error:{style:"tag-error",icon:O},success:{style:"tag-success",icon:r},warning:{style:"tag-warning",icon:j},processing:{style:"tag-processing",icon:w}};function o({closable:c,closeIcon:i,color:u,text:T,icon:m,type:I="default",onClose:n,size:d="small"}){const B=M[I],_=u+"1A",q=V=>{n==null||n(V)};return k("div",{style:u?{background:_}:void 0,className:`tag ${B.style} ${d==="large"?"tag-large":d==="medium"?"tag-medium":"tag-small"}`,children:[e("section",{className:"icon-section",children:a.isValidElement(m)?a.cloneElement(m,{style:{color:u},className:"icon"}):e(B.icon,{className:"icon"})}),e("section",{className:"tag-text",children:e("span",{style:{color:u},className:"text",children:T})}),e("section",{className:"close-section",children:c&&e("button",{className:"cursor-pointer",onClick:q,children:a.isValidElement(i)?a.cloneElement(i,{style:{color:u},className:"icon"}):e(S,{style:{color:u}})})})]})}try{o.displayName="Tag",o.__docgenInfo={description:`분류 또는 마크업을 위한 태그입니다.

## 언제 사용하나요?
- 차원 또는 속성별로 태그를 지정하는 데 사용할 수 있습니다.
- 분류할 때 사용할 수 있습니다.

\`\`\`js
import { Tag } from "grida";
\`\`\``,displayName:"Tag",props:{closable:{defaultValue:null,description:"Tag를 닫을 수 있는지 여부입니다.",name:"closable",required:!1,type:{name:"boolean"}},closeIcon:{defaultValue:null,description:`사용자 정의 닫기 아이콘입니다.
closable이 true일때만 사용가능합니다.`,name:"closeIcon",required:!1,type:{name:"ReactNode"}},color:{defaultValue:null,description:"태그 색상을 지정할 수 있는 속성입니다.",name:"color",required:!1,type:{name:"string"}},text:{defaultValue:null,description:`태그 안 내용을 지정할 수 있는 속성입니다.
type 속성보다 우선입니다.`,name:"text",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"사용자 정의 아이콘입니다.",name:"icon",required:!1,type:{name:"ReactNode"}},type:{defaultValue:{value:"default"},description:`Tag 스타일의 타입입니다.
옵션: default, primary, error, success, warning processing입니다.
기본값은 default입니다.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"processing"'},{value:'"primary"'}]}},onClose:{defaultValue:null,description:"Tag가 닫힐 때 호출되는 콜백 함수입니다.",name:"onClose",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},size:{defaultValue:{value:"small"},description:`Tag의 크기입니다.
옵션: small, medium, large, xlarge입니다.
기본 값은 small입니다.`,name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"small"'},{value:'"medium"'}]}}}}}catch{}const W={title:"Components/Tag",component:o,tags:["autodocs"],argTypes:{}},t={args:{type:"default",text:"tag-text"}},s={args:{type:"success",text:"tag-text",icon:e(r,{})}},C={args:{type:"processing",text:"tag-text",icon:e(r,{}),closable:!0,closeIcon:e(R,{})}},l={args:{text:"tag-text",icon:e(r,{}),closable:!0,color:"#d844f3"}};var g,A,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'default',
    text: 'tag-text'
  }
}`,...(y=(A=t.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var D,f,E;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: 'success',
    text: 'tag-text',
    icon: <AiFillCheckCircle />
  }
}`,...(E=(f=s.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var x,v,F;C.parameters={...C.parameters,docs:{...(x=C.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: 'processing',
    text: 'tag-text',
    icon: <AiFillCheckCircle />,
    closable: true,
    closeIcon: <AiOutlineCloseSquare />
  }
}`,...(F=(v=C.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var b,h,N;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    text: 'tag-text',
    icon: <AiFillCheckCircle />,
    closable: true,
    color: '#d844f3'
  }
}`,...(N=(h=l.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};const Y=["Default","ImportIcon","ImportClosable","CustomColor"];export{l as CustomColor,t as Default,C as ImportClosable,s as ImportIcon,Y as __namedExportsOrder,W as default};
//# sourceMappingURL=Tag.stories-f881bd54.js.map
