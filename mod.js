// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){if(t.__esModule)return t;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(n){var e=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(r,n,e.get?e:{enumerable:!0,get:function(){return t[n]}})})),r}var r=function(t){return Object.keys(Object(t))},n=r;var e=function(){return function(){return 2!==(n(arguments)||"").length}(1,2)},o=void 0!==Object.keys;var i=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var u=function(){return i&&"symbol"==typeof Symbol.toStringTag},c=Object.prototype.toString,a=c;var f=function(t){return a.call(t)},l=Object.prototype.hasOwnProperty;var p=function(t,r){return null!=t&&l.call(t,r)},v="function"==typeof Symbol?Symbol.toStringTag:"",s=p,y=v,b=c;var g=f,m=function(t){var r,n,e;if(null==t)return b.call(t);n=t[y],r=s(t,y);try{t[y]=void 0}catch(r){return b.call(t)}return e=b.call(t),r?t[y]=n:delete t[y],e},d=u()?m:g,j=d;var h=function(t){return"[object Arguments]"===j(t)},O=h;var _=function(){return O(arguments)}(),w="function"==typeof Object.defineProperty?Object.defineProperty:null;var P=function(){try{return w({},"x",{}),!0}catch(t){return!1}},S=Object.defineProperty,E=Object.prototype,x=E.toString,T=E.__defineGetter__,I=E.__defineSetter__,A=E.__lookupGetter__,k=E.__lookupSetter__;var V=function(t,r,n){var e,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===x.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===x.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(A.call(t,r)||k.call(t,r)?(e=t.__proto__,t.__proto__=E,delete t[r],t[r]=n.value,t.__proto__=e):t[r]=n.value),i="get"in n,u="set"in n,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&T&&T.call(t,r,n.get),u&&I&&I.call(t,r,n.set),t},N=S,B=V,F=P()?N:B,G=F;var L=function(t,r,n){G(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})},M=L;var X=function(t){return"string"==typeof t},Y=String.prototype.valueOf;var C=d,D=function(t){try{return Y.call(t),!0}catch(t){return!1}},H=u();var R=function(t){return"object"==typeof t&&(t instanceof String||(H?D(t):"[object String]"===C(t)))},W=X,z=R;var U=M,q=function(t){return W(t)||z(t)},J=R;U(q,"isPrimitive",X),U(q,"isObject",J);var K=q;var Q=function(t){return"number"==typeof t},Z=Number,$=Z.prototype.toString;var tt=d,rt=Z,nt=function(t){try{return $.call(t),!0}catch(t){return!1}},et=u();var ot=function(t){return"object"==typeof t&&(t instanceof rt||(et?nt(t):"[object Number]"===tt(t)))},it=Q,ut=ot;var ct=M,at=function(t){return it(t)||ut(t)},ft=ot;ct(at,"isPrimitive",Q),ct(at,"isObject",ft);var lt=at;var pt=function(t){return t!=t},vt=lt.isPrimitive,st=pt;var yt=function(t){return vt(t)&&st(t)},bt=lt.isObject,gt=pt;var mt=function(t){return bt(t)&&gt(t.valueOf())},dt=yt,jt=mt;var ht=M,Ot=function(t){return dt(t)||jt(t)},_t=mt;ht(Ot,"isPrimitive",yt),ht(Ot,"isObject",_t);var wt=Ot,Pt=Number.POSITIVE_INFINITY,St=Z.NEGATIVE_INFINITY,Et=Math.floor;var xt=function(t){return Et(t)===t},Tt=Pt,It=St,At=xt;var kt=function(t){return t<Tt&&t>It&&At(t)},Vt=lt.isPrimitive,Nt=kt;var Bt=function(t){return Vt(t)&&Nt(t)},Ft=lt.isObject,Gt=kt;var Lt=function(t){return Ft(t)&&Gt(t.valueOf())},Mt=Bt,Xt=Lt;var Yt=M,Ct=function(t){return Mt(t)||Xt(t)},Dt=Lt;Yt(Ct,"isPrimitive",Bt),Yt(Ct,"isObject",Dt);var Ht,Rt=Ct,Wt=Object.prototype.propertyIsEnumerable;Ht=!Wt.call("beep","0");var zt=K,Ut=wt.isPrimitive,qt=Rt.isPrimitive,Jt=Wt,Kt=Ht;var Qt=function(t,r){var n;return null!=t&&(!(n=Jt.call(t,r))&&Kt&&zt(t)?!Ut(r=+r)&&qt(r)&&r>=0&&r<t.length:n)},Zt=Qt,$t=d;var tr=Array.isArray?Array.isArray:function(t){return"[object Array]"===$t(t)},rr=p,nr=Zt,er=tr,or=xt;var ir=_?h:function(t){return null!==t&&"object"==typeof t&&!er(t)&&"number"==typeof t.length&&or(t.length)&&t.length>=0&&t.length<=4294967295&&rr(t,"callee")&&!nr(t,"callee")},ur=ir,cr=r,ar=Array.prototype.slice;var fr=function(t){return ur(t)?cr(ar.call(t)):cr(t)},lr=tr;var pr=function(t){return null!==t&&"object"==typeof t};M(pr,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!lr(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(pr));var vr=pr;var sr=Zt((function(){}),"prototype"),yr=!Zt({toString:null},"toString"),br=xt;var gr=wt,mr=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&br(t.length)&&t.length>=0&&t.length<=9007199254740991},dr=K.isPrimitive,jr=Rt.isPrimitive;var hr=function(t,r,n){var e,o;if(!mr(t)&&!dr(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(e=t.length))return-1;if(3===arguments.length){if(!jr(n))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+n+"`.");if(n>=0){if(n>=e)return-1;o=n}else(o=e+n)<0&&(o=0)}else o=0;if(gr(r)){for(;o<e;o++)if(gr(t[o]))return o}else for(;o<e;o++)if(t[o]===r)return o;return-1},Or=/./;var _r=function(t){return"boolean"==typeof t},wr=Boolean.prototype.toString;var Pr=d,Sr=function(t){try{return wr.call(t),!0}catch(t){return!1}},Er=u();var xr=function(t){return"object"==typeof t&&(t instanceof Boolean||(Er?Sr(t):"[object Boolean]"===Pr(t)))},Tr=_r,Ir=xr;var Ar=M,kr=function(t){return Tr(t)||Ir(t)},Vr=xr;Ar(kr,"isPrimitive",_r),Ar(kr,"isObject",Vr);var Nr=kr;var Br="object"==typeof self?self:null,Fr="object"==typeof window?window:null,Gr=Nr.isPrimitive,Lr=function(){return new Function("return this;")()},Mr=Br,Xr=Fr,Yr=t(Object.freeze({__proto__:null}));var Cr=function(t){if(arguments.length){if(!Gr(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Lr()}if(Mr)return Mr;if(Xr)return Xr;if(Yr)return Yr;throw new Error("unexpected error. Unable to resolve global object.")},Dr=Cr(),Hr=Dr.document&&Dr.document.childNodes,Rr=Int8Array,Wr=Or,zr=Hr,Ur=Rr;var qr=function(){return"function"==typeof Wr||"object"==typeof Ur||"function"==typeof zr};var Jr=function(){return/^\s*function\s*([^(]*)/i},Kr=Jr;M(Kr,"REGEXP",Jr());var Qr=vr;var Zr=d,$r=Kr.REGEXP,tn=function(t){return Qr(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var rn=function(t){var r,n,e;if(("Object"===(n=Zr(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=$r.exec(e.toString()))return r[1]}return tn(t)?"Buffer":n},nn=rn;var en=rn;var on=function(t){var r;return null===t?"null":"object"===(r=typeof t)?nn(t).toLowerCase():r},un=function(t){return en(t).toLowerCase()},cn=qr()?un:on;var an,fn=function(t){return t.constructor&&t.constructor.prototype===t},ln="undefined"==typeof window?void 0:window,pn=p,vn=hr,sn=cn,yn=fn,bn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],gn=ln;an=function(){var t;if("undefined"===sn(gn))return!1;for(t in gn)try{-1===vn(bn,t)&&pn(gn,t)&&null!==gn[t]&&"object"===sn(gn[t])&&yn(gn[t])}catch(t){return!0}return!1}();var mn="undefined"!=typeof window,dn=an,jn=fn,hn=mn;var On=vr,_n=p,wn=ir,Pn=sr,Sn=yr,En=function(t){if(!1===hn&&!dn)return jn(t);try{return jn(t)}catch(t){return!1}},xn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Tn=r,In=fr,An=function(t){var r,n,e,o,i,u,c;if(o=[],wn(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!_n(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1===(e="function"==typeof t)&&!On(t))return o;n=Pn&&e}for(i in t)n&&"prototype"===i||!_n(t,i)||o.push(String(i));if(Sn)for(r=En(t),c=0;c<xn.length;c++)u=xn[c],r&&"constructor"===u||!_n(t,u)||o.push(String(u));return o},kn=o?e()?In:Tn:An,Vn=tr;var Nn=function(t){return"object"==typeof t&&null!==t&&!Vn(t)},Bn=cn;var Fn=function(t){return"function"===Bn(t)},Gn=Object.getPrototypeOf;var Ln=function(t){return t.__proto__},Mn=d,Xn=Ln;var Yn=function(t){var r=Xn(t);return r||null===r?r:"[object Function]"===Mn(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},Cn=Gn,Dn=Yn,Hn=Fn(Object.getPrototypeOf)?Cn:Dn;var Rn=Nn,Wn=Fn,zn=function(t){return null==t?null:(t=Object(t),Hn(t))},Un=p,qn=d,Jn=Object.prototype;var Kn=function(t){var r;return!!Rn(t)&&(!(r=zn(t))||!Un(t,"constructor")&&Un(r,"constructor")&&Wn(r.constructor)&&"[object Function]"===qn(r.constructor)&&Un(r,"isPrototypeOf")&&Wn(r.isPrototypeOf)&&(r===Jn||function(t){var r;for(r in t)if(!Un(t,r))return!1;return!0}(t)))},Qn=kn,Zn=tr,$n=Kn,te=vr,re=Nr.isPrimitive,ne=p;var ee=function(t,r){var n,e,o,i,u,c,a,f=!0;if(!te(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!$n(r))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+r+"`.");if(ne(r,"duplicates")&&(f=r.duplicates,!re(f)))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+f+"`.")}if(e=(n=Qn(t)).length,u={},f)for(a=0;a<e;a++)i=t[o=n[a]],ne(u,i)?(c=u[i],Zn(c)?u[i].push(o):u[i]=[c,o]):u[i]=o;else for(a=0;a<e;a++)u[t[o=n[a]]]=o;return u},oe=ee,ie=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var ue=function(){return ie.slice()},ce=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var ae=F;var fe=function(t,r,n){ae(t,r,{configurable:!1,enumerable:!0,writable:!1,value:n})},le=fe,pe=le,ve=kn;var se=function(t,r){var n,e,o;for(n=ve(r),o=0;o<n.length;o++)e=n[o],pe(t,e,r[e]);return t},ye=function(){return ce.slice()},be=function(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}},ge=se;M(ye,"enum",be),ge(ye,be());var me=(0,ye.enum)();var de=le,je=kn;var he=function(t,r){var n,e,o;for(n=je(r),o=0;o<n.length;o++)e=n[o],de(t,e,r[e]);return t},Oe=ue,_e=function(){return{bool:me.bool,int8:me.int8,uint8:me.uint8,uint8c:me.uint8c,int16:me.int16,uint16:me.uint16,int32:me.int32,uint32:me.uint32,int64:me.int64,uint64:me.uint64,float32:me.float32,float64:me.float64,complex64:me.complex64,complex128:me.complex128,binary:me.binary,generic:me.generic,notype:me.notype,userdefined_type:me.userdefined_type}},we=he;M(Oe,"enum",_e),we(Oe,_e());var Pe=Oe,Se=oe((0,Pe.enum)(),{duplicates:!1});var Ee=function(t){var r=Se[t];return"string"==typeof r?r:null},xe=(0,Pe.enum)();var Te=Ee,Ie=function(t){var r=xe[t];return"number"==typeof r?r:null};var Ae=function(t){var r=typeof t;return"string"===r?Ie(t)?t:null:"number"===r?Te(t):null};export{Ae as default};
//# sourceMappingURL=mod.js.map
