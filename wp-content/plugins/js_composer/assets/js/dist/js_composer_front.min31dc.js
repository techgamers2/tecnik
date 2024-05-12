/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2021 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */
document.documentElement.className+=" js_active ",document.documentElement.className+="ontouchstart"in document.documentElement?" vc_mobile ":" vc_desktop ",function(){for(var e=["-webkit-","-moz-","-ms-","-o-",""],t=0;t<e.length;t++)e[t]+"transform"in document.documentElement.style&&(document.documentElement.className+=" vc_transform ")}(),function(e){"function"!=typeof window.vc_js&&(window.vc_js=function(){"use strict";vc_toggleBehaviour(),vc_tabsBehaviour(),vc_accordionBehaviour(),vc_teaserGrid(),vc_carouselBehaviour(),vc_slidersBehaviour(),vc_prettyPhoto(),vc_pinterest(),vc_progress_bar(),vc_plugin_flexslider(),vc_gridBehaviour(),vc_rowBehaviour(),vc_prepareHoverBox(),vc_googleMapsPointer(),vc_ttaActivation(),jQuery(document).trigger("vc_js"),window.setTimeout(vc_waypoints,500)}),"function"!=typeof window.vc_plugin_flexslider&&(window.vc_plugin_flexslider=function(e){(e?e.find(".wpb_flexslider"):jQuery(".wpb_flexslider")).each((function(){var e=jQuery(this),t=1e3*parseInt(e.attr("data-interval"),10),o=e.attr("data-flex_fx"),i=0!=t;e.is(":visible")&&e.flexslider({animation:o,slideshow:i,slideshowSpeed:t,sliderSpeed:800,smoothHeight:!0})}))}),"function"!=typeof window.vc_googleplus&&(window.vc_googleplus=function(){0<jQuery(".wpb_googleplus").length&&function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://apis.google.com/js/plusone.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()}),"function"!=typeof window.vc_pinterest&&(window.vc_pinterest=function(){0<jQuery(".wpb_pinterest").length&&function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://assets.pinterest.com/js/pinit.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()}),"function"!=typeof window.vc_progress_bar&&(window.vc_progress_bar=function(){void 0!==jQuery.fn.vcwaypoint&&jQuery(".vc_progress_bar").each((function(){var e=jQuery(this);e.vcwaypoint((function(){e.find(".vc_single_bar").each((function(e){var t=jQuery(this).find(".vc_bar"),o=t.data("percentage-value");setTimeout((function(){t.css({width:o+"%"})}),200*e)}))}),{offset:"85%"})}))}),"function"!=typeof window.vc_waypoints&&(window.vc_waypoints=function(){void 0!==jQuery.fn.vcwaypoint&&jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").each((function(){var e=jQuery(this);e.vcwaypoint((function(){e.addClass("wpb_start_animation animated")}),{offset:"85%"})}))}),"function"!=typeof window.vc_toggleBehaviour&&(window.vc_toggleBehaviour=function(e){(e?e.hasClass("vc_toggle_title")?e.unbind("click"):e.find(".vc_toggle_title").off("click"):jQuery(".vc_toggle_title").off("click")).on("click",(function(e){e&&e.preventDefault&&e.preventDefault();var t=jQuery(this).closest(".vc_toggle");e=t.find(".vc_toggle_content"),t.hasClass("vc_toggle_active")?e.slideUp({duration:300,complete:function(){t.removeClass("vc_toggle_active")}}):e.slideDown({duration:300,complete:function(){t.addClass("vc_toggle_active")}})}))}),"function"!=typeof window.vc_tabsBehaviour&&(window.vc_tabsBehaviour=function(e){var t,o;jQuery.ui&&(t=e||jQuery(".wpb_tabs, .wpb_tour"),e=jQuery.ui&&jQuery.ui.version?jQuery.ui.version.split("."):"1.10",o=1===parseInt(e[0],10)&&parseInt(e[1],10)<9,t.each((function(e){var t=jQuery(this).attr("data-interval"),i=[],n=jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({show:function(e,t){wpb_prepare_tab_content(e,t)},activate:function(e,t){wpb_prepare_tab_content(e,t)}});if(t&&0<t)try{n.tabs("rotate",1e3*t)}catch(e){window.console&&window.console.warn&&console.warn("tabs behaviours error",e)}jQuery(this).find(".wpb_tab").each((function(){i.push(this.id)})),jQuery(this).find(".wpb_tabs_nav li").on("click",(function(e){return e&&e.preventDefault&&e.preventDefault(),o?n.tabs("select",jQuery("a",this).attr("href")):n.tabs("option","active",jQuery(this).index()),!1})),jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").on("click",(function(e){var t;e&&e.preventDefault&&e.preventDefault(),o?(t=n.tabs("option","selected"),jQuery(this).parent().hasClass("wpb_next_slide")?t++:t--,t<0?t=n.tabs("length")-1:t>=n.tabs("length")&&(t=0),n.tabs("select",t)):(t=n.tabs("option","active"),e=n.find(".wpb_tab").length,t=jQuery(this).parent().hasClass("wpb_next_slide")?e<=t+1?0:t+1:t-1<0?e-1:t-1,n.tabs("option","active",t))}))})))}),"function"!=typeof window.vc_accordionBehaviour&&(window.vc_accordionBehaviour=function(){jQuery(".wpb_accordion").each((function(e){var t=jQuery(this),o=(t.attr("data-interval"),!isNaN(jQuery(this).data("active-tab"))&&0<parseInt(t.data("active-tab"),10)&&parseInt(t.data("active-tab"),10)-1),i=!1===o||"yes"===t.data("collapsible");i=t.find(".wpb_accordion_wrapper").accordion({header:"> div > h3",autoHeight:!1,heightStyle:"content",active:o,collapsible:i,navigation:!0,activate:vc_accordionActivate,change:function(e,t){void 0!==jQuery.fn.isotope&&t.newContent.find(".isotope").isotope("layout"),vc_carouselBehaviour(t.newPanel)}});!0===t.data("vcDisableKeydown")&&(i.data("uiAccordion")._keydown=function(){})}))}),"function"!=typeof window.vc_teaserGrid&&(window.vc_teaserGrid=function(){var e={fitrows:"fitRows",masonry:"masonry"};jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each((function(){var t=jQuery(this),o=t.find(".wpb_thumbnails"),i=o.attr("data-layout-mode");o.isotope({itemSelector:".isotope-item",layoutMode:void 0===e[i]?"fitRows":e[i]}),t.find(".categories_filter a").data("isotope",o).on("click",(function(e){e&&e.preventDefault&&e.preventDefault(),e=jQuery(this).data("isotope"),jQuery(this).parent().parent().find(".active").removeClass("active"),jQuery(this).parent().addClass("active"),e.isotope({filter:jQuery(this).attr("data-filter")})})),jQuery(window).on("load resize",(function(){o.isotope("layout")}))}))}),"function"!=typeof window.vc_carouselBehaviour&&(window.vc_carouselBehaviour=function(e){(e?e.find(".wpb_carousel"):jQuery(".wpb_carousel")).each((function(){var e=jQuery(this);!0!==e.data("carousel_enabled")&&e.is(":visible")&&(e.data("carousel_enabled",!0),getColumnsCount(jQuery(this)),jQuery(this).hasClass("columns_count_1"),(e=jQuery(this).find(".wpb_thumbnails-fluid li")).css({"margin-right":e.css("margin-left"),"margin-left":0}),(e=jQuery(this).find("ul.wpb_thumbnails-fluid")).width(e.width()+300),jQuery(window).on("resize",(function(){t!=(t=o())&&window.setTimeout((function(){location.reload()}),20)})))}))}),"function"!=typeof window.vc_slidersBehaviour&&(window.vc_slidersBehaviour=function(){jQuery(".wpb_gallery_slides").each((function(e){var t,o,i=jQuery(this);i.hasClass("wpb_slider_nivo")?(0==(o=1e3*i.attr("data-interval"))&&(o=9999999999),i.find(".nivoSlider").nivoSlider({effect:"boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",slices:15,boxCols:8,boxRows:4,animSpeed:800,pauseTime:o,startSlide:0,directionNav:!0,directionNavHide:!0,controlNav:!0,keyboardNav:!1,pauseOnHover:!0,manualAdvance:!1,prevText:"Prev",nextText:"Next"})):i.hasClass("wpb_image_grid")&&(jQuery.fn.imagesLoaded?t=i.find(".wpb_image_grid_ul").imagesLoaded((function(){t.isotope({itemSelector:".isotope-item",layoutMode:"fitRows"})})):i.find(".wpb_image_grid_ul").isotope({itemSelector:".isotope-item",layoutMode:"fitRows"}))}))}),"function"!=typeof window.vc_prettyPhoto&&(window.vc_prettyPhoto=function(){try{jQuery&&jQuery.fn&&jQuery.fn.prettyPhoto&&jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({animationSpeed:"normal",hook:"data-rel",padding:15,opacity:.7,showTitle:!0,allowresize:!0,counter_separator_label:"/",hideflash:!1,deeplinking:!1,modal:!1,callback:function(){-1<location.href.indexOf("#!prettyPhoto")&&(location.hash="")},social_tools:""})}catch(e){window.console&&window.console.warn&&window.console.warn("vc_prettyPhoto initialize error",e)}}),"function"!=typeof window.vc_google_fonts&&(window.vc_google_fonts=function(){return window.console&&window.console.warn&&window.console.warn("function vc_google_fonts is deprecated, no need to use it"),!1}),window.vcParallaxSkroll=!1,"function"!=typeof window.vc_rowBehaviour&&(window.vc_rowBehaviour=function(){var e,t,o=window.jQuery;function i(){var e=o('[data-vc-full-width="true"]');o.each(e,(function(e,t){var i=o(this);i.addClass("vc_hidden");var n,a,r,c,d,s,u=i.next(".vc_row-full-width");(u=u.length?u:i.parent().next(".vc_row-full-width")).length&&(n=parseInt(i.css("margin-left"),10),a=parseInt(i.css("margin-right"),10),r=0-u.offset().left-n,c=o(window).width(),"rtl"===i.css("direction")&&(r-=u.width(),r+=c,r+=n,r+=a),i.css({position:"relative",left:r,"box-sizing":"border-box",width:c}),i.data("vcStretchContent")||("rtl"===i.css("direction")?((d=r)<0&&(d=0),(s=r)<0&&(s=0)):(s=c-(d=(d=-1*r)<0?0:d)-u.width()+n+a)<0&&(s=0),i.css({"padding-left":d+"px","padding-right":s+"px"})),i.attr("data-vc-full-width-init","true"),i.removeClass("vc_hidden"),o(document).trigger("vc-full-width-row-single",{el:i,offset:r,marginLeft:n,marginRight:a,elFull:u,width:c}))})),o(document).trigger("vc-full-width-row",e)}function n(){var e,t,i=o(".vc_row-o-full-height:first");i.length&&(e=o(window).height(),(t=i.offset().top)<e&&(e=100-t/(e/100),i.css("min-height",e+"vh"))),o(document).trigger("vc-full-height-row",i)}o(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour",i).on("resize.vcRowBehaviour",n),i(),n(),(0<window.navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident.*rv\:11\./))&&o(".vc_row-o-full-height").each((function(){"flex"===o(this).css("display")&&o(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')})),vc_initVideoBackgrounds(),t=!1,window.vcParallaxSkroll&&window.vcParallaxSkroll.destroy(),o(".vc_parallax-inner").remove(),o("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"),o("[data-vc-parallax]").each((function(){var e,i,n,a;t=!0,"on"===o(this).data("vcParallaxOFade")&&o(this).children().attr("data-5p-top-bottom","opacity:0;").attr("data-30p-top-bottom","opacity:1;"),e=100*o(this).data("vcParallax"),(i=o("<div />").addClass("vc_parallax-inner").appendTo(o(this))).height(e+"%"),n=o(this).data("vcParallaxImage"),(a=vcExtractYoutubeId(n))?insertYoutubeVideoAsBackground(i,a):void 0!==n&&i.css("background-image","url("+n+")"),e=-(e-100),i.attr("data-bottom-top","top: "+e+"%;").attr("data-top-bottom","top: 0%;")})),t&&window.skrollr&&(e={forceHeight:!1,smoothScrolling:!1,mobileCheck:function(){return!1}},window.vcParallaxSkroll=skrollr.init(e),window.vcParallaxSkroll)}),"function"!=typeof window.vc_gridBehaviour&&(window.vc_gridBehaviour=function(){jQuery.fn.vcGrid&&jQuery("[data-vc-grid]").vcGrid()}),"function"!=typeof window.getColumnsCount&&(window.getColumnsCount=function(e){for(var t=!1,o=1;!1===t;){if(e.hasClass("columns_count_"+o))return t=!0,o;o++}});var t=o();function o(){var e=jQuery(window).width();return 1170<e?"desktop_wide":960<e&&e<1169?"desktop":768<e&&e<959?"tablet":300<e&&e<767?"mobile":e<300?"mobile_portrait":""}"function"!=typeof window.wpb_prepare_tab_content&&(window.wpb_prepare_tab_content=function(t,o){var i=o.panel||o.newPanel,n=i.find(".vc_pie_chart:not(.vc_ready)"),a=i.find(".vc_round-chart"),r=i.find(".vc_line-chart"),c=i.find('[data-ride="vc_carousel"]');vc_carouselBehaviour(),vc_plugin_flexslider(i),o.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&o.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each((function(){var e=jQuery(this).data("vcGrid");e&&e.gridBuilder&&e.gridBuilder.setMasonry&&e.gridBuilder.setMasonry()})),i.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&i.find(".vc_masonry_media_grid, .vc_masonry_grid").each((function(){var e=jQuery(this).data("vcGrid");e&&e.gridBuilder&&e.gridBuilder.setMasonry&&e.gridBuilder.setMasonry()})),n.length&&jQuery.fn.vcChat&&n.vcChat(),a.length&&jQuery.fn.vcRoundChart&&a.vcRoundChart({reload:!1}),r.length&&jQuery.fn.vcLineChart&&r.vcLineChart({reload:!1}),c.length&&jQuery.fn.carousel&&c.carousel("resizeAction"),r=i.find(".isotope, .wpb_image_grid_ul"),c=i.find(".wpb_gmaps_widget"),0<r.length&&r.isotope("layout"),c.length&&!c.is(".map_ready")&&((r=c.find("iframe")).attr("src",r.attr("src")),c.addClass("map_ready")),i.parents(".isotope").length&&i.parents(".isotope").each((function(){jQuery(this).isotope("layout")})),e(document).trigger("wpb_prepare_tab_content",i)}),"function"!=typeof window.vc_ttaActivation&&(window.vc_ttaActivation=function(){jQuery("[data-vc-accordion]").on("show.vc.accordion",(function(e){var t=window.jQuery,o={};o.newPanel=t(this).data("vc.accordion").getTarget(),window.wpb_prepare_tab_content(e,o)}))}),"function"!=typeof window.vc_accordionActivate&&(window.vc_accordionActivate=function(e,t){var o,i,n,a;t.newPanel.length&&t.newHeader.length&&(o=t.newPanel.find(".vc_pie_chart:not(.vc_ready)"),i=t.newPanel.find(".vc_round-chart"),n=t.newPanel.find(".vc_line-chart"),a=t.newPanel.find('[data-ride="vc_carousel"]'),void 0!==jQuery.fn.isotope&&t.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"),t.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&t.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each((function(){var e=jQuery(this).data("vcGrid");e&&e.gridBuilder&&e.gridBuilder.setMasonry&&e.gridBuilder.setMasonry()})),vc_carouselBehaviour(t.newPanel),vc_plugin_flexslider(t.newPanel),o.length&&jQuery.fn.vcChat&&o.vcChat(),i.length&&jQuery.fn.vcRoundChart&&i.vcRoundChart({reload:!1}),n.length&&jQuery.fn.vcLineChart&&n.vcLineChart({reload:!1}),a.length&&jQuery.fn.carousel&&a.carousel("resizeAction"),t.newPanel.parents(".isotope").length&&t.newPanel.parents(".isotope").each((function(){jQuery(this).isotope("layout")})))}),"function"!=typeof window.initVideoBackgrounds&&(window.initVideoBackgrounds=function(){return window.console&&window.console.warn&&window.console.warn("this function is deprecated use vc_initVideoBackgrounds"),vc_initVideoBackgrounds()}),"function"!=typeof window.vc_initVideoBackgrounds&&(window.vc_initVideoBackgrounds=function(){jQuery("[data-vc-video-bg]").each((function(){var e,t=jQuery(this);t.data("vcVideoBg")?(e=t.data("vcVideoBg"),(e=vcExtractYoutubeId(e))&&(t.find(".vc_video-bg").remove(),insertYoutubeVideoAsBackground(t,e)),jQuery(window).on("grid:items:added",(function(e,o){t.has(o).length&&vcResizeVideoBackground(t)}))):t.find(".vc_video-bg").remove()}))}),"function"!=typeof window.insertYoutubeVideoAsBackground&&(window.insertYoutubeVideoAsBackground=function(e,t,o){if("undefined"==typeof YT||void 0===YT.Player)return 100<(o=void 0===o?0:o)?void console.warn("Too many attempts to load YouTube api"):void setTimeout((function(){insertYoutubeVideoAsBackground(e,t,o++)}),100);var i=e.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");new YT.Player(i[0],{width:"100%",height:"100%",videoId:t,playerVars:{playlist:t,iv_load_policy:3,enablejsapi:1,disablekb:1,autoplay:1,controls:0,showinfo:0,rel:0,loop:1,wmode:"transparent"},events:{onReady:function(e){e.target.mute().setLoop(!0)}}}),vcResizeVideoBackground(e),jQuery(window).on("resize",(function(){vcResizeVideoBackground(e)}))}),"function"!=typeof window.vcResizeVideoBackground&&(window.vcResizeVideoBackground=function(e){var t,o,i,n,a=e.innerWidth(),r=e.innerHeight();a/r<16/9?(t=r*(16/9),o=r,i=-Math.round((t-a)/2)+"px",n=-Math.round((o-r)/2)+"px"):(o=(t=a)*(9/16),n=-Math.round((o-r)/2)+"px",i=-Math.round((t-a)/2)+"px"),t+="px",o+="px",e.find(".vc_video-bg iframe").css({maxWidth:"1000%",marginLeft:i,marginTop:n,width:t,height:o})}),"function"!=typeof window.vcExtractYoutubeId&&(window.vcExtractYoutubeId=function(e){return void 0!==e&&(null!==(e=e.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/))&&e[1])}),"function"!=typeof window.vc_googleMapsPointer&&(window.vc_googleMapsPointer=function(){var e=window.jQuery,t=e(".wpb_gmaps_widget");t.on("click",(function(){e("iframe",this).css("pointer-events","auto")})),t.on("mouseleave",(function(){e("iframe",this).css("pointer-events","none")})),e(".wpb_gmaps_widget iframe").css("pointer-events","none")}),"function"!=typeof window.vc_setHoverBoxPerspective&&(window.vc_setHoverBoxPerspective=function(e){e.each((function(){var e=jQuery(this),t=4*e.width()+"px";e.css("perspective",t)}))}),"function"!=typeof window.vc_setHoverBoxHeight&&(window.vc_setHoverBoxHeight=function(e){e.each((function(){var e=(t=jQuery(this)).find(".vc-hoverbox-inner");e.css("min-height",0);var t,o=t.find(".vc-hoverbox-front-inner").outerHeight();(t=(t=t.find(".vc-hoverbox-back-inner").outerHeight())<o?o:t)<250&&(t=250),e.css("min-height",t+"px")}))}),"function"!=typeof window.vc_prepareHoverBox&&(window.vc_prepareHoverBox=function(){var e=jQuery(".vc-hoverbox");vc_setHoverBoxHeight(e),vc_setHoverBoxPerspective(e)}),jQuery(document).ready(window.vc_prepareHoverBox),jQuery(window).on("resize",window.vc_prepareHoverBox),jQuery(document).ready((function(e){window.vc_js()}))}(window.jQuery);