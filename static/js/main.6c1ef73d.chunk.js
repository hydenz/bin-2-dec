(this["webpackJsonpbin-2-dec"]=this["webpackJsonpbin-2-dec"]||[]).push([[0],[,,,,function(e,t,n){e.exports={texthandler:"TextHandler_texthandler__3F_Cc",title:"TextHandler_title__1jH9W",value:"TextHandler_value__1HiHg",btn:"TextHandler_btn__3erwx",btntxt:"TextHandler_btntxt__RLcW4",btntext:"TextHandler_btntext__2VijF"}},function(e,t,n){e.exports={converter:"Main_converter__3-9Oo",controls:"Main_controls__2zgFO",btn:"Main_btn__2BRU6"}},,,function(e,t,n){e.exports={footer:"Footer_footer__2BJAd",ghlink:"Footer_ghlink___RMej"}},,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),i=n(10),o=n.n(i),s=(n(16),function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("h1",{className:"header__title",children:"Bin 2 Dec"})})}),l=n(9),u=n(3),b=n(2),j=n(7),d=n.n(j);var x=function(e,t){var n=Object(c.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),a=Object(u.a)(n,2),r=a[0],i=a[1];return[r,function(t){try{var n=t instanceof Function?t(r):t;i(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]},f=n(5),O=n.n(f),h=n(4),_=n.n(h),p=function(e){var t=e.title,n=e.value,r=e.readOnly,i=e.onChange,o=Object(a.jsx)(b.d,{size:"19px"}),s=Object(a.jsx)(b.c,{size:"19px"}),l=Object(c.useState)("Copy to clipboard"),j=Object(u.a)(l,2),d=j[0],x=j[1],f=Object(c.useState)(o),O=Object(u.a)(f,2),h=O[0],p=O[1];return Object(a.jsxs)("div",{className:_.a.texthandler,children:[Object(a.jsx)("h2",{className:_.a.title,children:t}),Object(a.jsx)("textarea",{className:_.a.value,value:n,onChange:i,readOnly:r}),Object(a.jsxs)("button",{type:"button",onClick:function(){x("Copied!"),p(s),navigator.clipboard.writeText(n),setTimeout((function(){x("Copy to clipboard"),p(o)}),3e3)},className:_.a.btn,children:[h,Object(a.jsx)("span",{className:_.a.btntxt,children:d})]})]})},v=p;p.defaultProps={readOnly:!1,onChange:function(){}};var g=function(){var e=x("bin-2-dec-data",{inputValue:"",currentBase:"binary"}),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),o=Object(u.a)(i,2),s=o[0],j=o[1],f={binary:{title:"Binary Base",regExp:/^[0-1 ]*$/,cvtFn:function(e){return d()(e,2)}},decimal:{title:"Decimal Base",regExp:/^[0-9 ]*$/,cvtFn:function(e){return d()(e).toString(2)}}};return Object(c.useEffect)((function(){n.inputValue?j(function(e){var t=e.split(" ").filter((function(e){return""!==e})),a="";return t.forEach((function(e){a+="".concat(f[n.currentBase].cvtFn(e)," ")})),a.trim()}(n.inputValue)):j("")}),[n]),Object(a.jsxs)("div",{className:O.a.converter,children:[Object(a.jsx)(v,{value:n.inputValue,onChange:function(e){var t=e.target.value;f[n.currentBase].regExp.test(t)&&r((function(e){return Object(l.a)(Object(l.a)({},e),{},{inputValue:t})}))},title:f[n.currentBase].title}),Object(a.jsxs)("div",{className:O.a.controls,children:[Object(a.jsx)(b.a,{size:"40px",className:O.a.btn,onClick:function(){r((function(e){return{inputValue:s,currentBase:"binary"===e.currentBase?"decimal":"binary"}}))}}),Object(a.jsx)(b.b,{size:"40px"})]}),Object(a.jsx)(v,{value:s,readOnly:!0,title:"binary"===n.currentBase?f.decimal.title:f.binary.title})]})},m=n(8),y=n.n(m),N=function(){return Object(a.jsx)("footer",{className:y.a.footer,children:Object(a.jsxs)("a",{className:y.a.ghlink,target:"_blank",rel:"noreferrer",href:"https://github.com/hydenz",children:["Made with ",Object(a.jsx)(b.f,{color:"#fff"})," by ",Object(a.jsx)(b.e,{color:"#fff"}),"hydenz"]})})};n(18);var B=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(s,{}),Object(a.jsx)(g,{}),Object(a.jsx)(N,{})]})};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(B,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.6c1ef73d.chunk.js.map