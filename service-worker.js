"use strict";var precacheConfig=[["/product-listing-page/index.html","b3cb98e60a818e368b4cfb6a88f77c65"],["/product-listing-page/static/css/main.8146d499.css","d01d836d12342d72bcaa24ee8538f0c1"],["/product-listing-page/static/js/main.530f7127.js","8322fef1d0f49d4695eddce0f9adc5a9"],["/product-listing-page/static/media/Bebop-CardCase-Front.d234d377.png","d234d3772139dedbdde2ac0d03197c0d"],["/product-listing-page/static/media/Bebop-Motorist-PLP2.4aa880d7.png","4aa880d74f0a8dd439dadf057b5d3bad"],["/product-listing-page/static/media/CardKeeper-Bebop-Back.cdaf45e2.png","cdaf45e229ff1b8779ae61fec7cb2bc9"],["/product-listing-page/static/media/CardKeeper-Domino-Back.20fe36a3.png","20fe36a3a9f1552350415cebdf3efd0e"],["/product-listing-page/static/media/CardKeeper-Jetty-Back.f41da9b8.png","f41da9b8fb81ab38b37cf1a544188ad3"],["/product-listing-page/static/media/CardKeeper-Scout-Back.e3cee618.png","e3cee618667116bb649c28d8d126dda0"],["/product-listing-page/static/media/Crossbody-Bebop.78fbd28b.png","78fbd28bb86ea10d163a5f1c6522a929"],["/product-listing-page/static/media/Crossbody-Domino.65834c37.png","65834c37e5710fa9a9cb86fc2c8f8a8e"],["/product-listing-page/static/media/Crossbody-Jetty.451dfef1.png","451dfef1c18b28ad5bbc16732bdf9b55"],["/product-listing-page/static/media/Crossbody-Scout.5f3a128a.png","5f3a128abed039746a11a31cb1b54751"],["/product-listing-page/static/media/Domino-CardCase-Front.3c366de8.png","3c366de843954dead6a34b2169f4bf6b"],["/product-listing-page/static/media/Domino-Motorist-PLP2.6e3c4208.png","6e3c420840a30c61fce3cd6dc6d6dc2a"],["/product-listing-page/static/media/Grand-Tour-BB.d1ae54a4.png","d1ae54a4975713915bb6c05ff380a7cd"],["/product-listing-page/static/media/Grand-Tour-Bebop.88a27b34.png","88a27b340e966e4c86580a0bcb91d7c6"],["/product-listing-page/static/media/Grand-Tour-Domino.8aadacef.png","8aadacefcbc7871cbf3291e70d97602a"],["/product-listing-page/static/media/Grand-Tour-Jetty.99859741.png","9985974117e249ac39af998d2ff6a5a7"],["/product-listing-page/static/media/Grand-Tour-Scout.969a9bf3.png","969a9bf3090d553c2cd7f099c9d3a855"],["/product-listing-page/static/media/Jetty-CardCase-Front.1a183ef0.png","1a183ef0ed0827963143ac45ffabb428"],["/product-listing-page/static/media/Jetty-Motorist-PLP2.fbae5251.png","fbae5251426418f2b2ec1041862b1fdb"],["/product-listing-page/static/media/Scout-CardCase-Front.7d427e00.png","7d427e007fa088b010cefd9e04f7bd63"],["/product-listing-page/static/media/Small-Bpk-Bebop.ef048055.png","ef048055ef818d5de79389a276442600"],["/product-listing-page/static/media/Small-Bpk-Domino.7fc61b4e.png","7fc61b4e1d8a21c68748ea7f2c305cb1"],["/product-listing-page/static/media/Small-Bpk-Jetty.2fd8ab0c.png","2fd8ab0c7450eba0495d7fe0bb640a04"],["/product-listing-page/static/media/Weekender-BB.34f84932.png","34f849327188313a5ee1b712dc36e23d"],["/product-listing-page/static/media/Weekender-Bebop.f0cb5456.png","f0cb54568add54fe9ae89c83cfcce03b"],["/product-listing-page/static/media/Weekender-Domino.c5c3c898.png","c5c3c898f3372b7ed219f6fd5843142d"],["/product-listing-page/static/media/Weekender-Jetty.dcf631f0.png","dcf631f0ad8fc451dec2844773944288"],["/product-listing-page/static/media/Weekender-Scout.4eb1a061.png","4eb1a061eda19f995202aabe9f53923d"],["/product-listing-page/static/media/logo.7fa95b33.svg","7fa95b337a141255daf1619796c92085"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/product-listing-page/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});