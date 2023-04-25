import{j as S,a as u}from"./jsx-runtime-68f49b4e.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const Z={success:{style:"badge-success",content:"Success"},error:{style:"badge-error",content:"Error"},default:{style:"badge-default",content:"Default"},warning:{style:"badge-warning",content:"Warning"},processing:{style:"badge-processing",content:"Processing"}};function l({color:t="#F26460",count:e="1",dot:y=!1,overflowCount:C=99,showZero:E=!1,size:h="default",status:d,text:N}){const n=d?Z[d]:null;return n?S("div",{className:`badge-status ${n.style}`,children:[u("div",{className:"badge-dot"}),u("span",{className:"badge-text",style:{color:"rgba(0, 0, 0, 0.87)"},children:n.content||N})]}):y?u("div",{className:"badge-dot",style:{backgroundColor:`${t}`}}):u("div",{className:`badge badge-size-${h}`,style:{backgroundColor:`${t}`},children:u("span",{className:"badge-text",children:E?Number(e)>Number(C)?`${C}+`:e||0:Number(e)>Number(C)?`${C}+`:e||""})})}try{l.displayName="Badge",l.__docgenInfo={description:`UI 요소의 작은 숫자 값 또는 상태 설명자입니다.

## 언제 사용하나요?
- 배지는 일반적으로 알림 또는 사용자 아바타 근처에 시선을 사로잡는 모양으로 표시됩니다.
- 일반적으로 읽지 않은 메시지 수를 표시합니다.

\`\`\`js
import { Badge } from "grida";
\`\`\``,displayName:"Badge",props:{color:{defaultValue:{value:"#F26460"},description:"배지 도트 색상을 사용자 정의할 수 있습니다.",name:"color",required:!1,type:{name:"string"}},count:{defaultValue:{value:"1"},description:"배지에 표시할 숫자입니다.",name:"count",required:!1,type:{name:"ReactNode"}},dot:{defaultValue:{value:"false"},description:"숫자 대신 빨간색 도트를 표시할지 여부입니다.",name:"dot",required:!1,type:{name:"boolean"}},offset:{defaultValue:null,description:"배지 도트의 위치를 설정합니다.",name:"offset",required:!1,type:{name:"[number, number]"}},overflowCount:{defaultValue:{value:"99"},description:"배지에 표시할 수 있는 최대 숫자입니다.",name:"overflowCount",required:!1,type:{name:"number"}},showZero:{defaultValue:{value:"false"},description:"숫자가 0일 때 배지를 표시할지 여부입니다.",name:"showZero",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"default"},description:"count 속성이 설정되면, 크기는 배지의 크기를 설정합니다.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'}]}},status:{defaultValue:null,description:"배지를 상태 점으로 설정합니다.",name:"status",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"default"'},{value:'"processing"'}]}},text:{defaultValue:null,description:"상태가 설정되면, 텍스트는 상태 점의 표시 텍스트를 설정합니다.",name:"text",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"배지 위에 마우스를 올렸을 때 표시할 텍스트입니다.",name:"title",required:!1,type:{name:"string"}}}}}catch{}const q={title:"Components/Badge",component:l,tags:["autodocs"],argTypes:{}},a={args:{color:"#F26460",count:5,dot:!1,overflowCount:99,showZero:!1,size:"default"}},s={args:{color:"#F26460",count:100,dot:!1,overflowCount:99,showZero:!1,size:"default"}},o={args:{color:"#F26460",count:0,dot:!1,overflowCount:99,showZero:!0,size:"default"}},r={args:{color:"#F26460",count:0,dot:!1,overflowCount:99,showZero:!0,size:"default",status:"default"}};var c,B,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    color: '#F26460',
    count: 5,
    dot: false,
    overflowCount: 99,
    showZero: false,
    size: 'default'
  }
}`,...(i=(B=a.parameters)==null?void 0:B.docs)==null?void 0:i.source}}};var f,D,m;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    color: '#F26460',
    count: 100,
    dot: false,
    overflowCount: 99,
    showZero: false,
    size: 'default'
  }
}`,...(m=(D=s.parameters)==null?void 0:D.docs)==null?void 0:m.source}}};var p,g,v;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    color: '#F26460',
    count: 0,
    dot: false,
    overflowCount: 99,
    showZero: true,
    size: 'default'
  }
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var A,b,w;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    color: '#F26460',
    count: 0,
    dot: false,
    overflowCount: 99,
    showZero: true,
    size: 'default',
    status: 'default'
  }
}`,...(w=(b=r.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const V=["Default","Overflow","ShowZero","Status"];export{a as Default,s as Overflow,o as ShowZero,r as Status,V as __namedExportsOrder,q as default};
//# sourceMappingURL=Badge.stories-67c9fc6c.js.map
