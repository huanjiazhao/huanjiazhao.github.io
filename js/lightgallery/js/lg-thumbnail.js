!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.LgThumbnail=e()}}(function(){var e;return function t(e,r,n){function o(s,a){if(!r[s]){if(!e[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=r[s]={exports:{}};e[s][0].call(c.exports,function(t){var r=e[s][1][t];return o(r?r:t)},c,c.exports,t,e,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(t,r,n){!function(t,r){if("function"==typeof e&&e.amd)e([],r);else if("undefined"!=typeof n)r();else{var o={exports:{}};r(),t.lgThumbnail=o.exports}}(this,function(){"use strict";var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t={thumbnail:!0,animateThumb:!0,currentPagerPosition:"middle",thumbWidth:100,thumbContHeight:100,thumbMargin:5,exThumbImage:!1,showThumbByDefault:!0,toggleThumb:!0,pullCaptionUp:!0,enableThumbDrag:!0,enableThumbSwipe:!0,swipeThreshold:50,loadYoutubeThumbnail:!0,youtubeThumbSize:1,loadVimeoThumbnail:!0,vimeoThumbSize:"thumbnail_small",loadDailymotionThumbnail:!0},r=function(r){return this.el=r,this.core=window.lgData[this.el.getAttribute("lg-uid")],this.core.s=e({},t,this.core.s),this.thumbOuter=null,this.thumbOuterWidth=0,this.thumbTotalWidth=this.core.items.length*(this.core.s.thumbWidth+this.core.s.thumbMargin),this.thumbIndex=this.core.index,this.left=0,this.init(),this};r.prototype.init=function(){var e=this;this.core.s.thumbnail&&this.core.items.length>1&&(this.core.s.showThumbByDefault&&setTimeout(function(){utils.addClass(e.core.outer,"lg-thumb-open")},700),this.core.s.pullCaptionUp&&utils.addClass(this.core.outer,"lg-pull-caption-up"),this.build(),this.core.s.animateThumb?(this.core.s.enableThumbDrag&&!this.core.isTouch&&this.core.doCss()&&this.enableThumbDrag(),this.core.s.enableThumbSwipe&&this.core.isTouch&&this.core.doCss()&&this.enableThumbSwipe(),this.thumbClickable=!1):this.thumbClickable=!0,this.toggle(),this.thumbkeyPress())},r.prototype.build=function(){function e(e,t,i){var s,a=r.core.isVideo(e,i)||{},l="";a.youtube||a.vimeo||a.dailymotion?a.youtube?s=r.core.s.loadYoutubeThumbnail?"//img.youtube.com/vi/"+a.youtube[1]+"/"+r.core.s.youtubeThumbSize+".jpg":t:a.vimeo?r.core.s.loadVimeoThumbnail?(s="//i.vimeocdn.com/video/error_"+o+".jpg",l=a.vimeo[1]):s=t:a.dailymotion&&(s=r.core.s.loadDailymotionThumbnail?"//www.dailymotion.com/thumbnail/video/"+a.dailymotion[1]:t):s=t,n+='<div data-vimeo-id="'+l+'" class="lg-thumb-item" style="width:'+r.core.s.thumbWidth+"px; margin-right: "+r.core.s.thumbMargin+'px"><img src="'+s+'" /></div>',l=""}var t,r=this,n="",o="",i='<div class="lg-thumb-outer"><div class="lg-thumb group"></div></div>';switch(this.core.s.vimeoThumbSize){case"thumbnail_large":o="640";break;case"thumbnail_medium":o="200x150";break;case"thumbnail_small":o="100x75"}if(utils.addClass(r.core.outer,"lg-has-thumb"),r.core.outer.querySelector(".lg").insertAdjacentHTML("beforeend",i),r.thumbOuter=r.core.outer.querySelector(".lg-thumb-outer"),r.thumbOuterWidth=r.thumbOuter.offsetWidth,r.core.s.animateThumb&&(r.core.outer.querySelector(".lg-thumb").style.width=r.thumbTotalWidth+"px",r.core.outer.querySelector(".lg-thumb").style.position="relative"),this.core.s.animateThumb&&(r.thumbOuter.style.height=r.core.s.thumbContHeight+"px"),r.core.s.dynamic)for(var s=0;s<r.core.s.dynamicEl.length;s++)e(r.core.s.dynamicEl[s].src,r.core.s.dynamicEl[s].thumb,s);else for(var a=0;a<r.core.items.length;a++)r.core.s.exThumbImage?e(r.core.items[a].getAttribute("href")||r.core.items[a].getAttribute("data-src"),r.core.items[a].getAttribute(r.core.s.exThumbImage),a):e(r.core.items[a].getAttribute("href")||r.core.items[a].getAttribute("data-src"),r.core.items[a].querySelector("img").getAttribute("src"),a);r.core.outer.querySelector(".lg-thumb").innerHTML=n,t=r.core.outer.querySelectorAll(".lg-thumb-item");for(var l=0;l<t.length;l++)!function(e){var n=t[e],o=n.getAttribute("data-vimeo-id");if(o){window["lgJsonP"+r.el.getAttribute("lg-uid")+l]=function(e){n.querySelector("img").setAttribute("src",e[0][r.core.s.vimeoThumbSize])};var i=document.createElement("script");i.className="lg-script",i.src="//www.vimeo.com/api/v2/video/"+o+".json?callback=lgJsonP"+r.el.getAttribute("lg-uid")+l,document.body.appendChild(i)}}(l);utils.addClass(t[r.core.index],"active"),utils.on(r.core.el,"onBeforeSlide.lgtm",function(){for(var e=0;e<t.length;e++)utils.removeClass(t[e],"active");utils.addClass(t[r.core.index],"active")});for(var u=0;u<t.length;u++)!function(e){utils.on(t[e],"click.lg touchend.lg",function(){setTimeout(function(){(r.thumbClickable&&!r.core.lgBusy||!r.core.doCss())&&(r.core.index=e,r.core.slide(r.core.index,!1,!0))},50)})}(u);utils.on(r.core.el,"onBeforeSlide.lgtm",function(){r.animateThumb(r.core.index)}),utils.on(window,"resize.lgthumb orientationchange.lgthumb",function(){setTimeout(function(){r.animateThumb(r.core.index),r.thumbOuterWidth=r.thumbOuter.offsetWidth},200)})},r.prototype.setTranslate=function(e){utils.setVendor(this.core.outer.querySelector(".lg-thumb"),"Transform","translate3d(-"+e+"px, 0px, 0px)")},r.prototype.animateThumb=function(e){var t=this.core.outer.querySelector(".lg-thumb");if(this.core.s.animateThumb){var r;switch(this.core.s.currentPagerPosition){case"left":r=0;break;case"middle":r=this.thumbOuterWidth/2-this.core.s.thumbWidth/2;break;case"right":r=this.thumbOuterWidth-this.core.s.thumbWidth}this.left=(this.core.s.thumbWidth+this.core.s.thumbMargin)*e-1-r,this.left>this.thumbTotalWidth-this.thumbOuterWidth&&(this.left=this.thumbTotalWidth-this.thumbOuterWidth),this.left<0&&(this.left=0),this.core.lGalleryOn?(utils.hasClass(t,"on")||utils.setVendor(this.core.outer.querySelector(".lg-thumb"),"TransitionDuration",this.core.s.speed+"ms"),this.core.doCss()||(t.style.left=-this.left+"px")):this.core.doCss()||(t.style.left=-this.left+"px"),this.setTranslate(this.left)}},r.prototype.enableThumbDrag=function(){var e=this,t=0,r=0,n=!1,o=!1,i=0;utils.addClass(e.thumbOuter,"lg-grab"),utils.on(e.core.outer.querySelector(".lg-thumb"),"mousedown.lgthumb",function(r){e.thumbTotalWidth>e.thumbOuterWidth&&(r.preventDefault(),t=r.pageX,n=!0,e.core.outer.scrollLeft+=1,e.core.outer.scrollLeft-=1,e.thumbClickable=!1,utils.removeClass(e.thumbOuter,"lg-grab"),utils.addClass(e.thumbOuter,"lg-grabbing"))}),utils.on(window,"mousemove.lgthumb",function(s){n&&(i=e.left,o=!0,r=s.pageX,utils.addClass(e.thumbOuter,"lg-dragging"),i-=r-t,i>e.thumbTotalWidth-e.thumbOuterWidth&&(i=e.thumbTotalWidth-e.thumbOuterWidth),0>i&&(i=0),e.setTranslate(i))}),utils.on(window,"mouseup.lgthumb",function(){o?(o=!1,utils.removeClass(e.thumbOuter,"lg-dragging"),e.left=i,Math.abs(r-t)<e.core.s.swipeThreshold&&(e.thumbClickable=!0)):e.thumbClickable=!0,n&&(n=!1,utils.removeClass(e.thumbOuter,"lg-grabbing"),utils.addClass(e.thumbOuter,"lg-grab"))})},r.prototype.enableThumbSwipe=function(){var e=this,t=0,r=0,n=!1,o=0;utils.on(e.core.outer.querySelector(".lg-thumb"),"touchstart.lg",function(r){e.thumbTotalWidth>e.thumbOuterWidth&&(r.preventDefault(),t=r.targetTouches[0].pageX,e.thumbClickable=!1)}),utils.on(e.core.outer.querySelector(".lg-thumb"),"touchmove.lg",function(i){e.thumbTotalWidth>e.thumbOuterWidth&&(i.preventDefault(),r=i.targetTouches[0].pageX,n=!0,utils.addClass(e.thumbOuter,"lg-dragging"),o=e.left,o-=r-t,o>e.thumbTotalWidth-e.thumbOuterWidth&&(o=e.thumbTotalWidth-e.thumbOuterWidth),0>o&&(o=0),e.setTranslate(o))}),utils.on(e.core.outer.querySelector(".lg-thumb"),"touchend.lg",function(){e.thumbTotalWidth>e.thumbOuterWidth?n?(n=!1,utils.removeClass(e.thumbOuter,"lg-dragging"),Math.abs(r-t)<e.core.s.swipeThreshold&&(e.thumbClickable=!0),e.left=o):e.thumbClickable=!0:e.thumbClickable=!0})},r.prototype.toggle=function(){var e=this;e.core.s.toggleThumb&&(utils.addClass(e.core.outer,"lg-can-toggle"),e.thumbOuter.insertAdjacentHTML("beforeend",'<span class="lg-toggle-thumb lg-icon"></span>'),utils.on(e.core.outer.querySelector(".lg-toggle-thumb"),"click.lg",function(){utils.hasClass(e.core.outer,"lg-thumb-open")?utils.removeClass(e.core.outer,"lg-thumb-open"):utils.addClass(e.core.outer,"lg-thumb-open")}))},r.prototype.thumbkeyPress=function(){var e=this;utils.on(window,"keydown.lgthumb",function(t){38===t.keyCode?(t.preventDefault(),utils.addClass(e.core.outer,"lg-thumb-open")):40===t.keyCode&&(t.preventDefault(),utils.removeClass(e.core.outer,"lg-thumb-open"))})},r.prototype.destroy=function(){if(this.core.s.thumbnail&&this.core.items.length>1){utils.off(window,".lgthumb"),this.thumbOuter.parentNode.removeChild(this.thumbOuter),utils.removeClass(this.core.outer,"lg-has-thumb");for(var e=document.getElementsByClassName("lg-script");e[0];)e[0].parentNode.removeChild(e[0])}},window.lgModules.thumbnail=r})},{}]},{},[1])(1)});