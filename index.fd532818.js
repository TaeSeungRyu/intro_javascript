// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"A7H4y":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "62d5dab885897b04655082d4fd532818";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"4ee1I":[function(require,module,exports) {
Date.prototype.yyyymmdd = function () {
    var mm = this.getMonth() + 1;
    var dd = this.getDate();

    return [
        this.getFullYear(), (mm > 9 ? '' : '0') + mm,
        (dd > 9 ? '' : '0') + dd
    ].join('-');
};

Date.prototype.hhmmss = function () {
    var hh = this.getHours();
    var mm = this.getMinutes();
    var ss = this.getSeconds();

    return [
        (hh > 9 ? '' : '0') + hh,
        (mm > 9 ? '' : '0') + mm,
        (ss > 9 ? '' : '0') + ss,
    ].join(':');
};

Date.prototype.yyyymmddhhmmss = function() {
    return this.yyyymmdd()+" " + this.hhmmss();
};
    

//캔버스 기본 변수
const canvas = document.getElementById('star');
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
let width = canvas.width;
let height = canvas.height;
let radius = width * 0.01
let ctx = canvas.getContext('2d');

//별이 들어가는 배열
var randomArray = []

//마우스 이벤트 관련 변수
let hider = 0.6
let mouseNum = 0
var mouseMoveArray = []

//웰컴 메시지
const welcomeText = new Date().yyyymmddhhmmss() + ""

//페이지 이동시 페이드아웃 기능
let isMovePage = false
let fadeInNum = 0.01
let calback;

//여길 눌러줘 기능
let clickHere = {x : width /2, y : height /2}

let mainName = document.getElementById('mainName');
let rect = mainName.getBoundingClientRect();

if(radius > 5){ radius = 5}

window.onresize = function(event) {
    canvas.width = document.body.clientWidth
    canvas.height = document.body.clientHeight
    width = canvas.width;
    height = canvas.height;
    radius = width * 0.01   
    rect = mainName.getBoundingClientRect();
    if(radius > 5){ radius = 5} 
    ctx = canvas.getContext('2d');
    console.log(rect.top, rect.right, rect.bottom, rect.left);
};


//해당 범위에서의 랜덤값을 만드는 함수 입니다.
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}        

//랜덤 rgba 입니다.
function random_rgba() {
    const o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',';
}




for (var i=0;i < 250;i++){
    var x = getRandom(width*0.005, width*0.995);
    var y = getRandom(height*0.005, height*0.995);
    let opacity = getRandom(0.1, 0.8); //아이템의 투명도
    let randomSize = getRandom(radius*0.2, radius*0.8); //해당 아이템의 크기
    randomArray.push({x : x, y : y, opacity : opacity, size : randomSize, color: random_rgba(), status : 'up' })
}

module.exports.debugData = mouseMoveArray;

document.addEventListener('mousemove', function (event) { 
    var x1 = event.clientX;
    var y1 = event.clientY;    
    mouseMoveArray.push({x:x1, y:y1})
    mouseNum = new Date().getTime()
    hider = 0.8
})



