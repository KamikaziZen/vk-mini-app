(window["webpackJsonpvk-mini-apps"]=window["webpackJsonpvk-mini-apps"]||[]).push([[0],{185:function(e,t,a){e.exports=a(290)},281:function(e,t,a){},290:function(e,t,a){"use strict";a.r(t);a(186),a(212),a(214),a(215),a(217),a(218),a(219),a(220),a(221),a(222),a(223),a(224),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(235),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254);var n=a(0),c=a.n(n),r=a(67),i=a.n(r),l=a(38),o=a.n(l),m=a(68),s=a.n(m),u=a(97),p=a(52),d=a(106),f=a.n(d),E=a(105),b=a.n(E),v=(a(263),a(50)),h=a.n(v),w=a(42),g=a.n(w),j=a(101),y=a.n(j),O=a(69),k=a.n(O),x=a(98),U=a.n(x),V=a(100),_=a.n(V),A=a(99),C=a.n(A),I=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(h.a,{id:t},c.a.createElement(g.a,null,"Example"),n&&c.a.createElement(k.a,{title:"User Data Fetched with VK Connect"},c.a.createElement(U.a,{before:n.photo_200?c.a.createElement(C.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(k.a,{title:"Navigation Example"},c.a.createElement(_.a,null,c.a.createElement(y.a,{size:"xl",level:"2",onClick:a,"data-to":"map-view"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043a\u0430\u0440\u0442\u0443"))))},K=a(70),S=a(104),z=a.n(S),W=a(102),J=a.n(W),N=a(103),P=a.n(N),B=a(51),D=(a(281),Object(K.b)()),F=function(e){return c.a.createElement(h.a,{id:e.id},c.a.createElement(g.a,{left:c.a.createElement(z.a,{onClick:e.go,"data-to":"home"},D===K.a?c.a.createElement(J.a,null):c.a.createElement(P.a,null))}),c.a.createElement(B.c,{class:"MavView"},c.a.createElement(B.a,{defaultState:{center:[55.75,37.57],zoom:9}},c.a.createElement(B.b,{geometry:[55.75,37.57]}))))},G=function(){var e=Object(n.useState)("map-view"),t=Object(p.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(null),l=Object(p.a)(i,2),m=l[0],d=l[1],E=Object(n.useState)(c.a.createElement(b.a,{size:"large"})),v=Object(p.a)(E,2),h=v[0],w=v[1];Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.sendPromise("VKWebAppGetUserInfo");case 2:t=e.sent,d(t),w(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);var g=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(f.a,{activePanel:a,popout:h},c.a.createElement(I,{id:"home",fetchedUser:m,go:g}),c.a.createElement(F,{id:"map-view",go:g}))};o.a.send("VKWebAppInit"),i.a.render(c.a.createElement(G,null),document.getElementById("root"))}},[[185,1,2]]]);
//# sourceMappingURL=main.2b49e6ff.chunk.js.map