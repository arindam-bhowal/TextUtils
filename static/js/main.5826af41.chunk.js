(this.webpackJsonpmagictext=this.webpackJsonpmagictext||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(15),r=a.n(n),l=(a(22),a(10)),o=(a(23),a(8)),i=a(0);function b(e){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(o.b,{className:"navbar-brand",to:"/",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(o.b,{className:"nav-link",to:"/",children:e.appName})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(o.b,{className:"nav-link",to:"/About",children:"About"})})]}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"".concat("light"===e.mode?"Enable dark mode":"Disable dark mode")})]})]})]})})}function d(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),s=a[0],n=a[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container my-3",children:[Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("h2",{style:{color:"light"===e.mode?"black":"white"},children:e.Heading}),Object(i.jsx)("textarea",{className:"form-control",style:{backgroundColor:"dark"===e.mode?"Grey":"white",color:"dark"===e.mode?"white":"black"},value:s,onChange:function(e){n(e.target.value)},id:"exampleFormControlTextarea1",rows:"10",placeholder:"Enter your text here"})]}),Object(i.jsx)("button",{className:"btn btn-primary mx-2 my-2",onClick:function(){n(s.toUpperCase()),e.showAlert("Converted to uppercase!","success")},children:"Convert to UpperCase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2 my-2",onClick:function(){n(s.toLowerCase()),e.showAlert("Converted to lowercase!","success")},children:"Convert to LowerCase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2 my-2",onClick:function(){n(""),e.showAlert("TextBox cleared","success")},children:"Clear"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2 my-2",onClick:function(){var t=document.getElementById("exampleFormControlTextarea1");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to clipboard!!","success")},children:"Copy Text"}),Object(i.jsxs)("div",{className:"contsiner my-3",style:{color:"light"===e.mode?"black":"white"},children:[Object(i.jsx)("h2",{children:"Your Text Summary"}),Object(i.jsxs)("p",{children:[0===s.length?0:" "===s.charAt(s.length-1)?s.split(" ").length-1:s.split(" ").length," words and ",s.length," characters"]}),Object(i.jsx)("h3",{children:"Preview:"}),Object(i.jsx)("p",{children:s.length>0?s:"Enter text in the text-box to preview here"})]})]})})}b.defaultProps={title:"BootStrap"};var j=function(e){return e.alertMsg&&Object(i.jsxs)("div",{class:"alert alert-".concat(e.alertMsg.Type," alert-dismissible fade show"),role:"alert",children:[Object(i.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alertMsg.Type)})," ",e.alertMsg.msg]})};function h(e){var t={color:"light"===e.mode?"black":"white"};return Object(i.jsxs)("div",{className:"container my-3",style:t,children:[Object(i.jsx)("h1",{children:"About"}),Object(i.jsx)("hr",{}),Object(i.jsx)("hr",{}),Object(i.jsxs)("p",{className:"my-3",children:["This is app is built in react app. This is basically does is it takes your text, manupulates it and gives back the text to you. It is a very basic app.",Object(i.jsxs)("p",{children:[Object(i.jsx)("br",{}),"Designed and maintained by- Arindam Bhowal. ",Object(i.jsx)("br",{})," Inspired by- Code with Harry. ",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"This is my first app using React built while learing react. I hope you will like my app and support me. I promise to make more such wonderfull apps with better functionility in the future."]})]})]})}var m=a(2);var u=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(null),r=Object(l.a)(n,2),u=r[0],x=r[1],p=function(e,t){x({msg:e,Type:t}),setTimeout((function(){x(null)}),1e3)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(o.a,{children:[Object(i.jsx)(b,{title:"Arindam",appName:"TextUtils",displayMode:a,toggleMode:function(){"light"===a?(s("dark"),document.body.style.backgroundColor="#1b216b",p("Dark Mode Enabled!!","success")):(s("light"),document.body.style.backgroundColor="white",p("Dark Mode Disabled!!","success"))},mode:a}),Object(i.jsx)(j,{alertMsg:u}),Object(i.jsxs)(m.c,{children:[Object(i.jsx)(m.a,{exact:!0,path:"/About",children:Object(i.jsx)(h,{mode:a})}),Object(i.jsx)(m.a,{path:"/",children:Object(i.jsx)(d,{showAlert:p,Heading:"Enter the text to Analyze below",mode:a})})]})]})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),x()}},[[30,1,2]]]);
//# sourceMappingURL=main.5826af41.chunk.js.map