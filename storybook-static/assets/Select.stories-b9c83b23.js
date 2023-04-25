import{a as i}from"./jsx-runtime-68f49b4e.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function n({autoFocus:y=!1,defaultActiveFirstOption:q=!0,defaultValue:z,disabled:l=!1,options:o,status:V="default",size:B="medium",onChange:r}){const S=u=>{r==null||r(u)};return i("select",{className:`select select-${V} ${l?"select-disabled":null} ${B==="large"?"select-size-large":B==="medium"?"select-size-medium":"select-size-small"}`,onChange:S,disabled:l,children:o&&o.map((u,_)=>i("option",{value:u.value,children:u.label},_))})}try{n.displayName="Select",n.__docgenInfo={description:`컴포넌트를 선택하여 옵션에서 값을 선택합니다.

## 언제 사용하나요?
- 선택 항목을 표시하는 드롭다운 메뉴 - 기본 select 태그 요소의 우아한 대안입니다.
- 비슷한 컴포넌트인 Radio는 총 옵션 수가 적을 때(5개 미만) 사용하는 것이 좋습니다.

\`\`\`js
import { Select } from "grida";
\`\`\``,displayName:"Select",props:{autoFocus:{defaultValue:{value:"false"},description:`해당 컴포넌트가 그려질 때 최초로 포커스를 획득하는지 여부로 사용가능합니다.
기본 값은 false입니다.`,name:"autoFocus",required:!1,type:{name:"boolean"}},defaultActiveFirstOption:{defaultValue:{value:"true"},description:`기본적으로 첫 번째 옵션을 활성화할지 여부입니다.
기본 값은 true입니다.`,name:"defaultActiveFirstOption",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"초기 선택 옵션입니다.",name:"defaultValue",required:!1,type:{name:"OptionType"}},disabled:{defaultValue:{value:"false"},description:`비활성화 여부 선택입니다.
기본값은 false입니다.`,name:"disabled",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:`슬라이더의 값입니다.
range가 false이면 number를 사용합니다.
range가 true이면 [number, number]를 사용합니다.
기본 값은 0 | [0, 0]입니다.`,name:"options",required:!1,type:{name:"OptionType[]"}},status:{defaultValue:{value:"default"},description:`select box의 상태를 설정할 수 있습니다.
기본 값은 default 입니다.`,name:"status",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"error"'},{value:'"default"'}]}},size:{defaultValue:{value:"medium"},description:`select box의 크기를 정할 수 있습니다.
기본 값은 middle 입니다.`,name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},onChange:{defaultValue:null,description:"select 값이 변경될 때마다 호출됩니다.",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLSelectElement>) => void)"}}}}}catch{}const I={title:"Components/Select",component:n,tags:["autodocs"],argTypes:{}},s=[{label:"Item 1",value:"item 1"},{label:"Item 2",value:"item 2"},{label:"Item 3",value:"item 3"}],e={args:{options:s,size:"medium"}},C={args:{options:s,disabled:!0}},a={args:{options:s,status:"error"}},t={args:{options:s,status:"warning"}};var d,c,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    options: options,
    size: 'medium'
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var D,p,A;C.parameters={...C.parameters,docs:{...(D=C.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    options: options,
    disabled: true
  }
}`,...(A=(p=C.parameters)==null?void 0:p.docs)==null?void 0:A.source}}};var E,f,g;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    options: options,
    status: 'error'
  }
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,F,b;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    options: options,
    status: 'warning'
  }
}`,...(b=(F=t.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};const T=["Default","Disabled","Error","Warning"];export{e as Default,C as Disabled,a as Error,t as Warning,T as __namedExportsOrder,I as default};
//# sourceMappingURL=Select.stories-b9c83b23.js.map
