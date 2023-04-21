import{j as S,a as e}from"./jsx-runtime-68f49b4e.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const Z={success:{style:"badge-success",content:"Success"},error:{style:"badge-error",content:"Error"},default:{style:"badge-default",content:"Default"},warning:{style:"badge-warning",content:"Warning"},processing:{style:"badge-processing",content:"Processing"}};function l({color:C="#F26460",count:u="1",dot:E=!1,overflowCount:a=99,showZero:h=!1,size:A="default",status:d,text:N}){const n=d?Z[d]:null;return n?S("div",{className:`badge-status ${n.style}`,children:[e("div",{className:"badge-dot"}),e("span",{className:"badge-text",style:{color:"rgba(0, 0, 0, 0.87)"},children:n.content||N})]}):E?e("div",{className:"badge-dot",style:{backgroundColor:`${C}`}}):e("div",{className:`badge badge-size-${A}`,style:{backgroundColor:`${C}`},children:e("span",{className:"badge-text",children:h?Number(u)>Number(a)?`${a}+`:u||0:Number(u)>Number(a)?`${a}+`:u||""})})}try{l.displayName="Badge",l.__docgenInfo={description:"",displayName:"Badge",props:{color:{defaultValue:{value:"#F26460"},description:"배지 도트 색상을 사용자 정의할 수 있습니다.",name:"color",required:!1,type:{name:"string"}},count:{defaultValue:{value:"1"},description:"배지에 표시할 숫자입니다.",name:"count",required:!1,type:{name:"ReactNode"}},dot:{defaultValue:{value:"false"},description:"숫자 대신 빨간색 도트를 표시할지 여부입니다.",name:"dot",required:!1,type:{name:"boolean"}},offset:{defaultValue:null,description:"배지 도트의 위치를 설정합니다.",name:"offset",required:!1,type:{name:"[number, number]"}},overflowCount:{defaultValue:{value:"99"},description:"배지에 표시할 수 있는 최대 숫자입니다.",name:"overflowCount",required:!1,type:{name:"number"}},showZero:{defaultValue:{value:"false"},description:"숫자가 0일 때 배지를 표시할지 여부입니다.",name:"showZero",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"default"},description:"count 속성이 설정되면, 크기는 배지의 크기를 설정합니다.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'}]}},status:{defaultValue:null,description:"배지를 상태 점으로 설정합니다.",name:"status",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"default"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"processing"'}]}},text:{defaultValue:null,description:"상태가 설정되면, 텍스트는 상태 점의 표시 텍스트를 설정합니다.",name:"text",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"배지 위에 마우스를 올렸을 때 표시할 텍스트입니다.",name:"title",required:!1,type:{name:"string"}}}}}catch{}const F={title:"Components/Badge",component:l,tags:["autodocs"],argTypes:{}},s={args:{color:"#F26460",count:5,dot:!1,overflowCount:99,showZero:!1,size:"default"}},o={args:{color:"#F26460",count:100,dot:!1,overflowCount:99,showZero:!1,size:"default"}},r={args:{color:"#F26460",count:0,dot:!1,overflowCount:99,showZero:!0,size:"default"}},t={args:{color:"#F26460",count:0,dot:!1,overflowCount:99,showZero:!0,size:"default",status:"default"}};var c,i,f;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    color: '#F26460',
    count: 5,
    dot: false,
    overflowCount: 99,
    showZero: false,
    size: 'default'
  }
}`,...(f=(i=s.parameters)==null?void 0:i.docs)==null?void 0:f.source}}};var B,m,p;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    color: '#F26460',
    count: 100,
    dot: false,
    overflowCount: 99,
    showZero: false,
    size: 'default'
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var D,g,v;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    color: '#F26460',
    count: 0,
    dot: false,
    overflowCount: 99,
    showZero: true,
    size: 'default'
  }
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,w,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    color: '#F26460',
    count: 0,
    dot: false,
    overflowCount: 99,
    showZero: true,
    size: 'default',
    status: 'default'
  }
}`,...(y=(w=t.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};const V=["Default","Overflow","ShowZero","Status"];export{s as Default,o as Overflow,r as ShowZero,t as Status,V as __namedExportsOrder,F as default};
//# sourceMappingURL=Badge.stories-d178379a.js.map
