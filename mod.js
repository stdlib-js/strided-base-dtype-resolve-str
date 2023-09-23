// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return Object.keys(Object(t))}var e=void 0!==Object.keys;function r(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var n=r();var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function a(t,e){return null!=t&&i.call(t,e)}var u="function"==typeof Symbol?Symbol.toStringTag:"";var l=n&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,n;if(null==t)return o.call(t);r=t[u],e=a(t,u);try{t[u]=void 0}catch(e){return o.call(t)}return n=o.call(t),e?t[u]=r:delete t[u],n}:function(t){return o.call(t)};function c(t){return"[object Arguments]"===l(t)}var f=function(){return c(arguments)}(),p="function"==typeof Object.defineProperty?Object.defineProperty:null;var s,y=Object.defineProperty,b=Object.prototype,g=b.toString,_=b.__defineGetter__,v=b.__defineSetter__,d=b.__lookupGetter__,m=b.__lookupSetter__;s=function(){try{return p({},"x",{}),!0}catch(t){return!1}}()?y:function(t,e,r){var n,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===g.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===g.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(d.call(t,e)||m.call(t,e)?(n=t.__proto__,t.__proto__=b,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&_&&_.call(t,e,r.get),a&&v&&v.call(t,e,r.set),t};var h=s;function w(t,e,r){h(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function j(t){return"string"==typeof t}var S=r();function O(){return S&&"symbol"==typeof Symbol.toStringTag}var E=Object.prototype.toString;var P="function"==typeof Symbol?Symbol.toStringTag:"";var T=O()?function(t){var e,r,n;if(null==t)return E.call(t);r=t[P],e=a(t,P);try{t[P]=void 0}catch(e){return E.call(t)}return n=E.call(t),e?t[P]=r:delete t[P],n}:function(t){return E.call(t)},x=String.prototype.valueOf;var k=O();function A(t){return"object"==typeof t&&(t instanceof String||(k?function(t){try{return x.call(t),!0}catch(t){return!1}}(t):"[object String]"===T(t)))}function V(t){return j(t)||A(t)}w(V,"isPrimitive",j),w(V,"isObject",A);var I="function"==typeof Object.defineProperty?Object.defineProperty:null;var F,G=Object.defineProperty,C=Object.prototype,N=C.toString,B=C.__defineGetter__,L=C.__defineSetter__,$=C.__lookupGetter__,R=C.__lookupSetter__;F=function(){try{return I({},"x",{}),!0}catch(t){return!1}}()?G:function(t,e,r){var n,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&($.call(t,e)||R.call(t,e)?(n=t.__proto__,t.__proto__=C,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&B&&B.call(t,e,r.get),a&&L&&L.call(t,e,r.set),t};var W=F;function X(t,e,r){W(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var Y="function"==typeof Object.defineProperty?Object.defineProperty:null;var M,Z=Object.defineProperty,H=Object.prototype,U=H.toString,D=H.__defineGetter__,z=H.__defineSetter__,q=H.__lookupGetter__,J=H.__lookupSetter__;M=function(){try{return Y({},"x",{}),!0}catch(t){return!1}}()?Z:function(t,e,r){var n,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===U.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===U.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(q.call(t,e)||J.call(t,e)?(n=t.__proto__,t.__proto__=H,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&D&&D.call(t,e,r.get),a&&z&&z.call(t,e,r.set),t};var K=M;function Q(t,e,r){K(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function tt(t){return"number"==typeof t}var et=r();function rt(){return et&&"symbol"==typeof Symbol.toStringTag}var nt=Object.prototype.toString;var ot="function"==typeof Symbol?Symbol.toStringTag:"";var it=rt()?function(t){var e,r,n;if(null==t)return nt.call(t);r=t[ot],e=a(t,ot);try{t[ot]=void 0}catch(e){return nt.call(t)}return n=nt.call(t),e?t[ot]=r:delete t[ot],n}:function(t){return nt.call(t)},at=Number,ut=at.prototype.toString;var lt=rt();function ct(t){return"object"==typeof t&&(t instanceof at||(lt?function(t){try{return ut.call(t),!0}catch(t){return!1}}(t):"[object Number]"===it(t)))}function ft(t){return tt(t)||ct(t)}function pt(t){return t!=t}function st(t){return tt(t)&&pt(t)}function yt(t){return ct(t)&&pt(t.valueOf())}function bt(t){return st(t)||yt(t)}Q(ft,"isPrimitive",tt),Q(ft,"isObject",ct),X(bt,"isPrimitive",st),X(bt,"isObject",yt);var gt="function"==typeof Object.defineProperty?Object.defineProperty:null;var _t,vt=Object.defineProperty,dt=Object.prototype,mt=dt.toString,ht=dt.__defineGetter__,wt=dt.__defineSetter__,jt=dt.__lookupGetter__,St=dt.__lookupSetter__;_t=function(){try{return gt({},"x",{}),!0}catch(t){return!1}}()?vt:function(t,e,r){var n,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===mt.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===mt.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(jt.call(t,e)||St.call(t,e)?(n=t.__proto__,t.__proto__=dt,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ht&&ht.call(t,e,r.get),a&&wt&&wt.call(t,e,r.set),t};var Ot=_t;function Et(t,e,r){Ot(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var Pt=Number.POSITIVE_INFINITY,Tt=at.NEGATIVE_INFINITY,xt=Math.floor;function kt(t){return xt(t)===t}function At(t){return t<Pt&&t>Tt&&kt(t)}function Vt(t){return tt(t)&&At(t)}function It(t){return ct(t)&&At(t.valueOf())}function Ft(t){return Vt(t)||It(t)}Et(Ft,"isPrimitive",Vt),Et(Ft,"isObject",It);var Gt=Object.prototype.propertyIsEnumerable;var Ct=!Gt.call("beep","0");function Nt(t,e){var r;return null!=t&&(!(r=Gt.call(t,e))&&Ct&&V(t)?!st(e=+e)&&Vt(e)&&e>=0&&e<t.length:r)}var Bt=r();var Lt=Object.prototype.toString;var $t="function"==typeof Symbol?Symbol.toStringTag:"";var Rt=Bt&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,n;if(null==t)return Lt.call(t);r=t[$t],e=a(t,$t);try{t[$t]=void 0}catch(e){return Lt.call(t)}return n=Lt.call(t),e?t[$t]=r:delete t[$t],n}:function(t){return Lt.call(t)};var Wt=Array.isArray?Array.isArray:function(t){return"[object Array]"===Rt(t)};var Xt=f?c:function(t){return null!==t&&"object"==typeof t&&!Wt(t)&&"number"==typeof t.length&&kt(t.length)&&t.length>=0&&t.length<=4294967295&&a(t,"callee")&&!Nt(t,"callee")},Yt=Array.prototype.slice;var Mt="function"==typeof Object.defineProperty?Object.defineProperty:null;var Zt,Ht=Object.defineProperty,Ut=Object.prototype,Dt=Ut.toString,zt=Ut.__defineGetter__,qt=Ut.__defineSetter__,Jt=Ut.__lookupGetter__,Kt=Ut.__lookupSetter__;Zt=function(){try{return Mt({},"x",{}),!0}catch(t){return!1}}()?Ht:function(t,e,r){var n,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===Dt.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===Dt.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(Jt.call(t,e)||Kt.call(t,e)?(n=t.__proto__,t.__proto__=Ut,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&zt&&zt.call(t,e,r.get),a&&qt&&qt.call(t,e,r.set),t};var Qt=Zt;function te(t){return null!==t&&"object"==typeof t}!function(t,e,r){Qt(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}(te,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!Wt(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(te));var ee=Nt((function(){}),"prototype"),re=!Nt({toString:null},"toString");function ne(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&kt(t.length)&&t.length>=0&&t.length<=9007199254740991}var oe="function"==typeof Object.defineProperty?Object.defineProperty:null;var ie,ae=Object.defineProperty,ue=Object.prototype,le=ue.toString,ce=ue.__defineGetter__,fe=ue.__defineSetter__,pe=ue.__lookupGetter__,se=ue.__lookupSetter__;ie=function(){try{return oe({},"x",{}),!0}catch(t){return!1}}()?ae:function(t,e,r){var n,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===le.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===le.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(pe.call(t,e)||se.call(t,e)?(n=t.__proto__,t.__proto__=ue,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ce&&ce.call(t,e,r.get),a&&fe&&fe.call(t,e,r.set),t};var ye=ie;function be(t,e,r){ye(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function ge(t){return"string"==typeof t}var _e=r();function ve(){return _e&&"symbol"==typeof Symbol.toStringTag}var de=Object.prototype.toString;var me="function"==typeof Symbol?Symbol.toStringTag:"";var he=ve()?function(t){var e,r,n;if(null==t)return de.call(t);r=t[me],e=a(t,me);try{t[me]=void 0}catch(e){return de.call(t)}return n=de.call(t),e?t[me]=r:delete t[me],n}:function(t){return de.call(t)},we=String.prototype.valueOf;var je=ve();function Se(t){return"object"==typeof t&&(t instanceof String||(je?function(t){try{return we.call(t),!0}catch(t){return!1}}(t):"[object String]"===he(t)))}function Oe(t){return ge(t)||Se(t)}function Ee(t,e,r){var n,o;if(!ne(t)&&!ge(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!Vt(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(bt(e)){for(;o<n;o++)if(bt(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}be(Oe,"isPrimitive",ge),be(Oe,"isObject",Se);var Pe=/./,Te="function"==typeof Object.defineProperty?Object.defineProperty:null;var xe,ke=Object.defineProperty,Ae=Object.prototype,Ve=Ae.toString,Ie=Ae.__defineGetter__,Fe=Ae.__defineSetter__,Ge=Ae.__lookupGetter__,Ce=Ae.__lookupSetter__;xe=function(){try{return Te({},"x",{}),!0}catch(t){return!1}}()?ke:function(t,e,r){var n,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===Ve.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===Ve.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(Ge.call(t,e)||Ce.call(t,e)?(n=t.__proto__,t.__proto__=Ae,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Ie&&Ie.call(t,e,r.get),a&&Fe&&Fe.call(t,e,r.set),t};var Ne=xe;function Be(t,e,r){Ne(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function Le(t){return"boolean"==typeof t}var $e=r();function Re(){return $e&&"symbol"==typeof Symbol.toStringTag}var We=Object.prototype.toString;var Xe="function"==typeof Symbol?Symbol.toStringTag:"";var Ye=Re()?function(t){var e,r,n;if(null==t)return We.call(t);r=t[Xe],e=a(t,Xe);try{t[Xe]=void 0}catch(e){return We.call(t)}return n=We.call(t),e?t[Xe]=r:delete t[Xe],n}:function(t){return We.call(t)},Me=Boolean.prototype.toString;var Ze=Re();function He(t){return"object"==typeof t&&(t instanceof Boolean||(Ze?function(t){try{return Me.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===Ye(t)))}function Ue(t){return Le(t)||He(t)}function De(){return new Function("return this;")()}Be(Ue,"isPrimitive",Le),Be(Ue,"isObject",He);var ze="object"==typeof self?self:null,qe="object"==typeof window?window:null,Je="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ke="object"==typeof Je?Je:null;var Qe=function(t){if(arguments.length){if(!Le(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return De()}if(ze)return ze;if(qe)return qe;if(Ke)return Ke;throw new Error("unexpected error. Unable to resolve global object.")}(),tr=Qe.document&&Qe.document.childNodes,er=Int8Array;var rr=r();var nr=Object.prototype.toString;var or="function"==typeof Symbol?Symbol.toStringTag:"";var ir=rr&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,n;if(null==t)return nr.call(t);r=t[or],e=a(t,or);try{t[or]=void 0}catch(e){return nr.call(t)}return n=nr.call(t),e?t[or]=r:delete t[or],n}:function(t){return nr.call(t)},ar="function"==typeof Object.defineProperty?Object.defineProperty:null;var ur,lr=Object.defineProperty,cr=Object.prototype,fr=cr.toString,pr=cr.__defineGetter__,sr=cr.__defineSetter__,yr=cr.__lookupGetter__,br=cr.__lookupSetter__;ur=function(){try{return ar({},"x",{}),!0}catch(t){return!1}}()?lr:function(t,e,r){var n,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===fr.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===fr.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(yr.call(t,e)||br.call(t,e)?(n=t.__proto__,t.__proto__=cr,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&pr&&pr.call(t,e,r.get),a&&sr&&sr.call(t,e,r.set),t};var gr=ur;function _r(){return/^\s*function\s*([^(]*)/i}var vr=/^\s*function\s*([^(]*)/i;function dr(t){var e,r,n,o;if(("Object"===(r=ir(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=vr.exec(n.toString()))return e[1]}return te(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}!function(t,e,r){gr(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}(_r,"REGEXP",vr);var mr="function"==typeof Pe||"object"==typeof er||"function"==typeof tr?function(t){return dr(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?dr(t).toLowerCase():e};function hr(t){return t.constructor&&t.constructor.prototype===t}var wr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],jr="undefined"==typeof window?void 0:window;var Sr=function(){var t;if("undefined"===mr(jr))return!1;for(t in jr)try{-1===Ee(wr,t)&&a(jr,t)&&null!==jr[t]&&"object"===mr(jr[t])&&hr(jr[t])}catch(t){return!0}return!1}(),Or="undefined"!=typeof window;var Er=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Pr=e?function(){return 2!==(t(arguments)||"").length}(1,2)?function(e){return Xt(e)?t(Yt.call(e)):t(e)}:t:function(t){var e,r,n,o,i,u,l;if(o=[],Xt(t)){for(l=0;l<t.length;l++)o.push(l.toString());return o}if("string"==typeof t){if(t.length>0&&!a(t,"0"))for(l=0;l<t.length;l++)o.push(l.toString())}else{if(!1==(n="function"==typeof t)&&!te(t))return o;r=ee&&n}for(i in t)r&&"prototype"===i||!a(t,i)||o.push(String(i));if(re)for(e=function(t){if(!1===Or&&!Sr)return hr(t);try{return hr(t)}catch(t){return!1}}(t),l=0;l<Er.length;l++)u=Er[l],e&&"constructor"===u||!a(t,u)||o.push(String(u));return o};function Tr(t){return"function"===mr(t)}var xr=Object.getPrototypeOf,kr=r();var Ar=Object.prototype.toString;var Vr="function"==typeof Symbol?Symbol.toStringTag:"";var Ir,Fr=kr&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,n;if(null==t)return Ar.call(t);r=t[Vr],e=a(t,Vr);try{t[Vr]=void 0}catch(e){return Ar.call(t)}return n=Ar.call(t),e?t[Vr]=r:delete t[Vr],n}:function(t){return Ar.call(t)};Ir=Tr(Object.getPrototypeOf)?xr:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===Fr(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Gr=Ir;var Cr=r();var Nr=Object.prototype.toString;var Br="function"==typeof Symbol?Symbol.toStringTag:"";var Lr=Cr&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,n;if(null==t)return Nr.call(t);r=t[Br],e=a(t,Br);try{t[Br]=void 0}catch(e){return Nr.call(t)}return n=Nr.call(t),e?t[Br]=r:delete t[Br],n}:function(t){return Nr.call(t)},$r=Object.prototype;function Rr(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!Wt(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),Gr(t))}(t),!e||!a(t,"constructor")&&a(e,"constructor")&&Tr(e.constructor)&&"[object Function]"===Lr(e.constructor)&&a(e,"isPrototypeOf")&&Tr(e.isPrototypeOf)&&(e===$r||function(t){var e;for(e in t)if(!a(t,e))return!1;return!0}(t)))}var Wr="function"==typeof Object.defineProperty?Object.defineProperty:null;var Xr,Yr=Object.defineProperty,Mr=Object.prototype,Zr=Mr.toString,Hr=Mr.__defineGetter__,Ur=Mr.__defineSetter__,Dr=Mr.__lookupGetter__,zr=Mr.__lookupSetter__;Xr=function(){try{return Wr({},"x",{}),!0}catch(t){return!1}}()?Yr:function(t,e,r){var n,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===Zr.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===Zr.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(Dr.call(t,e)||zr.call(t,e)?(n=t.__proto__,t.__proto__=Mr,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Hr&&Hr.call(t,e,r.get),a&&Ur&&Ur.call(t,e,r.set),t};var qr=Xr;var Jr=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Kr(){return Jr.slice()}var Qr="function"==typeof Object.defineProperty?Object.defineProperty:null;var tn,en=Object.defineProperty,rn=Object.prototype,nn=rn.toString,on=rn.__defineGetter__,an=rn.__defineSetter__,un=rn.__lookupGetter__,ln=rn.__lookupSetter__;tn=function(){try{return Qr({},"x",{}),!0}catch(t){return!1}}()?en:function(t,e,r){var n,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===nn.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===nn.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(un.call(t,e)||ln.call(t,e)?(n=t.__proto__,t.__proto__=rn,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&on&&on.call(t,e,r.get),a&&an&&an.call(t,e,r.set),t};var cn=tn;var fn=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function pn(){return fn.slice()}function sn(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}var yn="function"==typeof Object.defineProperty?Object.defineProperty:null;var bn,gn=Object.defineProperty,_n=Object.prototype,vn=_n.toString,dn=_n.__defineGetter__,mn=_n.__defineSetter__,hn=_n.__lookupGetter__,wn=_n.__lookupSetter__;bn=function(){try{return yn({},"x",{}),!0}catch(t){return!1}}()?gn:function(t,e,r){var n,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===vn.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===vn.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(hn.call(t,e)||wn.call(t,e)?(n=t.__proto__,t.__proto__=_n,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&dn&&dn.call(t,e,r.get),a&&mn&&mn.call(t,e,r.set),t};var jn=bn;function Sn(t,e,r){jn(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}!function(t,e,r){cn(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}(pn,"enum",sn),function(t,e){var r,n,o;for(r=Pr(e),o=0;o<r.length;o++)Sn(t,n=r[o],e[n])}(pn,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var On={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function En(){return{bool:On.bool,int8:On.int8,uint8:On.uint8,uint8c:On.uint8c,int16:On.int16,uint16:On.uint16,int32:On.int32,uint32:On.uint32,int64:On.int64,uint64:On.uint64,float32:On.float32,float64:On.float64,complex64:On.complex64,complex128:On.complex128,binary:On.binary,generic:On.generic,notype:On.notype,userdefined_type:On.userdefined_type}}!function(t,e,r){qr(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}(Kr,"enum",En),function(t,e){var r,n,o;for(r=Pr(e),o=0;o<r.length;o++)Sn(t,n=r[o],e[n])}(Kr,En());var Pn=function(t,e){var r,n,o,i,u,l,c,f=!0;if(!te(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!Rr(e))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+e+"`.");if(a(e,"duplicates")&&!Le(f=e.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+f+"`.")}if(n=(r=Pr(t)).length,u={},f)for(c=0;c<n;c++)a(u,i=t[o=r[c]])?(l=u[i],Wt(l)?u[i].push(o):u[i]=[l,o]):u[i]=o;else for(c=0;c<n;c++)u[t[o=r[c]]]=o;return u}(En(),{duplicates:!1});var Tn="function"==typeof Object.defineProperty?Object.defineProperty:null;var xn=Object.defineProperty;function kn(t){return"number"==typeof t}function An(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function Vn(t,e,r){var n=!1,o=e-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=r?t+An(o):An(o)+t,n&&(t="-"+t)),t}var In=String.prototype.toLowerCase,Fn=String.prototype.toUpperCase;function Gn(t){var e,r,n;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(r=t.arg,n=parseInt(r,10),!isFinite(n)){if(!kn(r))throw new Error("invalid integer. Value: "+r);n=0}return n<0&&("u"===t.specifier||10!==e)&&(n=4294967295+n+1),n<0?(r=(-n).toString(e),t.precision&&(r=Vn(r,t.precision,t.padRight)),r="-"+r):(r=n.toString(e),n||t.precision?t.precision&&(r=Vn(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===e&&(t.alternate&&(r="0x"+r),r=t.specifier===Fn.call(t.specifier)?Fn.call(r):In.call(r)),8===e&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}function Cn(t){return"string"==typeof t}var Nn=Math.abs,Bn=String.prototype.toLowerCase,Ln=String.prototype.toUpperCase,$n=String.prototype.replace,Rn=/e\+(\d)$/,Wn=/e-(\d)$/,Xn=/^(\d+)$/,Yn=/^(\d+)e/,Mn=/\.0$/,Zn=/\.0*e/,Hn=/(\..*[^0])0*e/;function Un(t){var e,r,n=parseFloat(t.arg);if(!isFinite(n)){if(!kn(t.arg))throw new Error("invalid floating-point number. Value: "+r);n=t.arg}switch(t.specifier){case"e":case"E":r=n.toExponential(t.precision);break;case"f":case"F":r=n.toFixed(t.precision);break;case"g":case"G":Nn(n)<1e-4?((e=t.precision)>0&&(e-=1),r=n.toExponential(e)):r=n.toPrecision(t.precision),t.alternate||(r=$n.call(r,Hn,"$1e"),r=$n.call(r,Zn,"e"),r=$n.call(r,Mn,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=$n.call(r,Rn,"e+0$1"),r=$n.call(r,Wn,"e-0$1"),t.alternate&&(r=$n.call(r,Xn,"$1."),r=$n.call(r,Yn,"$1.e")),n>=0&&t.sign&&(r=t.sign+r),r=t.specifier===Ln.call(t.specifier)?Ln.call(r):Bn.call(r)}function Dn(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}function zn(t,e,r){var n=e-t.length;return n<0?t:t=r?t+Dn(n):Dn(n)+t}var qn=String.fromCharCode,Jn=isNaN,Kn=Array.isArray;function Qn(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function to(t){var e,r,n,o,i,a,u,l,c;if(!Kn(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(a="",u=1,l=0;l<t.length;l++)if(Cn(n=t[l]))a+=n;else{if(e=void 0!==n.precision,!(n=Qn(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),r=n.flags,c=0;c<r.length;c++)switch(o=r.charAt(c)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Jn(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,Jn(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Gn(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Jn(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Jn(i)?String(n.arg):qn(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Un(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Vn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=zn(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var eo=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ro(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function no(t){var e,r,n,o;for(r=[],o=0,n=eo.exec(t);n;)(e=t.slice(o,eo.lastIndex-n[0].length)).length&&r.push(e),r.push(ro(n)),o=eo.lastIndex,n=eo.exec(t);return(e=t.slice(o)).length&&r.push(e),r}function oo(t){return"string"==typeof t}function io(t){var e,r,n;if(!oo(t))throw new TypeError(io("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=no(t),(r=new Array(arguments.length))[0]=e,n=1;n<r.length;n++)r[n]=arguments[n];return to.apply(null,r)}var ao,uo=Object.prototype,lo=uo.toString,co=uo.__defineGetter__,fo=uo.__defineSetter__,po=uo.__lookupGetter__,so=uo.__lookupSetter__;ao=function(){try{return Tn({},"x",{}),!0}catch(t){return!1}}()?xn:function(t,e,r){var n,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===lo.call(t))throw new TypeError(io("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===lo.call(r))throw new TypeError(io("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((o="value"in r)&&(po.call(t,e)||so.call(t,e)?(n=t.__proto__,t.__proto__=uo,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&co&&co.call(t,e,r.get),a&&fo&&fo.call(t,e,r.set),t};var yo=ao;function bo(t,e,r){yo(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var go=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function _o(){return go.slice()}var vo={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function mo(){var t;return 0===arguments.length?vo.all.slice():(t=vo[arguments[0]])?t.slice():[]}function ho(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function wo(t,e,r){yo(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function jo(t){return Object.keys(Object(t))}var So=void 0!==Object.keys,Oo=r();function Eo(){return Oo&&"symbol"==typeof Symbol.toStringTag}var Po=Object.prototype.toString;var To=Object.prototype.hasOwnProperty;var xo="function"==typeof Symbol?Symbol:void 0,ko="function"==typeof xo?xo.toStringTag:"";var Ao=Eo()?function(t){var e,r,n,o,i;if(null==t)return Po.call(t);r=t[ko],i=ko,e=null!=(o=t)&&To.call(o,i);try{t[ko]=void 0}catch(e){return Po.call(t)}return n=Po.call(t),e?t[ko]=r:delete t[ko],n}:function(t){return Po.call(t)};function Vo(t){return"[object Arguments]"===Ao(t)}var Io=function(){return Vo(arguments)}(),Fo=Object.prototype.hasOwnProperty;function Go(t,e){return null!=t&&Fo.call(t,e)}function Co(t){return"string"==typeof t}var No=String.prototype.valueOf;var Bo=Eo();function Lo(t){return"object"==typeof t&&(t instanceof String||(Bo?function(t){try{return No.call(t),!0}catch(t){return!1}}(t):"[object String]"===Ao(t)))}function $o(t){return Co(t)||Lo(t)}function Ro(t){return"number"==typeof t}bo($o,"isPrimitive",Co),bo($o,"isObject",Lo);var Wo=Number,Xo=Wo.prototype.toString;var Yo=Eo();function Mo(t){return"object"==typeof t&&(t instanceof Wo||(Yo?function(t){try{return Xo.call(t),!0}catch(t){return!1}}(t):"[object Number]"===Ao(t)))}function Zo(t){return Ro(t)||Mo(t)}function Ho(t){return t!=t}function Uo(t){return Ro(t)&&Ho(t)}function Do(t){return Mo(t)&&Ho(t.valueOf())}function zo(t){return Uo(t)||Do(t)}bo(Zo,"isPrimitive",Ro),bo(Zo,"isObject",Mo),bo(zo,"isPrimitive",Uo),bo(zo,"isObject",Do);var qo=Number.POSITIVE_INFINITY,Jo=Wo.NEGATIVE_INFINITY,Ko=Math.floor;function Qo(t){return Ko(t)===t}function ti(t){return t<qo&&t>Jo&&Qo(t)}function ei(t){return Ro(t)&&ti(t)}function ri(t){return Mo(t)&&ti(t.valueOf())}function ni(t){return ei(t)||ri(t)}bo(ni,"isPrimitive",ei),bo(ni,"isObject",ri);var oi=Object.prototype.propertyIsEnumerable;var ii=!oi.call("beep","0");function ai(t,e){var r;return null!=t&&(!(r=oi.call(t,e))&&ii&&$o(t)?!Uo(e=+e)&&ei(e)&&e>=0&&e<t.length:r)}var ui=Array.isArray?Array.isArray:function(t){return"[object Array]"===Ao(t)};var li=Io?Vo:function(t){return null!==t&&"object"==typeof t&&!ui(t)&&"number"==typeof t.length&&Qo(t.length)&&t.length>=0&&t.length<=4294967295&&Go(t,"callee")&&!ai(t,"callee")},ci=Array.prototype.slice;function fi(t){return null!==t&&"object"==typeof t}bo(fi,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(io("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!ui(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(fi));var pi=ai((function(){}),"prototype"),si=!ai({toString:null},"toString");function yi(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Qo(t.length)&&t.length>=0&&t.length<=9007199254740991}function bi(t,e,r){var n,o;if(!yi(t)&&!Co(t))throw new TypeError(io("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(n=t.length))return-1;if(3===arguments.length){if(!ei(r))throw new TypeError(io("invalid argument. Third argument must be an integer. Value: `%s`.",r));if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(zo(e)){for(;o<n;o++)if(zo(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}var gi=/./;function _i(t){return"boolean"==typeof t}var vi=Boolean,di=Boolean.prototype.toString;var mi=Eo();function hi(t){return"object"==typeof t&&(t instanceof vi||(mi?function(t){try{return di.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===Ao(t)))}function wi(t){return _i(t)||hi(t)}function ji(){return new Function("return this;")()}bo(wi,"isPrimitive",_i),bo(wi,"isObject",hi);var Si="object"==typeof self?self:null,Oi="object"==typeof window?window:null,Ei="object"==typeof Je?Je:null,Pi="object"==typeof globalThis?globalThis:null;var Ti=function(t){if(arguments.length){if(!_i(t))throw new TypeError(io("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return ji()}if(Pi)return Pi;if(Si)return Si;if(Oi)return Oi;if(Ei)return Ei;throw new Error("unexpected error. Unable to resolve global object.")}(),xi=Ti.document&&Ti.document.childNodes,ki=Int8Array;function Ai(){return/^\s*function\s*([^(]*)/i}var Vi=/^\s*function\s*([^(]*)/i;function Ii(t){var e,r,n,o;if(("Object"===(r=Ao(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=Vi.exec(n.toString()))return e[1]}return fi(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}bo(Ai,"REGEXP",Vi);var Fi="function"==typeof gi||"object"==typeof ki||"function"==typeof xi?function(t){return Ii(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Ii(t).toLowerCase():e};function Gi(t){return t.constructor&&t.constructor.prototype===t}var Ci=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ni="undefined"==typeof window?void 0:window;var Bi=function(){var t;if("undefined"===Fi(Ni))return!1;for(t in Ni)try{-1===bi(Ci,t)&&Go(Ni,t)&&null!==Ni[t]&&"object"===Fi(Ni[t])&&Gi(Ni[t])}catch(t){return!0}return!1}(),Li="undefined"!=typeof window;var $i=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Ri=So?function(){return 2!==(jo(arguments)||"").length}(1,2)?function(t){return li(t)?jo(ci.call(t)):jo(t)}:jo:function(t){var e,r,n,o,i,a,u;if(o=[],li(t)){for(u=0;u<t.length;u++)o.push(u.toString());return o}if("string"==typeof t){if(t.length>0&&!Go(t,"0"))for(u=0;u<t.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof t)&&!fi(t))return o;r=pi&&n}for(i in t)r&&"prototype"===i||!Go(t,i)||o.push(String(i));if(si)for(e=function(t){if(!1===Li&&!Bi)return Gi(t);try{return Gi(t)}catch(t){return!1}}(t),u=0;u<$i.length;u++)a=$i[u],e&&"constructor"===a||!Go(t,a)||o.push(String(a));return o};bo(mo,"enum",ho),function(t,e){var r,n,o;for(r=Ri(e),o=0;o<r.length;o++)wo(t,n=r[o],e[n])}(mo,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Wi={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Xi(){return{bool:Wi.bool,int8:Wi.int8,uint8:Wi.uint8,uint8c:Wi.uint8c,int16:Wi.int16,uint16:Wi.uint16,int32:Wi.int32,uint32:Wi.uint32,int64:Wi.int64,uint64:Wi.uint64,float32:Wi.float32,float64:Wi.float64,complex64:Wi.complex64,complex128:Wi.complex128,binary:Wi.binary,generic:Wi.generic,notype:Wi.notype,userdefined_type:Wi.userdefined_type}}bo(_o,"enum",Xi),function(t,e){var r,n,o;for(r=Ri(e),o=0;o<r.length;o++)wo(t,n=r[o],e[n])}(_o,Xi());var Yi=Xi();function Mi(t){var e=typeof t;return"string"===e?function(t){var e=Yi[t];return"number"==typeof e?e:null}(t)?t:null:"number"===e?function(t){var e=Pn[t];return"string"==typeof e?e:null}(t):null}export{Mi as default};
//# sourceMappingURL=mod.js.map