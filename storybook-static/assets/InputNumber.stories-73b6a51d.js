import{j as f,a as A}from"./jsx-runtime-68f49b4e.js";import{r as a}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function c({autoFocus:D=!1,disabled:r=!1,value:E,defaultValue:b=0,size:h="small",step:C=1,max:t=Number.MAX_SAFE_INTEGER,min:m=Number.MIN_SAFE_INTEGER,onChange:i}){const o=a.useRef(null),q=a.useRef(null),[n,d]=a.useState(E||b),[R,x]=a.useState(!1);a.useEffect(()=>{if(!C)return;C.toString().indexOf(".")!==-1&&x(!0)},[C]);const M=e=>{const u=Number(e.target.value);u>t||(d(Number(u)),i==null||i(e))},T=e=>{var u;e.preventDefault(),(u=o.current)==null||u.focus(),!(n>=t)&&d(p=>p+C)},G=e=>{var u;e.preventDefault(),(u=o.current)==null||u.focus(),!(n<=m)&&d(p=>p-C)};return f("div",{className:`input-number input-number-${h} ${r?"input-number-disabled":null}`,children:[A("input",{ref:o,autoFocus:D,type:"number",value:R?n.toFixed(1):n,defaultValue:b,min:m,max:t,step:C,disabled:r,onChange:M,className:"input-number-input"}),f("div",{className:"input-number-button",children:[A("div",{ref:q,className:`input-number-button-plus ${r?"input-number-button-plus-disabled":null} ${n===t?"input-number-button-plus-only-disabled":null}`,onClick:T,children:"+"}),A("div",{className:`input-number-button-minus ${r?"input-number-button-minus-disabled":null} ${n===m?"input-number-button-minus-only-disabled":null}`,onClick:G,children:"-"})]})]})}try{c.displayName="InputNumber",c.__docgenInfo={description:`마우스 또는 키보드로 특정 범위 내의 숫자를 입력합니다.

## 언제 사용하나요?
- 숫자 값을 제공해야 하는 경우 사용합니다.

\`\`\`js
import { InputNumber } from "grida";
\`\`\``,displayName:"InputNumber",props:{autoFocus:{defaultValue:{value:"false"},description:`해당 컴포넌트가 그려질 때 최초로 포커스를 획득하는지 여부로 사용가능합니다.
* 기본 값은 false입니다.`,name:"autoFocus",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:`Input Number 비활성화 속성입니다.
* 기본 값은 false입니다.`,name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`Input Number의 값입니다.
range가 false이면 number를 사용합니다.
range가 true이면 [number, number]를 사용합니다.
* 기본 값은 0 | [0, 0]입니다.`,name:"value",required:!1,type:{name:"number"}},defaultValue:{defaultValue:{value:"0"},description:`Input Number의 기본값입니다.
range가 false이면 number를 사용합니다.
range가 true이면 [number, number]를 사용합니다.
* 기본 값은 0 | [0, 0]입니다.`,name:"defaultValue",required:!1,type:{name:"number"}},size:{defaultValue:{value:"small"},description:`Input Number의 크기를 결정하는 속성입니다.
기본 small입니다.`,name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},step:{defaultValue:{value:"1"},description:`Input Number가 값을 단계적으로 적용할 수 있는 세분성입니다.
0보다 커야 하며 (최대 - 최소)로 나눠야 합니다.
기본 값은 1입니다.`,name:"step",required:!1,type:{name:"number"}},max:{defaultValue:{value:"Number.MAX_SAFE_INTEGER"},description:`Input Number가 슬라이드할 수 있는 최대값 설정하는 속성입니다.
최대값은 Number.MAX_SAFE_INTEGER입니다.`,name:"max",required:!1,type:{name:"number"}},min:{defaultValue:{value:"Number.MIN_SAFE_INTEGER"},description:`Input Number가 슬라이드할 수 있는 최소값 설정하는 속성입니다.
최소값은 Number.MAX_SAFE_INTEGER입니다.`,name:"min",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"사용자가 Input Number 값을 변경할 때 호출되는 콜백 함수입니다.",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}}}}}catch{}const X={title:"Components/InputNumber",component:c,tags:["autodocs"],argTypes:{}},s={args:{}},l={args:{disabled:!0}},B={args:{max:1,value:0,min:0}};var N,v,I;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {}
}`,...(I=(v=s.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var F,g,_;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(_=(g=l.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var y,S,V;B.parameters={...B.parameters,docs:{...(y=B.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    max: 1,
    value: 0,
    min: 0
  }
}`,...(V=(S=B.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const z=["Default","Disabled","ButtonDisabled"];export{B as ButtonDisabled,s as Default,l as Disabled,z as __namedExportsOrder,X as default};
//# sourceMappingURL=InputNumber.stories-73b6a51d.js.map
