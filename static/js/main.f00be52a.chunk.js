(window["webpackJsonpvk-mini-apps"]=window["webpackJsonpvk-mini-apps"]||[]).push([[0],{163:function(e,t,o){e.exports=o(264)},250:function(e,t,o){},264:function(e,t,o){"use strict";o.r(t);o(164),o(190),o(192),o(193),o(195),o(196),o(197),o(198),o(199),o(200),o(201),o(202),o(204),o(205),o(206),o(207),o(208),o(209),o(210),o(211),o(212),o(213),o(215),o(216),o(217),o(218),o(219),o(220),o(221),o(222),o(223),o(224),o(225),o(226),o(227),o(228),o(229),o(230),o(231),o(232);var n=o(0),a=o.n(n),r=o(61),c=o.n(r),s=o(17),l=o.n(s),i=o(62),u=o.n(i),p=o(90),d=o(22),m=o(100),g=o.n(m),h=o(99),b=o.n(h),v=(o(241),o(42)),f=o(101),_=o(91),E=o(92),O=o(102),j=o(93),k=o(103),y=o(10),I=o(49),C=o.n(I),A=o(98),S=o.n(A),w=function(e){function t(e){var o;return Object(_.a)(this,t),(o=Object(O.a)(this,Object(j.a)(t).call(this,e))).state={group_count:0,modalHistory:[]},console.log("props:",o.props),o.modalBack=function(){o.setActiveModal(o.state.modalHistory[o.state.modalHistory.length-2]),console.log("closing!"),o.props.onClose()},o.joinAndClose=function(){o.props.onClose(),o.props.onJoin()},o}return Object(k.a)(t,e),Object(E.a)(t,[{key:"setActiveModal",value:function(e){e=e||null;var t=this.state.modalHistory?Object(f.a)(this.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),this.setState({modalHistory:t})}},{key:"render",value:function(){return a.a.createElement(y.l,{id:"modal-1",activeModal:this.props.activeModal},a.a.createElement(y.j,{id:"modal-page-1",header:a.a.createElement(y.k,{left:y.f&&a.a.createElement(y.e,{onClick:this.modalBack},a.a.createElement(C.a,null)),right:y.g&&a.a.createElement(y.e,{onClick:this.modalBack},a.a.createElement(S.a,null))},this.props.event.title),onClose:this.modalBack},a.a.createElement(y.i,null,a.a.createElement(y.c,null,a.a.createElement(y.h,{title:"\u041a\u043e\u0433\u0434\u0430?"},this.props.event.start," - ",this.props.event.end)),a.a.createElement(y.c,null,a.a.createElement(y.h,{title:"\u0427\u0442\u043e \u0442\u0430\u043c \u0434\u0435\u043b\u0430\u0442\u044c?"},this.props.event.aim)),a.a.createElement(y.c,null,a.a.createElement(y.d,null,this.props.inGroup?a.a.createElement(y.b,{size:"xl",level:"secondary",disabled:!0},"\u0423\u0436\u0435 \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044e!"):a.a.createElement(y.b,{size:"xl",onClick:this.joinAndClose},"\u0413\u043e\u0442\u043e\u0432 \u043f\u043e\u043c\u043e\u0447\u044c!"))),a.a.createElement(y.c,null,a.a.createElement(y.n,{photos:["https://sun9-1.userapi.com/c850624/v850624456/9f63e/c2_IbBit7I8.jpg?ava=1","https://sun9-6.userapi.com/c851528/v851528416/e0360/1UfQ8aSIGVA.jpg?ava=1"],size:"m"},this.props.groupCount," ")),a.a.createElement(y.c,null,a.a.createElement(y.h,{title:"\u041d\u0430\u0431\u0440\u0430\u043d\u043e \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432: "+this.props.groupCount+" \u0438\u0437 "+this.props.event.count_end},a.a.createElement(y.m,{value:Math.floor(100*this.props.groupCount/this.props.event.count_end),className:"progress-bar"}))),a.a.createElement(y.c,{before:a.a.createElement(y.a,{src:"../img/"+this.props.event.photo})},a.a.createElement(y.h,{title:"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440"},this.props.event.organizer)))))}}]),t}(a.a.Component),M=(o(250),function(e){var t=e.id,o=e.location,r=e.fetchedUser,c=e.events,s=e.token,i={coords:[1,1],title:"\u041f\u0443\u0441\u0442\u043e",organizer:"\u041f\u0443\u0441\u0442\u043e",start:"\u041f\u0443\u0441\u0442\u043e",end:"\u041f\u0443\u0441\u0442\u043e",aim:"\u041f\u0443\u0441\u0442\u043e",description:"\u041f\u0443\u0441\u0442\u043e",requirements:[],icon_type:"islands#blueZooIcon",reward:"",photo:"botsad.svg",group_id:"1",count_cur:1,count_end:1},u=Object(n.useState)({event:i,activeModal:null}),p=Object(d.a)(u,2),m=p[0],g=p[1],h=Object(n.useState)(0),b=Object(d.a)(h,2),f=b[0],_=b[1],E=Object(n.useState)(!1),O=Object(d.a)(E,2),j=O[0],k=O[1],y=Object(n.useState)(""),I=Object(d.a)(y,2),C=(I[0],I[1],function(e){!function(e){var t={v:"5.101",access_token:s,group_id:parseInt(e)};l.a.sendPromise("VKWebAppCallAPIMethod",{method:"groups.getMembers",params:t}).then((function(e){console.log("group count:",e.response.count),console.log("items",e.response.items),e.response.items.includes(r.id)?(console.log("user in group"),k(!0)):(console.log("USER IS NOT IN GROUP"),k(!1)),_(e.response.count)})).catch((function(e){console.log("error in get group members",e)}))}(e.group_id),function(e){var t={v:"5.101",access_token:s,group_id:parseInt(e),fields:"cover"};l.a.sendPromise("VKWebAppCallAPIMethod",{method:"groups.getById",params:t}).then((function(e){console.log("cover:",e.response[0].photo_50)})).catch((function(e){console.log("error in get cover",e)}))}(e.group_id),console.log("clicked"),g({event:e,activeModal:"modal-page-1"}),console.log("event:",m)}),A=c.map((function(e,t){return a.a.createElement(v.b,{key:"event-"+t,geometry:e.coords,options:{preset:e.icon_type},onClick:function(){return C(e)}})}));return a.a.createElement("div",{id:t,className:"main"},a.a.createElement(v.c,null,a.a.createElement(v.a,{className:"map",defaultState:{center:[parseFloat(o[0]),parseFloat(o[1])],zoom:10}},a.a.createElement(v.b,{geometry:[parseFloat(o[0]),parseFloat(o[1])],options:{preset:"islands#redCircleDotIcon"}}),A)),a.a.createElement(w,{event:m.event,activeModal:m.activeModal,onClose:function(){g({event:i,activeModal:null}),_(0),k(!1)},groupCount:f,onJoin:function(){l.a.sendPromise("VKWebAppJoinGroup",{group_id:parseInt(m.event.group_id)}).then((function(e){console.log("data",e)})).catch((function(e){console.log("error IN JOIN GROUP",e)}))},inGroup:j}))}),z=function(){var e=Object(n.useState)("home"),t=Object(d.a)(e,2),o=t[0],r=(t[1],Object(n.useState)(null)),c=Object(d.a)(r,2),s=c[0],i=c[1],m=Object(n.useState)([55.798,49.106]),h=Object(d.a)(m,2),v=h[0],f=h[1],_=Object(n.useState)(a.a.createElement(b.a,{size:"large"})),E=Object(d.a)(_,2),O=E[0],j=E[1],k=Object(n.useState)([]),y=Object(d.a)(k,2),I=y[0],C=y[1],A=Object(n.useState)(""),S=Object(d.a)(A,2),w=S[0],z=S[1];return Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.sendPromise("VKWebAppGetUserInfo");case 2:t=e.sent,i(t),j(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}l.a.subscribe((function(e){var t=e.detail,o=t.type,n=t.data;if("VKWebAppUpdateConfig"===o){var a=document.createAttribute("scheme");a.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(a)}})),j(null),function(){e.apply(this,arguments)}(),console.log(v),l.a.sendPromise("VKWebAppGetGeodata").then((function(e){1==e.available&&(console.log("accessed user location!"),f([e.lat,e.long])),console.log("location",v)})).catch((function(e){console.log("error",e)})),l.a.sendPromise("VKWebAppGetAuthToken",{app_id:7149958,scope:"friends,groups"}).then((function(e){console.log(e),"error_data"in e?console.log("could not fetch token :("):(z(e.access_token),console.log("fetched token!"))})).catch((function(e){console.log("error",e)})),C([{coords:[55.766059,49.1308083],title:"\u041f\u043e\u043c\u043e\u0447\u044c \u0437\u043e\u043e\u0431\u043e\u0442\u0441\u0430\u0434\u0443",organizer:"\u041a\u0430\u0437\u0430\u043d\u0441\u043a\u0438\u0439 \u0437\u043e\u043e\u0431\u043e\u0442\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u0430\u0434",start:"2019-10-05 09:00",end:"2019-10-05 13:00",aim:"\u0421\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0432 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0438 \u0431\u043b\u0430\u0433\u043e\u043f\u043e\u043b\u0443\u0447\u0438\u044f \u044d\u043a\u0441\u043f\u043e\u043d\u0438\u0440\u0443\u0435\u043c\u044b\u0445 \u0436\u0438\u0432\u043e\u0442\u043d\u044b\u0445",description:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0430 \u043f\u043e\u043c\u043e\u0449\u044c \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0441\u0435\u0437\u043e\u043d\u043d\u044b\u0445 \u0440\u0430\u0431\u043e\u0442, \u043f\u043e\u043c\u043e\u0449\u044c \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u044f\u043c \u0432 \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u043d\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0438, \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",requirements:["\u0425\u043e\u0440\u043e\u0448\u043e \u0437\u043d\u0430\u0442\u044c \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u044e \u0437\u043e\u043e\u0431\u043e\u0442\u0441\u0430\u0434\u0430","\u0413\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u043b\u044e\u0431\u0443\u044e \u0438\u0437 \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u0434\u0430\u0447"],icon_type:"islands#blueZooIcon",reward:"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0435 \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u0435 \u044d\u043a\u0441\u043a\u0443\u0440\u0441\u0438\u0439, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043f\u0430\u043c\u044f\u0442\u043d\u044b\u0435 \u0441\u0443\u0432\u0435\u043d\u0438\u0440\u044b",photo:"botsad.svg",group_id:"187013907",count_cur:34,count_end:50},{coords:[55.821002,49.1586594],title:"\u041f\u043e\u043c\u043e\u0447\u044c \u0441 \u0442\u0435\u0445\u043d\u0438\u043a\u043e\u0439",organizer:"\u041a\u0430\u0437\u0430\u043d\u044c \u0410\u0440\u0435\u043d\u0430",start:"2019-10-06 10:00",end:"2019-10-06 16:00",aim:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e\u0435 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0441\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f",description:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0430 \u043f\u043e\u043c\u043e\u0449\u044c \u0432\u043e\u043b\u043e\u043d\u0442\u0435\u0440\u043e\u0432 \u0432 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u0439 \u0438 \u0442\u0435\u043b\u0435\u0440\u0430\u0434\u0438\u043e\u0432\u0435\u0449\u0430\u043d\u0438\u044f",requirements:["\u0412\u043e\u0437\u0440\u0430\u0441\u0442 \u043e\u0442 18 \u043b\u0435\u0442","\u041e\u043f\u044b\u0442 \u0432\u043e\u043b\u043e\u043d\u0442\u0435\u0440\u0441\u043a\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0430 \u0441\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u044b\u0445 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f\u0445"],icon_type:"islands#blueRunIcon",reward:"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0435 \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u0435 \u043c\u0430\u0442\u0447\u0430",photo:"kazan-arena.svg",group_id:"187023316",count_cur:27,count_end:100},{coords:[55.6122512,49.2959574],title:"\u041f\u0440\u0438\u0431\u0440\u0430\u0442\u044c \u0437\u0430 \u0441\u043e\u0431\u043e\u0439",organizer:"\u0426\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u041f\u0440\u043e\u0440\u044b\u0432",start:"2019-09-29 16:00",end:"2019-09-29 21:00",aim:"\u041f\u043e\u043c\u043e\u0447\u044c \u0438 \u043e\u0442\u0431\u0440\u0430\u0433\u043e\u0434\u0430\u0440\u0438\u0442\u044c \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440\u043e\u0432 \u0445\u0430\u043a\u0430\u0442\u043e\u043d\u0430",description:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u0443\u0431\u043e\u0440\u043a\u0443 \u043d\u0430 \u0441\u0432\u043e\u0435\u043c \u0440\u0430\u0431\u043e\u0447\u0435\u043c \u043c\u0435\u0441\u0442\u0435 \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u0445\u0430\u043a\u0430\u0442\u043e\u043d\u0430",requirements:["\u0423\u043c\u0435\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435"],icon_type:"islands#blueStarIcon",reward:"\u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u043d\u043e\u0441\u0442\u044c",photo:"cp.svg",group_id:"187024041",count_cur:3250,count_end:3300},{coords:[55.79123,49.102772],title:"\u041e\u0442\u043f\u0440\u0430\u0437\u0434\u043d\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0431\u0435\u0434\u0443",organizer:"\u0424\u043e\u043d\u0434 \u043f\u043e\u0431\u0435\u0434",start:"2019-09-29 21:00",end:"2019-09-29 23:00",aim:"\u0412\u0435\u0441\u0435\u043b\u043e \u043f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u0432\u0440\u0435\u043c\u044f",description:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0442\u0434\u043e\u0445\u043d\u0443\u0442\u044c \u0438 \u043f\u043e\u0437\u0434\u0440\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u0435\u0439",requirements:["\u0423\u043c\u0435\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435"],icon_type:"islands#blueFoodIcon",reward:"\u0412\u044b \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u043d\u0435\u0442\u0435 \u0447\u0443\u0432\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0443\u0441\u0442\u0430\u043b\u043e\u0441\u0442\u044c",photo:"bar.svg",group_id:"187028879",count_cur:3,count_end:100}]),console.log("00:05")}),[]),a.a.createElement(g.a,{activePanel:o,popout:O},a.a.createElement(M,{id:"home",location:v,fetchedUser:s,events:I,token:w}))};l.a.send("VKWebAppInit"),c.a.render(a.a.createElement(z,null),document.getElementById("root"))}},[[163,1,2]]]);
//# sourceMappingURL=main.f00be52a.chunk.js.map