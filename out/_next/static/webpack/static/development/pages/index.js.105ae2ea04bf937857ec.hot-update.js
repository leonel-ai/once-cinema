webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/react-reveal/Bounce.js":
/*!*********************************************!*\
  !*** ./node_modules/react-reveal/Bounce.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(o){return o&&o.__esModule?o:{default:o}}function _objectWithoutProperties(o,n){var r={};for(var t in o)n.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(o,t)&&(r[t]=o[t]);return r}function make(o,n){var r=n.left,t=n.right,e=n.up,a=n.down,p=n.top,i=n.bottom,s=n.mirror,l=n.opposite,u=(r?1:0)|(t?2:0)|(p||a?4:0)|(i||e?8:0)|(s?16:0)|(l?32:0)|(o?64:0);if(lookup.hasOwnProperty(u))return lookup[u];if(!s!=!(o&&l)){var d=[t,r,i,p,a,e];r=d[0],t=d[1],p=d[2],i=d[3],e=d[4],a=d[5]}var f=r||t,c=p||i||e||a,m=f||c,y=void 0,v=void 0,_=void 0,b=void 0,x=void 0,T=void 0,g=void 0,h=void 0,k=void 0,w=void 0,q=void 0,O=void 0,P=void 0,j=void 0;return o?(b=f?(t?"-":"")+"20px":0,x=c?(e||i?"":"-")+"10px":"0",T=(a||p?"":"-")+"20px",P=f?(r?"-":"")+"2000px":"0",j=c?(a||p?"-":"")+"2000px":"0"):(v=f?(r?"-":"")+"3000px":"0",_=c?(a||p?"-":"")+"3000px":"0",g=f?(t?"-":"")+"25px":"0",h=c?(e||i?"-":"")+"25px":"0",k=f?(r?"-":"")+"10px":"0",w=c?(a||p?"-":"")+"10px":"0",q=f?(t?"-":"")+"5px":"0",O=c?(e||i?"-":"")+"5px":"0"),y=m?o?"\n        20% {\n          transform: translate3d("+b+", "+x+", 0);\n          }\n        "+(c?"40%, 45% {\n            opacity: 1;\n            transform: translate3d(0, "+T+", 0);\n          }":"")+"\n          to {\n            opacity: 0;\n            transform: translate3d("+P+", "+j+", 0);\n        }\n      ":"from, 60%, 75%, 90%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n      }\n      from {\n        opacity: 0;\n        transform: translate3d("+v+", "+_+", 0);\n      }\n      60% {\n        opacity: 1;\n        transform: translate3d("+g+", "+h+", 0);\n      }\n      75% {\n        transform: translate3d("+k+", "+w+", 0);\n      }\n      90% {\n        transform: translate3d("+q+", "+O+", 0);\n      }\n      to {\n        transform: none;\n      }":o?"20% {\n          transform: scale3d(.9, .9, .9);\n        }\n        50%, 55% {\n          opacity: 1;\n          transform: scale3d(1.1, 1.1, 1.1);\n        }\n        to {\n          opacity: 0;\n          transform: scale3d(.3, .3, .3);\n      }":"from, 20%, 40%, 60%, 80%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n      }\n      0% {\n        opacity: 0;\n        transform: scale3d(.3, .3, .3);\n      }\n      20% {\n        transform: scale3d(1.1, 1.1, 1.1);\n      }\n      40% {\n        transform: scale3d(.9, .9, .9);\n      }\n      60% {\n        opacity: 1;\n        transform: scale3d(1.03, 1.03, 1.03);\n      }\n      80% {\n        transform: scale3d(.97, .97, .97);\n      }\n      to {\n        opacity: 1;\n        transform: scale3d(1, 1, 1);\n      }",lookup[u]=(0,_globals.animation)(y),lookup[u]}function Bounce(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_globals.defaults,n=o.children,r=(o.out,o.forever),t=o.timeout,e=o.duration,a=void 0===e?_globals.defaults.duration:e,p=o.delay,i=void 0===p?_globals.defaults.delay:p,s=o.count,l=void 0===s?_globals.defaults.count:s,u=_objectWithoutProperties(o,["children","out","forever","timeout","duration","delay","count"]),d={make:make,duration:void 0===t?a:t,delay:i,forever:r,count:l,style:{animationFillMode:"both"},reverse:u.left};return(0,_wrap2.default)(u,d,d,n)}Object.defineProperty(exports,"__esModule",{value:!0});var _propTypes=__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),_wrap=__webpack_require__(/*! ./wrap */ "./node_modules/react-reveal/wrap.js"),_wrap2=_interopRequireDefault(_wrap),_globals=__webpack_require__(/*! ./globals */ "./node_modules/react-reveal/globals.js"),propTypes={out:_propTypes.bool,left:_propTypes.bool,right:_propTypes.bool,top:_propTypes.bool,bottom:_propTypes.bool,mirror:_propTypes.bool,opposite:_propTypes.bool,duration:_propTypes.number,timeout:_propTypes.number,delay:_propTypes.number,count:_propTypes.number,forever:_propTypes.bool},lookup={};Bounce.propTypes=propTypes,exports.default=Bounce,module.exports=exports.default;

