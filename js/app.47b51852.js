(function(t){function a(a){for(var n,r,i=a[0],o=a[1],c=a[2],u=0,p=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);d&&d(a);while(p.length)p.shift()();return l.push.apply(l,c||[]),e()}function e(){for(var t,a=0;a<l.length;a++){for(var e=l[a],n=!0,i=1;i<e.length;i++){var o=e[i];0!==s[o]&&(n=!1)}n&&(l.splice(a--,1),t=r(r.s=e[0]))}return t}var n={},s={app:0},l=[];function r(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=n,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)r.d(e,n,function(a){return t[a]}.bind(null,n));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=a,i=i.slice();for(var c=0;c<i.length;c++)a(i[c]);var d=o;l.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"32d4":function(t,a,e){"use strict";e("db79")},"331d":function(t,a,e){"use strict";e("8288")},"54cb":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAA2CAMAAAAWExcqAAACwVBMVEVHcEz5RFD5RVD5RVH5RVD////4R1L4RlL////////////////6a3T/////////7Oz/8/P////////////8ztH4RVH90NP////////////////////////////6RlD4RFD4RFH/////////////////////////////////////////////////////////////////////////////////////////+Pj////////////////////////////////////////4R075RFD5RFH5RFD3R0/////////////////////////2QVL6Rk/4RVD4TFf93+H////////////93eD4SFT4RVD7eoP////////////////4TVj////////////////4TVnzL1PvL0/////4RVH5S1j////////////////////////0L1T0LlP3L1fzL1PzLlTzLlT0L1P0L1XzLlTzL1T////////////////////////4RVH7r7T////////////////////////////////zLlT0L1X0LlP1L1L/Tk75RVD5TVn4RFH////////////////////////////////////////4TFb4Slb/+/v+6+3/9/f/////////////////////////////////+vr/+Pn/////////////////VVX4RFH5RVH5RFH4RFD4RFH/RFX4RVD////////////////////////////////9zdH9uL37qa//////////P0z5RFD/P1X////////5RVD////////5RFD4RFD5RVD5RVH4SlX4S1X5RVH7kpn////////0P1X5a3P/9PX+4OL4RFL3RlH////////////////////////////////5TVn7fIP////////////8xsr8zdD////4SVXkcMqYAAAA63RSTlMAZOD/2x39+wgMhfj/41oBAmLm//j8/8g5QM/+oBszqMzLpyAlr8E1BFsPjvvdVH706WNr7PB1BxrQQkjW/JcVMrAnlLKOICq4uS1SER869vj910sG8PbL/+1sEpP3b+/Z9vpAEDDr3k7qZyKdqf/AIIDQ4JBgsHCA4JDAcGB9+MY4vPmJDr6HoDDwUAOF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"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-fluid",attrs:{id:"app"}},[e("Header",{staticClass:"wow fadeInDown",attrs:{"data-wow-duration":"1s"}}),e("Banner"),e("div",{staticStyle:{height:"50vh"}})],1)},l=[],r=e("bc1b"),i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("header",{staticClass:"row p-3 px-lg-5 py-lg-4",attrs:{id:"header"}},[n("div",{staticClass:"logo p-0 col-10 col-md-12 col-lg-3"},[n("img",{staticClass:"mx-md-auto mx-lg-0",attrs:{src:e("54cb"),alt:"logo"},on:{click:function(a){return t.reload()}}})]),t._m(0),n("i",{staticClass:"fas fa-bars d-block d-md-none col-2"})])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"menu p-0 col-md-12 col-lg-9 d-none d-md-block "},[e("li",{staticClass:"ele"},[t._v(" home "),e("ul",{staticClass:"dropdown"},[e("li",[e("span",[t._v("Azelea Dark ")])]),e("li",[e("span",[t._v("Azelea Multi ")])]),e("li",[e("span",[t._v("Gentian Dark ")])]),e("li",[e("span",[t._v("Gentian Dark ")])]),e("li",[e("span",[t._v("Aruze Pro ")])]),e("li",[e("span",[t._v("Aruze Pro ")])]),e("li",[e("span",[t._v("Aruze Pro ")])]),e("li",[e("span",[t._v("Azelea Dark ")])]),e("li",[e("span",[t._v("Azelea Multi ")])]),e("li",[e("span",[t._v("Gentian Dark ")])]),e("li",[e("span",[t._v("Azelea Dark ")])]),e("li",[e("span",[t._v("Aruze Pro ")])]),e("li",[e("span",[t._v("Azelea Multi ")])]),e("li",[e("span",[t._v("Gentian Dark ")])]),e("li",[e("span",[t._v("Gentian Dark ")])]),e("li",[e("span",[t._v("Aruze Pro ")])]),e("li",[e("span",[t._v("Aruze Pro ")])])])]),e("li",{staticClass:"ele"},[t._v(" page "),e("ul",{staticClass:"dropdown"},[e("li",[t._v("About Base")]),e("li",[t._v("About Linum")]),e("li",[t._v("About Cyanus")]),e("li",[t._v("Our team")]),e("li",[t._v("Wallets - v1")]),e("li",[t._v("Wallets - v2")]),e("li",[t._v("About Base")]),e("li",[t._v("About Linum")]),e("li",[t._v("About Cyanus")]),e("li",[t._v("Our team")]),e("li",[t._v("Our team")]),e("li",[t._v("Wallets - v1")]),e("li",[t._v("Wallets - v2")])])]),e("li",{staticClass:"ele"},[t._v("blog & Misc")]),e("li",{staticClass:"ele"},[t._v("elements")]),e("li",{staticClass:"ele"},[t._v("blocks")]),e("li",{staticClass:"ele"},[t._v("login")])])}],c={methods:{changeBackground:function(){var t=document.getElementById("header"),a=!0;window.onscroll=function(){var e=window.scrollY;0===e?(t.style.backgroundColor="transparent",a=!0):0!==e&&a&&(t.style.backgroundColor="rgba(10, 18, 39, 0.99)",a=!1)}},reload:function(){location.reload()}},mounted:function(){this.changeBackground()}},d=c,u=(e("32d4"),e("2877")),p=Object(u["a"])(d,i,o,!1,null,"4ef6a40b",null),v=p.exports,f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-fluid  p-3 px-lg-5 py-lg-4",attrs:{id:"banner"}},[t._m(0),e("div",{staticClass:"banner--bottom row p-0"},[t._m(1),e("div",{staticClass:"col2 col-12 col-md-6  col-lg-3 p-0 wow fadeInUp",attrs:{"data-wow-duration":"1s","data-wow-delay":"0.8s"}},[e("span",{staticClass:"percent"},[t._v(" "+t._s(t.percent.value)+"%")])]),t._m(2)]),t._m(3)])},w=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"banner--top row p-0"},[n("div",{staticClass:"banner__text col-12 col-lg-6 p-0"},[n("h2",{staticClass:"banner__text--first wow fadeInUp",attrs:{"data-wow-duration":"1s"}},[t._v(" WORLD FIRST DECENTRALIZED MARKETPLACE ")]),n("p",{staticClass:"banner__text--second wow fadeInUp",attrs:{"data-wow-duration":"1s","data-wow-delay":"0.3s"}},[t._v(" The first decentralized Marketplace which makes simplifies and standarizes data with blockchain technology. We provides user-friendly, efficient and secure crypto solutions and utilizing blockchain technology. ")]),n("button",{staticClass:"banner__text--third wow fadeInUp",attrs:{"data-wow-duration":"1s","data-wow-delay":"0.6s"}},[t._v(" private sale ")])]),n("div",{staticClass:"banner__image col-12 col-lg-6 p-0 wow fadeInUp",attrs:{"data-wow-duration":"1s"}},[n("img",{attrs:{src:e("d4ec"),alt:"banner_image"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col1 col-12 col-md-12 col-lg-6 p-0 "},[e("div",{staticClass:"line wow fadeInUp",attrs:{"data-wow-duration":"1s","data-wow-delay":"0.8s"}},[e("div",{staticClass:"jamb-parent"},[e("div",{staticClass:"jamb"}),e("span",[t._v("SOFT CAP")])]),e("div",{staticClass:"jamb-parent"},[e("div",{staticClass:"jamb"}),e("span",[t._v("CROWDSALE")])]),e("div",{staticClass:"jamb-parent"},[e("div",{staticClass:"jamb"}),e("span",[t._v("HARD CAP")])]),e("div",{staticClass:"raise"},[e("span",[t._v("RAISED-")]),e("span",[t._v("1,1250 Tokens")])]),e("div",{staticClass:"target"},[e("span",[t._v("TARGET-")]),e("span",[t._v("150,000 Tokens")])]),e("div",{attrs:{id:"red-line"}}),e("div",{attrs:{id:"red-circle"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col3 col-12 col-md-6  col-lg-3 p-0 wow fadeInUp",attrs:{"data-wow-duration":"1s","data-wow-delay":"0.8s"}},[e("span",[t._v("THE BONUS ENDS IN")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"banner--bottom2 row p-0"},[e("div",{staticClass:"col1 col-12 col-sm-6 p-0 wow fadeInUp",attrs:{"data-wow-duration":"1s","data-wow-delay":"0.3s"}},[e("span",[e("i",{staticClass:"fas fa-star",attrs:{id:"star"}}),t._v("How it works")])]),e("div",{staticClass:"col2 col-12 col-sm-6 p-0 wow fadeInUp",attrs:{"data-wow-duration":"1s","data-wow-delay":"0.3s"}},[e("span",[e("i",{staticClass:"far fa-lightbulb"}),t._v("Why buy Tokens now?")])])])}],m={data:function(){return{percent:{value:0}}},methods:{runToTarget:function(){console.log("Running...");var t=this.percent,a=null,e=null,n=document.getElementById("red-line"),s=document.getElementById("red-circle"),l=0;setTimeout((function(){a=setInterval((function(){t.value++,79==t.value&&clearInterval(a)}),50),e=setInterval((function(){n.style.width=l+++"%",60==l&&(s.style.opacity=1,clearInterval(e))}),66)}),1400)}},mounted:function(){this.runToTarget()}},b=m,g=(e("331d"),Object(u["a"])(b,f,w,!1,null,"4ac5814b",null)),A=g.exports,C={name:"App",components:{Header:v,Banner:A},mounted:function(){(new r["WOW"]).init()}},h=C,D=Object(u["a"])(h,s,l,!1,null,"553ad4dc",null),k=D.exports;e("ab8b");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(k)}}).$mount("#app")},8288:function(t,a,e){},d4ec:function(t,a,e){t.exports=e.p+"img/gfx-e.504a69b1.png"},db79:function(t,a,e){}});
//# sourceMappingURL=app.47b51852.js.map