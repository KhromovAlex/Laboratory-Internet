!function(e){function t(t){for(var i,l,o=t[0],c=t[1],d=t[2],u=0,h=[];u<o.length;u++)l=o[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&h.push(r[l][0]),r[l]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);for(a&&a(t);h.length;)h.shift()();return s.push.apply(s,d||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},r={0:0},s=[];function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var a=c;s.push([121,1]),n()}({121:function(e,t,n){n(122),e.exports=n(309)},308:function(e,t,n){},309:function(e,t,n){"use strict";n.r(t);n(308);function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r,s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$sliderContainer=document.querySelector("#".concat(t)),this.$nextButton=document.querySelector("#".concat(t," #next")),this.$prevButton=document.querySelector("#".concat(t," #prev")),this.$slides=document.querySelectorAll("#".concat(t," > .slider__wrap > ul > li"))}var t,n,r;return t=e,(n=[{key:"getCurrentSlide",value:function(){return this.$sliderContainer.querySelector(".active")}},{key:"getNextSlide",value:function(e){return e.nextElementSibling?e.nextElementSibling:this.$slides[0]}},{key:"getPrevSlide",value:function(e){return e.previousElementSibling?e.previousElementSibling:this.$slides[this.$slides.length-1]}},{key:"toggleActiveSlide",value:function(e,t){e.classList.remove("active"),t.classList.add("active")}},{key:"nextSlide",value:function(){var e=this.getCurrentSlide(),t=this.getPrevSlide(e),n=this.getNextSlide(e),i=this.getNextSlide(n);t.classList.remove("left"),e.classList.add("left"),n.classList.remove("right"),i.classList.add("right"),this.toggleActiveSlide(e,n);var r=this.$sliderContainer.querySelector(".slider__current-slide"),s=+r.innerHTML+1>this.$slides.length?1:+r.innerHTML+1;r.innerHTML=s}},{key:"previousSlide",value:function(){var e=this.getCurrentSlide(),t=this.getPrevSlide(e),n=this.getNextSlide(e),i=this.getPrevSlide(t);n.classList.remove("right"),e.classList.add("right"),t.classList.remove("left"),i.classList.add("left"),this.toggleActiveSlide(e,t);var r=this.$sliderContainer.querySelector(".slider__current-slide"),s=+r.innerHTML-1<1?this.$slides.length:+r.innerHTML-1;r.innerHTML=s}},{key:"handleSwipe",value:function(){var e=this,t=null,n=null;this.$sliderContainer.addEventListener("touchstart",(function(e){t=e.changedTouches[0].screenX,n=e.changedTouches[0].screenY})),this.$sliderContainer.addEventListener("touchend",(function(i){i.changedTouches[0].screenX-t>90&&i.changedTouches[0].screenY-n<200&&i.changedTouches[0].screenY-n>-200&&e.previousSlide(),i.changedTouches[0].screenX-t<-90&&i.changedTouches[0].screenY-n<200&&i.changedTouches[0].screenY-n>-200&&e.nextSlide(),t=null,n=null}))}},{key:"hideSlideInfo",value:function(){this.$sliderContainer.addEventListener("click",(function(e){var t=e.target;t.classList.contains("slider-item__button-hide")&&(t.innerHTML="скрыть"===t.innerHTML?"показать":"скрыть",t.nextElementSibling.classList.toggle("hide"))}))}},{key:"init",value:function(){this.$slides[0].classList.add("active"),this.$slides[1].classList.add("right"),this.$slides[this.$slides.length-1].classList.add("left"),this.$prevButton.addEventListener("click",this.previousSlide.bind(this)),this.$nextButton.addEventListener("click",this.nextSlide.bind(this)),this.$sliderContainer.querySelector(".slider__current-slide").innerHTML=1,this.$sliderContainer.querySelector(".slider__all-slides").innerHTML=this.$slides.length,this.hideSlideInfo(),this.handleSwipe()}}])&&i(t.prototype,n),r&&i(t,r),e}();r=document.querySelector(".header"),window.addEventListener("scroll",(function(){window.pageYOffset>10?r.classList.add("header_white"):r.classList.remove("header_white")})),new s("slider").init(),function(){var e=document.querySelector(".menu-button");e.addEventListener("click",(function(){var t=document.body.clientWidth,n=document.querySelector(".menu"),i=document.querySelector(".header"),r=i.offsetHeight;n.style.top="".concat(r,"px"),document.documentElement.style.overflow="hidden"==document.documentElement.style.overflow?"visible":"hidden",n.classList.contains("active")&&window.pageYOffset<10?i.classList.remove("header_white"):i.classList.add("header_white"),e.classList.toggle("active"),n.classList.toggle("active");var s=document.body.clientWidth;i.style.paddingRight=t<s?parseFloat(getComputedStyle(i).paddingRight)+17+"px":""})),window.addEventListener("resize",(function(){var e=document.querySelector(".header"),t=document.querySelector(".menu"),n=e.offsetHeight;t.classList.contains("active")&&(t.style.top="".concat(n,"px")),t.classList.contains("active")&&(e.style.paddingRight="",e.style.paddingRight=parseFloat(getComputedStyle(e).paddingRight)+17+"px")}));var t=function(){var e=document.querySelector(".phone"),t=document.querySelector(".socials"),n=document.querySelector(".menu__list"),i=document.querySelector(".header__right");document.documentElement.clientWidth<=783&&!n.closest(".menu.active")?(n.prepend(e),n.append(t)):document.documentElement.clientWidth<=800&&n.closest(".menu.active")?(n.prepend(e),n.append(t)):e.parentElement.classList.contains("header__right")||(i.prepend(e),e.after(t))};t(),window.addEventListener("resize",t)}()}});