/***/ }),

/***/ "./node_modules/react-reveal/Flip.js":
/*!*******************************************!*\
  !*** ./node_modules/react-reveal/Flip.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _objectWithoutProperties(e,o){var t={};for(var r in e)o.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}function make(e,o){var t=o.left,r=o.right,n=o.top,p=o.bottom,i=o.x,a=o.y,s=o.mirror,l=o.opposite,u=(t?1:0)|(r||a?2:0)|(n||i?4:0)|(p?8:0)|(s?16:0)|(l?32:0)|(e?64:0);if(lookup.hasOwnProperty(u))return lookup[u];if(!s!=!(e&&l)){var d=[r,t,p,n,a,i];t=d[0],r=d[1],n=d[2],p=d[3],i=d[4],a=d[5]}var f=void 0;if(i||a||t||r||n||p){var m=i||n||p?(p?"-":"")+"1":"0",c=a||r||t?(t?"-":"")+"1":"0";f=e?"from {\n          transform: perspective(400px);\n        }\n        30% {\n          transform: perspective(400px) rotate3d("+m+", "+c+", 0, -15deg);\n          opacity: 1;\n        }\n        to {\n          transform: perspective(400px) rotate3d("+m+", "+c+", 0, 90deg);\n          opacity: 0;\n        }":"from {\n          transform: perspective(400px) rotate3d("+m+", "+c+", 0, 90deg);\n          animation-timing-function: ease-in;\n          opacity: 0;\n        }\n        40% {\n          transform: perspective(400px) rotate3d("+m+", "+c+", 0, -20deg);\n          animation-timing-function: ease-in;\n        }\n        60% {\n          transform: perspective(400px) rotate3d("+m+", "+c+", 0, 10deg);\n          opacity: 1;\n        }\n        80% {\n          transform: perspective(400px) rotate3d("+m+", "+c+", 0, -5deg);\n        }\n        to {\n          transform: perspective(400px);\n        }"}else f="from {\n          transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n          animation-timing-function: ease-out;\n          opacity: "+(e?"1":"0")+";\n        }\n        40% {\n          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n          animation-timing-function: ease-out;\n        }\n        50% {\n          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n          animation-timing-function: ease-in;\n        }\n        to {\n          transform: perspective(400px);\n          animation-timing-function: ease-in;\n          opacity: "+(e?"0":"1")+";\n        }";return lookup[u]=(0,_globals.animation)(f),lookup[u]}function Flip(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_globals.defaults,o=e.children,t=(e.out,e.forever),r=e.timeout,n=e.duration,p=void 0===n?_globals.defaults.duration:n,i=e.delay,a=void 0===i?_globals.defaults.delay:i,s=e.count,l=void 0===s?_globals.defaults.count:s,u=_objectWithoutProperties(e,["children","out","forever","timeout","duration","delay","count"]),d={make:make,duration:void 0===r?p:r,delay:a,forever:t,count:l,style:{animationFillMode:"both",backfaceVisibility:"visible"}};return(0,_wrap2.default)(u,d,d,o)}Object.defineProperty(exports,"__esModule",{value:!0});var _propTypes=__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),_wrap=__webpack_require__(/*! ./wrap */ "./node_modules/react-reveal/wrap.js"),_wrap2=_interopRequireDefault(_wrap),_globals=__webpack_require__(/*! ./globals */ "./node_modules/react-reveal/globals.js"),propTypes={out:_propTypes.bool,left:_propTypes.bool,right:_propTypes.bool,top:_propTypes.bool,bottom:_propTypes.bool,mirror:_propTypes.bool,opposite:_propTypes.bool,duration:_propTypes.number,timeout:_propTypes.number,delay:_propTypes.number,count:_propTypes.number,forever:_propTypes.bool},lookup={};Flip.propTypes=propTypes,exports.default=Flip,module.exports=exports.default;

