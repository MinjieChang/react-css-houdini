(this.webpackJsonphello=this.webpackJsonphello||[]).push([[0],{48:function(e,t,n){e.exports=n(88)},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},65:function(e,t){},66:function(e,t){},67:function(e,t){},86:function(e,t){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(42),i=n.n(o),c=(n(53),n(8)),u=n(1),l=n(3);n(54),n(55);window.CSS.registerProperty({name:"--my-len",syntax:"<number>",inherits:!1,initialValue:Math.random()}),window.CSS.registerProperty({name:"--my-saturation",syntax:"<number>",inherits:!1,initialValue:Math.random()});var s=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"home"},"\u70b9\u4eae\u6211"),r.a.createElement("span",{onClick:function(){return e=Math.random(),document.querySelector(".home").style.setProperty("--my-len",e),void document.querySelector(".home").style.setProperty("--my-saturation",e);var e}},"changeWidth"))};n(56);window.CSS.registerProperty({name:"--registered",syntax:"<color>",inherits:!1,initialValue:"red"});var m=function(){return r.a.createElement("div",null,r.a.createElement("button",{className:"registered"},"Background Registered"),r.a.createElement("button",{className:"unregistered"},"Background Not Registered"))},d=n(27),p=n(43),f=n(44),h=n(47),y=n(46);n(57);"paintWorklet"in CSS&&CSS.paintWorklet.addModule("".concat("/react-css-houdini","/paintWorklet/ripple.js"));var v=function(e){Object(h.a)(n,e);var t=Object(y.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){!function(){var e,t,n=document.querySelector(".ripple"),a=n.getBoundingClientRect().top,r=performance.now();document.querySelector(".ripple").addEventListener("click",(function(o){n.classList.add("animating");var i=[o.clientX,o.clientY-a];e=i[0],t=i[1],r=performance.now(),requestAnimationFrame((function a(o){var i=Math.floor(o-r);if(n.style.cssText="--ripple-x: ".concat(e,"; --ripple-y: ").concat(t,"; --animation-tick: ").concat(i,";"),i>1e3)return n.classList.remove("animating"),void(n.style.cssText="--animation-tick: 0");requestAnimationFrame(a)}))}))}()}},{key:"render",value:function(){return r.a.createElement("button",{className:"ripple"},"click me")}}]),n}(r.a.Component);n(58);"paintWorklet"in CSS&&CSS.paintWorklet.addModule("".concat("/react-css-houdini","/paintWorklet/mask.js"));var E=function(){return r.a.createElement("div",{className:"mask"},"mask-image")};n(59);"paintWorklet"in CSS&&CSS.paintWorklet.addModule("".concat("/react-css-houdini","/paintWorklet/headerHighlight.js"));var k=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(!1),c=Object(d.a)(i,2),u=c[0],l=c[1];return r.a.createElement("div",null,r.a.createElement("h1",{className:"fancy"},"My Cool Header"),r.a.createElement("div",null,r.a.createElement("span",{onClick:function(){return o(!n)}},"clickMe Ripper"),r.a.createElement("span",{onClick:function(){return l(!u)}},"clickMe Mask")),n&&r.a.createElement(v,null),u&&r.a.createElement(E,null))};n(60);"layoutWorklet"in CSS?CSS.layoutWorklet.addModule("".concat("/react-css-houdini","/layoutWorklet/masonry.js")):document.body.innerHTML='You need support for <a href="https://drafts.css-houdini.org/css-layout-api/">CSS Layout API</a> to view this demo :(';var b=["1 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis definitionem an, et natum ocurreret cum, semper interpretaris cu mea. Eam saperet fierent luptatum no. Ius ei dicunt detracto elaboraret. Lorem ipsum dolor sit a","2 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis definitionem an, et natum","3 Lorem ipsum dolor si","4 Lorem ipsum dolor sit amet, consul disputando ne his","5 Lorem ipsum","6 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis definitionem an, et natum ocurreret cum, semper interpretaris cu mea. Eam saperet fierent luptatum no. I","7  Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis defin","8 Lorem ipsum dolor sit amet, consul dis","9 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruis"],S=function(){return r.a.createElement("div",{className:"masonry"},b.map((function(e,t){return r.a.createElement("div",{key:t,className:"text"},e)})))},x=Object(l.b)();var g=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(c.a,{history:x},r.a.createElement("div",null,r.a.createElement(c.b,{to:"/"},"home")),r.a.createElement("div",null,r.a.createElement(c.b,{to:"/useHoudini"},"useHoudini")),r.a.createElement("div",null,r.a.createElement(c.b,{to:"/propertyValye"},"propertyValye")),r.a.createElement("div",null,r.a.createElement(c.b,{to:"/paint"},"paint")),r.a.createElement("div",null,r.a.createElement(c.b,{to:"/layout"},"layout")),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:function(){return r.a.createElement("div",{className:"App"})}}),r.a.createElement(u.a,{exact:!0,path:"/useHoudini",component:function(){return r.a.createElement(s,null)}}),r.a.createElement(u.a,{exact:!0,path:"/propertyValye",component:function(){return r.a.createElement(m,null)}}),r.a.createElement(u.a,{exact:!0,path:"/paint",component:function(){return r.a.createElement(k,null)}}),r.a.createElement(u.a,{exact:!0,path:"/layout",component:function(){return r.a.createElement(S,null)}}))))},j=n(10),C=n.n(j),M=n(6),L=n(26);var O=function(){var e=Object(M.a)(document.querySelectorAll('style, link[rel="stylesheet"]'));return Promise.all(e.map((function(e){return e.href?fetch(e.href).then((function(e){return e.text()})):e.innerHTML}))).then((function(e){return e.join("\n")}))},w=C.a.plugin("random-keyword",(function(){return function(e){e.walkRules((function(e){e.walkDecls((function(e,t){e.value.includes("random")&&(e.value=e.value.replace("random",Math.random()))}))}))}})),W=function(e){var t=Object(M.a)(document.querySelectorAll('style, link[rel="stylesheet"]')),n=document.createElement("style");n.innerHTML=e,document.head.appendChild(n),t.forEach((function(e){return e.parentElement.removeChild(e)}))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),function(){var e,t=Object(L.a)(document.styleSheets);try{for(t.s();!(e=t.n()).done;){var n=e.value;console.log(n,"stylesheet");var a,r=Object(M.a)(n.rules).reduce((function(e,t){return e.concat(t.cssRules?Object(M.a)(t.cssRules):[t])}),[]),o=Object(L.a)(r);try{for(o.s();!(a=o.n()).done;)for(var i=a.value,c=0,u=Object.keys(i.style);c<u.length;c++){var l=u[c],s=i.style[l];s.includes("random")&&(i.style[l]=s.replace("random",Math.random()))}}catch(m){o.e(m)}finally{o.f()}}}catch(m){t.e(m)}finally{t.f()}}(),O().then((function(e){return C.a.parse(e)})).then((function(e){console.log(e)})),O().then((function(e){return C()([w]).process(e).then((function(e){console.log(e.css,"result")}))})),O().then((function(e){return C()([w]).process(e).then((function(e){W(e.css)}))}))}},[[48,1,2]]]);
//# sourceMappingURL=main.a6a8c111.chunk.js.map