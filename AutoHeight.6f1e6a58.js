parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fOHy":[function(require,module,exports) {
var e;function s(){e=document.getElementsByClassName("slick-track")[0].clientHeight+"px";var s=document.getElementsByClassName("slider slider-single slick-slider"),i=document.getElementsByClassName("card slick-slide slick-active")[0].clientHeight;s[0].style.height=i+"px"}$(document).click(function(){var s=document.getElementsByClassName("slider slider-single slick-slider"),i=document.getElementsByClassName("card slick-slide slick-active");s[0].style.height=e,console.log(e);var l=document.getElementsByClassName("card slick-slide"),t=i[0].clientHeight,c=Array.prototype.filter.call(l,function(e){return!e.classList.contains("slick-active")});s[0].style.height=t+"px",console.log(s[0].style.height),c.forEach(e=>e.querySelector(".more").classList.add("visually-hidden")),c.forEach(e=>e.querySelector(".dots").classList.remove("visually-hidden")),c.forEach(e=>e.querySelector(".read-more-Btn").innerHTML="Read more")}),$(window).on("load",s),$(window).on("resize",function(){clearTimeout(window.resizedFinished),window.resizedFinished=setTimeout(function(){s()},250)});
},{}]},{},["fOHy"], null)
//# sourceMappingURL=/project-19/AutoHeight.6f1e6a58.js.map