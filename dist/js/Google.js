(function(a,b){if(null===a)throw new Error('Google-maps package can be used only in browser');'function'==typeof define&&define.amd?define(b):'object'==typeof exports?module.exports=b():a.GoogleMapsLoader=b()})('undefined'==typeof window?null:window,function(){'use strict';var a='3.31',b=null,c=null,d=!1,e=[],f=[],g=null,h={};h.URL='https://maps.googleapis.com/maps/api/js',h.KEY=null,h.LIBRARIES=[],h.CLIENT=null,h.CHANNEL=null,h.LANGUAGE=null,h.REGION=null,h.VERSION=a,h.WINDOW_CALLBACK_NAME='__google_maps_api_provider_initializator__',h._googleMockApiObject={},h.load=function(k){null==c?!0==d?k&&e.push(k):(d=!0,window[h.WINDOW_CALLBACK_NAME]=function(){j(k)},h.createLoader()):k&&k(c)},h.createLoader=function(){b=document.createElement('script'),b.type='text/javascript',b.src=h.createUrl(),document.body.appendChild(b)},h.isLoaded=function(){return null!=c},h.createUrl=function(){var k=h.URL;return k+='?callback='+h.WINDOW_CALLBACK_NAME,h.KEY&&(k+='&key='+h.KEY),0<h.LIBRARIES.length&&(k+='&libraries='+h.LIBRARIES.join(',')),h.CLIENT&&(k+='&client='+h.CLIENT),h.CHANNEL&&(k+='&channel='+h.CHANNEL),h.LANGUAGE&&(k+='&language='+h.LANGUAGE),h.REGION&&(k+='&region='+h.REGION),h.VERSION&&(k+='&v='+h.VERSION),k},h.release=function(k){var l=function(){h.KEY=null,h.LIBRARIES=[],h.CLIENT=null,h.CHANNEL=null,h.LANGUAGE=null,h.REGION=null,h.VERSION=a,c=null,d=!1,e=[],f=[],'undefined'!=typeof window.google&&delete window.google,'undefined'!=typeof window[h.WINDOW_CALLBACK_NAME]&&delete window[h.WINDOW_CALLBACK_NAME],null!=g&&(h.createLoader=g,g=null),null!==b&&(b.parentElement.removeChild(b),b=null),k&&k()};d?h.load(function(){l()}):l()},h.onLoad=function(k){f.push(k)},h.makeMock=function(){g=h.createLoader,h.createLoader=function(){window.google=h._googleMockApiObject,window[h.WINDOW_CALLBACK_NAME]()}};var j=function(k){var l;for(d=!1,null==c&&(c=window.google),l=0;l<f.length;l++)f[l](c);for(k&&k(c),l=0;l<e.length;l++)e[l](c);e=[]};return h});