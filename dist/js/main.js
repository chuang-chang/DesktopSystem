!function t(i,o,a){function e(s,r){if(!o[s]){if(!i[s]){var d="function"==typeof require&&require;if(!r&&d)return d(s,!0);if(n)return n(s,!0);throw new Error("Cannot find module '"+s+"'")}var p=o[s]={exports:{}};i[s][0].call(p.exports,function(t){var o=i[s][1][t];return e(o?o:t)},p,p.exports,t,i,o,a)}return o[s].exports}for(var n="function"==typeof require&&require,s=0;s<a.length;s++)e(a[s]);return e}({1:[function(t,i,o){window.Interface={FormatDate:function(t){var i=new Date(t);return i.getFullYear()+"-"+(i.getMonth()+1<10?"0"+(i.getMonth()+1):i.getMonth()+1)+"-"+i.getDate()}},window.GCR={init:function(){this.setip(),this.setCurrentTime(),this.baseHandle(),this.fishdock()},setip:function(){var t=document.getElementById("current_ip");t.innerHTML=returnCitySN.cname+" "+returnCitySN.cip},setCurrentTime:function(){var t=document.getElementById("current_date");t.innerHTML=Interface.FormatDate(new Date)},baseHandle:function(){var t=this,i=$("#rightkey");ci_item=$("#app .containers .bottom_tip .ci_item"),arrows_left=$("#app .containers .arrows_left"),arrows_right=$("#app .containers .arrows_right"),citems=$("#app .containers .container_item"),current_con=$("#app .containers .bottom_tip .current_con"),contaniers=$("#app .containers"),$("#modaltest").click(function(){event.stopPropagation(),i.removeClass("open")}),ci_item.click(function(){var i=$(this).index();t.switchpage(i)}),arrows_left.click(function(){var i=$("#app .containers .bottom_tip .current_con"),o=i.index();o-1>-1&&t.switchpage(o-1)}),arrows_right.click(function(){var i=$("#app .containers .bottom_tip .current_con"),o=i.index();o+1<citems.length&&t.switchpage(o+1)}),$(window).resize(function(){var i=$("#app .containers .bottom_tip .current_con").index(),o=$("#app .containers .container_items"),a=$("#app .containers")[0].offsetWidth;o.css({"margin-left":"-"+a*i+"px"}),t.fishdock()}),$("#app").mousemove(function(t){t.pageX<500?arrows_left.css("display","block"):arrows_left.css("display","none"),t.pageX>contaniers[0].offsetWidth-500?arrows_right.css("display","block"):arrows_right.css("display","none")}),document.oncontextmenu=function(){return!1};navigator.appName;$("#app").bind("mousedown",function(t){3!=t.which||0!=$(t.target).parents(".app").length||$(t.target).hasClass("app")||i.css("top",t.pageY-20).css("left",t.pageX).addClass("open"),1==t.which&&i.removeClass("open")})},fishdock:function(){setTimeout(function(){var t=$("#dock");t.css({marginLeft:($("body")[0].clientWidth-t[0].clientWidth)/2}),$("#dock").Fisheye({maxWidth:18,items:"li",container:".centerd",itemWidth:40,proximity:100,halign:"center"})})},ruleSelector:function(t){function i(t){return t.replace(/::/g,":")}return Array.prototype.filter.call(Array.prototype.concat.apply([],Array.prototype.map.call(document.styleSheets,function(t){return Array.prototype.slice.call(t.cssRules)})),function(o){return i(o.selectorText)===i(t)})},switchpage:function(t){var i=($("#app .containers .bottom_tip .ci_item"),$("#app .containers .container_items")),o=$("#app .containers")[0].offsetWidth;parseInt(i.css("margin-left"))!=o*t&&i.css({"margin-left":"-"+o*t+"px"}),$("#app .containers .bottom_tip .current_con").removeClass("current_con"),$("#app .containers .bottom_tip .ci_item").eq(t).addClass("current_con")},modals:{show:function(t){var i=$(".modal");console.log(i),i.each(function(t,i){var o=10*t;$(i).find(".modal-dialog").css("margin",o+"px 0px 0px "+o+"px")}),$("#rightkey").removeClass("open"),console.log(t.find(".modal-dialog")[0].offsetWidth);var o=$(window).width()/3,a=$(window).height()/2-t.find(".modal-dialog")[0].offsetHeight;t.find(".modal-dialog").css({left:o+"px",top:a+"px"})},hide:function(){it=!1},max:function(t,i,o){t?i.addClass("maxty"):i.removeClass("maxty")&&!function(){i.css(o)}},min:function(){}}},GCR.init();var a=VueStrap.modal,e=VueStrap.tooltip,n=VueStrap.dropdown;Vue.component("modal",a),Vue.component("tooltip",e),Vue.component("dropdown",n);var s=0,r=(new Vue({el:"#usetting"}),new Vue({el:"#rightmodal",data:function(){return{zoomModal:!1,ismax:!1,init_val:{left:0,height:0,top:0,width:0}}},ready:function(){$("#realrightmodal").appendTo($("body")),this.target=$("#realrightmodal").find(".modal-dialog"),$("body .modal .modal-dialog").addClass("dialog-init").resizable(),$("body .modal").draggable({handle:".modal-header"})},methods:{show:function(){return this.zoomModal?!1:(GCR.modals.show($("#realrightmodal")),this.zoomModal=!0,s++,void $("#realrightmodal .modal-dialog").css("z-index",s))},close:function(){this.zoomModal=!1,s--,$("#realrightmodal .modal-dialog").css("z-index","")},min:function(){$("#realrightmodal").removeClass("in").css("display","none"),r.minifys.push({el:$("#realrightmodal"),name:$("#realrightmodal").find(".modal-title").text(),icon:"app/images/desktop-icons/folder-document.png"}),GCR.fishdock()},max:function(){this.ismax=!this.ismax,this.ismax&&(this.init_val={left:this.target[0].offsetLeft,top:this.target[0].offsetTop,width:this.target[0].offsetWidth,height:this.target[0].offsetHeight}),GCR.modals.max(this.ismax,this.target,this.init_val)}}}),new Vue({el:"#desktop",data:function(){return{apps:[{name:"app_store",icon:"app/images/desktop-icons/app_store_ios7_ios_7.png"},{name:"calendar",icon:"app/images/desktop-icons/calendar_ios7_ios_7.png"},{name:"camera",icon:"app/images/desktop-icons/camera_ios7_ios_7.png"},{name:"music",icon:"app/images/desktop-icons/music_ios7_ios_7.png"},{name:"phone",icon:"app/images/desktop-icons/phone_ios7_ios_7.png"},{name:"photos",icon:"app/images/desktop-icons/photos_ios7_ios_7.png"},{name:"safari",icon:"app/images/desktop-icons/safari_ios7_ios_7.png"},{name:"weather",icon:"app/images/desktop-icons/weather_ios7_ios_7.png"}],minifys:[]}},ready:function(){},methods:{toggleMin:function(t){GCR.fishdock(),t.el.addClass("in").css("display","block"),this.minifys.splice(this.minifys.indexOf(t),1),console.log(this.minifys)}}}));new Vue({el:"#applications",data:function(){return{apps:[{name:"赵信",icon:"app/images/app-icons/icon-1.png"},{name:"妲己",icon:"app/images/app-icons/icon-2.png"},{name:"蛮王",icon:"app/images/app-icons/icon-3.png"}],zooms:[!1,!1,!1],ismax:[!1,!1,!1],init_val:[],zoomadd:!1,ismaxadd:!1,init_valadd:{}}},ready:function(){this.target=[];for(var t=this.apps,i=0;i<t.length;i++)$("#appmodal"+i).appendTo($("body")),this.target[i]=$("#appmodal"+i).find(".modal-dialog");this.targetadd=$("#appmodal999").find(".modal-dialog"),$("#appmodal999").appendTo($("body")),$("body .modal .modal-dialog").addClass("dialog-init").resizable(),$("body .modal").draggable({handle:".modal-header"})},methods:{show:function(t){if(999==t)GCR.modals.show($("#appmodal999")),this.zoomadd=!0,s++,$("#appmodal999").addClass("in").css("display","block"),$("#appmodal999").find(".modal-dialog").css("z-index",s);else{if(this.zooms[t])return!1;GCR.modals.show($("#appmodal"+t)),this.zooms[t]=!0,s++,$("#appmodal"+t).addClass("in").css("display","block"),$("#appmodal"+t).find(".modal-dialog").css("z-index",s)}},close:function(t){999==t?(this.zoomadd=!1,s--,$("#appmodal999").removeClass("in").css("display","none"),$("#appmodal999").find(".modal-dialog").css("z-index","")):(this.zooms[t]=!1,s--,$("#appmodal"+t).removeClass("in").css("display","none"),$("#appmodal"+t).find(".modal-dialog").css("z-index",""))},min:function(t){this.close(t);var i=999==t?"增加项目":this.apps[t].name,o=999==t?"app/images/desktop-icons/folder-document.png":this.apps[t].icon;r.minifys.push({el:$("#appmodal"+t),index:t,name:i,icon:o}),GCR.fishdock()},max:function(t){if(999==t){this.ismaxadd=!this.ismaxadd;var i=this.targetadd[0];this.ismaxadd&&(this.init_valadd={left:i.offsetLeft,top:i.offsetTop,width:i.offsetWidth,height:i.offsetHeight}),GCR.modals.max(this.ismaxadd,this.targetadd,this.init_valadd)}else{console.log(this.target),this.ismax[t]=!this.ismax[t],console.log(this.target[0][0]),console.log(t);var i=this.target[parseInt(t)][0];this.ismax[t]&&(this.init_val[t]={left:i.offsetLeft,top:i.offsetTop,width:i.offsetWidth,height:i.offsetHeight}),GCR.modals.max(this.ismax[t],this.target[t],this.init_val[t])}}}})},{}],2:[function(t,i,o){t("./desktop.js")},{"./desktop.js":1}]},{},[2]);