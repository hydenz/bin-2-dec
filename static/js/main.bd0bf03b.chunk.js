(this["webpackJsonpbin-2-dec"]=this["webpackJsonpbin-2-dec"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),i=n.n(r),a=n(6),o=n.n(a),s=(n(12),function(){return Object(c.jsx)("div",{className:"header",children:Object(c.jsx)("h1",{children:"Bin 2 Dec"})})}),j=n(3),b=(n(13),n(14),n(2)),l=function(e){var t=Object(c.jsx)(b.d,{size:"19px"}),n=Object(c.jsx)(b.c,{size:"19px"}),i=Object(r.useState)("Copy to clipboard"),a=Object(j.a)(i,2),o=a[0],s=a[1],l=Object(r.useState)(t),u=Object(j.a)(l,2),d=u[0],f=u[1];return Object(c.jsxs)("div",{className:"put",children:[Object(c.jsx)("h2",{children:e.title}),Object(c.jsx)("textarea",{value:e.value,onChange:e.onChange,readOnly:e.readOnly}),Object(c.jsxs)("p",{onClick:function(){s("Copied!"),f(n),e.copyToClipboard(),setTimeout((function(){s("Copy to clipboard"),f(t)}),3e3)},children:[d,Object(c.jsx)("span",{children:o})]})]})},u=n(5),d=n.n(u),f=function(){var e=Object(r.useState)("binary"),t=Object(j.a)(e,2),n=t[0],i=t[1],a=Object(r.useState)(""),o=Object(j.a)(a,2),s=o[0],u=o[1],f=Object(r.useState)(""),O=Object(j.a)(f,2),p=O[0],x=O[1],h={binary:{title:"Binary Base",regExp:/^[0-1 ]*$/},decimal:{title:"Decimal Base",regExp:/^[0-9 ]*$/}};Object(r.useEffect)((function(){x(s?"binary"===n?function(e){var t=e.split(" ").filter((function(e){return""!==e})),n="";return t.forEach((function(e){n+="".concat(d()(e,2)," ")})),n.trim()}(s):function(e){var t=e.split(" ").filter((function(e){return""!==e})),n="";return t.forEach((function(e){n+="".concat(d()(e).toString(2)," ")})),n.trim()}(s):"")}),[s,n]);return Object(c.jsxs)("div",{className:"converter",children:[Object(c.jsx)(l,{value:s,onChange:function(e){var t=e.target.value;h[n].regExp.test(t)&&u(t)},title:h[n].title,copyToClipboard:function(){return navigator.clipboard.writeText(s)}}),Object(c.jsxs)("div",{className:"controls",children:[Object(c.jsx)(b.a,{size:"40px",style:{marginTop:"2px"},onClick:function(e){u(p),i((function(e){return"binary"===e?"decimal":"binary"}))}}),Object(c.jsx)(b.b,{size:"40px"})]}),Object(c.jsx)(l,{value:p,readOnly:!0,copyToClipboard:function(){return navigator.clipboard.writeText(p)},title:"binary"===n?"Decimal Base":"Binary Base"})]})},O=(n(16),function(){return Object(c.jsx)("div",{className:"footer",children:Object(c.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/hydenz",children:["Made with ",Object(c.jsx)(b.f,{color:"#fff"})," by ",Object(c.jsx)(b.e,{color:"#fff"})," hydenz"]})})});n(17);var p=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(s,{}),Object(c.jsx)(f,{}),Object(c.jsx)(O,{})]})};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.bd0bf03b.chunk.js.map