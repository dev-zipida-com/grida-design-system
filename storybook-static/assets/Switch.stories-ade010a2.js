import{a as l}from"./jsx-runtime-68f49b4e.js";import{r as o}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function c({autoFocus:D=!1,checked:C=!1,checkedChildren:r,defaultChecked:e=!1,disabled:i=!1,loading:E=!1,size:A="default",unCheckedChildren:f,onChange:m,onClick:p}){const[a,s]=o.useState(e||C);return l("button",{type:"button",role:"switch","aria-checked":C,onClick:()=>{s(d=>!d)},style:a?{}:{background:"#dedede"},className:"switch",children:l("div",{style:a?{left:"calc(100% - 27px)"}:{left:2},className:"switch-handle"})})}try{Switch.displayName="Switch",Switch.__docgenInfo={description:`전환 선택기입니다.

## 언제 사용하나요?
- 두 상태 또는 켜기-끄기 상태 사이의 전환을 표현해야 하는 경우 사용합니다.
- 스위치와 체크박스의 차이점은 스위치는 토글할 때 상태 변경을 바로 트리거하는 반면, 체크박스는 일반적으로 제출 작업과 함께 작동해야 하는 상태 표시용으로 사용된다는 점입니다.

\`\`\`js
import { Switch } from "grida";
\`\`\``,displayName:"Switch",props:{autoFocus:{defaultValue:{value:"false"},description:`해당 컴포넌트가 그려질 때 최초로 포커스를 획득하는지 여부로 사용가능합니다.
* 기본 값은 false입니다.`,name:"autoFocus",required:!1,type:{name:"boolean"}},checked:{defaultValue:{value:"false"},description:`스위치 선택 여부 확인하는 속성입니다.
기본 값은 false입니다.`,name:"checked",required:!1,type:{name:"boolean"}},checkedChildren:{defaultValue:null,description:"상태 확인 시 표시되는 콘텐츠입니다.",name:"checkedChildren",required:!1,type:{name:"ReactNode"}},defaultChecked:{defaultValue:{value:"false"},description:`초기 상태 설정 여부를 설정합니다.
* 기본 값은 false입니다.`,name:"defaultChecked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:`스위치 비활성화 속성입니다.
* 기본 값은 false입니다.`,name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:`스위치 로딩 상태 속성입니다.
* 기본 값은 false입니다.`,name:"loading",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"default"},description:`스위치의 크기를 선택하는 속성입니다.
옵션 : default, small
기본값은 default입니다.`,name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'}]}},unCheckedChildren:{defaultValue:null,description:"상태가 선택 취소되었을 때 표시할 콘텐츠입니다.",name:"unCheckedChildren",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"체크된 상태가 변경될 때 트리거입니다.",name:"onChange",required:!1,type:{name:"((checked: boolean, event: ChangeEvent<HTMLInputElement>) => void)"}},onClick:{defaultValue:null,description:"Switch 클릭 할 때 트리거입니다.",name:"onClick",required:!1,type:{name:"((checked: boolean, event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}const v={title:"Components/Switch",component:c,tags:["autodocs"],argTypes:{}},u={args:{checked:!0}};var n,B,t;u.parameters={...u.parameters,docs:{...(n=u.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(t=(B=u.parameters)==null?void 0:B.docs)==null?void 0:t.source}}};const F=["Default"];export{u as Default,F as __namedExportsOrder,v as default};
//# sourceMappingURL=Switch.stories-ade010a2.js.map
