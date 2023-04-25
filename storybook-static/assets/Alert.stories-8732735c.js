import{j as e,a as u}from"./jsx-runtime-68f49b4e.js";import{A as j,a as S,b as k,c as W,d as $}from"./index.esm-fbcd44e3.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const z={success:{style:"alert-success",icon:S},warning:{style:"alert-warning",icon:k},error:{style:"alert-error",icon:W},info:{style:"alert-info",icon:$}};function t({message:o,type:b="info",showIcon:N=!1,icon:w,description:i,closable:q,closeIcon:V,closeText:I,banner:_=!1,action:c,onClose:s,afterClose:l,size:x="small"}){const B=z[b],R=T=>{s==null||s(T),l==null||l()};return e("div",{className:`alert ${B.style} ${_?"alert-banner":"alert-default"} ${x==="large"?"alert-large":"alert-small"}`,children:[e("header",{className:"alert-header",children:[e("section",{className:"title",children:[N&&(w||u(B.icon,{className:"icon"})),u("span",{children:o})]}),e("section",{className:"extra",children:[c&&u("nav",{children:c}),q&&u("button",{className:"cursor-pointer",onClick:R,children:V||I||u(j,{})})]})]}),i&&u("section",{className:"alert-description",children:i})]})}try{t.displayName="Alert",t.__docgenInfo={description:`피드백에 대한 알림 컴포넌트입니다.

## 언제 사용하나요?
- 사용자에게 경고 메시지를 표시해야 하는 경우.
- 사용자가 직접 닫을 수 있는 컴포넌트가 필요한 경우.

\`\`\`js
import { Alert } from "grida";
\`\`\``,displayName:"Alert",props:{action:{defaultValue:null,description:"Alert의 작업입니다.",name:"action",required:!1,type:{name:"ReactNode"}},afterClose:{defaultValue:null,description:"닫기 애니메이션이 끝날 때 호출됩니다.",name:"afterClose",required:!1,type:{name:"(() => void)"}},banner:{defaultValue:{value:"false"},description:"배너로 표시할지 여부입니다.",name:"banner",required:!1,type:{name:"boolean"}},closable:{defaultValue:null,description:"Alert를 닫을 수 있는지 여부입니다.",name:"closable",required:!1,type:{name:"boolean"}},closeText:{defaultValue:null,description:"보여줄 닫기 텍스트입니다.",name:"closeText",required:!1,type:{name:"ReactNode"}},closeIcon:{defaultValue:null,description:"사용자 정의 닫기 아이콘입니다.",name:"closeIcon",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Alert의 추가 콘텐츠입니다.",name:"description",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"사용자 정의 아이콘입니다. showIcon이 true인 경우에만 적용됩니다.",name:"icon",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"Alert의 콘텐츠입니다.",name:"message",required:!1,type:{name:"ReactNode"}},showIcon:{defaultValue:{value:"false"},description:`아이콘을 표시할지 여부입니다.
배너 모드에서는 기본값이 true이며, 그 외에는 기본값이 false입니다.`,name:"showIcon",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"info"},description:`Alert 스타일의 타입입니다.
옵션: success, info, warning, error입니다.
배너 모드에서는 기본값이 warning이며, 그 외에는 기본값이 info입니다.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},onClose:{defaultValue:null,description:"Alert가 닫힐 때 호출되는 콜백 함수입니다.",name:"onClose",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},size:{defaultValue:{value:"small"},description:`Alert의 크기입니다.
옵션: small, large입니다.
배너 모드에서는 기본값이 large이며, 그 외에는 기본값이 small입니다.`,name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}}}}}catch{}const Y={title:"Components/Alert",component:t,tags:["autodocs"],argTypes:{}},C={args:{type:"success",message:"Default"}},a={args:{type:"info",banner:!0,message:"Banner"}},r={args:{type:"warning",message:"Warning",description:"Description Description Description Description Description Description",showIcon:!0}},n={args:{type:"error",message:"Error",showIcon:!0,closable:!0}};var p,d,m;C.parameters={...C.parameters,docs:{...(p=C.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: 'success',
    message: 'Default'
  }
}`,...(m=(d=C.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var D,A,E;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: 'info',
    banner: true,
    message: 'Banner'
  }
}`,...(E=(A=a.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var f,g,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    message: 'Warning',
    description: 'Description Description Description Description Description Description',
    showIcon: true
  }
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var F,h,v;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    type: 'error',
    message: 'Error',
    showIcon: true,
    closable: true
  }
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const G=["Default","Banner","Description","Cloasable"];export{a as Banner,n as Cloasable,C as Default,r as Description,G as __namedExportsOrder,Y as default};
//# sourceMappingURL=Alert.stories-8732735c.js.map
