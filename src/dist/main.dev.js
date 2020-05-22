"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

require("normalize.css");

require("./assets/css/sprite.css");

var _fastclick = _interopRequireDefault(require("fastclick"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _route = _interopRequireDefault(require("./route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = new _vueRouter["default"]({
  routes: _route["default"] // mode: 'history'

});

_vue["default"].use(_vueRouter["default"]);

_vue["default"].config.productionTip = false; //阻止click 300ms延迟

_fastclick["default"].attach(document.body); //阻止浏览器窗口下拉


window.addEventListener('touchmove', function (e) {
  e.stopPropagation();
  e.preventDefault();
}, {
  passive: false
});
new _vue["default"]({
  router: router,
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');