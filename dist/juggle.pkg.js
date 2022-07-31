/*!
 * @waxs/juggle (1.0.0) by Sander Hidding
 * Juggle your objects and data sets, combine, relate or create new segments.
 * This source code is licensed under the MIT license found in the GitHub repository (git+https://github.com/waxs/juggle.git)
 */
var Juggle=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e,n){"use strict";var r=function(t){return Array.isArray(t)};function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.a=function(t){return r(t)?"array":o(t)}},function(t,e,n){"use strict";e.a=function(t){return!(!t||0!==Object.keys(t).length)}},function(t,e,n){"use strict";var r=n(0),o=n(1);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var i=function(t,e){return Object(r.a)(t)===e.name.toLowerCase()},c=function(t,e,n){return n.reduce((function(n,o){var c=e[o],u=t[o];if("object"===Object(r.a)(u)&&(u=u.required?u.value:null),null===u)return n;if(!u)return console.error("A key (".concat(o,") has not been declared on the item:"),e),n.push(!1),n;var f="array"===Object(r.a)(u),l=f?u.some((function(t){return i(c,t)})):i(c,u),s=f?u.map((function(t){return t.name})).join(", "):u.name;return l||console.error("Given value for ".concat(o," (").concat(a(c),") is not of a valid type matching the schema: [").concat(s,"]")),n.push(l),n}),[])};e.a=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t?function(n){if(!e&&(Object(o.a)(n)||!n))return console.error("No item (or empty object) passed to validate"),!0;var r=Object.keys(t);return c(t,n,r).every((function(t){return!!t}))}:function(){return!0}}},function(t,e,n){"use strict";var r=function(t,e){Object.keys(e).forEach((function(n){return t.prototype[n]=e[n]}))},o=function(t,e){Object.keys(e).forEach((function(n){e[n](t.prototype)}))},a=n(0),i=function(t,e){if(e&&"array"!==Object(a.a)(t)?t:t.every((function(t){return t})))return console.error(e)&&!0};function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._events={}}var e,n,r;return e=t,(n=[{key:"_handle",value:function(t){Object.keys(this._events).includes(t)||(this._events[t]=[])}},{key:"dispatch",value:function(t,e){this._events[t]&&this._events[t].map((function(t){t.callback&&t.callback(e)}))}},{key:"on",value:function(t,e){(function(t,e){return i(e,'A callback is mandatory for "'.concat(t,"\", specify the event on('name', () => { ... })."))})(t,!e)||(this._handle(t),this._events[t].push({callback:e}))}},{key:"remove",value:function(t){delete this._events[t]}}])&&c(e.prototype,n),r&&c(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();var f={event:function(t){var e=new u;Object.defineProperty(t,"event",{get:function(){return e},set:function(){}})}},l=function(t,e,n){var r="array"===Object(a.a)(e)?e:e.split("."),o=r.slice(0,-1),i=r[r.length-1];return o.reduce((function(t,e){return t[e]=t[e]||{}}),t)[i]=n},s=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"_",r=Object.keys(t);return r.reduce((function(r,o){return r[e+(n&&n)+o]=t[o],delete t[o],r}),t)},y=function(t){var e="array"===Object(a.a)(t)?t:t.split(".");return[e.shift(),!!e.length&&e]};function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(t){c=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var b=function(t,e){if(!e||!e.length)return!1;var n="array"===Object(a.a)(e)?e:e.split(".");return n.length?n.reduce((function(t,e){return t[e]||!1}),t):t[key]},h=function(t,e){var n=function(t){return"array"===Object(a.a)(t)?r(t):e(t)},r=function(t){return t.map(n)},o={array:function(t){return r(t)},object:function(t){return n(t)}},i=Object(a.a)(t);return Object.keys(o).includes(i)?o[i](t):console.error("Not a valid type given: ".concat(i))},d=function(t){return"array"!==Object(a.a)(t)?[t]:t},m=function(t,e,n){var r=t[0];return b(r,e)?e:[n]};function g(t){return function(t){if(Array.isArray(t))return O(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return O(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _=["array","object"];var S={_deconstruct:function(t){var e=p(y(t),2),n=e[0],r=e[1],o=this._d[n]&&this._d[n].data,a=Object.assign({},this._d[n]);return delete a.data,{name:n,path:r,data:o,info:o&&a}},_exists:function(t){return Object.keys(this._d).includes(t)},_find:function(t,e,n){var r=Object(a.a)(e),o=this._d[r].filter((function(t){return t&&t[key]===value}));return o.length?o[0]:null},_merge:function(t,e){var n=d(t.data),r=d(e.data),o=m(n,t.path,e.name),a=m(r,e.path,"id");return h(n,(function(t){var e=b(t,o),n=function(t,e,n){var r=t.filter((function(t){return b(t,e)===n}));return r.length&&r[0]}(r,a,e);return l(t,o,n||null),t}))},_replace:function(t,e,n){var r=this,o=Object(a.a)(e);if(!_.includes(o))return console.error("Not a valid type given: ".concat(o));var i=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){w(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({format:o,data:e,length:e&&(e.length||1)},n),c=s(i,t,".");return Object.entries(c).forEach((function(t){l.apply(void 0,[r._d].concat(g(t)))})),this}};var P=function(t){var e=t.name,n=t.path,r=t.data,o=t.event,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(n&&h(r,(function(t){l(t,n,a)})),!n){var i=d(r);i.push(a),this._replace(e,i)}return o&&o(e),this};var A=function(t,e){var n=t.name,r=t.path,o=t.data,a=t.event;return h(o,(function(t){return l(t,r,e(t)),t})),a&&a(n),this};function k(t){return function(t){if(Array.isArray(t))return E(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return E(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var T=function(t,e){var n=t.name,r=t.data,o=t.path,a=t.event;return o?(e||console.error("No keys have been specified to bundle."),h(r,(function(t){e&&d(e).forEach((function(e){l(t,[].concat(k(o),[e]),t[e]),delete t[e]}))})),a&&a(n),this):console.error('No path given, use "[set].[path]" to target a key.')},I=function(t,e){for(var n=[],r=0;r<t.length;r+=e)n.push(t.slice(r,r+e));return n},x=function(t){return t.reduce((function(t,e){return t+e.length}),0)};var D=function(t){var e=t.name,n=t.data,r=t.event,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,a=I(d(n),o);return this._replace(e,a,{size:o,chunks:a.length,length:x(a)}),r&&r(e),this};function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(Object(n),!0).forEach((function(e){M(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function M(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var q=function(t,e){var n=t.name,r=t.data,o=t.event,a=[];return h(r,(function(t){return a.push(C(C({},t),e(t))),a})),this._replace(n,a),o&&o(n),this};var R=function(t,e){var n=t.name,r=t.event;return this._replace(n,e,{chunks:!1}),r&&r(n),this};var U=function(t){var e=t.name,n=t.data,r=t.event,o=h(n,(function(t){return function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=Object.keys(e);return o.forEach((function(o){var i=n?n+"_"+o:o;"object"===Object(a.a)(e[o])?t(e[o],i,r):r[i]=e[o]})),r}(t)}));return this._replace(e,o),r&&r(e),this};var B=function(t){var e=t.name;return this._exists(e)?(delete this._d[e],this):console.error("This set is not active: ".concat(e))};var $=function(t){return t.info};var J=function(t,e){var n=this._deconstruct(e),r=this._merge(t,n);return this._replace(t.name,r),this.flush(n.name),t.event&&t.event(t.name),this};var z=function(t){var e=t.name,n=t.data,r=t.event,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,a=n.slice(0,o);return this._replace(e,a),r&&r(e),this};var G=function(t){var e=t.name,n=t.path,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=n.length?"".concat(e,".").concat(n.join(".")):e,a=this.select(o,r);return console.log(a),this};var F=function(t,e){var n=JSON.parse(JSON.stringify(t.data)),r=this._deconstruct(e),o="".concat(t.name,"_").concat(r.name),a=this._merge(t,r);return this._replace(t.name,n),this._replace(o,a),t.event&&t.event(o),this},L=function(t,e){if(t&&e){for(var n="array"===Object(a.a)(e)?e:e.split("."),r=0;r<n.length-1;r++)if(void 0===(t=t[n[r]]))return;delete t[n.pop()]}};var H=function(t,e){var n=t.name,r=t.data,o=t.event;return h(r,(function(t){e&&d(e).forEach((function(e){t[e]&&L(t,e)}))})),o&&o(n),this},K=n(1);function Q(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(t){c=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return V(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return V(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var W=function(t,e){var n=t.name,r=t.data,o=t.event,i=Object.entries(e);return h(r,(function(t){return i.forEach((function(e){var n=Q(e,2),r=n[0],o=n[1],a=b(t,r);o&&a&&(l(t,o,a),L(t,r))})),function t(e){Object.keys(e).forEach((function(n){var r=e[n];return"object"===Object(a.a)(r)&&(t(r),Object(K.a)(r)&&delete e[n]),r}))}(t)})),o&&o(n),this},X=n(2);var Y=function(t){return t};var Z={add:P,assign:A,bundle:T,chunk:D,construct:q,create:R,flatten:U,flush:B,info:$,join:J,limit:z,log:G,merge:F,remove:H,rename:W,schema:function(t,e){var n=t.data;return h(n,(function(t){if(!Object(X.a)(e)(t))return console.error("This item ".concat(t," is unvalidated and does not match the given schema:"),e)})),this},segment:function(t,e){var n=t.path,r=t.data,o=t.event,i=e||n[n.length-1],c=r.map((function(t){var e=b(t,n);if("object"===Object(a.a)(e))return e}));return this._replace(i,c),o&&o(e),this},select:function(t){var e=t.path,n=t.data,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=e&&e.length?h(n,(function(t){return b(t,e)})):n||null,a=d(o);return r?Y(a):a}};function tt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function et(t,e,n){return e&&tt(t.prototype,e),n&&tt(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var nt=et((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}));o(nt,f),r(nt,S),r(nt,Z);e.a=nt},function(t,e,n){"use strict";var r=function(t){return[{name:"d",value:{}},{name:"s",value:t}]};e.a=function(t,e){r(e).forEach((function(e){return t["_"+e.name]=e.value}))}},function(t,e,n){"use strict";var r=n(0),o=n(1),a=function(t){var e=function(t){throw new Error(t)},n=function(e){t.warning&&console.error(e)},a=function(t,n){var o=Object(r.a)(t);o!==n&&e("Given ".concat(t," should be of ").concat(n," while ").concat(o," given"))};return{add:function(t,n){n||e("No value specified for add method.")},assign:function(t,e){a(e,"function")},bundle:function(t,r){t.path||n('No path given for bundle method, use "[set].[path]" to target a key.'),r||e("No keys have been specified to bundle."),a(r,"array")},construct:function(t,e){a(e,"function")},create:function(t){var n=t.name;void 0!==t.data&&e("This set (".concat(n,") has already been created."))},join:function(t,n){t.name||n||e("The join method requires a name and target."),a(n,"string")},merge:function(t,n){t.name||n||e("The merge method requires a name and target."),a(n,"string")},limit:function(t,e){var r=t.info;r.length<e&&n("The selected size (".concat(e,") is larger then the set (").concat(r.length,").")),a(e,"number")},remove:function(t,e){e||n("No keys have been specified to remove."),a(e,"array")},rename:function(t,e){Object(o.a)(e)&&n("No options have been specified to rename."),a(e,"object")}}};function i(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||l(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var y=["flush","info","log","schema","select"];e.a=function(t){var e,n=Object.getPrototypeOf(new t),r=Object.getPrototypeOf(n),o=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=l(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}(Object.getOwnPropertyNames(r));try{var c=function(){var t=e.value,n=r[t];"function"==typeof n&&"Core"!==n.name&&(r[t]=function(){for(var e=this,r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];if(!t.includes("_")){var f=o.shift(),l=Object.assign(u({event:function(n){return e._s.watch&&!y.includes(t)&&e.event.dispatch(t,e.select(n))}},this._deconstruct(f))),s=a(this._s);return s[t]&&s[t].apply(s,i([l].concat(o))),this._s.log&&console.log(t,l),this._exists(l.name)||"create"===t?n.call.apply(n,[this].concat(i([l].concat(o)))):(console.error("This set does not exists: ".concat(l.name," called on ").concat(t,".")),null)}return n.call.apply(n,[this].concat(o))})};for(o.s();!(e=o.n()).done;)c()}catch(t){o.e(t)}finally{o.f()}return t}},function(t,e,n){"use strict";n.r(e),function(t){var r=n(3),o=n(2),a=n(4),i=n(5);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v(t);if(e){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(t,e){if(e&&("object"===c(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return p(t)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&l(t,e)}(y,e);var n,r,i,c=s(y);function y(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return u(this,y),e=c.call(this),"undefined"==typeof window&&void 0===t||(e.validate(n),Object(a.a)(p(e),n),e.init()),e}return n=y,(r=[{key:"validate",value:function(t){var e=Object(o.a)({log:{value:Boolean,required:!1},warnings:{value:Boolean,required:!1},watch:{value:Boolean,required:!1}});if(!e(t))return console.error("Unvalid configuration set: ".concat(t))}},{key:"init",value:function(){Object.seal(this)}}])&&f(n.prototype,r),i&&f(n,i),Object.defineProperty(n,"prototype",{writable:!1}),y}(r.a);e.default=Object(i.a)(b)}.call(this,n(7))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n}]).default;module.exports=Juggle;