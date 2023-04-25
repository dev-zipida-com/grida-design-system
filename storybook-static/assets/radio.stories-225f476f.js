import{j as k,a as o}from"./jsx-runtime-68f49b4e.js";import{r as F}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function s({autoFocus:n,checked:f,name:C,disabled:E,value:h,children:y,type:A="radio",size:g="md"}){const[t,b]=F.useState(f);return k("label",{className:`${A}-container ${g} ${t?"active":""}`,htmlFor:C,children:[o("input",{id:C,name:C,type:"radio",className:"radio",autoFocus:n,checked:t,disabled:E,value:h,onChange:v=>b(v.target.checked)}),o("span",{className:"radio-content",children:y})]})}try{s.displayName="Radio",s.__docgenInfo={description:`라디오 컴포넌트입니다.

## 언제 사용하나요?
- 여러 옵션 중에서 단일 상태를 선택하는 데 사용됩니다.
- Select와의 차이점은 라디오는 사용자에게 표시되며 선택 항목을 쉽게 비교할 수 있으므로 너무 많지 않아야 한다는 것입니다.

\`\`\`js
import { Radio } from "grida";
\`\`\``,displayName:"Radio",props:{autoFocus:{defaultValue:null,description:"컴포넌트가 마운트될 때 포커스를 받을지 여부입니다.",name:"autoFocus",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"라디오가 선택되어 있는지 여부를 지정합니다.",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"라디오를 비활성화합니다.",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"선택 여부를 결정하기 위해 값에 따라 지정합니다.",name:"value",required:!1,type:{name:"any"}},type:{defaultValue:{value:"radio"},description:"라디오 버튼의 모습을 지정합니다.",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"radio"'}]}},size:{defaultValue:{value:"md"},description:"라디오 버튼의 크기를 지정합니다.",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}}}}}catch{}const z={title:"Components/Radio",component:s,tags:["autodocs"],argTypes:{}},u={args:{autoFocus:!1,checked:!1,disabled:!1,type:"radio",size:"md"}},e={args:{autoFocus:!1,checked:!1,disabled:!1,type:"radio",children:"Radio",size:"md"}},a={args:{autoFocus:!1,checked:!1,disabled:!1,type:"button",children:"Radio",size:"md"}};var r,d,l;u.parameters={...u.parameters,docs:{...(r=u.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    autoFocus: false,
    checked: false,
    disabled: false,
    type: 'radio',
    size: 'md'
  }
}`,...(l=(d=u.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var i,c,B;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    autoFocus: false,
    checked: false,
    disabled: false,
    type: 'radio',
    children: 'Radio',
    size: 'md'
  }
}`,...(B=(c=e.parameters)==null?void 0:c.docs)==null?void 0:B.source}}};var m,p,D;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    autoFocus: false,
    checked: false,
    disabled: false,
    type: 'button',
    children: 'Radio',
    size: 'md'
  }
}`,...(D=(p=a.parameters)==null?void 0:p.docs)==null?void 0:D.source}}};const V=["Default","WithLabel","Button"];export{a as Button,u as Default,e as WithLabel,V as __namedExportsOrder,z as default};
//# sourceMappingURL=radio.stories-225f476f.js.map
