(this.webpackJsonpwidgets=this.webpackJsonpwidgets||[]).push([[0],{12:function(e,a,t){},29:function(e,a,t){e.exports=t(81)},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},81:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(25),l=t.n(c),i=t(28),s=t(2),m=t.n(s),o=t(4),u=t(10),d=(t(12),t(26)),E=t.n(d),h=function(e){return Number(E()(e).from("K").to("C").toFixed(0))},f=t(9),p=function(e){var a=e.main,t=a.humidity,r=a.temp,n=e.wind.speed,c=e.weather[e.weather.length-1].icon,l=h(r),i=e.sys.country,s=f(e.date).format("dddd"),m=e.description;return{humidity:"".concat(t," %"),icon:"wi wi-".concat(c),temperature:"".concat(l,"\xb0 C"),wind:"".concat(n," m/s"),day:s,image:e.image,name:e.name,country:i,url:e.uri,description:m}},N=(t(68),function(e){var a=e.headquarter,t=a&&a[a.length-1];return n.a.createElement(n.a.Fragment,null,function(){var e=p(t),a={backgroundImage:"url(".concat(e.image,")")};return n.a.createElement("article",{id:"widget-header",className:"main-article radious-30",style:a},n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"headquarter-info"},n.a.createElement("div",{className:"headquarter-info-name tag purple radious-40"},n.a.createElement("h4",{className:"widget-headquarter color--white"},n.a.createElement("i",{className:"fa fa-map-marker"})," ",e.name)),n.a.createElement("div",{className:"headquarter-icon"},n.a.createElement("i",{className:e.icon+" widget-icon"}))),n.a.createElement("div",{className:"headquarter-caption"},n.a.createElement("div",{className:"headquarter-caption-status"},n.a.createElement("div",{className:"widget-temperature temperature"},n.a.createElement("h2",{className:"color--white"},e.temperature)),n.a.createElement("div",{className:"extra"},n.a.createElement("span",{className:"item-circle pink"}),n.a.createElement("h6",{className:"widget-humidity color--white"},e.humidity),n.a.createElement("span",{className:"item-circle blue"}),n.a.createElement("h6",{className:"widget-wind color--white"},e.wind))),n.a.createElement("div",{className:"headquarter-caption-message"},n.a.createElement("h1",{className:"color--white"},"Good morning,",n.a.createElement("br",null),n.a.createElement("span",null,"Condor!"))))))}())}),v=(t(69),function(e){var a=e.headequarterData;return n.a.createElement("article",{className:"widget-card article card radious-30"},n.a.createElement("div",{className:"article-media"},n.a.createElement("img",{src:a.image,alt:a.name,className:"radious-50"})),n.a.createElement("div",{className:"article-content"},n.a.createElement("div",{className:"article-content-place"},n.a.createElement("div",{className:"article-name"},n.a.createElement("h4",{className:"widget-headquarter-name color--purple"},n.a.createElement("i",{className:"fa fa-map-marker"})," ",a.name," -"," ",a.country),n.a.createElement("p",{className:"color--gray"},a.description)),n.a.createElement("div",{className:"article-icon"},n.a.createElement("i",{className:a.icon+" widget-icon"}))),n.a.createElement("div",{className:"article-content-weather"},n.a.createElement("div",{className:"extra"},n.a.createElement("span",{className:"item-circle orange"}),n.a.createElement("h6",{className:"widget-temperature color--dark"},a.temperature),n.a.createElement("span",{className:"item-circle pink"}),n.a.createElement("h6",{className:"widget-humidity color--dark"},a.humidity),n.a.createElement("span",{className:"item-circle blue"}),n.a.createElement("h6",{className:"widget-wind color--dark"},a.wind)))))}),g=(t(70),function(e){var a=e.headquarters;return n.a.createElement("section",{id:"widget-favorite",className:"favorite"},n.a.createElement("div",{className:"heading"},n.a.createElement("h2",{className:"title color--purple"},"Our Favorite ",n.a.createElement("span",null,"Places"))),n.a.createElement("div",{className:"favorite-content"},n.a.createElement(n.a.Fragment,null,a.map((function(e){var a=p(e);return n.a.createElement("div",{className:"favorite-content-column",key:e.id},n.a.createElement(v,{headequarterData:a}))})))))}),w=(t(71),function(e){var a=e.cityData,t={backgroundImage:"url(".concat(a.image,")")};return n.a.createElement("article",{className:"widget-card city card radious-30",style:t},n.a.createElement("div",{className:"city-content"},n.a.createElement("div",{className:"city-content-heading"},n.a.createElement("h4",{className:"widget-city-name color--white"},a.name)),n.a.createElement("a",{href:a.url,rel:"noopener noreferrer",className:"color--white radious-30",target:"_blank"},"VISIT TO PLACE")))}),y=(t(72),function(e){var a=e.cities;return n.a.createElement("section",{id:"widget-cities",className:"cities"},n.a.createElement("div",{className:"heading"},n.a.createElement("h2",{className:"title color--purple"},"PLACES TO ",n.a.createElement("span",null,"VISIT"))),n.a.createElement("div",{className:"cities-content"},n.a.createElement(n.a.Fragment,null,a.map((function(e){var a=p(e);return n.a.createElement("div",{className:"cities-content-column",key:e.id},n.a.createElement(w,{cityData:a}))})))))}),k=(t(73),function(e){var a=e.headquarter;return n.a.createElement("section",{id:"widget-suggest",className:"suggest"},n.a.createElement("div",{className:"heading"},n.a.createElement("h2",{className:"title color--purple"},"Headquarter ",n.a.createElement("span",null,"suggested"))),n.a.createElement("div",{className:"suggest-content"},function(){var e=p(a);return n.a.createElement("article",{className:"headquarter radious-30"},n.a.createElement("div",{className:"headquarter-content"},n.a.createElement("div",{className:"headquarter-content-row"},n.a.createElement("div",{className:"row-title"},n.a.createElement("h4",{className:"widget-headquarter color--white"},n.a.createElement("i",{className:"fa fa-map-marker"})," ",e.name," -"," ",e.country)),n.a.createElement("div",{className:"row-icon"},n.a.createElement("i",{className:e.icon+" widget-icon"}))),n.a.createElement("div",{className:"headquarter-content-row"},n.a.createElement("div",{className:"row-temp"},n.a.createElement("h4",{className:"widget-temperature color--white"},e.temperature))),n.a.createElement("div",{className:"headquarter-content-row"},n.a.createElement("div",{className:"extra"},n.a.createElement("span",{className:"item-circle pink"}),n.a.createElement("h6",{className:"widget-humidity color--white"},e.humidity),n.a.createElement("span",{className:"item-circle blue"}),n.a.createElement("h6",{className:"widget-wind color--white"},e.wind)),n.a.createElement("div",{className:"day"},n.a.createElement("h4",{className:"widget-day color--white"},e.day)))))}()))}),b=(t(74),function(){return n.a.createElement("nav",{className:"navigation"},n.a.createElement("div",{className:"container"},n.a.createElement("h3",{className:"color--white"},"Weather App")))}),q=t(3),x=t.n(q),j=function(e){return x.a.filter(e,(function(e){return e.main_headquarter}))},O=function(e){return x.a.filter(e,(function(e){return!e.main_headquarter}))},S=function(e){return x.a.filter(e,(function(e){var a=e.main.temp,t=h(a);if(t>24&&t<29)return e}))},F=function(e){var a=function(e){return x.a.filter(e,(function(e){return!e.main_headquarter}))}(e);return x.a.minBy(a,(function(e){return e.main.humidity}))},C=function(e){var a=e.forecastData;return n.a.createElement("li",{className:"widget-carousel-item item-slide","data-target":"card"},n.a.createElement("h3",{className:"widget-day color--dark"},a.day),n.a.createElement("h2",{className:"widget-temperature color--dark"},a.temperature),n.a.createElement("div",{className:"extra"},n.a.createElement("span",{className:"item-circle pink"}),n.a.createElement("h6",{className:"widget-humidity color--dark"},a.humidity),n.a.createElement("span",{className:"item-circle blue"}),n.a.createElement("h6",{className:"widget-wind color--dark"},a.wind)))},I=function(e){var a=e.main,t=a.humidity,r=a.temp,n=e.wind.speed,c=e.weather[e.weather.length-1].icon,l=h(r),i=f(e.date).format("dddd");return{humidity:"".concat(t," %"),icon:"wi wi-".concat(c),temperature:"".concat(l,"\xb0 C"),wind:"".concat(n," m/s"),day:i}},D=(t(75),function(e){var a=e.forecastExtended;Object(r.useEffect)((function(){function e(){return(e=Object(o.a)(m.a.mark((function e(){var a,t,r,n,c,l,i,s,o,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=document.querySelector("[data-target='carousel']"),t=a.querySelector("[data-target='card']"),r=document.querySelector("[data-action='slideLeft']"),n=document.querySelector("[data-action='slideRight']"),c=a.offsetWidth,l=t.currentStyle||window.getComputedStyle(t),i=Number(l.marginRight.match(/\d+/g)[0]),s=a.querySelectorAll("[data-target='card']").length,o=0,u=-(s/3*c+i*(s/3)-c-i),r.addEventListener("click",(function(){0!==o&&(o+=c+i,a.style.transform="translateX(".concat(o,"px)"))})),n.addEventListener("click",(function(){o!==u&&(o-=c+i,a.style.transform="translateX(".concat(o,"px)"))}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return n.a.createElement("article",{id:"widget-carousel",className:"forecast-extended card radious-30"},n.a.createElement("div",{className:"carousel-heading"},n.a.createElement("div",{className:"carousel-heading-section"},n.a.createElement("h5",{className:"color--purple"},"Forecast extended")),n.a.createElement("div",{className:"carousel-heading-buttons"},n.a.createElement("button",{"data-action":"slideLeft",id:"previous",className:"radious-50"},n.a.createElement("i",{className:"fa fa-long-arrow-left"})),n.a.createElement("button",{"data-action":"slideRight",id:"next",className:"radious-50"},n.a.createElement("i",{className:"fa fa-long-arrow-right"})))),n.a.createElement("div",{className:"carousel-slider"},n.a.createElement("ul",{className:"carousel-slider-content","data-target":"carousel"},a.map((function(e,a){var t=I(e);return n.a.createElement(C,{forecastData:t,key:a})})))))}),L=(t(76),function(){var e=Object(r.useState)(null),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(r.useState)(null),i=Object(u.a)(l,2),s=i[0],d=i[1],E=Object(r.useState)(null),h=Object(u.a)(E,2),f=h[0],p=h[1];Object(r.useEffect)((function(){function e(){return(e=Object(o.a)(m.a.mark((function e(){var a,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://run.mocky.io/v3/818d0158-727b-461e-9f76-06734ed7e582");case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,c(t.places),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function a(){return(a=Object(o.a)(m.a.mark((function e(){var a,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://run.mocky.io/v3/73c29128-d158-40db-aeae-ea78a0d762b7");case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,d(t.list),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function t(){return(t=Object(o.a)(m.a.mark((function e(){var a,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://run.mocky.io/v3/f8926877-849a-416f-8226-9fd9d9fc5e07");case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,p(t.result),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){a.apply(this,arguments)}(),function(){t.apply(this,arguments)}()}),[]);return n.a.createElement(n.a.Fragment,null,n.a.createElement(b,null),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"dashboard"},n.a.createElement("main",null,n.a.createElement(n.a.Fragment,null,t?function(){var e=j(t);return n.a.createElement(N,{headquarter:e})}():null),n.a.createElement(n.a.Fragment,null,s?n.a.createElement(D,{forecastExtended:s}):null),n.a.createElement(n.a.Fragment,null,t?function(){var e=O(t);return n.a.createElement(g,{headquarters:e})}():null)),n.a.createElement("aside",null,n.a.createElement(n.a.Fragment,null,f?function(){var e=F(t);return n.a.createElement(k,{headquarter:e})}():null),n.a.createElement(n.a.Fragment,null,f?function(){var e=S(f);return n.a.createElement(y,{cities:e})}():null)))))}),A=function(){return n.a.createElement(i.a,null,n.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.66d546aa.chunk.js.map