/***/ }),

/***/ "./node_modules/react-reveal/LightSpeed.js":
/*!*************************************************!*\
  !*** ./node_modules/react-reveal/LightSpeed.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(o){return o&&o.__esModule?o:{default:o}}function _objectWithoutProperties(o,e){var r={};for(var t in o)e.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(o,t)&&(r[t]=o[t]);return r}function make(o,e){var r=e.left,t=e.right,p=e.mirror,n=e.opposite,a=(r?1:0)|(t?2:0)|(p?16:0)|(n?32:0)|(o?64:0);if(lookup.hasOwnProperty(a))return lookup[a];if(!p!=!(o&&n)){var i=[t,r];r=i[0],t=i[1]}var l=r?"-100%":t?"100%":"0",u=o?"from {\n        opacity: 1;\n      }\n      to {\n        transform: translate3d("+l+", 0, 0) skewX(30deg);\n        opacity: 0;\n      }\n    ":"from {\n        transform: translate3d("+l+", 0, 0) skewX(-30deg);\n        opacity: 0;\n      }\n      60% {\n        transform: skewX(20deg);\n        opacity: 1;\n      }\n      80% {\n        transform: skewX(-5deg);\n        opacity: 1;\n      }\n      to {\n        transform: none;\n        opacity: 1;\n      }";return lookup[a]=(0,_globals.animation)(u),lookup[a]}function LightSpeed(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_globals.defaults,e=o.children,r=(o.out,o.forever),t=o.timeout,p=o.duration,n=void 0===p?_globals.defaults.duration:p,a=o.delay,i=void 0===a?_globals.defaults.delay:a,l=o.count,u=void 0===l?_globals.defaults.count:l,s=_objectWithoutProperties(o,["children","out","forever","timeout","duration","delay","count"]),d={make:make,duration:void 0===t?n:t,delay:i,forever:r,count:u,style:{animationFillMode:"both"}};s.left,s.right,s.mirror,s.opposite;return(0,_wrap2.default)(s,d,d,e)}Object.defineProperty(exports,"__esModule",{value:!0});var _wrap=__webpack_require__(/*! ./wrap */ "./node_modules/react-reveal/wrap.js"),_wrap2=_interopRequireDefault(_wrap),_propTypes=__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),_globals=__webpack_require__(/*! ./globals */ "./node_modules/react-reveal/globals.js"),propTypes={out:_propTypes.bool,left:_propTypes.bool,right:_propTypes.bool,mirror:_propTypes.bool,opposite:_propTypes.bool,duration:_propTypes.number,timeout:_propTypes.number,delay:_propTypes.number,count:_propTypes.number,forever:_propTypes.bool},lookup={};LightSpeed.propTypes=propTypes,exports.default=LightSpeed,module.exports=exports.default;

/***/ }),

/***/ "./node_modules/react-reveal/Reveal.js":
/*!*********************************************!*\
  !*** ./node_modules/react-reveal/Reveal.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _objectWithoutProperties(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}function Reveal(e){function t(e){return e?_?{duration:n,delay:f,count:s,forever:d,className:_,style:{}}:y:i?{duration:void 0===o?u:o,delay:p,count:a,forever:l,className:i,style:{}}:c}var r=e.children,o=e.timeout,u=e.duration,p=e.delay,a=e.count,l=e.forever,n=e.durationOut,f=e.delayOut,s=e.countOut,d=e.foreverOut,i=e.effect,_=e.effectOut,c=e.inEffect,y=e.outEffect,O=_objectWithoutProperties(e,["children","timeout","duration","delay","count","forever","durationOut","delayOut","countOut","foreverOut","effect","effectOut","inEffect","outEffect"]);return(0,_wrap2.default)(O,t(!1),t(!0),r)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},_propTypes=__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),_globals=__webpack_require__(/*! ./globals */ "./node_modules/react-reveal/globals.js"),_wrap=__webpack_require__(/*! ./wrap */ "./node_modules/react-reveal/wrap.js"),_wrap2=_interopRequireDefault(_wrap),_Fade=__webpack_require__(/*! ./Fade */ "./node_modules/react-reveal/Fade.js"),_Fade2=_interopRequireDefault(_Fade),propTypes={in:_propTypes.object,out:(0,_propTypes.oneOfType)([_propTypes.object,(0,_propTypes.oneOf)([!1])]),effect:_propTypes.string,effectOut:_propTypes.string,duration:_propTypes.number,timeout:_propTypes.number,delay:_propTypes.number,count:_propTypes.number,forever:_propTypes.bool,durationOut:_propTypes.number,delayOut:_propTypes.number,countOut:_propTypes.number,foreverOut:_propTypes.bool},defaultProps=_extends({},_globals.defaults,{durationOut:_globals.defaults.duration,delayOut:_globals.defaults.delay,countOut:_globals.defaults.count,foreverOut:_globals.defaults.forever,inEffect:(0,_Fade2.default)(_globals.defaults),outEffect:(0,_Fade2.default)(_extends({out:!0},_globals.defaults))});Reveal.propTypes=propTypes,Reveal.defaultProps=defaultProps,exports.default=Reveal,module.exports=exports.default;

