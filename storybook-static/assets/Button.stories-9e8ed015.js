import{j as L}from"./jsx-runtime-68f49b4e.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function u({block:r=!1,danger:_=!1,disabled:D=!1,htmlType:E="button",icon:d,shape:x,size:S,buttonType:$,onClick:M,children:N}){return L("button",{className:`button ${r?"w-full":"w-fit"} button-${$} button-size-${S} ${_?"button-dangerous":""} button-shape-${x}`,onClick:M,disabled:D,type:E,children:[N||"Button"," ",d&&d]})}try{u.displayName="Button",u.__docgenInfo={description:"",displayName:"Button",props:{block:{defaultValue:{value:"false"},description:"버튼 너비를 부모 요소의 너비에 맞추는 옵션",name:"block",required:!1,type:{name:"boolean"}},danger:{defaultValue:{value:"false"},description:"",name:"danger",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},htmlType:{defaultValue:{value:"button"},description:"",name:"htmlType",required:!1,type:{name:"enum",value:[{value:'"submit"'},{value:'"button"'},{value:'"reset"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | { delay: number; }"}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"default"'},{value:'"round"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"small"'},{value:'"middle"'}]}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},buttonType:{defaultValue:null,description:"",name:"buttonType",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"ghost"'},{value:'"outline"'},{value:'"dashed"'},{value:'"link"'},{value:'"text"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(((event: MouseEvent<Element, MouseEvent>) => void) & MouseEventHandler<HTMLButtonElement>)"}}}}}catch{}const A={title:"Components/Button",component:u,tags:["autodocs"],argTypes:{}},e={args:{block:!1,danger:!1,disabled:!1,htmlType:"button",buttonType:"default",shape:"default",size:"middle"}},a={args:{block:!1,danger:!1,disabled:!1,htmlType:"button",buttonType:"primary",shape:"default",size:"middle"}},t={args:{block:!1,danger:!1,disabled:!1,htmlType:"button",buttonType:"outline",shape:"default",size:"middle"}},l={args:{block:!1,danger:!1,disabled:!1,htmlType:"button",buttonType:"dashed",shape:"default",size:"middle"}},n={args:{block:!1,danger:!1,disabled:!1,htmlType:"button",buttonType:"text",shape:"default",size:"middle"}},s={args:{block:!1,danger:!1,disabled:!1,htmlType:"button",buttonType:"link",shape:"default",size:"middle"}};var o,i,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    block: false,
    danger: false,
    disabled: false,
    htmlType: 'button',
    buttonType: 'default',
    shape: 'default',
    size: 'middle'
  }
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,f,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    block: false,
    danger: false,
    disabled: false,
    htmlType: 'button',
    buttonType: 'primary',
    shape: 'default',
    size: 'middle'
  }
}`,...(c=(f=a.parameters)==null?void 0:f.docs)==null?void 0:c.source}}};var b,y,g;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    block: false,
    danger: false,
    disabled: false,
    htmlType: 'button',
    buttonType: 'outline',
    shape: 'default',
    size: 'middle'
  }
}`,...(g=(y=t.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var h,T,v;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    block: false,
    danger: false,
    disabled: false,
    htmlType: 'button',
    buttonType: 'dashed',
    shape: 'default',
    size: 'middle'
  }
}`,...(v=(T=l.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var k,B,z;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    block: false,
    danger: false,
    disabled: false,
    htmlType: 'button',
    buttonType: 'text',
    shape: 'default',
    size: 'middle'
  }
}`,...(z=(B=n.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var C,q,V;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    block: false,
    danger: false,
    disabled: false,
    htmlType: 'button',
    buttonType: 'link',
    shape: 'default',
    size: 'middle'
  }
}`,...(V=(q=s.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};const H=["Default","Primary","Outline","Dashed","Text","Link"];export{l as Dashed,e as Default,s as Link,t as Outline,a as Primary,n as Text,H as __namedExportsOrder,A as default};
//# sourceMappingURL=Button.stories-9e8ed015.js.map
