import{s as l}from"./index-d475d2ea.js";import{R as n,r as i}from"./index-f1f749bf.js";import{u,r as d}from"./react-18-61705542.js";var{FRAMEWORK_OPTIONS:a}=l,q=(r,e)=>{let{id:t,component:o}=e;if(!o)throw new Error(`Unable to render story ${t} as the component annotation is missing from the default export`);return n.createElement(o,{...r})},f=class extends i.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidMount(){let{hasError:r}=this.state,{showMain:e}=this.props;r||e()}componentDidCatch(r){let{showException:e}=this.props;e(r)}render(){let{hasError:r}=this.state,{children:e}=this.props;return r?null:e}},m=a!=null&&a.strictMode?i.StrictMode:i.Fragment;async function g({storyContext:r,unboundStoryFn:e,showMain:t,showException:o,forceRemount:c},s){let p=n.createElement(f,{showMain:t,showException:o},n.createElement(e,{...r})),h=m?n.createElement(m,null,p):p;return c&&u(s),await d(h,s),()=>u(s)}(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+r+'" is not supported')});export{g as a,q as r};
//# sourceMappingURL=chunk-R4NKYYJA-91f29f60.js.map