/***/ }),

/***/ "./node_modules/react-reveal/Roll.js":
/*!*******************************************!*\
  !*** ./node_modules/react-reveal/Roll.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(o){return o&&o.__esModule?o:{default:o}}function _objectWithoutProperties(o,e){var r={};for(var t in o)e.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(o,t)&&(r[t]=o[t]);return r}function make(o,e){var r=e.left,t=e.right,p=e.up,l=e.down,a=e.top,u=e.bottom,i=e.big,n=e.mirror,s=e.opposite,d=(r?1:0)|(t?2:0)|(a||l?4:0)|(u||p?8:0)|(n?16:0)|(s?32:0)|(o?64:0)|(i?128:0);if(lookup.hasOwnProperty(d))return lookup[d];if(!n!=!(o&&s)){var _=[t,r,u,a,l,p];r=_[0],t=_[1],a=_[2],u=_[3],p=_[4],l=_[5]}var y=i?"2000px":"100%",b=r?"-"+y:t?y:"0",f=l||a?"-"+y:p||u?y:"0";return lookup[d]=(0,_globals.animation)("\n    "+(o?"to":"from")+" {opacity: 0;transform: translate3d("+b+", "+f+", 0) rotate3d(0, 0, 1, -120deg);}\n\t  "+(o?"from":"to")+" {opacity: 1;transform: none}\n  "),lookup[d]}function Roll(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_globals.defaults,e=o.children,r=(o.out,o.forever),t=o.timeout,p=o.duration,l=void 0===p?_globals.defaults.duration:p,a=o.delay,u=void 0===a?_globals.defaults.delay:a,i=o.count,n=void 0===i?_globals.defaults.count:i,s=_objectWithoutProperties(o,["children","out","forever","timeout","duration","delay","count"]),d={make:make,duration:void 0===t?l:t,delay:u,forever:r,count:n,style:{animationFillMode:"both"}};return(0,_wrap2.default)(s,d,d,e)}Object.defineProperty(exports,"__esModule",{value:!0});var _wrap=__webpack_require__(/*! ./wrap */ "./node_modules/react-reveal/wrap.js"),_wrap2=_interopRequireDefault(_wrap),_propTypes=__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),_globals=__webpack_require__(/*! ./globals */ "./node_modules/react-reveal/globals.js"),propTypes={out:_propTypes.bool,left:_propTypes.bool,right:_propTypes.bool,top:_propTypes.bool,bottom:_propTypes.bool,big:_propTypes.bool,mirror:_propTypes.bool,opposite:_propTypes.bool,duration:_propTypes.number,timeout:_propTypes.number,delay:_propTypes.number,count:_propTypes.number,forever:_propTypes.bool},lookup={};Roll.propTypes=propTypes,exports.default=Roll,module.exports=exports.default;

/***/ }),

