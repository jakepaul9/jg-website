(this["webpackJsonpjg-website"]=this["webpackJsonpjg-website"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/avatar_img.c88250b0.jpg"},,,,,,,,,,function(e,t,a){e.exports=a(46)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){var n={"./Letter of Recommendation for Jacob Grether.png":34,"./avatar_img.jpg":14,"./background.jpg":35,"./locs_1.png":36,"./locs_2.png":37,"./locs_3.png":38,"./locs_4.png":39};function i(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=l,e.exports=i,i.id=33},function(e,t,a){e.exports=a.p+"static/media/Letter of Recommendation for Jacob Grether.4d790467.png"},function(e,t,a){e.exports=a.p+"static/media/background.432ad85c.jpg"},function(e,t,a){e.exports=a.p+"static/media/locs_1.84d4a116.png"},function(e,t,a){e.exports=a.p+"static/media/locs_2.6974c0cf.png"},function(e,t,a){e.exports=a.p+"static/media/locs_3.f6b3675e.png"},function(e,t,a){e.exports=a.p+"static/media/locs_4.8e4c7313.png"},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(16),c=a.n(l),s=(a(29),a(30),a(8)),o=a(5),r=(a(31),function(e){return i.a.createElement("div",{className:"avatar"},i.a.createElement("div",{className:"avatar-image"},i.a.createElement("img",{src:e.imgSrc,alt:"avatar"})),i.a.createElement("div",{className:"avatar-info"},"Jake Grether",i.a.createElement("br",null),"Computer Science",i.a.createElement("br",null),"UVU",i.a.createElement("br",null),"jacob.grether@gmail",i.a.createElement("br",null),"541.450.1805"))}),d=(a(13),function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"header"},i.a.createElement(r,{className:"home-avatar",imgSrc:a(14)})),i.a.createElement("div",{className:"content"},i.a.createElement("h1",{id:"welcome",className:"content-title"},"Hello"),i.a.createElement("p",{className:"content-topic-desc"},"My name is Jake Grether. I am a Computer Science major at Utah Valley University where I will graduate in December 2020. I have a passion for creating intuitive user friendly applications, making complex processes simpler, efficient, and more easily maintained."),i.a.createElement("p",{className:"content-topic-desc"},"I've been happily married since June of 2012 to my beautiful wife Misti. I'm a singer song-writer by hobby and love to work with my hands.")))}),m=function(){return i.a.createElement("div",null,"Another gay ass div")},p=a(17),u=a(18),h=a(22),f=a(19),E=a(23),g=(a(32),function(e){return i.a.createElement("div",{className:"project-card-slideshow"},i.a.createElement("div",{className:"project-slide"},i.a.createElement("div",{className:"project-slide-image"},i.a.createElement("img",{src:a(33)("./".concat(e.slideInfo.picture)),alt:""})),i.a.createElement("div",{className:"project-slide-info"},i.a.createElement("h2",null,e.slideInfo.title),i.a.createElement("p",null,e.slideInfo.description))),i.a.createElement("div",{className:"project-card-slideshow-nav"},i.a.createElement("button",{onClick:function(){return e.change("prev")}},"<"),i.a.createElement("div",{id:"slideId"},"".concat(e.slideInfo.index+1,"/").concat(e.totalSlides)),i.a.createElement("button",{onClick:function(){return e.change("next")}},">")))}),v={locs:{title:"LOCS",description:"Large Order Consolidation Solution",tools:"Frontend - HTML, CSS, Vanilla Javascript. Backend - PHP ",totalSlides:4,slides:[{index:0,picture:"locs_1.png",title:"Step 1",description:"This is what you do in step 1."},{index:1,picture:"locs_2.png",title:"Step 2",description:"This is what you do in step 2."},{index:2,picture:"locs_3.png",title:"Step 3",description:"This is what you do in step 3."},{index:3,picture:"locs_4.png",title:"Step 4",description:"This is what you do in step 4."}]}},b=(a(40),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).onClickHandler=function(e){switch(e){case"next":a.state.slideIndex===a.state.totalSlides-1?a.setState({locsSlide:v.locs.slides[0],slideIndex:0}):a.setState({locsSlide:v.locs.slides[a.state.slideIndex+1],slideIndex:a.state.slideIndex+1});break;case"prev":0===a.state.slideIndex?a.setState({locsSlide:v.locs.slides[a.state.locsData.totalSlides-1],slideIndex:a.state.locsData.totalSlides-1}):a.setState({locsSlide:v.locs.slides[a.state.slideIndex-1],slideIndex:a.state.slideIndex-1})}},a.state={locsData:v.locs,locsSlide:v.locs.slides[0],slideIndex:v.locs.slides[0].index,totalSlides:v.locs.totalSlides},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement(g,{slideInfo:this.state.locsSlide,change:this.onClickHandler,totalSlides:this.state.totalSlides}),i.a.createElement("div",{className:"content"},i.a.createElement("h1",{className:"content-title"},"Locs"),i.a.createElement("hr",null),i.a.createElement("h3",{className:"content-subtitle"},"Large Order Consolidation Solution"),i.a.createElement("h1",{className:"content-topic"},"Purpose"),i.a.createElement("p",{className:"content-topic-desc"},"To eliminate human error in, and simplify the pallet consolidation portion of the fulfillment process for large distributor orders."),i.a.createElement("h1",{className:"content-topic"},"Overview"),i.a.createElement("p",{className:"content-topic-desc"},"LOCS helps reduce the time it would normally take to resolve possible discrepencies in the order fulfillment process, by keeping detailed records of the case qty and weight of each item pulled and which pallet they are on. When comparing the finished report LOCS generates upon completion of the consolidation process, discrepencies, if any, are pin pointed to exact parts on exact pallets allowing minimal time to be spent resolving the issue."),i.a.createElement("h1",{className:"content-topic"},"Tools"),i.a.createElement("p",{className:"content-topic-desc"},"Before I learned any type of front-end or back-end framework I built",i.a.createElement("span",{className:"emphasis"}," LOCS")," using raw HTML, CSS, and vanilla javascript for the front end, php and MySQL on the back-end.")))}}]),t}(n.Component));var S=function(){return i.a.createElement(s.a,null,i.a.createElement("div",{className:"App"},i.a.createElement("ul",{className:"nav"},i.a.createElement("li",null,i.a.createElement(s.b,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(s.b,{to:"/Dev"},"Dev")))),i.a.createElement(o.a,{path:"/",exact:!0},i.a.createElement(d,null)),i.a.createElement(o.a,{path:"/Dev"},i.a.createElement(b,null)),i.a.createElement(o.a,{path:"/Hobbies"},i.a.createElement(m,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[24,1,2]]]);
//# sourceMappingURL=main.808d84e3.chunk.js.map