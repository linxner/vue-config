"use strict";var _vue=_interopRequireDefault(require("vue")),_App=_interopRequireDefault(require("./App.vue"));require("normalize.css"),require("./assets/css/sprite.css");var _fastclick=_interopRequireDefault(require("fastclick"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}_vue.default.config.productionTip=!1,_fastclick.default.attach(document.body),window.addEventListener("touchmove",function(e){e.stopPropagation(),e.preventDefault()},{passive:!1}),new _vue.default({render:function(e){return e(_App.default)}}).$mount("#app");