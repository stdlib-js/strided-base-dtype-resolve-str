// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";function t(t){return Object.keys(Object(t))}var n=void 0!==Object.keys;function e(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var r=e(),i=Object.prototype.toString,o=Object.prototype.hasOwnProperty;function u(t,n){return null!=t&&o.call(t,n)}var a,c="function"==typeof Symbol?Symbol:void 0,l="function"==typeof c?c.toStringTag:"",f=r&&"symbol"==typeof Symbol.toStringTag?function(t){var n,e,r;if(null==t)return i.call(t);e=t[l],n=u(t,l);try{t[l]=void 0}catch(n){return i.call(t)}return r=i.call(t),n?t[l]=e:delete t[l],r}:function(t){return i.call(t)};function p(t){return"[object Arguments]"===f(t)}a=function(){return p(arguments)}();var s=a,g="function"==typeof Object.defineProperty?Object.defineProperty:null,y=Object.defineProperty;function b(t){return"number"==typeof t}function d(t){var n,e="";for(n=0;n<t;n++)e+="0";return e}function m(t,n,e){var r=!1,i=n-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(r=!0,t=t.substr(1)),t=e?t+d(i):d(i)+t,r&&(t="-"+t)),t}var v=String.prototype.toLowerCase,h=String.prototype.toUpperCase;function w(t){var n,e,r;switch(t.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=t.arg,r=parseInt(e,10),!isFinite(r)){if(!b(e))throw new Error("invalid integer. Value: "+e);r=0}return r<0&&("u"===t.specifier||10!==n)&&(r=4294967295+r+1),r<0?(e=(-r).toString(n),t.precision&&(e=m(e,t.precision,t.padRight)),e="-"+e):(e=r.toString(n),r||t.precision?t.precision&&(e=m(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===n&&(t.alternate&&(e="0x"+e),e=t.specifier===h.call(t.specifier)?h.call(e):v.call(e)),8===n&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function S(t){return"string"==typeof t}var j=Math.abs,O=String.prototype.toLowerCase,x=String.prototype.toUpperCase,_=String.prototype.replace,T=/e\+(\d)$/,E=/e-(\d)$/,k=/^(\d+)$/,I=/^(\d+)e/,P=/\.0$/,V=/\.0*e/,A=/(\..*[^0])0*e/;function F(t){var n,e,r=parseFloat(t.arg);if(!isFinite(r)){if(!b(t.arg))throw new Error("invalid floating-point number. Value: "+e);r=t.arg}switch(t.specifier){case"e":case"E":e=r.toExponential(t.precision);break;case"f":case"F":e=r.toFixed(t.precision);break;case"g":case"G":j(r)<1e-4?((n=t.precision)>0&&(n-=1),e=r.toExponential(n)):e=r.toPrecision(t.precision),t.alternate||(e=_.call(e,A,"$1e"),e=_.call(e,V,"e"),e=_.call(e,P,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=_.call(e,T,"e+0$1"),e=_.call(e,E,"e-0$1"),t.alternate&&(e=_.call(e,k,"$1."),e=_.call(e,I,"$1.e")),r>=0&&t.sign&&(e=t.sign+e),e=t.specifier===x.call(t.specifier)?x.call(e):O.call(e)}function N(t){var n,e="";for(n=0;n<t;n++)e+=" ";return e}function $(t,n,e){var r=n-t.length;return r<0?t:t=e?t+N(r):N(r)+t}var C=String.fromCharCode,B=isNaN,L=Array.isArray;function R(t){var n={};return n.specifier=t.specifier,n.precision=void 0===t.precision?1:t.precision,n.width=t.width,n.flags=t.flags||"",n.mapping=t.mapping,n}function G(t){var n,e,r,i,o,u,a,c,l;if(!L(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",a=1,c=0;c<t.length;c++)if(S(r=t[c]))u+=r;else{if(n=void 0!==r.precision,!(r=R(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+r+"`.");for(r.mapping&&(a=r.mapping),e=r.flags,l=0;l<e.length;l++)switch(i=e.charAt(l)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=e.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===r.width){if(r.width=parseInt(arguments[a],10),a+=1,B(r.width))throw new TypeError("the argument for * width at position "+a+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(n&&"*"===r.precision){if(r.precision=parseInt(arguments[a],10),a+=1,B(r.precision))throw new TypeError("the argument for * precision at position "+a+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,n=!1)}switch(r.arg=arguments[a],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(r.padZeros=!1),r.arg=w(r);break;case"s":r.maxWidth=n?r.precision:-1;break;case"c":if(!B(r.arg)){if((o=parseInt(r.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=B(o)?String(r.arg):C(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(r.precision=6),r.arg=F(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=m(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=$(r.arg,r.width,r.padRight)),u+=r.arg||"",a+=1}return u}var W=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function X(t){var n={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(n.precision="1"),n}function Z(t){var n,e,r,i;for(e=[],i=0,r=W.exec(t);r;)(n=t.slice(i,W.lastIndex-r[0].length)).length&&e.push(n),e.push(X(r)),i=W.lastIndex,r=W.exec(t);return(n=t.slice(i)).length&&e.push(n),e}function M(t){return"string"==typeof t}function Y(t){var n,e;if(!M(t))throw new TypeError(Y("invalid argument. First argument must be a string. Value: `%s`.",t));for(n=[Z(t)],e=1;e<arguments.length;e++)n.push(arguments[e]);return G.apply(null,n)}var U,H=Object.prototype,z=H.toString,D=H.__defineGetter__,q=H.__defineSetter__,J=H.__lookupGetter__,K=H.__lookupSetter__;U=function(){try{return g({},"x",{}),!0}catch(t){return!1}}()?y:function(t,n,e){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===z.call(t))throw new TypeError(Y("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===z.call(e))throw new TypeError(Y("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(J.call(t,n)||K.call(t,n)?(r=t.__proto__,t.__proto__=H,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),o="get"in e,u="set"in e,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&D&&D.call(t,n,e.get),u&&q&&q.call(t,n,e.set),t};var Q=U;function tt(t,n,e){Q(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function nt(t){return"string"==typeof t}var et=e();function rt(){return et&&"symbol"==typeof Symbol.toStringTag}var it=Object.prototype.toString,ot="function"==typeof Symbol?Symbol:void 0,ut="function"==typeof ot?ot.toStringTag:"",at=rt()?function(t){var n,e,r;if(null==t)return it.call(t);e=t[ut],n=u(t,ut);try{t[ut]=void 0}catch(n){return it.call(t)}return r=it.call(t),n?t[ut]=e:delete t[ut],r}:function(t){return it.call(t)},ct=String.prototype.valueOf,lt=rt();function ft(t){return"object"==typeof t&&(t instanceof String||(lt?function(t){try{return ct.call(t),!0}catch(t){return!1}}(t):"[object String]"===at(t)))}function pt(t){return nt(t)||ft(t)}function st(t,n,e){Q(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function gt(t,n,e){Q(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function yt(t){return"number"==typeof t}tt(pt,"isPrimitive",nt),tt(pt,"isObject",ft);var bt=e();function dt(){return bt&&"symbol"==typeof Symbol.toStringTag}var mt=Object.prototype.toString,vt="function"==typeof Symbol?Symbol:void 0,ht="function"==typeof vt?vt.toStringTag:"",wt=dt()?function(t){var n,e,r;if(null==t)return mt.call(t);e=t[ht],n=u(t,ht);try{t[ht]=void 0}catch(n){return mt.call(t)}return r=mt.call(t),n?t[ht]=e:delete t[ht],r}:function(t){return mt.call(t)},St=Number,jt=St.prototype.toString,Ot=dt();function xt(t){return"object"==typeof t&&(t instanceof St||(Ot?function(t){try{return jt.call(t),!0}catch(t){return!1}}(t):"[object Number]"===wt(t)))}function _t(t){return yt(t)||xt(t)}function Tt(t){return t!=t}function Et(t){return yt(t)&&Tt(t)}function kt(t){return xt(t)&&Tt(t.valueOf())}function It(t){return Et(t)||kt(t)}function Pt(t,n,e){Q(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}gt(_t,"isPrimitive",yt),gt(_t,"isObject",xt),st(It,"isPrimitive",Et),st(It,"isObject",kt);var Vt=Number.POSITIVE_INFINITY,At=St.NEGATIVE_INFINITY,Ft=Math.floor;function Nt(t){return Ft(t)===t}function $t(t){return t<Vt&&t>At&&Nt(t)}function Ct(t){return yt(t)&&$t(t)}function Bt(t){return xt(t)&&$t(t.valueOf())}function Lt(t){return Ct(t)||Bt(t)}Pt(Lt,"isPrimitive",Ct),Pt(Lt,"isObject",Bt);var Rt=Object.prototype.propertyIsEnumerable,Gt=!Rt.call("beep","0");function Wt(t,n){var e;return null!=t&&(!(e=Rt.call(t,n))&&Gt&&pt(t)?!Et(n=+n)&&Ct(n)&&n>=0&&n<t.length:e)}var Xt=e(),Zt=Object.prototype.toString,Mt="function"==typeof Symbol?Symbol:void 0,Yt="function"==typeof Mt?Mt.toStringTag:"",Ut=Xt&&"symbol"==typeof Symbol.toStringTag?function(t){var n,e,r;if(null==t)return Zt.call(t);e=t[Yt],n=u(t,Yt);try{t[Yt]=void 0}catch(n){return Zt.call(t)}return r=Zt.call(t),n?t[Yt]=e:delete t[Yt],r}:function(t){return Zt.call(t)},Ht=Array.isArray?Array.isArray:function(t){return"[object Array]"===Ut(t)},zt=s?p:function(t){return null!==t&&"object"==typeof t&&!Ht(t)&&"number"==typeof t.length&&Nt(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!Wt(t,"callee")},Dt=Array.prototype.slice;function qt(t){return null!==t&&"object"==typeof t}!function(t,n,e){Q(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}(qt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(Y("invalid argument. Must provide a function. Value: `%s`.",t));return function(n){var e,r;if(!Ht(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(qt));var Jt=Wt((function(){}),"prototype"),Kt=!Wt({toString:null},"toString");function Qt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Nt(t.length)&&t.length>=0&&t.length<=9007199254740991}function tn(t,n,e){Q(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function nn(t){return"string"==typeof t}var en=e();function rn(){return en&&"symbol"==typeof Symbol.toStringTag}var on=Object.prototype.toString,un="function"==typeof Symbol?Symbol:void 0,an="function"==typeof un?un.toStringTag:"",cn=rn()?function(t){var n,e,r;if(null==t)return on.call(t);e=t[an],n=u(t,an);try{t[an]=void 0}catch(n){return on.call(t)}return r=on.call(t),n?t[an]=e:delete t[an],r}:function(t){return on.call(t)},ln=String.prototype.valueOf,fn=rn();function pn(t){return"object"==typeof t&&(t instanceof String||(fn?function(t){try{return ln.call(t),!0}catch(t){return!1}}(t):"[object String]"===cn(t)))}function sn(t){return nn(t)||pn(t)}function gn(t,n,e){var r,i;if(!Qt(t)&&!nn(t))throw new TypeError(Y("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(r=t.length))return-1;if(3===arguments.length){if(!Ct(e))throw new TypeError(Y("invalid argument. Third argument must be an integer. Value: `%s`.",e));if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(It(n)){for(;i<r;i++)if(It(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}tn(sn,"isPrimitive",nn),tn(sn,"isObject",pn);var yn=/./;function bn(t,n,e){Q(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function dn(t){return"boolean"==typeof t}var mn=e();function vn(){return mn&&"symbol"==typeof Symbol.toStringTag}var hn=Object.prototype.toString,wn="function"==typeof Symbol?Symbol:void 0,Sn="function"==typeof wn?wn.toStringTag:"",jn=vn()?function(t){var n,e,r;if(null==t)return hn.call(t);e=t[Sn],n=u(t,Sn);try{t[Sn]=void 0}catch(n){return hn.call(t)}return r=hn.call(t),n?t[Sn]=e:delete t[Sn],r}:function(t){return hn.call(t)},On=Boolean,xn=Boolean.prototype.toString,_n=vn();function Tn(t){return"object"==typeof t&&(t instanceof On||(_n?function(t){try{return xn.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===jn(t)))}function En(t){return dn(t)||Tn(t)}function kn(){return new Function("return this;")()}bn(En,"isPrimitive",dn),bn(En,"isObject",Tn);var In="object"==typeof self?self:null,Pn="object"==typeof window?window:null,Vn="object"==typeof globalThis?globalThis:null,An=function(t){if(arguments.length){if(!dn(t))throw new TypeError(Y("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return kn()}if(Vn)return Vn;if(In)return In;if(Pn)return Pn;throw new Error("unexpected error. Unable to resolve global object.")}(),Fn=An.document&&An.document.childNodes,Nn=Int8Array,$n=e(),Cn=Object.prototype.toString,Bn="function"==typeof Symbol?Symbol:void 0,Ln="function"==typeof Bn?Bn.toStringTag:"",Rn=$n&&"symbol"==typeof Symbol.toStringTag?function(t){var n,e,r;if(null==t)return Cn.call(t);e=t[Ln],n=u(t,Ln);try{t[Ln]=void 0}catch(n){return Cn.call(t)}return r=Cn.call(t),n?t[Ln]=e:delete t[Ln],r}:function(t){return Cn.call(t)};function Gn(){return/^\s*function\s*([^(]*)/i}var Wn=/^\s*function\s*([^(]*)/i;function Xn(t){var n,e,r,i;if(("Object"===(e=Rn(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=Wn.exec(r.toString()))return n[1]}return qt(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}!function(t,n,e){Q(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}(Gn,"REGEXP",Wn);var Zn="function"==typeof yn||"object"==typeof Nn||"function"==typeof Fn?function(t){return Xn(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"==(n=typeof t)?Xn(t).toLowerCase():n};function Mn(t){return t.constructor&&t.constructor.prototype===t}var Yn,Un=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Hn="undefined"==typeof window?void 0:window,zn=function(){var t;if("undefined"===Zn(Hn))return!1;for(t in Hn)try{-1===gn(Un,t)&&u(Hn,t)&&null!==Hn[t]&&"object"===Zn(Hn[t])&&Mn(Hn[t])}catch(t){return!0}return!1}(),Dn="undefined"!=typeof window,qn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Yn=n?function(){return 2!==(t(arguments)||"").length}(1,2)?function(n){return zt(n)?t(Dt.call(n)):t(n)}:t:function(t){var n,e,r,i,o,a,c;if(i=[],zt(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(0==(r="function"==typeof t)&&!qt(t))return i;e=Jt&&r}for(o in t)e&&"prototype"===o||!u(t,o)||i.push(String(o));if(Kt)for(n=function(t){if(!1===Dn&&!zn)return Mn(t);try{return Mn(t)}catch(t){return!1}}(t),c=0;c<qn.length;c++)a=qn[c],n&&"constructor"===a||!u(t,a)||i.push(String(a));return i};var Jn=Yn;function Kn(t){return"function"===Zn(t)}var Qn,te=Object,ne=Object.getPrototypeOf,ee=e(),re=Object.prototype.toString,ie="function"==typeof Symbol?Symbol:void 0,oe="function"==typeof ie?ie.toStringTag:"",ue=ee&&"symbol"==typeof Symbol.toStringTag?function(t){var n,e,r;if(null==t)return re.call(t);e=t[oe],n=u(t,oe);try{t[oe]=void 0}catch(n){return re.call(t)}return r=re.call(t),n?t[oe]=e:delete t[oe],r}:function(t){return re.call(t)};Qn=Kn(Object.getPrototypeOf)?ne:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===ue(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var ae=Qn,ce=e(),le=Object.prototype.toString,fe="function"==typeof Symbol?Symbol:void 0,pe="function"==typeof fe?fe.toStringTag:"",se=ce&&"symbol"==typeof Symbol.toStringTag?function(t){var n,e,r;if(null==t)return le.call(t);e=t[pe],n=u(t,pe);try{t[pe]=void 0}catch(n){return le.call(t)}return r=le.call(t),n?t[pe]=e:delete t[pe],r}:function(t){return le.call(t)},ge=Object.prototype;function ye(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!Ht(t)}(t)&&(n=function(t){return null==t?null:(t=te(t),ae(t))}(t),!n||!u(t,"constructor")&&u(n,"constructor")&&Kn(n.constructor)&&"[object Function]"===se(n.constructor)&&u(n,"isPrototypeOf")&&Kn(n.isPrototypeOf)&&(n===ge||function(t){var n;for(n in t)if(!u(t,n))return!1;return!0}(t)))}var be=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function de(){return be.slice()}var me={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function ve(){var t;return 0===arguments.length?me.all.slice():(t=me[arguments[0]])?t.slice():[]}function he(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function we(t,n,e){Q(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}!function(t,n,e){Q(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}(ve,"enum",he),function(t,n){var e,r,i;for(e=Jn(n),i=0;i<e.length;i++)we(t,r=e[i],n[r])}(ve,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Se={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function je(){return{bool:Se.bool,int8:Se.int8,uint8:Se.uint8,uint8c:Se.uint8c,int16:Se.int16,uint16:Se.uint16,int32:Se.int32,uint32:Se.uint32,int64:Se.int64,uint64:Se.uint64,float32:Se.float32,float64:Se.float64,complex64:Se.complex64,complex128:Se.complex128,binary:Se.binary,generic:Se.generic,notype:Se.notype,userdefined_type:Se.userdefined_type}}!function(t,n,e){Q(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}(de,"enum",je),function(t,n){var e,r,i;for(e=Jn(n),i=0;i<e.length;i++)we(t,r=e[i],n[r])}(de,je());var Oe=function(t,n){var e,r,i,o,a,c,l,f=!0;if(!qt(t))throw new TypeError(Y("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!ye(n))throw new TypeError(Y("invalid argument. Options argument must be an object. Value: `%s`.",n));if(u(n,"duplicates")&&!dn(f=n.duplicates))throw new TypeError(Y("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",f))}if(r=(e=Jn(t)).length,a={},f)for(l=0;l<r;l++)u(a,o=t[i=e[l]])?(c=a[o],Ht(c)?a[o].push(i):a[o]=[c,i]):a[o]=i;else for(l=0;l<r;l++)a[t[i=e[l]]]=i;return a}(je(),{duplicates:!1}),xe=je();return function(t){var n=typeof t;return"string"===n?function(t){var n=xe[t];return"number"==typeof n?n:null}(t)?t:null:"number"===n?function(t){var n=Oe[t];return"string"==typeof n?n:null}(t):null}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).resolve=n();
//# sourceMappingURL=browser.js.map