/***/ "./node_modules/react-reveal/Rotate.js":
/*!*********************************************!*\
  !*** ./node_modules/react-reveal/Rotate.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(o){return o&&o.__esModule?o:{default:o}}function _objectWithoutProperties(o,e){var r={};for(var t in o)e.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(o,t)&&(r[t]=o[t]);return r}function make(o,e){var r=e.left,t=e.right,p=e.up,a=e.down,l=e.top,u=e.bottom,i=e.mirror,n=e.opposite,s=(r?1:0)|(t?2:0)|(l||a?4:0)|(u||p?8:0)|(i?16:0)|(n?32:0)|(o?64:0);if(lookup.hasOwnProperty(s))return lookup[s];if(!i!=!(o&&n)){var d=[t,r,u,l,a,p];r=d[0],t=d[1],l=d[2],u=d[3],p=d[4],a=d[5]}var f="-200deg",_="center";return(a||l)&&r&&(f="-45deg"),((a||l)&&t||(p||u)&&r)&&(f="45deg"),(p||u)&&t&&(f="-90deg"),(r||t)&&(_=(r?"left":"right")+" bottom"),lookup[s]=(0,_globals.animation)("\n    "+(o?"to":"from")+" { opacity: 0; transform-origin: "+_+"; transform: rotate3d(0, 0, 1, "+f+");}\n    "+(o?"from":"to")+" { opacity: 1; transform-origin: "+_+"; transform: none;}\n  "),lookup[s]}function Rotate(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_globals.defaults,e=o.children,r=(o.out,o.forever),t=o.timeout,p=o.duration,a=void 0===p?_globals.defaults.duration:p,l=o.delay,u=void 0===l?_globals.defaults.delay:l,i=o.count,n=void 0===i?_globals.defaults.count:i,s=_objectWithoutProperties(o,["children","out","forever","timeout","duration","delay","count"]),d={make:make,duration:void 0===t?a:t,delay:u,forever:r,count:n,style:{animationFillMode:"both"}};return(0,_wrap2.default)(s,d,d,e)}Object.defineProperty(exports,"__esModule",{value:!0});var _propTypes=__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),_wrap=__webpack_require__(/*! ./wrap */ "./node_modules/react-reveal/wrap.js"),_wrap2=_interopRequireDefault(_wrap),_globals=__webpack_require__(/*! ./globals */ "./node_modules/react-reveal/globals.js"),propTypes={out:_propTypes.bool,left:_propTypes.bool,right:_propTypes.bool,top:_propTypes.bool,bottom:_propTypes.bool,mirror:_propTypes.bool,opposite:_propTypes.bool,duration:_propTypes.number,timeout:_propTypes.number,delay:_propTypes.number,count:_propTypes.number,forever:_propTypes.bool},lookup={};Rotate.propTypes=propTypes,exports.default=Rotate,module.exports=exports.default;

/***/ }),

/***/ "./node_modules/react-reveal/Slide.js":
/*!********************************************!*\
  !*** ./node_modules/react-reveal/Slide.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(o){return o&&o.__esModule?o:{default:o}}function _objectWithoutProperties(o,e){var r={};for(var t in o)e.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(o,t)&&(r[t]=o[t]);return r}function make(o,e){var r=e.left,t=e.right,p=e.up,l=e.down,u=e.top,a=e.bottom,i=e.big,n=e.mirror,s=e.opposite,d=(r?1:0)|(t?2:0)|(u||l?4:0)|(a||p?8:0)|(n?16:0)|(s?32:0)|(o?64:0)|(i?128:0);if(lookup.hasOwnProperty(d))return lookup[d];var _=r||t||p||l||u||a,f=void 0,b=void 0;if(_){if(!n!=!(o&&s)){var y=[t,r,a,u,l,p];r=y[0],t=y[1],u=y[2],a=y[3],p=y[4],l=y[5]}var m=i?"2000px":"100%";f=r?"-"+m:t?m:"0",b=l||u?"-"+m:p||a?m:"0"}return lookup[d]=(0,_globals.animation)((o?"to":"from")+" {"+(_?" transform: translate3d("+f+", "+b+", 0);":"")+"}\n     "+(o?"from":"to")+" {transform: none;} "),lookup[d]}function Slide(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_globals.defaults,e=o.children,r=(o.out,o.forever),t=o.timeout,p=o.duration,l=void 0===p?_globals.defaults.duration:p,u=o.delay,a=void 0===u?_globals.defaults.delay:u,i=o.count,n=void 0===i?_globals.defaults.count:i,s=_objectWithoutProperties(o,["children","out","forever","timeout","duration","delay","count"]),d={make:make,duration:void 0===t?l:t,delay:a,forever:r,count:n,style:{animationFillMode:"both"},reverse:s.left};return(0,_wrap2.default)(s,d,d,e)}Object.defineProperty(exports,"__esModule",{value:!0});var _propTypes=__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),_wrap=__webpack_require__(/*! ./wrap */ "./node_modules/react-reveal/wrap.js"),_wrap2=_interopRequireDefault(_wrap),_globals=__webpack_require__(/*! ./globals */ "./node_modules/react-reveal/globals.js"),propTypes={out:_propTypes.bool,left:_propTypes.bool,right:_propTypes.bool,top:_propTypes.bool,bottom:_propTypes.bool,big:_propTypes.bool,mirror:_propTypes.bool,opposite:_propTypes.bool,duration:_propTypes.number,timeout:_propTypes.number,delay:_propTypes.number,count:_propTypes.number,forever:_propTypes.bool},lookup={};Slide.propTypes=propTypes,exports.default=Slide,module.exports=exports.default;