setInterval(function() {
    
    ctx.clearRect(0, 0, width, height)

    ctx.save()
    ctx.beginPath()
    ctx.fillStyle = 'rgba( 242, 242, 231 ,0.65 )'
    ctx.font = "normal 13px gothic";
    ctx.fillText(new Date().yyyymmddhhmmss(), width - ctx.measureText(welcomeText).width*1.2, height * 0.93);
    ctx.fill()
    ctx.closePath()
    ctx.restore()


    //반짝반짝 작은별 효과
    randomArray.forEach(function(data){
        ctx.save()
        ctx.beginPath()
        ctx.arc(data.x, data.y, data.size,(Math.PI / 180) * 0, (Math.PI / 180) * 360, false)

        if(data.size < radius && data.status == 'up'){
            data.opacity = data.opacity + 0.001;
            data.size = data.size + 0.05
            if(data.size >= radius){
                data.status = 'down'
            }
        } else if(data.status == 'down'){
            data.opacity = data.opacity - 0.001;
            data.size = data.size - 0.05
            if(data.size <= radius/3){
                data.status = 'end'
            }            
        } else {
            data.x = getRandom(width*0.005, width*0.995);
            data.y = getRandom(height*0.005, height*0.995);
            data.opacity = getRandom(0.1, 0.8); 
            data.size = getRandom(radius*0.2, radius*0.8);
            data.color = random_rgba() 
            data.status = 'up'
        }
        ctx.fillStyle = data.color + data.opacity + ")"
        ctx.fill()
        ctx.closePath()
        ctx.restore()
    });    
    
    //마우스 무빙 이벤트 효과
    if(mouseNum - new Date().getTime() < -50){  //안움직인다면
        if(mouseMoveArray.length > 0){  //안움직이는데 기존에 그렸던 흔적이 존재한다면
            ctx.save()
            ctx.beginPath()
            mouseMoveArray.forEach(function(data, idx){
                if(idx < mouseMoveArray.length-1){
                    if(idx == 0){
                        ctx.moveTo(data.x, data.y)
                    }
                    ctx.lineTo(mouseMoveArray[idx+1].x, mouseMoveArray[idx+1].y);
                }
            })
            ctx.lineCap = 'butt';    
            ctx.lineJoin = 'round'; 
            ctx.strokeStyle = 'rgba( 244, 246, 142 , '+hider+'  )';
            ctx.lineWidth = 2
            ctx.stroke()
            ctx.closePath()
            ctx.restore()
            hider = hider - 0.018
        }
        if(hider <= 0){
            if(mouseMoveArray.length > 0){
                clickHere = Object.assign({}, mouseMoveArray[mouseMoveArray.length-1]);
            }
            mouseMoveArray = [];
        }

    } else {  //선그리기
        ctx.save()
        ctx.beginPath()
        mouseMoveArray.forEach(function(data, idx){
            if(idx < mouseMoveArray.length-1){
                if(idx == 0){
                    ctx.moveTo(data.x, data.y)
                }
                ctx.lineTo(mouseMoveArray[idx+1].x, mouseMoveArray[idx+1].y);
            }
        })
        ctx.lineCap = 'butt';    
        ctx.lineJoin = 'round'; 
        ctx.strokeStyle = 'rgba( 244, 246, 142 , '+hider+' )';
        ctx.lineWidth = 2
        ctx.stroke()
        ctx.closePath()
        ctx.restore()
    
        if(mouseMoveArray.length > 9){
            mouseMoveArray.shift()
        }
    }

    //이름을 클릭해 주세요 기능 입니다.
    if(mouseMoveArray.length == 0){  
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = 'rgba( 242, 242, 231 ,0.65 )'
        ctx.font = "normal 13px gothic";
        ctx.fillText('가운데 이름을 클릭하여 주세요', clickHere.x, clickHere.y);
        ctx.fill()
        ctx.closePath()
        ctx.restore()        
        //console.log(rectStyle.width, rect.top, rect.right, rect.bottom, rect.left);
    }    
    
    if(isMovePage){
        fadeEvent(fadeInNum, calback)
        fadeInNum = fadeInNum+ 0.007
    }
}, 10);

let don = true;
function fadeEvent(num, args){
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.rect(0,0,width,height)
    ctx.fillStyle = `rgba(1, 1, 1, ${num})`
    ctx.fill()
    ctx.closePath()  
    if(num >= 1.2 && don){
        args()
        don = false
    }  
}

let movePg = document.getElementById('mainName')
movePg.addEventListener('click', function (event) { 
    isMovePage = true
    calback = ()=>{
        location.href = 'contents.html'
    }
})


function msieversion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  {
         alert('익스플로러에서 주요기능이 동작하지 않습니다.\n다른 브라우저를 사용하여 주세요.'); 
    } 
    return false;
}

setTimeout(() => {
    msieversion()    
}, 550);

},{}]},["A7H4y","4ee1I"], "4ee1I", "parcelRequirec134")

//# sourceMappingURL=index.fd532818.js.map
