import{j as _,a as l}from"./jsx-runtime-68f49b4e.js";import{r as N}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function t({autoFocus:c=!1,checked:w=!1,checkedChildren:F,unCheckedChildren:y,disabled:d=!1,size:r="small",onClick:n}){const[u,b]=N.useState(w);return _("button",{type:"button",role:"switch",autoFocus:c,"aria-checked":u,onClick:v=>{b(S=>!S),n==null||n(u,v)},disabled:d,className:`switch ${d?"switch-disabled":""} ${u?"switch-on":"switch-off"} ${r==="medium"?"switch-size-medium":""}`,children:[l("div",{className:`switch-handle ${u?"switch-handle-on":""} ${r==="medium"?"switch-handle-medium":""}`}),l("span",{className:`switch-inner ${u?"switch-inner-on":""} ${r==="medium"?"switch-inner-medium":""}`,children:u?F:y})]})}try{t.displayName="Switch",t.__docgenInfo={description:`전환 선택기입니다.

## 언제 사용하나요?
- 두 상태 또는 켜기-끄기 상태 사이의 전환을 표현해야 하는 경우 사용합니다.
- 스위치와 체크박스의 차이점은 스위치는 토글할 때 상태 변경을 바로 트리거하는 반면, 체크박스는 일반적으로 제출 작업과 함께 작동해야 하는 상태 표시용으로 사용된다는 점입니다.

\`\`\`js
import { Switch } from "grida";
\`\`\``,displayName:"Switch",props:{autoFocus:{defaultValue:{value:"false"},description:`해당 컴포넌트가 그려질 때 최초로 포커스를 획득하는지 여부로 사용가능합니다.
기본 값은 false입니다.`,name:"autoFocus",required:!1,type:{name:"boolean"}},checked:{defaultValue:{value:"false"},description:`스위치 선택 여부 확인하는 속성입니다.
기본 값은 false입니다.`,name:"checked",required:!1,type:{name:"boolean"}},checkedChildren:{defaultValue:null,description:"상태 확인 시 표시되는 콘텐츠입니다.",name:"checkedChildren",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:`스위치 비활성화 속성입니다.
기본 값은 false입니다.`,name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"small"},description:`스위치의 크기를 선택하는 속성입니다.
옵션 : small, medium
기본값은 small입니다.`,name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},unCheckedChildren:{defaultValue:null,description:"상태가 선택 취소되었을 때 표시할 콘텐츠입니다.",name:"unCheckedChildren",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"Switch 클릭 할 때 트리거입니다.",name:"onClick",required:!1,type:{name:"((checked: boolean, event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}const $={title:"Components/Switch",component:t,tags:["autodocs"],argTypes:{}},e={args:{}},C={args:{checked:!0}},a={args:{checked:!0,disabled:!0}},s={args:{checked:!0,checkedChildren:"ON",unCheckedChildren:"OFF"}};var i,o,B;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(B=(o=e.parameters)==null?void 0:o.docs)==null?void 0:B.source}}};var D,m,h;C.parameters={...C.parameters,docs:{...(D=C.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(h=(m=C.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var p,A,E;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...(E=(A=a.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var f,g,k;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: true,
    checkedChildren: 'ON',
    unCheckedChildren: 'OFF'
  }
}`,...(k=(g=s.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const T=["Default","On","Disabled","TextChildren"];export{e as Default,a as Disabled,C as On,s as TextChildren,T as __namedExportsOrder,$ as default};
//# sourceMappingURL=Switch.stories-351d4a90.js.map
