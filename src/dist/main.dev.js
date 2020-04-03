"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

require("normalize.css");

require("./assets/css/sprite.css");

var _fastclick = _interopRequireDefault(require("fastclick"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].config.productionTip = false;

_fastclick["default"].attach(document.body);

window.addEventListener('touchmove', function (e) {
  e.stopPropagation();
  e.preventDefault();
}, {
  passive: false
});
new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');