(this["webpackJsonpjg-website"]=this["webpackJsonpjg-website"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Letter of Recommendation for Jacob Grether.4d790467.png"},function(e,t,a){e.exports=a.p+"static/media/avatar_img.3749ecb4.jpg"},function(e,t,a){e.exports=a.p+"static/media/locs_1.84d4a116.png"},function(e,t,a){e.exports=a.p+"static/media/locs_2.6974c0cf.png"},function(e,t,a){e.exports=a.p+"static/media/locs_3.f6b3675e.png"},function(e,t,a){e.exports=a.p+"static/media/locs_4.8e4c7313.png"},,,,,,,,,,function(e,t,a){e.exports=a(48)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){var n={"./Letter of Recommendation for Jacob Grether.png":13,"./avatar_img.jpg":14,"./background.jpg":39,"./locs_1.png":15,"./locs_2.png":16,"./locs_3.png":17,"./locs_4.png":18};function i(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=s,e.exports=i,i.id=38},function(e,t,a){e.exports=a.p+"static/media/background.432ad85c.jpg"},function(e,t,a){},function(e,t,a){},function(e,t,a){var n={"./locs_1.png":15,"./locs_2.png":16,"./locs_3.png":17,"./locs_4.png":18};function i(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=s,e.exports=i,i.id=42},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(20),c=a.n(s),l=(a(33),a(34),a(8)),o=a(5),r=(a(35),function(e){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"page-content"},e.children))}),d=(a(36),function(e){return i.a.createElement("div",{className:"avatar"},i.a.createElement("img",{src:e.imgSrc,alt:"avatar"}))}),m=(a(37),function(e){return i.a.createElement("div",{className:"project-slide"},i.a.createElement("div",{className:"project-slide-image"},i.a.createElement("img",{src:a(38)("./".concat(e.image))})),i.a.createElement("div",{className:"project-slide-info"},i.a.createElement("h2",{className:"project-slide-info-title"},e.title),i.a.createElement("p",{className:"project-slide-info-description"},e.desc)))}),p=(a(40),function(e){return i.a.createElement("div",{className:"project-card"},i.a.createElement("div",{className:"project-card-header"},i.a.createElement("div",{className:"project-card-title"},i.a.createElement("span",null,e.title)),i.a.createElement("div",{className:"project-card-info"},i.a.createElement("p",null,i.a.createElement("span",{className:"project-card-info-title"},"Overview:"),i.a.createElement("br",null),e.desc),i.a.createElement("p",null,i.a.createElement("span",{className:"project-card-info-title"},"Tools:"),i.a.createElement("br",null),e.tools))),i.a.createElement("div",{className:"project-card-slideshow"},i.a.createElement(m,{title:e.slideTitle,desc:e.slideDesc,image:e.slideImage}),i.a.createElement("div",{className:"project-card-slideshow-nav"},i.a.createElement("button",{onClick:function(){return e.change("prev")}},"<"),i.a.createElement("div",{id:"slideId"},"".concat(e.index+1,"/").concat(e.totalSlides)),i.a.createElement("button",{onClick:function(){return e.change("next")}},">"))))}),u=function(){return i.a.createElement(r,null,i.a.createElement(d,{className:"home-avatar",imgSrc:a(14)}),"My name is Jake Grether. I am a Computer Science major at Utah Valley University where I will graduate in December 2020. I have a passion for creating intuitive user friendly applications, making complex processes simpler, efficient, and more easily maintained.",i.a.createElement("br",null),i.a.createElement("br",null),"I've been happily married since June of 2012 to my beautiful wife Misti. I'm a singer song-writer by hobby and love to work with my hands.")},f=(a(41),function(){return i.a.createElement(r,{pageTitle:"Hobbies"},"Another gay ass page")}),h=a(21),g=a(22),v=a(26),E=a(23),b=a(27),x={locs:{title:"LOCS",description:"Large Order Consolidation Solution",tools:"Frontend - HTML, CSS, Vanilla Javascript. Backend - PHP ",totalSlides:4,slides:[{index:0,picture:"locs_1.png",title:"Step 1",description:"This is what you do in step 1."},{index:1,picture:"locs_2.png",title:"Step 2",description:"This is what you do in step 2."},{index:2,picture:"locs_3.png",title:"Step 3",description:"This is what you do in step 3."},{index:3,picture:"locs_4.png",title:"Step 4",description:"This is what you do in step 4."}]}},S=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(v.a)(this,Object(E.a)(t).call(this,e))).onChangeHandler=function(e){switch(e){case"next":a.state.slideIndex===a.state.totalSlides-1?a.setState({locsSlide:x.locs.slides[0],slideIndex:0}):a.setState({locsSlide:x.locs.slides[a.state.slideIndex+1],slideIndex:a.state.slideIndex+1});break;case"prev":0===a.state.slideIndex?a.setState({locsSlide:x.locs.slides[a.state.locsData.totalSlides-1],slideIndex:a.state.locsData.totalSlides-1}):a.setState({locsSlide:x.locs.slides[a.state.slideIndex-1],slideIndex:a.state.slideIndex-1})}},a.state={locsData:x.locs,locsSlide:x.locs.slides[0],slideIndex:x.locs.slides[0].index,totalSlides:x.locs.totalSlides},a}return Object(b.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return i.a.createElement(r,null,i.a.createElement(p,{title:this.state.locsData.title,desc:this.state.locsData.description,tools:this.state.locsData.tools,totalSlides:this.state.locsData.totalSlides,index:this.state.slideIndex,slideTitle:this.state.locsSlide.title,slideImage:this.state.locsSlide.picture,slideDesc:this.state.locsSlide.description,change:this.onChangeHandler}))}}]),t}(n.Component);var w=function(){return i.a.createElement(l.a,null,i.a.createElement("div",{className:"App"},i.a.createElement("ul",{className:"nav"},i.a.createElement("li",null,i.a.createElement(l.b,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(l.b,{to:"/Dev"},"Dev")))),i.a.createElement(o.a,{path:"/",exact:!0,component:u}),i.a.createElement(o.a,{path:"/Dev",exact:!0,component:S}),i.a.createElement(o.a,{path:"/Hobbies",component:f}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[28,1,2]]]);
//# sourceMappingURL=main.8cf377d9.chunk.js.map