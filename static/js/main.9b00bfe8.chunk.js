(this.webpackJsonphello=this.webpackJsonphello||[]).push([[0],{48:function(e,t,n){e.exports=n(88)},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},65:function(e,t){},66:function(e,t){},67:function(e,t){},86:function(e,t){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(42),l=n.n(o),i=(n(53),n(8)),c=n(1),u=n(3);n(54),n(55);window.CSS.registerProperty({name:"--my-len",syntax:"<number>",inherits:!1,initialValue:Math.random()}),window.CSS.registerProperty({name:"--my-saturation",syntax:"<number>",inherits:!1,initialValue:Math.random()}),window.CSS.registerProperty({name:"--primary-color",syntax:"<color>",inherits:!0,initialValue:"tomato"});var s=function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"home"},"\u70b9\u4eae\u6211"),r.a.createElement("div",{className:"btn",onClick:function(){return e=Math.random(),document.querySelector(".home").style.setProperty("--my-len",e),void document.querySelector(".home").style.setProperty("--my-saturation",e);var e}},r.a.createElement("span",{className:"text"},"click me")))};n(56);window.CSS.registerProperty({name:"--registered",syntax:"<color>",inherits:!1,initialValue:"red"});var m=function(){return r.a.createElement("div",null,r.a.createElement("button",{className:"registered"},"Background Registered"),r.a.createElement("button",{className:"unregistered"},"Background Not Registered"))},d=n(27),p=n(43),f=n(44),h=n(47),y=n(46);n(57);"paintWorklet"in CSS&&CSS.paintWorklet.addModule("".concat("/react-css-houdini","/paintWorklet/ripple.js"));var E=function(e){Object(h.a)(n,e);var t=Object(y.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){!function(){var e,t,n=document.querySelector(".ripple"),a=n.getBoundingClientRect().top,r=performance.now();document.querySelector(".ripple").addEventListener("click",(function(o){n.classList.add("animating");var l=[o.clientX,o.clientY-a];e=l[0],t=l[1],r=performance.now(),requestAnimationFrame((function a(o){var l=Math.floor(o-r);if(n.style.cssText="--ripple-x: ".concat(e,"; --ripple-y: ").concat(t,"; --animation-tick: ").concat(l,";"),l>1e3)return n.classList.remove("animating"),void(n.style.cssText="--animation-tick: 0");requestAnimationFrame(a)}))}))}()}},{key:"render",value:function(){return r.a.createElement("button",{className:"ripple"},"click me")}}]),n}(r.a.Component);n(58);"paintWorklet"in CSS&&CSS.paintWorklet.addModule("".concat("/react-css-houdini","/paintWorklet/mask.js"));var v=function(){return r.a.createElement("div",{className:"mask"},"mask-image")};n(59);"paintWorklet"in CSS&&CSS.paintWorklet.addModule("".concat("/react-css-houdini","/paintWorklet/headerHighlight.js"));var k=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)(!1),i=Object(d.a)(l,2),c=i[0],u=i[1];return r.a.createElement("div",null,r.a.createElement("h1",{className:"fancy"},"My Cool Header"),r.a.createElement("div",null,r.a.createElement("span",{onClick:function(){return o(!n)}},"clickMe Ripper"),r.a.createElement("span",{onClick:function(){return u(!c)}},"clickMe Mask")),n&&r.a.createElement(E,null),c&&r.a.createElement(v,null))};n(60);"layoutWorklet"in CSS?CSS.layoutWorklet.addModule("".concat("/react-css-houdini","/layoutWorklet/masonry.js")):document.body.innerHTML='You need support for <a href="https://drafts.css-houdini.org/css-layout-api/">CSS Layout API</a> to view this demo :(';var b=["1 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis definitionem an, et natum ocurreret cum, semper interpretaris cu mea. Eam saperet fierent luptatum no. Ius ei dicunt detracto elaboraret. Lorem ipsum dolor sit a","2 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis definitionem an, et natum","3 Lorem ipsum dolor si","4 Lorem ipsum dolor sit amet, consul disputando ne his","5 Lorem ipsum","6 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis definitionem an, et natum ocurreret cum, semper interpretaris cu mea. Eam saperet fierent luptatum no. I","7  Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis defin","8 Lorem ipsum dolor sit amet, consul dis","9 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruis"],S=function(){return r.a.createElement("div",{className:"masonry"},b.map((function(e,t){return r.a.createElement("div",{key:t,className:"text"},e)})))},x=Object(u.b)();var g=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(i.a,{history:x},r.a.createElement("ul",null,r.a.createElement("li",null,"Properties and values"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",null,r.a.createElement(i.b,{to:"/"},"home"))),r.a.createElement("li",null,r.a.createElement("div",null,r.a.createElement(i.b,{to:"/useHoudini"},"useHoudini"))),r.a.createElement("li",null,r.a.createElement("div",null,r.a.createElement(i.b,{to:"/propertyValye"},"propertyValye")))),r.a.createElement("li",null,"paint worklet"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",null,r.a.createElement(i.b,{to:"/paint"},"paint")))),r.a.createElement("li",null,"layout worklet"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",null,r.a.createElement(i.b,{to:"/layout"},"layout"))))),r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:function(){return r.a.createElement("div",{className:"App"},"i want get random width when refresh")}}),r.a.createElement(c.a,{exact:!0,path:"/useHoudini",component:function(){return r.a.createElement(s,null)}}),r.a.createElement(c.a,{exact:!0,path:"/propertyValye",component:function(){return r.a.createElement(m,null)}}),r.a.createElement(c.a,{exact:!0,path:"/paint",component:function(){return r.a.createElement(k,null)}}),r.a.createElement(c.a,{exact:!0,path:"/layout",component:function(){return r.a.createElement(S,null)}}))))},j=n(10),w=n.n(j),C=n(6),M=n(26);var L=function(){var e=Object(C.a)(document.querySelectorAll('style, link[rel="stylesheet"]'));return Promise.all(e.map((function(e){return e.href?fetch(e.href).then((function(e){return e.text()})):e.innerHTML}))).then((function(e){return e.join("\n")}))},O=w.a.plugin("random-keyword",(function(){return function(e){e.walkRules((function(e){e.walkDecls((function(e,t){e.value.includes("random")&&(e.value=e.value.replace("random",Math.random()))}))}))}})),N=function(e){var t=Object(C.a)(document.querySelectorAll('style, link[rel="stylesheet"]')),n=document.createElement("style");n.innerHTML=e,document.head.appendChild(n),t.forEach((function(e){return e.parentElement.removeChild(e)}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),function(){var e,t=Object(M.a)(document.styleSheets);try{for(t.s();!(e=t.n()).done;){var n=e.value;console.log(n,"stylesheet");var a,r=Object(C.a)(n.rules).reduce((function(e,t){return e.concat(t.cssRules?Object(C.a)(t.cssRules):[t])}),[]),o=Object(M.a)(r);try{for(o.s();!(a=o.n()).done;)for(var l=a.value,i=0,c=Object.keys(l.style);i<c.length;i++){var u=c[i],s=l.style[u];s.includes("random")&&(l.style[u]=s.replace("random",Math.random()))}}catch(m){o.e(m)}finally{o.f()}}}catch(m){t.e(m)}finally{t.f()}}(),L().then((function(e){return w.a.parse(e)})).then((function(e){console.log(e,"ast")})),L().then((function(e){return w()([O]).process(e).then((function(e){console.log(e.css,"result")}))})),L().then((function(e){return w()([O]).process(e).then((function(e){N(e.css)}))}))}},[[48,1,2]]]);
//# sourceMappingURL=main.9b00bfe8.chunk.js.map