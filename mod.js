// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return Object.keys(Object(t))}var e=void 0!==Object.keys;var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return n&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function a(t,e){return null!=t&&o.call(t,e)}var u="function"==typeof Symbol?Symbol:void 0,c="function"==typeof u?u.toStringTag:"";var l=r()?function(t){var e,n,r;if(null==t)return i.call(t);n=t[c],e=a(t,c);try{t[c]=void 0}catch(e){return i.call(t)}return r=i.call(t),e?t[c]=n:delete t[c],r}:function(t){return i.call(t)};function f(t){return"[object Arguments]"===l(t)}var p=function(){return f(arguments)}(),s="function"==typeof Object.defineProperty?Object.defineProperty:null;var g=Object.defineProperty;function y(t){return"number"==typeof t}function b(t){var e,n="";for(e=0;e<t;e++)n+="0";return n}function d(t,e,n){var r=!1,i=e-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(r=!0,t=t.substr(1)),t=n?t+b(i):b(i)+t,r&&(t="-"+t)),t}var h=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function m(t){var e,n,r;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=t.arg,r=parseInt(n,10),!isFinite(r)){if(!y(n))throw new Error("invalid integer. Value: "+n);r=0}return r<0&&("u"===t.specifier||10!==e)&&(r=4294967295+r+1),r<0?(n=(-r).toString(e),t.precision&&(n=d(n,t.precision,t.padRight)),n="-"+n):(n=r.toString(e),r||t.precision?t.precision&&(n=d(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===e&&(t.alternate&&(n="0x"+n),n=t.specifier===v.call(t.specifier)?v.call(n):h.call(n)),8===e&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var w=Math.abs,j=String.prototype.toLowerCase,_=String.prototype.toUpperCase,x=String.prototype.replace,O=/e\+(\d)$/,S=/e-(\d)$/,E=/^(\d+)$/,T=/^(\d+)e/,k=/\.0$/,I=/\.0*e/,P=/(\..*[^0])0*e/;function V(t){var e,n,r=parseFloat(t.arg);if(!isFinite(r)){if(!y(t.arg))throw new Error("invalid floating-point number. Value: "+n);r=t.arg}switch(t.specifier){case"e":case"E":n=r.toExponential(t.precision);break;case"f":case"F":n=r.toFixed(t.precision);break;case"g":case"G":w(r)<1e-4?((e=t.precision)>0&&(e-=1),n=r.toExponential(e)):n=r.toPrecision(t.precision),t.alternate||(n=x.call(n,P,"$1e"),n=x.call(n,I,"e"),n=x.call(n,k,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=x.call(n,O,"e+0$1"),n=x.call(n,S,"e-0$1"),t.alternate&&(n=x.call(n,E,"$1."),n=x.call(n,T,"$1.e")),r>=0&&t.sign&&(n=t.sign+n),n=t.specifier===_.call(t.specifier)?_.call(n):j.call(n)}function A(t){var e,n="";for(e=0;e<t;e++)n+=" ";return n}var F=String.fromCharCode,$=Array.isArray;function C(t){return t!=t}function N(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function B(t){var e,n,r,i,o,a,u,c,l,f,p,s,g;if(!$(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(a="",u=1,c=0;c<t.length;c++)if(r=t[c],"string"==typeof r)a+=r;else{if(e=void 0!==r.precision,!(r=N(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+r+"`.");for(r.mapping&&(u=r.mapping),n=r.flags,l=0;l<n.length;l++)switch(i=n.charAt(l)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=n.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===r.width){if(r.width=parseInt(arguments[u],10),u+=1,C(r.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(e&&"*"===r.precision){if(r.precision=parseInt(arguments[u],10),u+=1,C(r.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,e=!1)}switch(r.arg=arguments[u],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(r.padZeros=!1),r.arg=m(r);break;case"s":r.maxWidth=e?r.precision:-1,r.arg=String(r.arg);break;case"c":if(!C(r.arg)){if((o=parseInt(r.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=C(o)?String(r.arg):F(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(r.precision=6),r.arg=V(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=d(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=(f=r.arg,p=r.width,s=r.padRight,g=void 0,(g=p-f.length)<0?f:f=s?f+A(g):A(g)+f)),a+=r.arg||"",u+=1}return a}var L=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function G(t){var e,n,r,i;for(n=[],i=0,r=L.exec(t);r;)(e=t.slice(i,L.lastIndex-r[0].length)).length&&n.push(e),n.push(R(r)),i=L.lastIndex,r=L.exec(t);return(e=t.slice(i)).length&&n.push(e),n}function W(t){var e,n;if("string"!=typeof t)throw new TypeError(W("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=[G(t)],n=1;n<arguments.length;n++)e.push(arguments[n]);return B.apply(null,e)}var X,Z=Object.prototype,M=Z.toString,Y=Z.__defineGetter__,U=Z.__defineSetter__,H=Z.__lookupGetter__,z=Z.__lookupSetter__;X=function(){try{return s({},"x",{}),!0}catch(t){return!1}}()?g:function(t,e,n){var r,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===M.call(t))throw new TypeError(W("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof n||null===n||"[object Array]"===M.call(n))throw new TypeError(W("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(t,e)||z.call(t,e)?(r=t.__proto__,t.__proto__=Z,delete t[e],t[e]=n.value,t.__proto__=r):t[e]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Y&&Y.call(t,e,n.get),a&&U&&U.call(t,e,n.set),t};var D=X;function q(t,e,n){D(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function J(t){return"string"==typeof t}var K=String.prototype.valueOf;var Q=r();function tt(t){return"object"==typeof t&&(t instanceof String||(Q?function(t){try{return K.call(t),!0}catch(t){return!1}}(t):"[object String]"===l(t)))}function et(t){return J(t)||tt(t)}function nt(t){return"number"==typeof t}q(et,"isPrimitive",J),q(et,"isObject",tt);var rt=Number,it=rt.prototype.toString;var ot=r();function at(t){return"object"==typeof t&&(t instanceof rt||(ot?function(t){try{return it.call(t),!0}catch(t){return!1}}(t):"[object Number]"===l(t)))}function ut(t){return nt(t)||at(t)}function ct(t){return t!=t}function lt(t){return nt(t)&&ct(t)}function ft(t){return at(t)&&ct(t.valueOf())}function pt(t){return lt(t)||ft(t)}q(ut,"isPrimitive",nt),q(ut,"isObject",at),q(pt,"isPrimitive",lt),q(pt,"isObject",ft);var st=Number.POSITIVE_INFINITY,gt=rt.NEGATIVE_INFINITY,yt=Math.floor;function bt(t){return yt(t)===t}function dt(t){return t<st&&t>gt&&bt(t)}function ht(t){return nt(t)&&dt(t)}function vt(t){return at(t)&&dt(t.valueOf())}function mt(t){return ht(t)||vt(t)}q(mt,"isPrimitive",ht),q(mt,"isObject",vt);var wt=Object.prototype.propertyIsEnumerable;var jt=!wt.call("beep","0");function _t(t,e){var n;return null!=t&&(!(n=wt.call(t,e))&&jt&&et(t)?!lt(e=+e)&&ht(e)&&e>=0&&e<t.length:n)}var xt=Array.isArray?Array.isArray:function(t){return"[object Array]"===l(t)};var Ot=p?f:function(t){return null!==t&&"object"==typeof t&&!xt(t)&&"number"==typeof t.length&&bt(t.length)&&t.length>=0&&t.length<=4294967295&&a(t,"callee")&&!_t(t,"callee")},St=Array.prototype.slice;function Et(t){return null!==t&&"object"==typeof t}q(Et,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(W("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var n,r;if(!xt(e))return!1;if(0===(n=e.length))return!1;for(r=0;r<n;r++)if(!1===t(e[r]))return!1;return!0}}(Et));var Tt=_t((function(){}),"prototype"),kt=!_t({toString:null},"toString"),It=9007199254740991;function Pt(t,e,n){var r,i,o;if(!(o=t,"object"==typeof o&&null!==o&&"number"==typeof o.length&&bt(o.length)&&o.length>=0&&o.length<=It||J(t)))throw new TypeError(W("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(r=t.length))return-1;if(3===arguments.length){if(!ht(n))throw new TypeError(W("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=r)return-1;i=n}else(i=r+n)<0&&(i=0)}else i=0;if(pt(e)){for(;i<r;i++)if(pt(t[i]))return i}else for(;i<r;i++)if(t[i]===e)return i;return-1}var Vt=/./;function At(t){return"boolean"==typeof t}var Ft=Boolean,$t=Boolean.prototype.toString;var Ct=r();function Nt(t){return"object"==typeof t&&(t instanceof Ft||(Ct?function(t){try{return $t.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===l(t)))}function Bt(t){return At(t)||Nt(t)}q(Bt,"isPrimitive",At),q(Bt,"isObject",Nt);var Lt="object"==typeof self?self:null,Rt="object"==typeof window?window:null,Gt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Wt="object"==typeof Gt?Gt:null,Xt="object"==typeof globalThis?globalThis:null;var Zt=function(t){if(arguments.length){if(!At(t))throw new TypeError(W("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(Xt)return Xt;if(Lt)return Lt;if(Rt)return Rt;if(Wt)return Wt;throw new Error("unexpected error. Unable to resolve global object.")}(),Mt=Zt.document&&Zt.document.childNodes,Yt=Int8Array;function Ut(){return/^\s*function\s*([^(]*)/i}var Ht=/^\s*function\s*([^(]*)/i;function zt(t){var e,n,r,i;if(("Object"===(n=l(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(e=Ht.exec(r.toString()))return e[1]}return Et(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}q(Ut,"REGEXP",Ht);var Dt="function"==typeof Vt||"object"==typeof Yt||"function"==typeof Mt?function(t){return zt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?zt(t).toLowerCase():e};function qt(t){return t.constructor&&t.constructor.prototype===t}var Jt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Kt="undefined"==typeof window?void 0:window;var Qt=function(){var t;if("undefined"===Dt(Kt))return!1;for(t in Kt)try{-1===Pt(Jt,t)&&a(Kt,t)&&null!==Kt[t]&&"object"===Dt(Kt[t])&&qt(Kt[t])}catch(t){return!0}return!1}(),te="undefined"!=typeof window;var ee=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var ne=e?function(){return 2!==(t(arguments)||"").length}(1,2)?function(e){return Ot(e)?t(St.call(e)):t(e)}:t:function(t){var e,n,r,i,o,u,c;if(i=[],Ot(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!a(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!Et(t))return i;n=Tt&&r}for(o in t)n&&"prototype"===o||!a(t,o)||i.push(String(o));if(kt)for(e=function(t){if(!1===te&&!Qt)return qt(t);try{return qt(t)}catch(t){return!1}}(t),c=0;c<ee.length;c++)u=ee[c],e&&"constructor"===u||!a(t,u)||i.push(String(u));return i};function re(t){return"function"===Dt(t)}var ie,oe=Object,ae=Object.getPrototypeOf;ie=re(Object.getPrototypeOf)?ae:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===l(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var ue=ie;var ce=Object.prototype;function le(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!xt(t)}(t)&&(e=function(t){return null==t?null:(t=oe(t),ue(t))}(t),!e||!a(t,"constructor")&&a(e,"constructor")&&re(e.constructor)&&"[object Function]"===l(e.constructor)&&a(e,"isPrototypeOf")&&re(e.isPrototypeOf)&&(e===ce||function(t){var e;for(e in t)if(!a(t,e))return!1;return!0}(t)))}var fe=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function pe(){return fe.slice()}var se={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function ge(){var t;return 0===arguments.length?se.all.slice():(t=se[arguments[0]])?t.slice():[]}function ye(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function be(t,e,n){D(t,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}q(ge,"enum",ye),function(t,e){var n,r,i;for(n=ne(e),i=0;i<n.length;i++)be(t,r=n[i],e[r])}(ge,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var de={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function he(){return{bool:de.bool,int8:de.int8,uint8:de.uint8,uint8c:de.uint8c,int16:de.int16,uint16:de.uint16,int32:de.int32,uint32:de.uint32,int64:de.int64,uint64:de.uint64,float32:de.float32,float64:de.float64,complex64:de.complex64,complex128:de.complex128,binary:de.binary,generic:de.generic,notype:de.notype,userdefined_type:de.userdefined_type}}q(pe,"enum",he),function(t,e){var n,r,i;for(n=ne(e),i=0;i<n.length;i++)be(t,r=n[i],e[r])}(pe,he());var ve=function(t,e){var n,r,i,o,u,c,l,f=!0;if(!Et(t))throw new TypeError(W("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!le(e))throw new TypeError(W("invalid argument. Options argument must be an object. Value: `%s`.",e));if(a(e,"duplicates")&&!At(f=e.duplicates))throw new TypeError(W("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",f))}if(r=(n=ne(t)).length,u={},f)for(l=0;l<r;l++)a(u,o=t[i=n[l]])?(c=u[o],xt(c)?u[o].push(i):u[o]=[c,i]):u[o]=i;else for(l=0;l<r;l++)u[t[i=n[l]]]=i;return u}(he(),{duplicates:!1});var me=he();function we(t){var e=typeof t;return"string"===e?null===function(t){var e=me[t];return"number"==typeof e?e:null}(t)?null:t:"number"===e?function(t){var e=ve[t];return"string"==typeof e?e:null}(t):null}export{we as default};
//# sourceMappingURL=mod.js.map
