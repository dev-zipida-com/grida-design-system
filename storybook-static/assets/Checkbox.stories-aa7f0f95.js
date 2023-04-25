import{j as f,a as o}from"./jsx-runtime-68f49b4e.js";import{r as b}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function a({autoFocus:n,name:C,checked:s,disabled:i,children:D}){const[p,m]=b.useState(s);return f("label",{className:"container",htmlFor:C,children:[o("input",{id:C,name:C,type:"checkbox",className:"checkbox",autoFocus:n,checked:p||s,disabled:!!i,onChange:h=>m(h.target.checked)}),o("span",{className:"checkbox-content",children:D})]})}try{a.displayName="Checkbox",a.__docgenInfo={description:`체크박스 컴포넌트입니다.

## 언제 사용하나요?
- 여러 옵션에서 여러 값을 선택하는 데 사용됩니다.
- Switch는 상태 변경을 직접 트리거하지만, Checkbox는 상태를 변경된 것으로 표시하고 이를 제출해야 합니다.

\`\`\`js
import { Checkbox } from "grida";
\`\`\``,displayName:"Checkbox",props:{autoFocus:{defaultValue:null,description:"컴포넌트가 마운트 될 때 포커스를 받는지 여부",name:"autoFocus",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"체크박스가 선택되어 있는지 여부를 지정합니다.",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"체크박스를 비활성화하는 경우",name:"disabled",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:null,description:"체크박스의 중간 선택 상태",name:"indeterminate",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"상태가 변경될 때 트리거되는 콜백 함수",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}}}}}catch{}const g={title:"Components/Checkbox",component:a,tags:["autodocs"],parameters:{actions:{argTypesRegex:"^on.*"}}},u={args:{autoFocus:!1,checked:!1,disabled:!1}},e={args:{autoFocus:!1,checked:!1,disabled:!1,children:"checkbox"}};var t,c,r;u.parameters={...u.parameters,docs:{...(t=u.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    autoFocus: false,
    checked: false,
    disabled: false
  }
}`,...(r=(c=u.parameters)==null?void 0:c.docs)==null?void 0:r.source}}};var l,B,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    autoFocus: false,
    checked: false,
    disabled: false,
    children: 'checkbox'
  }
}`,...(d=(B=e.parameters)==null?void 0:B.docs)==null?void 0:d.source}}};const x=["Default","WithLabel"];export{u as Default,e as WithLabel,x as __namedExportsOrder,g as default};
//# sourceMappingURL=Checkbox.stories-aa7f0f95.js.map
