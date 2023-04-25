import{a as u}from"./jsx-runtime-68f49b4e.js";import{e as c}from"./index.esm-fbcd44e3.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function e({alt:a,gap:n=4,icon:s=u(c,{}),shape:i="circle",size:o="default",src:B,srcSet:D,draggable:m=!0,crossOrigin:d,onError:p}){return u("div",{className:"avatar",children:u("div",{className:`avatar-size-${o} avatar-gap-${n} avatar-${i} bg-gray-300`,children:B?u("img",{src:`${B}`,alt:`${a}`||"avater",crossOrigin:d}):s})})}try{e.displayName="Avatar",e.__docgenInfo={description:`아바타는 사람이나 사물을 표현하는 데 사용할 수 있습니다.

## 언제 사용하나요?
- 이미지, 아이콘 또는 문자가 필요할 때 사용할 수 있습니다.

\`\`\`js
import { Avatar } from "grida";
\`\`\``,displayName:"Avatar",props:{alt:{defaultValue:null,description:"이미지를 설명하는 대체 텍스트를 정의하는 속성입니다.",name:"alt",required:!0,type:{name:"string"}},gap:{defaultValue:{value:"4"},description:"왼쪽과 오른쪽 사이의 글자 유닛 거리입니다.",name:"gap",required:!1,type:{name:"number"}},icon:{defaultValue:{value:"<AiOutlineUser />"},description:"아이콘 아바타를 위한 커스텀 아이콘 타입입니다.",name:"icon",required:!1,type:{name:"ReactNode"}},shape:{defaultValue:{value:"circle"},description:"아바타의 모양입니다. 원 모양 또는 사각형 모양이 될 수 있습니다.",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"square"'}]}},size:{defaultValue:{value:"default"},description:'아바타의 크기입니다. 숫자, "large" 또는 "small" 문자열 또는 다른 화면 해상도에 대한 크기 값을 가진 객체일 수 있습니다.',name:"size",required:!1,type:{name:'number | "small" | "large" | "default" | { xs: number; sm: number; md: number; lg: number; }'}},src:{defaultValue:null,description:"이미지 아바타 또는 이미지 요소에 대한 주소입니다.",name:"src",required:!1,type:{name:"ReactNode"}},srcSet:{defaultValue:null,description:"서로 다른 화면 해상도에 대해 사용할 소스 목록입니다.",name:"srcSet",required:!1,type:{name:"string"}},draggable:{defaultValue:{value:"true"},description:"이미지를 드래그할 수 있는지 여부입니다.",name:"draggable",required:!1,type:{name:'boolean | "true" | "false"'}},crossOrigin:{defaultValue:null,description:'CORS 설정 속성입니다. "anonymous", "use-credentials", 또는 빈 문자열이 될 수 있습니다.',name:"crossOrigin",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"anonymous"'},{value:'"use-credentials"'}]}},onError:{defaultValue:null,description:"이미지 로드 오류시 핸들러입니다. 기본 대체 동작을 방지하려면 false를 반환합니다.",name:"onError",required:!1,type:{name:"(() => boolean)"}}}}}catch{}const v={title:"Components/Avatar",component:e,tags:["autodocs"],argTypes:{}},C={args:{shape:"circle",gap:4,size:"default"}};var r,t,l;C.parameters={...C.parameters,docs:{...(r=C.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    shape: 'circle',
    gap: 4,
    size: 'default'
  }
}`,...(l=(t=C.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const y=["Default"];export{C as Default,y as __namedExportsOrder,v as default};
//# sourceMappingURL=Avatar.stories-401fbdcc.js.map