/***/ }),

/***/ "./node_modules/react-reveal/Zoom.js":
/*!*******************************************!*\
  !*** ./node_modules/react-reveal/Zoom.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(o){return o&&o.__esModule?o:{default:o}}function _objectWithoutProperties(o,e){var r={};for(var t in o)e.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(o,t)&&(r[t]=o[t]);return r}function make(o,e){var r=e.left,t=e.right,p=e.up,n=e.down,a=e.top,i=e.bottom,l=e.mirror,u=e.opposite,s=(r?1:0)|(t?2:0)|(a||n?4:0)|(i||p?8:0)|(l?16:0)|(u?32:0)|(o?64:0);if(lookup.hasOwnProperty(s))return lookup[s];if(!l!=!(o&&u)){var d=[t,r,i,a,n,p];r=d[0],t=d[1],a=d[2],i=d[3],p=d[4],n=d[5]}var f=r||t,c=a||i||p||n,m=f||c,y=void 0,b=void 0,_=void 0,v=void 0,T=void 0;return m?o?(b=f?(r?"":"-")+"42px":"0",_=c?(n||a?"-":"")+"60px":"0",v=f?(t?"":"-")+"2000px":"0",T=c?(p||i?"":"-")+"2000px":"0",y="40% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+b+", "+_+", 0);\n        }\n        to {\n          opacity: 0;\n          transform: scale(.1) translate3d("+v+", "+T+", 0);\n          transform-origin: "+(c?"center bottom":(r?"left":"right")+" center")+";\n        }"):(b=f?(r?"-":"")+"1000px":"0",_=c?(n||a?"-":"")+"1000px":"0",v=f?(t?"-":"")+"10px":"0",T=c?(p||i?"-":"")+"60px":"0",y="from {\n          opacity: 0;\n          transform: scale3d(.1, .1, .1) translate3d("+b+", "+_+", 0);\n          animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n        }\n        60% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+v+", "+T+", 0);\n          animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n        }"):y=(o?"to":"from")+" {opacity: 0; transform: scale3d(.1, .1, .1);} "+(o?"from":"to")+" { opacity: 1; transform: none;}",lookup[s]=(0,_globals.animation)(y),lookup[s]}function Zoom(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_globals.defaults,e=o.children,r=(o.out,o.forever),t=o.timeout,p=o.duration,n=void 0===p?_globals.defaults.duration:p,a=o.delay,i=void 0===a?_globals.defaults.delay:a,l=o.count,u=void 0===l?_globals.defaults.count:l,s=_objectWithoutProperties(o,["children","out","forever","timeout","duration","delay","count"]),d={make:make,duration:void 0===t?n:t,delay:i,forever:r,count:u,style:{animationFillMode:"both"},reverse:s.left};return(0,_wrap2.default)(s,d,d,e)}Object.defineProperty(exports,"__esModule",{value:!0});var _propTypes=__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),_wrap=__webpack_require__(/*! ./wrap */ "./node_modules/react-reveal/wrap.js"),_wrap2=_interopRequireDefault(_wrap),_globals=__webpack_require__(/*! ./globals */ "./node_modules/react-reveal/globals.js"),propTypes={out:_propTypes.bool,left:_propTypes.bool,right:_propTypes.bool,top:_propTypes.bool,bottom:_propTypes.bool,mirror:_propTypes.bool,opposite:_propTypes.bool,duration:_propTypes.number,timeout:_propTypes.number,delay:_propTypes.number,count:_propTypes.number,forever:_propTypes.bool},lookup={};Zoom.propTypes=propTypes,exports.default=Zoom,module.exports=exports.default;

/***/ }),

