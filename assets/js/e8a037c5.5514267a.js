/*! For license information please see e8a037c5.5514267a.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25149],{94435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(74848),a=n(28453);const s={sidebar_label:"Page.addStyleTag"},d="Page.addStyleTag() method",l={id:"api/puppeteer.page.addstyletag",title:"Page.addStyleTag() method",description:"addStyleTag(): Promise&lt;ElementHandle&lt;HTMLStyleElement&gt;&gt;",source:"@site/versioned_docs/version-23.3.0/api/puppeteer.page.addstyletag.md",sourceDirName:"api",slug:"/api/puppeteer.page.addstyletag",permalink:"/api/puppeteer.page.addstyletag",draft:!1,unlisted:!1,tags:[],version:"23.3.0",frontMatter:{sidebar_label:"Page.addStyleTag"},sidebar:"api",previous:{title:"Page.addScriptTag",permalink:"/api/puppeteer.page.addscripttag"},next:{title:"Page.authenticate",permalink:"/api/puppeteer.page.authenticate"}},i={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Signature",id:"signature-1",level:3},{value:"Parameters",id:"parameters-1",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"pageaddstyletag-method",children:"Page.addStyleTag() method"})}),"\n",(0,r.jsx)("h2",{id:"addStyleTag",children:"addStyleTag(): Promise<ElementHandle<HTMLStyleElement>>"}),"\n",(0,r.jsxs)(t.p,{children:["Adds a ",(0,r.jsx)(t.code,{children:'<link rel="stylesheet">'})," tag into the page with the desired URL or a ",(0,r.jsx)(t.code,{children:'<style type="text/css">'})," tag with the content."]}),"\n",(0,r.jsxs)(t.p,{children:["Shortcut for ",(0,r.jsx)(t.a,{href:"/api/puppeteer.frame.addstyletag",children:"page.mainFrame().addStyleTag(options)"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  addStyleTag(\n    options: Omit<FrameAddStyleTagOptions, 'url'>\n  ): Promise<ElementHandle<HTMLStyleElement>>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"options"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["Omit<",(0,r.jsx)(t.a,{href:"/api/puppeteer.frameaddstyletagoptions",children:"FrameAddStyleTagOptions"}),", 'url'>"]})}),(0,r.jsx)("td",{})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(t.p,{children:["Promise<",(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<HTMLStyleElement>>"]}),"\n",(0,r.jsxs)(t.p,{children:["An ",(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"element handle"})," to the injected ",(0,r.jsx)(t.code,{children:"<link>"})," or ",(0,r.jsx)(t.code,{children:"<style>"})," element."]}),"\n",(0,r.jsx)("h2",{id:"addStyleTag-1",children:"addStyleTag(): Promise<ElementHandle<HTMLLinkElement>>"}),"\n",(0,r.jsx)(t.h3,{id:"signature-1",children:"Signature"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  addStyleTag(\n    options: FrameAddStyleTagOptions\n  ): Promise<ElementHandle<HTMLLinkElement>>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"options"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.frameaddstyletagoptions",children:"FrameAddStyleTagOptions"})})}),(0,r.jsx)("td",{})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(t.p,{children:["Promise<",(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<HTMLLinkElement>>"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},21020:(e,t,n)=>{var r=n(96540),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,n){var r,s={},p=null,c=null;for(r in void 0!==n&&(p=""+n),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(c=t.ref),t)d.call(t,r)&&!i.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:a,type:e,key:p,ref:c,props:s,_owner:l.current}}t.Fragment=s,t.jsx=p,t.jsxs=p},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>l});var r=n(96540);const a={},s=r.createContext(a);function d(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);