(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],[,,,,,,,,,,function(e,c,t){},function(e,c,t){},function(e,c,t){},,function(e,c,t){"use strict";t.r(c);var n=t(1),r=t.n(n),a=t(5),s=t.n(a),i=(t(10),t(3)),u=t(2),j=(t(11),t(12),t(0));function o(e){var c=e.card,t=e.handleChoice,n=e.flipped,r=e.disabled;return Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:n?"flipped":"",children:[Object(j.jsx)("img",{className:"front",src:c.src,alt:"front card"}),Object(j.jsx)("img",{className:"back",src:"/img/cover.jpg",alt:"back card",onClick:function(){!r&&t(c)}})]})})}var l=[{src:"/img/apple.jpg"},{src:"/img/custard-apple.jpg"},{src:"/img/dragon-fruit.jpg"},{src:"/img/grapes.jpg"},{src:"/img/papaya.jpg"},{src:"/img/watermelon.jpg"}];var d=function(){var e=Object(n.useState)([]),c=Object(u.a)(e,2),t=c[0],r=c[1],a=Object(n.useState)(0),s=Object(u.a)(a,2),d=s[0],b=s[1],m=Object(n.useState)(null),f=Object(u.a)(m,2),p=f[0],O=f[1],g=Object(n.useState)(null),h=Object(u.a)(g,2),v=h[0],x=h[1],w=Object(n.useState)(!1),N=Object(u.a)(w,2),k=N[0],y=N[1],S=function(){var e=[].concat(l,l).sort((function(){return Math.random()-.5})).map((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:Math.random()})}));O(null),x(null),r(e),b(0)},C=function(e){p?x(e):O(e)};Object(n.useEffect)((function(){p&&v&&(y(!0),p.src===v.src?(r((function(e){return e.map((function(e){return e.src===p.src?Object(i.a)(Object(i.a)({},e),{},{matched:!0}):e}))})),E()):setTimeout((function(){return E()}),800))}),[p,v]);var E=function(){O(null),x(null),b((function(e){return e+1})),y(!1)};return Object(n.useEffect)((function(){S()}),[]),Object(n.useEffect)((function(){d>0&&Object.values(t).every((function(e){return!0===e.matched}))&&(window.alert("Game over with ".concat(d," turns")),S())}),[t,d]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Memory Game"}),Object(j.jsx)("button",{onClick:S,children:"New Game"}),Object(j.jsx)("div",{className:"card-grid",children:t.map((function(e){return Object(j.jsx)(o,{card:e,handleChoice:C,flipped:e===p||e===v||e.matched,disabled:k},e.id)}))}),Object(j.jsxs)("p",{children:["Turns:",d]})]})};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.7aa20c23.chunk.js.map