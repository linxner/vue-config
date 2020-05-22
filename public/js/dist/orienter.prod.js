"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,i){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(void 0).Orienter=i()}(0,function(){function i(t){return Math.round(10*t)/10}function t(t){var i=t||{};switch(this.onOrient=i.onOrient||null,this.onChange=i.onChange||null,this._orient=this._orient.bind(this),this._change=this._change.bind(this),this.lon=this.lastLon=this.deltaLon=null,this.lat=this.lastLat=this.deltaLat=null,this.direction=window.orientation||0,this.direction){case 0:this.fix=0;break;case 90:this.fix=-270;break;case-90:this.fix=-90}navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)?this.os="ios":this.os=-1<navigator.userAgent.indexOf("Android")||navigator.userAgent.indexOf("Linux")?"android":""}return Object.assign(t.prototype,{on:function(){this.lastLon=this.lastLat=null,window.addEventListener("deviceorientation",this._orient,!1),window.addEventListener("orientationchange",this._change,!1)},off:function(){window.removeEventListener("deviceorientation",this._orient,!1),window.removeEventListener("orientationchange",this._change,!1)},_change:function(){this.direction=window.orientation,this.onChange&&this.onChange(this.direction)},changeDirectionTo:function(t){this.direction=t},_orient:function(t){switch(this.os){case"ios":switch(this.direction){case 0:this.lon=t.alpha+t.gamma,0<t.beta&&(this.lat=t.beta-90);break;case 90:t.gamma<0?this.lon=t.alpha-90:this.lon=t.alpha-270,0<t.gamma?this.lat=90-t.gamma:this.lat=-90-t.gamma;break;case-90:t.gamma<0?this.lon=t.alpha-90:this.lon=t.alpha-270,t.gamma<0?this.lat=90+t.gamma:this.lat=-90+t.gamma}break;case"android":switch(this.direction){case 0:this.lon=t.alpha+t.gamma+30,90<t.gamma?this.lat=90-t.beta:this.lat=t.beta-90;break;case 90:this.lon=t.alpha-230,0<t.gamma?this.lat=270-t.gamma:this.lat=-90-t.gamma;break;case-90:this.lon=t.alpha-180,this.lat=-90+t.gamma}}this.lon+=this.fix,this.lon%=360,this.lon<0&&(this.lon+=360),this.lon=i(this.lon),this.lat=i(this.lat),null==this.lastLon&&(this.lastLon=this.lon),this.deltaLon=this.lon-this.lastLon,180<this.deltaLon&&(this.deltaLon-=360),this.deltaLon<-180&&(this.deltaLon+=360),this.lastLon=this.lon,null==this.lastLat&&(this.lastLat=this.lat),this.deltaLat=this.lat-this.lastLat,180<this.deltaLat&&(this.deltaLat-=360),this.deltaLat<-180&&(this.deltaLat+=360),this.lastLat=this.lat,this.onOrient&&this.onOrient({a:i(t.alpha),b:i(t.beta),g:i(t.gamma),lon:this.lon,lat:this.lat,deltaLon:this.deltaLon,deltaLat:this.deltaLat,dir:this.direction})}}),t});