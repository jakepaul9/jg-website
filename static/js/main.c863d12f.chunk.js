(this["webpackJsonpjg-website"]=this["webpackJsonpjg-website"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/avatar_img.c88250b0.jpg"},,,,,,,,,,function(e,t,a){e.exports=a(46)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){var n={"./Letter of Recommendation for Jacob Grether.png":34,"./avatar_img.jpg":14,"./background.jpg":35,"./locs_1.png":36,"./locs_2.png":37,"./locs_3.png":38,"./locs_4.png":39};function i(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=l,e.exports=i,i.id=33},function(e,t,a){e.exports=a.p+"static/media/Letter of Recommendation for Jacob Grether.4d790467.png"},function(e,t,a){e.exports=a.p+"static/media/background.432ad85c.jpg"},function(e,t,a){e.exports=a.p+"static/media/locs_1.84d4a116.png"},function(e,t,a){e.exports=a.p+"static/media/locs_2.6974c0cf.png"},function(e,t,a){e.exports=a.p+"static/media/locs_3.f6b3675e.png"},function(e,t,a){e.exports=a.p+"static/media/locs_4.8e4c7313.png"},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(16),o=a.n(l),c=(a(29),a(30),a(8)),r=a(5),s=(a(31),function(e){return i.a.createElement("div",{className:"avatar"},i.a.createElement("div",{className:"avatar-image"},i.a.createElement("img",{src:e.imgSrc,alt:"avatar"})),i.a.createElement("div",{className:"avatar-info"},"Jake Grether",i.a.createElement("br",null),"Computer Science",i.a.createElement("br",null),"UVU",i.a.createElement("br",null),"jacob.grether@gmail",i.a.createElement("br",null),"541.450.1805"))}),d=(a(13),function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"header"},i.a.createElement(s,{className:"home-avatar",imgSrc:a(14)})),i.a.createElement("div",{className:"content"},i.a.createElement("h1",{id:"welcome",className:"content-title"},"Hello"),i.a.createElement("br",null),i.a.createElement("p",{className:"content-topic-desc"},'My name is Jake Grether. I am a Computer Science major at Utah Valley University where I will graduate in December 2020. I have a passion for creating intuitive user friendly applications, making complex processes simpler, efficient, and more easily maintained. View my "Dev" page to see an example of this.'),i.a.createElement("br",null),i.a.createElement("p",{className:"content-topic-desc"},"I recently changed the emphasis of my degree to \"Full Stack Software Development\", which is where my true interest lies. I want to build applications from the ground up, I like to know how to do it all. In my current courses we are building an application using Vue.js, express.js, node.js and mongoDB. Although I do like working with PHP when speaking of web programming, I also really like the concept of having both client side and server side coded in the same language, i.e. javascript. I'm also teaching myself React.js which is what I've used to build this site. Feel free to view my code",i.a.createElement("a",{href:"https://github.com/jakepaul9/jg-website/tree/master",target:"_blank",rel:"noopener noreferrer"}," ","HERE"),". I also very much enjoy coding in C++, with which I successfully built an assembler from the ground up in my Advanced High Performance Computer Architecture class. It was capable of performing complex tasks like concurrency, and recursion."),i.a.createElement("br",null),i.a.createElement("p",{className:"content-topic-desc"},"I've been happily married since June of 2012 to my beautiful wife Misti. I'm a singer song-writer by hobby and love to work with my hands.")))}),m=function(){return i.a.createElement("div",null,"Another gay ass div")},p=a(17),u=a(18),h=a(22),f=a(19),g=a(23),b=(a(32),function(e){return i.a.createElement("div",{className:"project-card-slideshow"},i.a.createElement("div",{className:"project-slide"},i.a.createElement("div",{className:"project-slide-image"},i.a.createElement("img",{src:a(33)("./".concat(e.slideInfo.picture)),alt:""})),i.a.createElement("div",{className:"project-slide-info"},i.a.createElement("h2",null,e.slideInfo.title),i.a.createElement("p",null,e.slideInfo.description))),i.a.createElement("div",{className:"project-card-slideshow-nav"},i.a.createElement("button",{onClick:function(){return e.change("prev")}},"<"),i.a.createElement("div",{id:"slideId"},"".concat(e.slideInfo.index+1,"/").concat(e.totalSlides)),i.a.createElement("button",{onClick:function(){return e.change("next")}},">")))}),E={locs:{title:"LOCS",description:"Large Order Consolidation Solution",tools:"Frontend - HTML, CSS, Vanilla Javascript. Backend - PHP ",totalSlides:4,slides:[{index:0,picture:"locs_1.png",title:"Step 1",description:'Enter the staging number that will be placed on each individual pallet in the order. Enter/Scan the Order number found on the picking ticket. Choose the name of the user, then press "Begin"'},{index:1,picture:"locs_2.png",title:"Step 2",description:'With the cursor autofocused in the item entry field, begin scanning each part on the completed pallet. Once a pallet is completed, press the "+" button to lock in the current pallet, and to add another one if necessary. '},{index:2,picture:"locs_3.png",title:"Step 3",description:'Repeat the process in step 2 for additional pallets. When all pallets are completed and locked in, press the "Review" button to generate the final report with.'},{index:3,picture:"locs_4.png",title:"Step 4",description:"Print out the generated report and compare it to the packing list to ensure accuracy. If a dicrepency is found it will be pin-pointed to an exact pallet and item."}]}},v=(a(40),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).onClickHandler=function(e){switch(e){case"next":a.state.slideIndex===a.state.totalSlides-1?a.setState({locsSlide:E.locs.slides[0],slideIndex:0}):a.setState({locsSlide:E.locs.slides[a.state.slideIndex+1],slideIndex:a.state.slideIndex+1});break;case"prev":0===a.state.slideIndex?a.setState({locsSlide:E.locs.slides[a.state.locsData.totalSlides-1],slideIndex:a.state.locsData.totalSlides-1}):a.setState({locsSlide:E.locs.slides[a.state.slideIndex-1],slideIndex:a.state.slideIndex-1})}},a.state={locsData:E.locs,locsSlide:E.locs.slides[0],slideIndex:E.locs.slides[0].index,totalSlides:E.locs.totalSlides},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement(b,{slideInfo:this.state.locsSlide,change:this.onClickHandler,totalSlides:this.state.totalSlides}),i.a.createElement("div",{className:"content"},i.a.createElement("h1",{className:"content-title"},"Locs"),i.a.createElement("hr",null),i.a.createElement("h3",{className:"content-subtitle"},"Large Order Consolidation Solution"),i.a.createElement("h1",{className:"content-topic"},"Purpose"),i.a.createElement("p",{className:"content-topic-desc"},"To eliminate human error in, and simplify the pallet consolidation portion of the fulfillment process for large distributor orders."),i.a.createElement("h1",{className:"content-topic"},"Overview"),i.a.createElement("p",{className:"content-topic-desc"},"LOCS helps reduce the time it would normally take to resolve possible discrepencies in the order fulfillment process, by keeping a detailed record of the case qty and weight of each item pulled, and which pallet they are on. This is done by grabbing necessary info, including standard unit per case Quantities, and weights for each part from a database containing such details. When comparing the finished report LOCS generates upon completion of the consolidation process, discrepencies, if any, are pin pointed to exact items on exact pallets allowing minimal time to be spent resolving the issue."),i.a.createElement("h1",{className:"content-topic"},"Tools"),i.a.createElement("p",{className:"content-topic-desc"},"Before I learned any type of front-end or back-end framework I built LOCS using raw HTML, CSS, and vanilla javascript on the front end, php and MySQL on the back-end. View my code"," ",i.a.createElement("a",{href:"https://github.com/jakepaul9/LOCS",target:"_blank",rel:"noopener noreferrer"},"HERE"),".")))}}]),t}(n.Component));var w=function(){return i.a.createElement(c.a,null,i.a.createElement("div",{className:"App"},i.a.createElement("ul",{className:"nav"},i.a.createElement("li",null,i.a.createElement(c.b,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(c.b,{to:"/Dev"},"Dev")))),i.a.createElement(r.a,{path:"/",exact:!0},i.a.createElement(d,null)),i.a.createElement(r.a,{path:"/Dev"},i.a.createElement(v,null)),i.a.createElement(r.a,{path:"/Hobbies"},i.a.createElement(m,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[24,1,2]]]);
//# sourceMappingURL=main.c863d12f.chunk.js.map