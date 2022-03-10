"use strict";(self.webpackChunkmdx_mermaid_doc=self.webpackChunkmdx_mermaid_doc||[]).push([[503],{2148:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=t(3117),i=t(102),o=(t(7378),t(3905)),d=t(5065),r=["components"],s={sidebar_position:2},m="Examples",l={unversionedId:"examples",id:"examples",title:"Examples",description:"The documentation for this library is a working example.",source:"@site/docs/examples.mdx",sourceDirName:".",slug:"/examples",permalink:"/mdx-mermaid/docs/examples",editUrl:"https://github.com/sjwall/mdx-mermaid/edit/main/doc/docs/examples.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Tutorial",permalink:"/mdx-mermaid/docs/intro"},next:{title:"Theme",permalink:"/mdx-mermaid/docs/theme"}},c={},p=[{value:"Component",id:"component",level:2},{value:"Code block",id:"code-block",level:2},{value:"Mermaid Config",id:"mermaid-config",level:2}],h={toc:p};function u(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"examples"},"Examples"),(0,o.kt)("p",null,"The documentation for this library is a working example."),(0,o.kt)("p",null,"This file for has a diagram using the component and code block."),(0,o.kt)("h2",{id:"component"},"Component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Component example"',title:'"Component','example"':!0},"import { Mermaid } from 'mdx-mermaid/Mermaid'\n\n<Mermaid chart={`sequenceDiagram\n    participant Alice\n    participant Bob\n    Alice->>John: Hello John, how are you?\n    loop Healthcheck\n        John->>John: Fight against hypochondria\n    end\n    Note right of John: Rational thoughts <br/>prevail!\n    John--\x3e>Alice: Great!\n    John->>Bob: How about you?\n    Bob--\x3e>John: Jolly good!`} />\n")),(0,o.kt)(d.Mermaid,{config:{},chart:"sequenceDiagram\n    participant Alice\n    participant Bob\n    Alice->>John: Hello John, how are you?\n    loop Healthcheck\n        John->>John: Fight against hypochondria\n    end\n    Note right of John: Rational thoughts <br/>prevail!\n    John--\x3e>Alice: Great!\n    John->>Bob: How about you?\n    Bob--\x3e>John: Jolly good!",mdxType:"Mermaid"}),(0,o.kt)("h2",{id:"code-block"},"Code block"),(0,o.kt)("p",null,"The component doesn't need to be imported as this will be auto inserted."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="Code block example"',title:'"Code',block:!0,'example"':!0},"```mermaid\ngantt\ndateFormat  YYYY-MM-DD\ntitle Adding GANTT diagram to mermaid\nexcludes weekdays 2014-01-10\n\nsection A section\nCompleted task            :done,    des1, 2014-01-06,2014-01-08\nActive task               :active,  des2, 2014-01-09, 3d\nFuture task               :         des3, after des2, 5d\nFuture task2               :         des4, after des3, 5d\n```\n")),(0,o.kt)(d.Mermaid,{chart:"gantt\ndateFormat  YYYY-MM-DD\ntitle Adding GANTT diagram to mermaid\nexcludes weekdays 2014-01-10\n\nsection A section\nCompleted task            :done,    des1, 2014-01-06,2014-01-08\nActive task               :active,  des2, 2014-01-09, 3d\nFuture task               :         des3, after des2, 5d\nFuture task2               :         des4, after des3, 5d",mdxType:"Mermaid"}),(0,o.kt)("h2",{id:"mermaid-config"},"Mermaid Config"),(0,o.kt)("p",null,"Mermaid config can be configured through the plugin config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=docusaurus.config.js",title:"docusaurus.config.js"},"remarkPlugins: [[require('mdx-mermaid'), { mermaid: { theme: 'dark' } }]],\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When passing config to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Mermaid>")," component only the first instance should have the config passed to it.\nIf no config is passed to any component then Mermaid will not initialize.\nThis is not an issue when using in ",(0,o.kt)("inlineCode",{parentName:"p"},".mdx")," files as the parser will handle this."))))}u.isMDXComponent=!0}}]);