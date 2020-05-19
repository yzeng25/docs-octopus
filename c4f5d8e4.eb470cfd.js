/*! For license information please see c4f5d8e4.eb470cfd.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{125:function(e,t,r){"use strict";r.r(t);var o=r(2),a=r(0),n=r.n(a),i=r(128),l=r.n(i),c=r(132),s=r(130),d=r(127),u=r(129),h=r(121),p=r.n(h);class f extends a.PureComponent{constructor(e){super(e),this.$=n.a.createRef(),this._=n.a.createRef()}render(){return n.a.createElement("span",{ref:this.$},n.a.createElement("a",{...this.props,ref:this._},this.props.children))}componentDidMount(){this.paint()}getSnapshotBeforeUpdate(){return this.reset(),null}componentDidUpdate(){this.paint()}componentWillUnmount(){this.reset()}paint(){const e=this.$.current.appendChild(document.createElement("span"));Promise.resolve().then(r.bind(null,149)).then(({render:t})=>{t(e.appendChild(this._.current),(function(t){try{e.parentNode.replaceChild(t,e)}catch(e){}}))})}reset(){this.$.current.replaceChild(this._.current,this.$.current.lastChild)}}var g=f;const m=[{title:n.a.createElement(n.a.Fragment,null,"Build for Edge"),imageUrl:"img/undraw_docusaurus_tree.svg",description:n.a.createElement(n.a.Fragment,null,"Lightweight and does not need to replace any components of the Kubernetes clusters. With Octopus deployed, the cluster can have the ability to manage any edge device as a resource.")},{title:n.a.createElement(n.a.Fragment,null,"Simple yet Flexible"),imageUrl:"img/undraw_docusaurus_mountain.svg",description:n.a.createElement(n.a.Fragment,null,"Octopus has build-in device adaptor like BLE, modbus, OPC-UA and MQTT, and it support custom device adaptor plugins. Go ahead and ",n.a.createElement("a",{href:"https://github.com/cnrancher/octopus/blob/master/docs/adaptors/develop.md",target:"_blank"},"build your own adaptor"),".")},{title:n.a.createElement(n.a.Fragment,null,"Powered by Kubernetes & k3s"),imageUrl:"img/undraw_docusaurus_react.svg",description:n.a.createElement(n.a.Fragment,null,"Both ARM64 and ARMv7 are supported with multiarch images. Works great with both valina Kubernetes and ",n.a.createElement("a",{href:"https://k3s.io/",target:"_blank"},"k3s"),".")}];function b({imageUrl:e,title:t,description:r}){const o=Object(u.a)(e);return n.a.createElement("div",{className:l()("col col--4",p.a.feature)},o&&n.a.createElement("div",{className:"text--center"},n.a.createElement("img",{className:p.a.featureImage,src:o,alt:t})),n.a.createElement("h3",null,t),n.a.createElement("p",null,r))}t.default=function(){const e=Object(d.a)(),{siteConfig:t={}}=e;return n.a.createElement(c.a,{title:""+t.title,description:"Lightweight edge device management system based on Kubernetes, powered by Rancher"},n.a.createElement("header",{className:l()("hero hero--primary hero-custom",p.a.heroBanner)},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"hero__title"},t.title),n.a.createElement("p",{className:"hero__subtitle"},t.tagline),n.a.createElement("div",{className:p.a.buttons},n.a.createElement(s.a,{className:l()("button button--outline button--secondary button--lg",p.a.getStarted),to:Object(u.a)("docs/architecture")},"Get Started")),n.a.createElement(g,{href:"https://github.com/cnrancher/octopus","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star ntkme/github-buttons on GitHub"},"Star"),n.a.createElement(g,{href:"https://github.com/cnrancher/octopus/fork","data-icon":"octicon-repo-forked","data-show-count":"true","aria-label":"Fork ntkme/github-buttons on GitHub"},"Fork"))),n.a.createElement("main",null,m&&m.length&&n.a.createElement("section",{className:p.a.features},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},m.map((e,t)=>n.a.createElement(b,Object(o.a)({key:t},e))))))))}},149:function(e,t,r){"use strict";r.r(t),r.d(t,"render",(function(){return E}));var o=window.document,a=window.Math,n=window.HTMLElement,i=window.XMLHttpRequest,l=function(e){return function(t,r,o){var a=e.createElement(t);if(null!=r)for(var n in r){var i=r[n];null!=i&&(null!=a[n]?a[n]=i:a.setAttribute(n,i))}if(null!=o)for(var l=0,c=o.length;l<c;l++){var s=o[l];a.appendChild("string"==typeof s?e.createTextNode(s):s)}return a}},c=l(o),s=function(e,t){return{}.hasOwnProperty.call(e,t)},d=i&&i.prototype&&"withCredentials"in i.prototype,u=d&&n&&n.prototype.attachShadow&&!n.prototype.attachShadow.prototype,h=function(e,t,r){e.addEventListener?e.addEventListener(t,r,!1):e.attachEvent("on"+t,r)},p=function(e,t,r){e.removeEventListener?e.removeEventListener(t,r,!1):e.detachEvent("on"+t,r)},f={light:".btn{color:#24292e;background-color:#eff3f6;border-color:#c5c9cc;border-color:rgba(27,31,35,.2);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23fafbfc'/%3e%3cstop offset='90%25' stop-color='%23eff3f6'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#e6ebf1;background-position:-0.5em;border-color:#9fa4a9;border-color:rgba(27,31,35,.35);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f0f3f6'/%3e%3cstop offset='90%25' stop-color='%23e6ebf1'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f0f3f6, #e6ebf1 90%);background-image:linear-gradient(180deg, #f0f3f6, #e6ebf1 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#e9ecef;border-color:#a1a4a8;border-color:rgba(27,31,35,.35);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);background-image:none;filter:none}.social-count{color:#24292e;background-color:#fff;border-color:#d1d2d3;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#0366d6}.octicon-heart{color:#ea4aaa}",dark:".btn{color:#fafbfc;background-color:#202428;border-color:#1f2327;border-color:rgba(27,31,35,.2);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232f363d'/%3e%3cstop offset='90%25' stop-color='%23202428'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2f363d, #202428 90%);background-image:linear-gradient(180deg, #2f363d, #202428 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2F363D', endColorstr='#FF1E2226')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#1b1f23;background-position:-0.5em;border-color:#1b1f23;border-color:rgba(27,31,35,.5);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232b3137'/%3e%3cstop offset='90%25' stop-color='%231b1f23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2b3137, #1b1f23 90%);background-image:linear-gradient(180deg, #2b3137, #1b1f23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2B3137', endColorstr='#FF191D21')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#181b1f;border-color:#1a1d21;border-color:rgba(27,31,35,.5);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);background-image:none;filter:none}.social-count{color:#fafbfc;background-color:#1b1f23;border-color:#1b1f23;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#2188ff}.octicon-heart{color:#ec6cb9}"},g=function(e,t){return"@media(prefers-color-scheme:"+e+"){"+f[s(f,t)?t:e]+"}"},m=function(e){if(null==e)return f.light;var t=function(e,t,r,o){null==t&&(t="&"),null==r&&(r="="),null==o&&(o=window.decodeURIComponent);for(var a={},n=e.split(t),i=0,l=n.length;i<l;++i){var c=n[i];if(""!==c){var s=c.split(r);a[o(s[0])]=null!=s[1]?o(s.slice(1).join(r)):void 0}}return a}(e,";",":",(function(e){return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g,"")}));return f[s(f,t["no-preference"])?t["no-preference"]:"light"]+g("light",t.light)+g("dark",t.dark)},b={"mark-github":{width:16,height:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>'},heart:{width:12,height:16,path:'<path fill-rule="evenodd" d="M8.727 3C7.091 3 6.001 4.65 6.001 4.65S4.909 3 3.273 3C1.636 3 0 4.1 0 6.3 0 9.6 6 14 6 14s6-4.4 6-7.7C12 4.1 10.364 3 8.727 3z"></path>'},eye:{width:16,height:16,path:'<path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path>'},star:{width:14,height:16,path:'<path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>'},"repo-forked":{width:10,height:16,path:'<path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path>'},"repo-template":{width:14,height:16,path:'<path fill-rule="evenodd" d="M12 8V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h2v2l1.5-1.5L6 16v-4H3v1H1v-2h7v-1H2V1h9v7h1zM4 2H3v1h1V2zM3 4h1v1H3V4zm1 2H3v1h1V6zm0 3H3V8h1v1zm6 3H8v2h2v2h2v-2h2v-2h-2v-2h-2v2z"></path>'},"issue-opened":{width:14,height:16,path:'<path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path>'},"cloud-download":{width:16,height:16,path:'<path fill-rule="evenodd" d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"></path>'}},v={},w=function(e,t){var r=v[e]||(v[e]=[]);if(!(r.push(t)>1)){var o=function(e){var t;return function(){t||(t=1,e.apply(this,arguments))}}((function(){for(delete v[e];t=r.shift();)t.apply(null,arguments)}));if(d){var a=new i;h(a,"abort",o),h(a,"error",o),h(a,"load",(function(){var e;try{e=JSON.parse(a.responseText)}catch(t){return void o(t)}o(200!==a.status,e)})),a.open("GET",e),a.send()}else{var n=this||window;n._=function(e){n._=null,o(200!==e.meta.status,e.data)};var c=l(n.document)("script",{async:!0,src:e+(/\?/.test(e)?"&":"?")+"callback=_"}),s=function(){n._&&n._({meta:{}})};h(c,"load",s),h(c,"error",s),c.readyState&&function(e,t,r){var o=function(a){if(t.test(e.readyState))return p(e,"readystatechange",o),r(a)};h(e,"readystatechange",o)}(c,/de|m/,s),n.document.getElementsByTagName("head")[0].appendChild(c)}}},k=function(e,t,r){var o=l(e.ownerDocument),a=e.appendChild(o("style",{type:"text/css"})),n="body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:20px;padding:3px 10px;font-size:12px;line-height:20px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor}"+m(t["data-color-scheme"]);a.styleSheet?a.styleSheet.cssText=n:a.appendChild(e.ownerDocument.createTextNode(n));var i,c,d=o("a",{className:"btn",href:t.href,rel:"noopener",target:"_blank",title:t.title||void 0,"aria-label":t["aria-label"]||void 0,innerHTML:(i=t["data-icon"],c=/^large$/i.test(t["data-size"])?16:14,i=(""+i).toLowerCase().replace(/^octicon-/,""),s(b,i)||(i="mark-github"),'<svg viewBox="0 0 '+b[i].width+" "+b[i].height+'" class="octicon octicon-'+i+'" style="width: '+c*b[i].width/b[i].height+"px; height: "+c+'px;" aria-hidden="true">'+b[i].path+"</svg>")},[" ",o("span",{},[t["data-text"]||""])]),u=e.appendChild(o("div",{className:"widget"+(/^large$/i.test(t["data-size"])?" widget-lg":"")},[d])),h=d.hostname.split(".").reverse();if(""===h[0]&&h.shift(),"com"!==h[0]||"github"!==h[1])return d.href="#",d.target="_self",void r(u);var p=h.length,f=(" /"+d.pathname).split(/\/+/);if(((2===p||3===p&&"gist"===h[2])&&"archive"===f[3]||2===p&&"releases"===f[3]&&"download"===f[4]||3===p&&"codeload"===h[2])&&(d.target="_top"),/^true$/i.test(t["data-show-count"])&&2===p){var g,v;if(!f[2]&&f[1])g=v="followers";else if(!f[3]&&f[2])v="stargazers_count",g="stargazers";else if(f[4]||"subscription"!==f[3])if(f[4]||"fork"!==f[3]){if("issues"!==f[3])return void r(u);v="open_issues_count",g="issues"}else v="forks_count",g="network/members";else v="subscribers_count",g="watchers";var k=f[2]?"/repos/"+f[1]+"/"+f[2]:"/users/"+f[1];w.call(this,"https://api.github.com"+k,(function(e,t){if(!e){var a=t[v];u.appendChild(o("a",{className:"social-count",href:t.html_url+"/"+g,rel:"noopener",target:"_blank","aria-label":a+" "+v.replace(/_count$/,"").replace("_"," ").slice(0,a<2?-1:void 0)+" on GitHub"},[(""+a).replace(/\B(?=(\d{3})+(?!\d))/g,",")]))}r(u)}))}else r(u)},y=window.devicePixelRatio||1,x=function(e){return(y>1?a.ceil(a.round(e*y)/y*2)/2:a.ceil(e))||0},C=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},E=function(e,t){if(null!=e&&null!=t)if(e.getAttribute&&(e=function(e){for(var t={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")},r=["icon","color-scheme","text","size","show-count"],o=0,a=r.length;o<a;o++){var n="data-"+r[o];t[n]=e.getAttribute(n)}return null==t["data-text"]&&(t["data-text"]=e.textContent||e.innerText),t}(e)),u){var r=c("span");k(r.attachShadow({mode:"closed"}),e,(function(){t(r)}))}else{var n=c("iframe",{src:"javascript:0",title:e.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});C(n,[0,0]),n.style.border="none";var i=function(){var r,l=n.contentWindow;try{r=l.document.body}catch(c){return void o.body.appendChild(n.parentNode.removeChild(n))}p(n,"load",i),k.call(l,r,e,(function(r){var o=function(e){var t=e.offsetWidth,r=e.offsetHeight;if(e.getBoundingClientRect){var o=e.getBoundingClientRect();t=a.max(t,x(o.width)),r=a.max(r,x(o.height))}return[t,r]}(r);n.parentNode.removeChild(n),function(e,t,r){var o=function(a){return p(e,t,o),r(a)};h(e,t,o)}(n,"load",(function(){C(n,o)})),n.src="https://unpkg.com/github-buttons@2.8.0/dist/buttons.html#"+(n.name=function(e,t,r,o){null==t&&(t="&"),null==r&&(r="="),null==o&&(o=window.encodeURIComponent);var a=[];for(var n in e){var i=e[n];null!=i&&a.push(o(n)+r+o(i))}return a.join(t)}(e)),t(n)}))};h(n,"load",i),o.body.appendChild(n)}}}}]);