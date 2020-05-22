"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Loading = _interopRequireDefault(require("./components/Loading.vue"));

var _Home = _interopRequireDefault(require("./components/Home.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: '/',
  component: _Loading["default"]
}, {
  path: '/home',
  component: _Home["default"]
}];
var _default = routes;
exports["default"] = _default;