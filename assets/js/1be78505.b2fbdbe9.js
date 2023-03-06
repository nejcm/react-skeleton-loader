"use strict";(self.webpackChunk_nejcm_react_skeleton_loader_docs=self.webpackChunk_nejcm_react_skeleton_loader_docs||[]).push([[514,6],{4959:(e,t,n)=>{n.r(t),n.d(t,{default:()=>pe});var a=n(2784),l=n(6277),o=n(328),r=n(211),c=n(4925),i=n(4855),s=n(5663),d=n(4228),m=n(4602),u=n(1077),b=n(4126),p=n(2105);const h={backToTopButton:"backToTopButton_z1FD",backToTopButtonShow:"backToTopButtonShow_w1wE"};function E(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),o=(0,a.useRef)(!1),{startScroll:r,cancelScroll:c}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const r=n?.scrollY;r&&(o.current?o.current=!1:a>=r?(c(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((e=>{e.location.hash&&(o.current=!0,l(!1))})),{shown:n,scrollToTop:()=>r(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",r.k.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var f=n(7267),g=n(7963),_=n(7683),v=n(1881),k=n(7896);function C(e){return a.createElement("svg",(0,k.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const I={collapseSidebarButton:"collapseSidebarButton_Ftvb",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_c4WT"};function S(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",I.collapseSidebarButton),onClick:t},a.createElement(C,{className:I.collapseSidebarButtonIcon}))}var N=n(3717),T=n(6335);const Z=Symbol("EmptyContext"),x=a.createContext(Z);function B(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),o=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(x.Provider,{value:o},t)}var w=n(8698),y=n(7661),L=n(9817),A=n(9741);function H(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function F(e){let{item:t,onItemClick:n,activePath:o,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,_.L)(),f=function(e){const t=(0,A.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),g=(0,i._F)(t,o),v=(0,y.Mg)(h,o),{collapsed:C,setCollapsed:I}=(0,w.u)({initialState:()=>!!b&&(!g&&t.collapsed)}),{expandedItem:S,setExpandedItem:N}=function(){const e=(0,a.useContext)(x);if(e===Z)throw new T.i6("DocSidebarItemsExpandedStateProvider");return e}(),B=function(e){void 0===e&&(e=!C),N(e?null:s),I(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const o=(0,T.D9)(t);(0,a.useEffect)((()=>{t&&!o&&n&&l(!1)}),[t,o,n,l])}({isActive:g,collapsed:C,updateCollapsed:B}),(0,a.useEffect)((()=>{b&&null!=S&&S!==s&&E&&I(!0)}),[b,S,s,I,E]),a.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":C},p)},a.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v})},a.createElement(L.Z,(0,k.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":g}),onClick:b?e=>{n?.(t),h?B(!1):(e.preventDefault(),B())}:()=>{n?.(t)},"aria-current":v?"page":void 0,"aria-expanded":b?!C:void 0,href:b?f??"#":f},d),u),h&&b&&a.createElement(H,{categoryLabel:u,onClick:e=>{e.preventDefault(),B()}})),a.createElement(w.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},a.createElement(O,{items:m,tabIndex:C?-1:0,onItemClick:n,activePath:o,level:c+1})))}var M=n(1344),W=n(4442);const P={menuExternalLink:"menuExternalLink_xK2O"};function D(e){let{item:t,onItemClick:n,activePath:o,level:c,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,i._F)(t,o),E=(0,M.Z)(m);return a.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},a.createElement(L.Z,(0,k.Z)({className:(0,l.Z)("menu__link",!E&&P.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(W.Z,null)))}const R={menuHtmlItem:"menuHtmlItem_anEq"};function q(e){let{item:t,level:n,index:o}=e;const{value:c,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(n),i&&[R.menuHtmlItem,"menu__list-item"],s),key:o,dangerouslySetInnerHTML:{__html:c}})}function V(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(F,(0,k.Z)({item:t},n));case"html":return a.createElement(q,(0,k.Z)({item:t},n));default:return a.createElement(D,(0,k.Z)({item:t},n))}}function z(e){let{items:t,...n}=e;return a.createElement(B,null,t.map(((e,t)=>a.createElement(V,(0,k.Z)({key:t,item:e,index:t},n)))))}const O=(0,a.memo)(z),U={menu:"menu_qiME",menuWithAnnouncementBar:"menuWithAnnouncementBar_hRfJ"};function K(e){let{path:t,sidebar:n,className:o}=e;const c=function(){const{isActive:e}=(0,N.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.Z)("menu thin-scrollbar",U.menu,c&&U.menuWithAnnouncementBar,o)},a.createElement("ul",{className:(0,l.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(O,{items:n,activePath:t,level:1})))}const Y={sidebar:"sidebar_vJCc",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_Fo4g",sidebarHidden:"sidebarHidden_vBKa",sidebarLogo:"sidebarLogo_nlll"};function j(e){let{path:t,sidebar:n,onCollapse:o,isHidden:r}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,_.L)();return a.createElement("div",{className:(0,l.Z)(Y.sidebar,c&&Y.sidebarWithHideableNavbar,r&&Y.sidebarHidden)},c&&a.createElement(v.Z,{tabIndex:-1,className:Y.sidebarLogo}),a.createElement(K,{path:t,sidebar:n}),i&&a.createElement(S,{onClick:o}))}const J=a.memo(j);var G=n(7548),Q=n(7136);const X=e=>{let{sidebar:t,path:n}=e;const o=(0,Q.e)();return a.createElement("ul",{className:(0,l.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(O,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function $(e){return a.createElement(G.Zo,{component:X,props:e})}const ee=a.memo($);function te(e){const t=(0,g.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(J,e),l&&a.createElement(ee,e))}const ne={expandButton:"expandButton_qIqc",expandButtonIcon:"expandButtonIcon_aOpf"};function ae(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ne.expandButton,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(C,{className:ne.expandButtonIcon}))}const le={docSidebarContainer:"docSidebarContainer_aIKW",docSidebarContainerHidden:"docSidebarContainerHidden_UIq3",sidebarViewport:"sidebarViewport_DwR9"};function oe(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function re(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:o}=e;const{pathname:c}=(0,f.TH)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),o((e=>!e))}),[o,i]);return a.createElement("aside",{className:(0,l.Z)(r.k.docs.docSidebarContainer,le.docSidebarContainer,n&&le.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(le.docSidebarContainer)&&n&&s(!0)}},a.createElement(oe,null,a.createElement("div",{className:(0,l.Z)(le.sidebarViewport,i&&le.sidebarViewportHidden)},a.createElement(te,{sidebar:t,path:c,onCollapse:d,isHidden:i}),i&&a.createElement(ae,{toggleSidebar:d}))))}const ce={docMainContainer:"docMainContainer_fv3b",docMainContainerEnhanced:"docMainContainerEnhanced_wOQt",docItemWrapperEnhanced:"docItemWrapperEnhanced_DUiu"};function ie(e){let{hiddenSidebarContainer:t,children:n}=e;const o=(0,d.V)();return a.createElement("main",{className:(0,l.Z)(ce.docMainContainer,(t||!o)&&ce.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",ce.docItemWrapper,t&&ce.docItemWrapperEnhanced)},n))}const se={docPage:"docPage_pOTq",docsWrapper:"docsWrapper_BqXd"};function de(e){let{children:t}=e;const n=(0,d.V)(),[l,o]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:se.docsWrapper},a.createElement(E,null),a.createElement("div",{className:se.docPage},n&&a.createElement(re,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),a.createElement(ie,{hiddenSidebarContainer:l},t)))}var me=n(2006),ue=n(4390);function be(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(ue.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),a.createElement(o.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function pe(e){const{versionMetadata:t}=e,n=(0,i.hI)(e);if(!n)return a.createElement(me.default,null);const{docElement:c,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(be,e),a.createElement(o.FG,{className:(0,l.Z)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(de,null,c)))))}},2006:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(2784),l=n(1077),o=n(328),r=n(4602);function c(){return a.createElement(a.Fragment,null,a.createElement(o.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);