parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
Date.prototype.yyyymmdd=function(){var t=this.getMonth()+1,e=this.getDate();return[this.getFullYear(),(t>9?"":"0")+t,(e>9?"":"0")+e].join("-")},Date.prototype.hhmmss=function(){var t=this.getHours(),e=this.getMinutes(),n=this.getSeconds();return[(t>9?"":"0")+t,(e>9?"":"0")+e,(n>9?"":"0")+n].join(":")},Date.prototype.yyyymmddhhmmss=function(){return this.yyyymmdd()+" "+this.hhmmss()};var t=document.getElementById("star");t.width=document.body.clientWidth,t.height=document.body.clientHeight;var e,n=t.width,o=t.height,i=.01*n,a=t.getContext("2d"),s=[],r=.6,l=0,h=[],c=(new Date).yyyymmddhhmmss()+"",u=!1,d=.01,y={x:n/2,y:o/2},g=document.getElementById("mainName"),m=g.getBoundingClientRect();function f(t,e){return Math.random()*(e-t)+t}function v(){var t=Math.round,e=Math.random;return"rgba("+t(255*e())+","+t(255*e())+","+t(255*e())+","}i>5&&(i=5),window.onresize=function(e){t.width=document.body.clientWidth,t.height=document.body.clientHeight,n=t.width,o=t.height,i=.01*n,m=g.getBoundingClientRect(),i>5&&(i=5),a=t.getContext("2d"),console.log(m.top,m.right,m.bottom,m.left)};for(var p=0;p<250;p++){var b=f(.005*n,.995*n),x=f(.005*o,.995*o),w=f(.1,.8),P=f(.2*i,.8*i);s.push({x:b,y:x,opacity:w,size:P,color:v(),status:"up"})}module.exports.debugData=h,document.addEventListener("mousemove",function(t){var e=t.clientX,n=t.clientY;h.push({x:e,y:n}),l=(new Date).getTime(),r=.8}),setInterval(function(){a.clearRect(0,0,n,o),a.save(),a.beginPath(),a.fillStyle="rgba( 242, 242, 231 ,0.65 )",a.font="normal 13px gothic",a.fillText((new Date).yyyymmddhhmmss(),n-1.2*a.measureText(c).width,.93*o),a.fill(),a.closePath(),a.restore(),s.forEach(function(t){a.save(),a.beginPath(),a.arc(t.x,t.y,t.size,Math.PI/180*0,Math.PI/180*360,!1),t.size<i&&"up"==t.status?(t.opacity=t.opacity+.001,t.size=t.size+.05,t.size>=i&&(t.status="down")):"down"==t.status?(t.opacity=t.opacity-.001,t.size=t.size-.05,t.size<=i/3&&(t.status="end")):(t.x=f(.005*n,.995*n),t.y=f(.005*o,.995*o),t.opacity=f(.1,.8),t.size=f(.2*i,.8*i),t.color=v(),t.status="up"),a.fillStyle=t.color+t.opacity+")",a.fill(),a.closePath(),a.restore()}),l-(new Date).getTime()<-50?(h.length>0&&(a.save(),a.beginPath(),h.forEach(function(t,e){e<h.length-1&&(0==e&&a.moveTo(t.x,t.y),a.lineTo(h[e+1].x,h[e+1].y))}),a.lineCap="butt",a.lineJoin="round",a.strokeStyle="rgba( 244, 246, 142 , "+r+"  )",a.lineWidth=2,a.stroke(),a.closePath(),a.restore(),r-=.018),r<=0&&(h.length>0&&(y=Object.assign({},h[h.length-1])),h=[])):(a.save(),a.beginPath(),h.forEach(function(t,e){e<h.length-1&&(0==e&&a.moveTo(t.x,t.y),a.lineTo(h[e+1].x,h[e+1].y))}),a.lineCap="butt",a.lineJoin="round",a.strokeStyle="rgba( 244, 246, 142 , "+r+" )",a.lineWidth=2,a.stroke(),a.closePath(),a.restore(),h.length>9&&h.shift()),0==h.length&&(a.save(),a.beginPath(),a.fillStyle="rgba( 242, 242, 231 ,0.65 )",a.font="normal 13px gothic",a.fillText("가운데 이름을 클릭하여 주세요",y.x,y.y),a.fill(),a.closePath(),a.restore()),u&&(z(d,e),d+=.007)},10);var T=!0;function z(t,e){a.save(),a.beginPath(),a.moveTo(0,0),a.rect(0,0,n,o),a.fillStyle="rgba(1, 1, 1, ".concat(t,")"),a.fill(),a.closePath(),t>=1.2&&T&&(e(),T=!1)}var D=document.getElementById("mainName");function E(){return(window.navigator.userAgent.indexOf("MSIE ")>0||navigator.userAgent.match(/Trident.*rv\:11\./))&&alert("익스플로러에서 주요기능이 동작하지 않습니다.\n다른 브라우저를 사용하여 주세요."),!1}D.addEventListener("click",function(t){u=!0,e=function(){location.href="contents.html"}}),setTimeout(function(){E()},550);
},{}]},{},["Focm"], null)
//# sourceMappingURL=/newIntro2021.636f24c2.js.map