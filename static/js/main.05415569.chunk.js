(window["webpackJsonpvk-mini-apps"]=window["webpackJsonpvk-mini-apps"]||[]).push([[0],{173:function(e,t,a){},191:function(e,t,a){"use strict";a.r(t);a(95),a(121),a(123),a(124),a(126),a(127),a(128),a(129),a(130),a(131),a(132),a(133),a(135),a(136),a(137),a(138),a(139),a(140),a(141),a(142),a(143),a(144),a(146),a(147),a(148),a(149),a(150),a(151),a(152),a(153),a(154),a(155),a(156),a(157),a(158),a(159),a(160),a(161),a(162),a(163);var n=a(0),o=a.n(n),c=a(59),s=a.n(c),r=a(24),l=a.n(r),i=a(60),p=a.n(i),u=a(91),d=a(25),m=a(93),f=a.n(m),b=a(92),g=a.n(b),h=(a(172),a(62)),v=a.n(h),j=a(61),E=a.n(j),O=a(47),k=(a(173),function(e){var t=e.id,a=e.location,n=(e.fetchedUser,e.token);return o.a.createElement("div",{id:t,className:"main"},o.a.createElement(O.c,null,o.a.createElement(O.a,{className:"map",defaultState:{center:[parseFloat(a[0]),parseFloat(a[1])],zoom:9}},o.a.createElement(O.b,{geometry:[parseFloat(a[0]),parseFloat(a[1])],options:{preset:"islands#redCircleDotIcon"}})),o.a.createElement(E.a,{className:"event-short-info"},o.a.createElement("div",{style:{backgroundImage:"linear-gradient(135deg, #f24973 0%, #3948e6 100%)",height:200,display:"flex",alignItems:"flex-end",justifyContent:"center",paddingBottom:"6px",borderRadius:12}},o.a.createElement(v.a,{photos:["https://sun9-19.userapi.com/c851232/v851232757/fb949/4rDdDHqGglQ.jpg?ava=1","https://sun9-3.userapi.com/c851536/v851536176/a9b1d/xdPOltpVQRI.jpg?ava=1","https://sun9-21.userapi.com/c851416/v851416327/be840/bnUHAblZoBY.jpg?ava=1"],style:{color:"#fff"}},n," - 15:35")))),o.a.createElement(E.a,{className:"event-short-info"},o.a.createElement("div",{style:{backgroundImage:"linear-gradient(135deg, #f24973 0%, #3948e6 100%)",height:200,display:"flex",alignItems:"flex-end",justifyContent:"center",paddingBottom:"6px",borderRadius:12}},o.a.createElement(v.a,{photos:["https://sun9-19.userapi.com/c851232/v851232757/fb949/4rDdDHqGglQ.jpg?ava=1","https://sun9-3.userapi.com/c851536/v851536176/a9b1d/xdPOltpVQRI.jpg?ava=1","https://sun9-21.userapi.com/c851416/v851416327/be840/bnUHAblZoBY.jpg?ava=1"],style:{color:"#fff"}},a,"-"))))}),y=function(){var e=Object(n.useState)("home"),t=Object(d.a)(e,2),a=t[0],c=(t[1],Object(n.useState)(null)),s=Object(d.a)(c,2),r=s[0],i=s[1],m=Object(n.useState)([55.798,49.106]),b=Object(d.a)(m,2),h=b[0],v=b[1],j=Object(n.useState)(o.a.createElement(g.a,{size:"large"})),E=Object(d.a)(j,2),O=E[0],y=E[1],x=Object(n.useState)([]),A=Object(d.a)(x,2),I=(A[0],A[1]),w=Object(n.useState)(""),V=Object(d.a)(w,2),S=V[0],G=V[1];Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.sendPromise("VKWebAppGetUserInfo");case 2:t=e.sent,i(t),y(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}l.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var o=document.createAttribute("scheme");o.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(o)}})),y(null),function(){e.apply(this,arguments)}(),console.log(h),l.a.sendPromise("VKWebAppGetGeodata").then((function(e){1==e.available&&(console.log("accessed user location!"),v([e.lat,e.long])),console.log("location",h)})).catch((function(e){console.log("error",e)})),l.a.sendPromise("VKWebAppGetAuthToken",{app_id:7149958,scope:"friends,status"}).then((function(e,t){"VKWebAppAccessTokenReceived"==e?(G(t.access_token),console.log("fetched token",S)):console.log("could not fetch token :(")})).catch((function(e){console.log("error",e)})),I([{coords:[55.6105863,49.2864581],name:"\u041c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0435 1",description:"\u0423\u0435\u0445\u0430\u0442\u044c \u0432 \u041c\u043e\u0441\u043a\u0432\u0443"}])}),[]);return o.a.createElement(f.a,{activePanel:a,popout:O},o.a.createElement(k,{id:"home",location:h,fetchedUser:r,token:S}))};l.a.send("VKWebAppInit"),s.a.render(o.a.createElement(y,null),document.getElementById("root"))},94:function(e,t,a){e.exports=a(191)}},[[94,1,2]]]);
//# sourceMappingURL=main.05415569.chunk.js.map