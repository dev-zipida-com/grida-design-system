import{j as f,a as s}from"./jsx-runtime-68f49b4e.js";import{r}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function E({autoFocus:b=!1,disabled:v=!1,value:g,defaultValue:c=0,step:C=1,max:n=100,min:d=0,inputNumber:H=!1,reverse:K=!1,vertical:L=!1,onChange:m}){const A=r.useRef(null),P=r.useRef(null),[a,p]=r.useState(g||c),[F,w]=r.useState(!1);r.useEffect(()=>{if(!C)return;C.toString().indexOf(".")!==-1&&w(!0)},[C]);const z=u=>{V(u),m==null||m(u)},V=u=>{const e=Number(u.target.value);e>n||p(Number(e))},G=u=>{var e;u.preventDefault(),(e=A.current)==null||e.focus(),!(a>=n)&&p(D=>D+C)},J=u=>{var e;u.preventDefault(),(e=A.current)==null||e.focus(),!(a<=d)&&p(D=>D-C)};return f("div",{className:"slider",children:[s("input",{type:"range",disabled:v,autoFocus:b,min:d,max:n,step:C,value:F?a.toFixed(1):a,defaultValue:c,onChange:z,className:`slider-range ${v?"slider-range-disabled":""} ${L?"slider-range-vertical":""}`}),H&&f("div",{className:"slider-number",children:[s("input",{ref:A,type:"number",value:F?a.toFixed(1):a,defaultValue:c,min:d,max:n,step:C,onChange:V,className:"slider-number-input"}),f("div",{className:"slider-number-button",children:[s("div",{ref:P,className:"slider-number-button-plus",onClick:G,children:"+"}),s("div",{className:"slider-number-button-minus",onClick:J,children:"-"})]})]})]})}try{E.displayName="Slider",E.__docgenInfo={description:`현재 값과 간격을 범위로 표시하는 슬라이더 컴포넌트입니다.

## 언제 사용하나요?
- 범위의 값을 입력합니다.

\`\`\`js
import { Slider } from "grida";
\`\`\``,displayName:"Slider",props:{autoFocus:{defaultValue:{value:"false"},description:`해당 컴포넌트가 그려질 때 최초로 포커스를 획득하는지 여부로 사용가능합니다.
* 기본 값은 false입니다.`,name:"autoFocus",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:`슬라이더 비활성화 속성입니다.
* 기본 값은 false입니다.`,name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`슬라이더의 값입니다.
range가 false이면 number를 사용합니다.
range가 true이면 [number, number]를 사용합니다.
* 기본 값은 0 | [0, 0]입니다.`,name:"value",required:!1,type:{name:"number"}},defaultValue:{defaultValue:{value:"0"},description:`슬라이더의 기본값입니다.
range가 false이면 number를 사용합니다.
range가 true이면 [number, number]를 사용합니다.
* 기본 값은 0 | [0, 0]입니다.`,name:"defaultValue",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:`슬라이더가 값을 단계적으로 적용할 수 있는 세분성입니다.
0보다 커야 하며 (최대 - 최소)로 나눠야 합니다.
기본 값은 1입니다.`,name:"step",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:`슬라이더가 슬라이드할 수 있는 최대값 설정하는 속성입니다.
최대값은 100입니다.`,name:"max",required:!1,type:{name:"number"}},min:{defaultValue:{value:"0"},description:`슬라이더가 슬라이드할 수 있는 최소값 설정하는 속성입니다.
최소값은 0입니다.`,name:"min",required:!1,type:{name:"number"}},inputNumber:{defaultValue:{value:"false"},description:`슬라이더 오른쪽에 숫자를 넣을 수 있는 input박스가 제공됩니다.
기본값은 false입니다.`,name:"inputNumber",required:!1,type:{name:"boolean"}},reverse:{defaultValue:{value:"false"},description:`슬라이더가 구성 요소를 리버스로 표현합니다.
기본값은 false입니다.`,name:"reverse",required:!1,type:{name:"boolean"}},vertical:{defaultValue:{value:"false"},description:`슬라이더가 수직으로 설정됩니다.
기본값은 false입니다.`,name:"vertical",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"사용자가 슬라이더 값을 변경할 때 호출되는 콜백 함수입니다.",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}}}}}catch{}const X={title:"Components/Slider",component:E,tags:["autodocs"],argTypes:{}},t={args:{}},l={args:{value:50}},B={args:{value:30,disabled:!0}},i={args:{value:10,inputNumber:!0,step:1}},o={args:{value:30,vertical:!0}};var y,N,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {}
}`,...(S=(N=t.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var h,q,_;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: 50
  }
}`,...(_=(q=l.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var x,I,j;B.parameters={...B.parameters,docs:{...(x=B.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    value: 30,
    disabled: true
  }
}`,...(j=(I=B.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var k,R,M;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    value: 10,
    inputNumber: true,
    step: 1
  }
}`,...(M=(R=i.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var O,T,$;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    value: 30,
    vertical: true
  }
}`,...($=(T=o.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};const Y=["Default","InputValue","Disabled","InputNumber","Vertical"];export{t as Default,B as Disabled,i as InputNumber,l as InputValue,o as Vertical,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=Slider.stories-c42e71ef.js.map
