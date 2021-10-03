////////////////////////////////////////////////////////////////////////
// SnowFlakes-Script (c) 2017, Dominik Scholz / go4u.de Webdesign
////////////////////////////////////////////////////////////////////////

import config from "../../config";

var snowflakesRAIN = {
  ///////////////////////////// configuration ////////////////////////////

  // amout of flakes
  _amount: config.options.snowflakes.amount,
  // random colors
  _color: config.options.snowflakes.color,
  // random fonts
  _type: config.options.snowflakes.type,
  // char used for flake
  _flakeChar: config.options.snowflakes.flakeChar,
  // speed of flakes
  _speed: config.options.snowflakes.spped,
  // minimum flake font size
  _minSize: config.options.snowflakes.minSize,
  // maximum flake font size
  _maxSize: config.options.snowflakes.maxSize,
  // horizontal drift
  _drift: config.options.snowflakes.drift,
  // zIndex of flakes
  _zIndex: 20000,

  ///////////////////////////// private vars /////////////////////////////

  _flakes: [],
  _bodyWidth: 0,
  _bodyHeight: 0,
  _range: null,
  _count: 0,
  _lastInterval: 0,

  ////////////////////////////// functions ///////////////////////////////

  // init snow
  init: function () {
    this._addEventListener(window, "resize", function () {
      return snowflakesRAIN.resize.apply(snowflakesRAIN);
    });
    this._addEventListener(window, "load", function () {
      return snowflakesRAIN.start.apply(snowflakesRAIN);
    });
  },

  // add an event listener
  _addEventListener: function (el, name, handler) {
    if (el.addEventListener) el.addEventListener(name, handler, false);
    else if (el.attachEvent) el.attachEvent("on" + name, handler);
  },

  // start snow
  start: function () {
    // calculate range
    this._range = this._maxSize - this._minSize;

    // init window size
    this.resize();

    // add new flakes
    while (this._amount > this._flakes.length)
      this._createFlake(this._flakes.length);

    // start to move snow
    this._animFn = function () {
      snowflakesRAIN._move();
    };
    this._lastInterval = this._time();
    requestAnimFrame(snowflakesRAIN._animFn);
  },

  // get current time
  _time: function () {
    return +new Date();
  },

  // return a random integer
  _randomInt: function (value) {
    return Math.floor(Math.random() * value);
  },

  // return a random array element
  _randomArray: function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  // creates a new snowflake
  _createFlake: function (i) {
    var newEl = !this._flakes[i],
      el,
      f;

    if (newEl) {
      // create new dom el
      el = document.createElement("div");
      el.style.position = "absolute";
      el.style.zIndex = this._zIndex;
      el.innerHTML = this._flakeChar;
      f = {
        el: el,
        x: 0,
        y: 0,
        size: 0,
        count: 0,
      };
      this._flakes[i] = f;
      document.getElementsByTagName("body")[0].appendChild(el);
    } else {
      // use existing dom el
      f = this._flakes[i];
      el = f.el;
    }

    // init flake
    el.style.left = "0px";
    el.style.top = "-" + this._maxSize + "px";
    el.style.color = this._randomArray(this._color);
    el.style.family = this._randomArray(this._type);
    el.style.fontSize = this._randomInt(this._range) + this._minSize + "px";

    // create flake object
    f.x =
      this._randomInt(this._bodyWidth - this._drift - this._maxSize - 3) +
      this._drift +
      1;
    f.y = -this._maxSize - this._randomInt(this._bodyHeight);
    f.size = this._randomInt(this._range) + this._minSize;
    f.count = this._randomInt(10000);
  },

  // move existing flakes
  _move: function () {
    requestAnimFrame(snowflakesRAIN._animFn);

    // calculate movement factor
    var dif = this._time() - this._lastInterval,
      l = this._flakes.length,
      d = dif * this._speed * this._maxSize,
      i,
      flake,
      flakeDiv;

    this._lastInterval = this._time();
    this._count += (dif * this._speed) / 20;

    for (i = 0; i < l; i++) {
      flake = this._flakes[i];
      flake.y += d / flake.size;

      // restart existing flake
      if (flake.y + flake.size >= this._bodyHeight) {
        this._createFlake(i);
        continue;
      }

      flake.el.style.left =
        Math.floor(
          flake.x + Math.sin(flake.count + this._count) * this._drift
        ) + "px";
      flake.el.style.top = Math.floor(flake.y) + "px";
    }
  },

  // calculate new positions for all flakes
  resize: function () {
    // save old width
    var oldWidth = this._bodyWidth;

    // get new width and height
    this._bodyWidth = this._getWindowWidth() - this._maxSize;
    this._bodyHeight = this._getWindowHeight() - this._maxSize;

    // calculate correction ratio
    var ratio = this._bodyWidth / oldWidth;

    // for all flakes
    for (var i = 0, l = this._flakes.length, flake; i < l; i++) {
      flake = this._flakes[i];

      // do width correction
      flake.x *= ratio;

      // restart existing flake
      if (flake.y + flake.size >= this._bodyHeight) this._createFlake(i);
    }
  },

  // get window width
  _getWindowWidth: function () {
    var w = Math.max(self.innerWidth || 0, window.innerWidth || 0);

    if (document.documentElement)
      w = Math.max(w, document.documentElement.clientWidth || 0);
    if (document.body) {
      w = Math.max(w, document.body.clientWidth || 0);
      w = Math.max(w, document.body.scrollWidth || 0);
      w = Math.max(w, document.body.offsetWidth || 0);
    }

    return w;
  },

  // get window height
  _getWindowHeight: function () {
    var h = Math.max(self.innerHeight || 0, window.innerHeight || 0);

    if (document.documentElement)
      h = Math.max(h, document.documentElement.clientHeight || 0);
    if (document.body) {
      h = Math.max(h, document.body.clientHeight || 0);
      h = Math.max(h, document.body.scrollHeight || 0);
      h = Math.max(h, document.body.offsetHeight || 0);
    }

    return h;
  },
};

// shim layer with setTimeout fallback
window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (cb) {
      window.setTimeout(cb, 1000 / 60);
    }
  );
})();

export default snowflakesRAIN;
