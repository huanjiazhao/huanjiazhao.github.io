!function(n){function t(){var t=n(".nav-container-inner").width()-10,e=n("#main-nav").width(),i=n("#sub-nav").width();if(e+i>t){0==n(".main-nav-more").length&&(n(['<li class="main-nav-list-item top-level-menu main-nav-more">','<a class="main-nav-list-link" href="javascript:;">More</a>','<ul class="main-nav-list-child">',"</ul></li>"].join("")).appendTo(n("#main-nav")),n(".main-nav-more").hover(function(){n(window).width()<480||n(this).children(".main-nav-list-child").slideDown("fast")},function(){n(window).width()<480||n(this).children(".main-nav-list-child").slideUp("fast")}));for(var a=n("#main-nav").children().length,r=a-2;r>=0;r--){var s=n("#main-nav").children().eq(r);if(!(e+i>t))return;s.prependTo(n(".main-nav-more > ul")),e=n("#main-nav").width()}}n(".main-nav-more").length>0&&(n(".main-nav-more > ul").children().appendTo(n("#main-nav")),n(".main-nav-more").remove())}if(n("#back-to-top").on("click",function(){n("body, html").animate({scrollTop:0},600)}),n("#main-nav-toggle").on("click",function(){n(".nav-container-inner").slideToggle()}),n(".article-entry").each(function(){n(this).find("img").each(function(){this.alt&&n(this).after('<span class="caption">'+this.alt+"</span>"),n(this).wrap('<a href="'+this.src+'" title="'+this.alt+'" class="gallery-item"></a>')})}),lightGallery){var e={selector:".gallery-item"};lightGallery(n(".article-entry")[0],e),lightGallery(n(".article-gallery")[0],e)}n("#sidebar .sidebar-toggle").click(function(){n("#sidebar").hasClass("expend")?n("#sidebar").removeClass("expend"):n("#sidebar").addClass("expend")}),n(".main-nav-list > li").unwrap(),n("#main-nav > li > .main-nav-list-link").each(function(){n(".page-title-link").length>0&&(n(this).html().toUpperCase()==n(".page-title-link").html().toUpperCase()?n(this).addClass("current"):n(this).attr("href")==n(".page-title-link").attr("data-url")&&n(this).addClass("current"))}),t(),n(window).resize(function(){t()}),n(".main-nav-list-item").hover(function(){n(window).width()<480||n(this).children(".main-nav-list-child").slideDown("fast")},function(){n(window).width()<480||n(this).children(".main-nav-list-child").slideUp("fast")}),n(".main-nav-list-item").each(function(){n(this).find(".main-nav-list-child").length>0&&n(this).addClass("top-level-menu")})}(jQuery);