/***/ "./node_modules/react-reveal/index.js":
/*!********************************************!*\
  !*** ./node_modules/react-reveal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _Reveal=__webpack_require__(/*! ./Reveal */ "./node_modules/react-reveal/Reveal.js");Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return _interopRequireDefault(_Reveal).default}});var _Fade=__webpack_require__(/*! ./Fade */ "./node_modules/react-reveal/Fade.js");Object.defineProperty(exports,"Fade",{enumerable:!0,get:function(){return _interopRequireDefault(_Fade).default}});var _Bounce=__webpack_require__(/*! ./Bounce */ "./node_modules/react-reveal/Bounce.js");Object.defineProperty(exports,"Bounce",{enumerable:!0,get:function(){return _interopRequireDefault(_Bounce).default}});var _Roll=__webpack_require__(/*! ./Roll */ "./node_modules/react-reveal/Roll.js");Object.defineProperty(exports,"Roll",{enumerable:!0,get:function(){return _interopRequireDefault(_Roll).default}});var _Slide=__webpack_require__(/*! ./Slide */ "./node_modules/react-reveal/Slide.js");Object.defineProperty(exports,"Slide",{enumerable:!0,get:function(){return _interopRequireDefault(_Slide).default}});var _Flip=__webpack_require__(/*! ./Flip */ "./node_modules/react-reveal/Flip.js");Object.defineProperty(exports,"Flip",{enumerable:!0,get:function(){return _interopRequireDefault(_Flip).default}}),Object.defineProperty(exports,"Reveal",{enumerable:!0,get:function(){return _interopRequireDefault(_Reveal).default}});var _Rotate=__webpack_require__(/*! ./Rotate */ "./node_modules/react-reveal/Rotate.js");Object.defineProperty(exports,"Rotate",{enumerable:!0,get:function(){return _interopRequireDefault(_Rotate).default}});var _LightSpeed=__webpack_require__(/*! ./LightSpeed */ "./node_modules/react-reveal/LightSpeed.js");Object.defineProperty(exports,"LightSpeed",{enumerable:!0,get:function(){return _interopRequireDefault(_LightSpeed).default}});var _Zoom=__webpack_require__(/*! ./Zoom */ "./node_modules/react-reveal/Zoom.js");Object.defineProperty(exports,"Zoom",{enumerable:!0,get:function(){return _interopRequireDefault(_Zoom).default}});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-reveal */ "./node_modules/react-reveal/index.js");
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_reveal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_videoPlayer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/videoPlayer */ "./components/videoPlayer.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "/Users/leonela/Documents/misc/side_projects/once-cinema/pages/index.js";







var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _React$Component);

  function Home() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "ONCE Captured",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "jumbotron jumbotron-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "grid-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/logo-black.png",
        alt: "brand logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_6__["Pulse"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "cta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/services",
        className: "icon-block",
        target: "_self",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Work with us \xA0\xA0", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fas fa-long-arrow-alt-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "banner-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_6__["Fade"], {
        bottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        className: "banner-title display-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "YOUR", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), "MOMENT"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        className: "banner-subhead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "ONCE Captured"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "lead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Wedding & event cinematography with a story to tell."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "work-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/work",
        className: "subpage-link",
        target: "_self",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_6__["Fade"], {
        bottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "work-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "WORK"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "work-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "The adventure starts here."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fas fa-long-arrow-alt-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "services-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/services",
        className: "subpage-link",
        target: "_self",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_6__["Fade"], {
        bottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "services-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "SERVICES"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "services-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Book your next big event."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fas fa-long-arrow-alt-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row highlight-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video-overlay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://player.vimeo.com/video/349732658",
        target: "_blank",
        alt: "highlight reel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", {
        width: "52px",
        height: "52px",
        viewBox: "-5 -5 52 52",
        className: "icon-play",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        id: "Group-5",
        transform: "matrix(1,0,0,1,2,2)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        id: "Triangle-2",
        transform: "matrix(-3.82857e-16,1,-1,-3.82857e-16,39.1429,-1.85714)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M20.5,14L27,23.286L14,23.286L20.5,14Z",
        fill: "rgb(239,58,80)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("circle", {
        id: "Oval",
        cx: "19",
        cy: "19",
        r: "19",
        fill: "none",
        stroke: "rgb(239,58,80)",
        strokeWidth: "3px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_6__["Fade"], {
        bottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "video-headline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Watch Reel")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video-player",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video-embed__container",
        poster: "https://i.vimeocdn.com/video/770745901.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_videoPlayer__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video__poster",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      })));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.105ae2ea04bf937857ec.hot-update.js.map