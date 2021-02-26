// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
Date.prototype.yyyymmdd = function () {
  var mm = this.getMonth() + 1;
  var dd = this.getDate();
  return [this.getFullYear(), (mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join('-');
};

Date.prototype.hhmmss = function () {
  var hh = this.getHours();
  var mm = this.getMinutes();
  var ss = this.getSeconds();
  return [(hh > 9 ? '' : '0') + hh, (mm > 9 ? '' : '0') + mm, (ss > 9 ? '' : '0') + ss].join(':');
};

Date.prototype.yyyymmddhhmmss = function () {
  return this.yyyymmdd() + " " + this.hhmmss();
}; //캔버스 기본 변수


var canvas = document.getElementById('star');
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
var width = canvas.width;
var height = canvas.height;
var radius = width * 0.01;
var ctx = canvas.getContext('2d'); //별이 들어가는 배열

var randomArray = []; //마우스 이벤트 관련 변수

var hider = 0.6;
var mouseNum = 0;
var mouseMoveArray = []; //웰컴 메시지

var welcomeText = new Date().yyyymmddhhmmss() + ""; //페이지 이동시 페이드아웃 기능

var isMovePage = false;
var fadeInNum = 0.01;
var calback; //여길 눌러줘 기능

var clickHere = {
  x: width / 2,
  y: height / 2
};
var mainName = document.getElementById('mainName');
var rect = mainName.getBoundingClientRect();

if (radius > 5) {
  radius = 5;
}

window.onresize = function (event) {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
  width = canvas.width;
  height = canvas.height;
  radius = width * 0.01;
  rect = mainName.getBoundingClientRect();

  if (radius > 5) {
    radius = 5;
  }

  ctx = canvas.getContext('2d');
  console.log(rect.top, rect.right, rect.bottom, rect.left);
}; //해당 범위에서의 랜덤값을 만드는 함수 입니다.


function getRandom(min, max) {
  return Math.random() * (max - min) + min;
} //랜덤 rgba 입니다.


function random_rgba() {
  var o = Math.round,
      r = Math.random,
      s = 255;
  return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',';
}

for (var i = 0; i < 250; i++) {
  var x = getRandom(width * 0.005, width * 0.995);
  var y = getRandom(height * 0.005, height * 0.995);
  var opacity = getRandom(0.1, 0.8); //아이템의 투명도

  var randomSize = getRandom(radius * 0.2, radius * 0.8); //해당 아이템의 크기

  randomArray.push({
    x: x,
    y: y,
    opacity: opacity,
    size: randomSize,
    color: random_rgba(),
    status: 'up'
  });
}

module.exports.debugData = mouseMoveArray;
document.addEventListener('mousemove', function (event) {
  var x1 = event.clientX;
  var y1 = event.clientY;
  mouseMoveArray.push({
    x: x1,
    y: y1
  });
  mouseNum = new Date().getTime();
  hider = 0.8;
});
setInterval(function () {
  ctx.clearRect(0, 0, width, height);
  ctx.save();
  ctx.beginPath();
  ctx.fillStyle = 'rgba( 242, 242, 231 ,0.65 )';
  ctx.font = "normal 13px gothic";
  ctx.fillText(new Date().yyyymmddhhmmss(), width - ctx.measureText(welcomeText).width * 1.2, height * 0.93);
  ctx.fill();
  ctx.closePath();
  ctx.restore(); //반짝반짝 작은별 효과

  randomArray.forEach(function (data) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(data.x, data.y, data.size, Math.PI / 180 * 0, Math.PI / 180 * 360, false);

    if (data.size < radius && data.status == 'up') {
      data.opacity = data.opacity + 0.001;
      data.size = data.size + 0.05;

      if (data.size >= radius) {
        data.status = 'down';
      }
    } else if (data.status == 'down') {
      data.opacity = data.opacity - 0.001;
      data.size = data.size - 0.05;

      if (data.size <= radius / 3) {
        data.status = 'end';
      }
    } else {
      data.x = getRandom(width * 0.005, width * 0.995);
      data.y = getRandom(height * 0.005, height * 0.995);
      data.opacity = getRandom(0.1, 0.8);
      data.size = getRandom(radius * 0.2, radius * 0.8);
      data.color = random_rgba();
      data.status = 'up';
    }

    ctx.fillStyle = data.color + data.opacity + ")";
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }); //마우스 무빙 이벤트 효과

  if (mouseNum - new Date().getTime() < -50) {
    //안움직인다면
    if (mouseMoveArray.length > 0) {
      //안움직이는데 기존에 그렸던 흔적이 존재한다면
      ctx.save();
      ctx.beginPath();
      mouseMoveArray.forEach(function (data, idx) {
        if (idx < mouseMoveArray.length - 1) {
          if (idx == 0) {
            ctx.moveTo(data.x, data.y);
          }

          ctx.lineTo(mouseMoveArray[idx + 1].x, mouseMoveArray[idx + 1].y);
        }
      });
      ctx.lineCap = 'butt';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = 'rgba( 244, 246, 142 , ' + hider + '  )';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
      hider = hider - 0.018;
    }

    if (hider <= 0) {
      if (mouseMoveArray.length > 0) {
        clickHere = Object.assign({}, mouseMoveArray[mouseMoveArray.length - 1]);
      }

      mouseMoveArray = [];
    }
  } else {
    //선그리기
    ctx.save();
    ctx.beginPath();
    mouseMoveArray.forEach(function (data, idx) {
      if (idx < mouseMoveArray.length - 1) {
        if (idx == 0) {
          ctx.moveTo(data.x, data.y);
        }

        ctx.lineTo(mouseMoveArray[idx + 1].x, mouseMoveArray[idx + 1].y);
      }
    });
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = 'rgba( 244, 246, 142 , ' + hider + ' )';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    if (mouseMoveArray.length > 9) {
      mouseMoveArray.shift();
    }
  } //이름을 클릭해 주세요 기능 입니다.


  if (mouseMoveArray.length == 0) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = 'rgba( 242, 242, 231 ,0.65 )';
    ctx.font = "normal 13px gothic";
    ctx.fillText('가운데 이름을 클릭하여 주세요', clickHere.x, clickHere.y);
    ctx.fill();
    ctx.closePath();
    ctx.restore(); //console.log(rectStyle.width, rect.top, rect.right, rect.bottom, rect.left);
  }

  if (isMovePage) {
    fadeEvent(fadeInNum, calback);
    fadeInNum = fadeInNum + 0.007;
  }
}, 10);
var don = true;

function fadeEvent(num, args) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.rect(0, 0, width, height);
  ctx.fillStyle = "rgba(1, 1, 1, ".concat(num, ")");
  ctx.fill();
  ctx.closePath();

  if (num >= 1.2 && don) {
    args();
    don = false;
  }
}

var movePg = document.getElementById('mainName');
movePg.addEventListener('click', function (event) {
  isMovePage = true;

  calback = function calback() {
    location.href = 'contents.html';
  };
});

function msieversion() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");

  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    alert('익스플로러에서 주요기능이 동작하지 않습니다.\n다른 브라우저를 사용하여 주세요.');
  }

  return false;
}

setTimeout(function () {
  msieversion();
}, 550);
},{}],"C:/Users/srok/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62935" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
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
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
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
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/srok/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/newIntro2021.e31bb0bc.js.map