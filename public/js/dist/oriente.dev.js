"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * GIT: https://github.com/shrekshrek/orienter
 **/
!function (t, i) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : t.Orienter = i();
}(void 0, function () {
  "use strict";

  function t(t) {
    return Math.round(10 * t) / 10;
  }

  var i = function i(t) {
    var i = t || {};

    switch (this.onOrient = i.onOrient || null, this.onChange = i.onChange || null, this._orient = this._orient.bind(this), this._change = this._change.bind(this), this.lon = this.lastLon = this.deltaLon = null, this.lat = this.lastLat = this.deltaLat = null, this.direction = window.orientation || 0, this.direction) {
      case 0:
        this.fix = 0;
        break;

      case 90:
        this.fix = -270;
        break;

      case -90:
        this.fix = -90;
    }

    navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? this.os = "ios" : this.os = navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.indexOf("Linux") ? "android" : "";
  };

  return Object.assign(i.prototype, {
    on: function on() {
      this.lastLon = this.lastLat = null, window.addEventListener("deviceorientation", this._orient, !1), window.addEventListener("orientationchange", this._change, !1);
    },
    off: function off() {
      window.removeEventListener("deviceorientation", this._orient, !1), window.removeEventListener("orientationchange", this._change, !1);
    },
    _change: function _change() {
      this.direction = window.orientation, this.onChange && this.onChange(this.direction);
    },
    changeDirectionTo: function changeDirectionTo(t) {
      this.direction = t;
    },
    _orient: function _orient(i) {
      switch (this.os) {
        case "ios":
          switch (this.direction) {
            case 0:
              this.lon = i.alpha + i.gamma, i.beta > 0 && (this.lat = i.beta - 90);
              break;

            case 90:
              i.gamma < 0 ? this.lon = i.alpha - 90 : this.lon = i.alpha - 270, i.gamma > 0 ? this.lat = 90 - i.gamma : this.lat = -90 - i.gamma;
              break;

            case -90:
              i.gamma < 0 ? this.lon = i.alpha - 90 : this.lon = i.alpha - 270, i.gamma < 0 ? this.lat = 90 + i.gamma : this.lat = -90 + i.gamma;
          }

          break;

        case "android":
          switch (this.direction) {
            case 0:
              this.lon = i.alpha + i.gamma + 30, i.gamma > 90 ? this.lat = 90 - i.beta : this.lat = i.beta - 90;
              break;

            case 90:
              this.lon = i.alpha - 230, i.gamma > 0 ? this.lat = 270 - i.gamma : this.lat = -90 - i.gamma;
              break;

            case -90:
              this.lon = i.alpha - 180, this.lat = -90 + i.gamma;
          }

      }

      this.lon += this.fix, this.lon %= 360, this.lon < 0 && (this.lon += 360), this.lon = t(this.lon), this.lat = t(this.lat), null == this.lastLon && (this.lastLon = this.lon), this.deltaLon = this.lon - this.lastLon, this.deltaLon > 180 && (this.deltaLon -= 360), this.deltaLon < -180 && (this.deltaLon += 360), this.lastLon = this.lon, null == this.lastLat && (this.lastLat = this.lat), this.deltaLat = this.lat - this.lastLat, this.deltaLat > 180 && (this.deltaLat -= 360), this.deltaLat < -180 && (this.deltaLat += 360), this.lastLat = this.lat, this.onOrient && this.onOrient({
        a: t(i.alpha),
        b: t(i.beta),
        g: t(i.gamma),
        lon: this.lon,
        lat: this.lat,
        deltaLon: this.deltaLon,
        deltaLat: this.deltaLat,
        dir: this.direction
      });
    }
  }), i;
});