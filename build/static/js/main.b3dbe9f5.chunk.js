(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,t){e.exports=t(39)},18:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(11),c=t.n(r),u=(t(18),t(2)),i=t(3),l=t.n(i),s="/api/persons",m=function(){return l.a.get(s).then(function(e){return e.data})},f=function(e){return l.a.post(s,e).then(function(e){return e.data})},d=function(e,n){return l.a.put("".concat(s,"/").concat(e),n).then(function(e){return e.data})},h=function(e){try{return l.a.delete("".concat(s,"/").concat(e)).then(function(e){return e.data})}catch(n){console.log("T\xe4\xe4 on persons.js:ss\xe4 errorina: ",n)}},v=function(e){var n=e.text,t=e.newSomething,a=e.handleNewSomething;return o.a.createElement("div",null,n," ",o.a.createElement("input",{value:t,onChange:a}))},w=function(e){console.log("props readpersonissa on ",e);var n=e.addPerson,t=e.newName,a=e.handleNewName,r=e.newNumber,c=e.handleNewNumber;return o.a.createElement("form",{onSubmit:n},o.a.createElement("div",null,o.a.createElement(v,{text:"Nimi: ",newSomething:t,handleNewSomething:a}),o.a.createElement(v,{text:"Numero: ",newSomething:r,handleNewSomething:c}),o.a.createElement("button",{type:"submit"},"Lis\xe4\xe4")))},g=function(e){var n=e.persons,t=e.newSearch,a=e.deletePerson;return n.filter(function(e){return e.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())}).map(function(e){return o.a.createElement("div",{key:e.id},e.name," ",e.number," "," ",o.a.createElement("button",{value:e.id,onClick:a},"Poista"))})},p=function(e){var n=e.message,t=e.style;return null===n?null:o.a.createElement("div",{className:t},n)},b=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],c=function(){console.log("effect"),m().then(function(e){console.log("promise fulfilled"),r(e)})};Object(a.useEffect)(c,[]),console.log("render",t.length,"persons");var i=Object(a.useState)(""),l=Object(u.a)(i,2),s=l[0],b=l[1],E=Object(a.useState)(""),S=Object(u.a)(E,2),N=S[0],j=S[1],O=Object(a.useState)(""),k=Object(u.a)(O,2),y=k[0],P=k[1],L=Object(a.useState)(""),x=Object(u.a)(L,2),D=x[0],C=x[1],H=Object(a.useState)("normal"),B=Object(u.a)(H,2),J=B[0],T=B[1],W=function(e){console.log(e),C(e),setTimeout(function(){C(null),T("normal")},3e3)};return o.a.createElement("div",null,o.a.createElement("h2",null,"Puhelinluettelo"),o.a.createElement(p,{message:D,style:J}),o.a.createElement(v,{text:"Hae: ",newSomething:y,handleNewSomething:function(e){e.preventDefault(),console.log("event.target.value: ",e.target.value),console.log("newSearch: ",y),P(e.target.value),console.log("newSearch: ",y)}}),o.a.createElement(w,{addPerson:function(e){if(e.preventDefault(),""===s)T("error"),W("Et ole viel\xe4 sy\xf6tt\xe4nyt nime\xe4.");else if(t.map(function(e){return e.name}).includes(s)){if(window.confirm("".concat(s," on jo luettelossa. Korvataanko vanha numero uudella?"))){var n={name:s,number:N},a=t.find(function(e){return e.name===s});d(a.id,n).then(function(){return T("success"),W("P\xe4ivitt\xe4minen onnistui!"),c()}).catch(function(){return T("error"),W("Henkil\xf6 oli jo poistettu, ei voi p\xe4ivitt\xe4\xe4!"),c()})}}else f({name:s,number:N}).then(function(e){r(t.concat(e)),T("success"),W("Lis\xe4\xe4minen onnistui!"),b(""),j(""),P("")})},newName:s,handleNewName:function(e){e.preventDefault(),b(e.target.value)},newNumber:N,handleNewNumber:function(e){e.preventDefault(),j(e.target.value)}}),o.a.createElement("h2",null,"Puhelinnumerot"),o.a.createElement(g,{persons:t,newSearch:y,deletePerson:function(e){e.preventDefault();var n=""+e.target.value,a=t.find(function(e){return""+e.id===n});window.confirm("Saako henkil\xf6n ".concat(a.name," poistaa?"))&&h(n).then(function(){return T("success"),W("Henkil\xf6n poisto onnistui!"),c()}).catch(function(){return T("error"),W("Henkil\xf6 oli jo poistettu!"),c()})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.b3dbe9f5.chunk.js.map