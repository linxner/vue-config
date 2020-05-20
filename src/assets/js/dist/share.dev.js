"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import wx from 'weixin-js-sdk'
var wx = window.wx;

function wechatShare() {
  _axios["default"].post('https://game.elloworld.cn/wxapi/index/getSignPackage').then(function (json) {
    console.log(json);
    var res = json.data.data;
    wx.config({
      debug: false,
      appId: res.appId,
      timestamp: res.timestamp,
      nonceStr: res.nonceStr,
      signature: res.signature,
      jsApiList: ['openWXSearchPage', 'onMenuShareAppMessage', 'onMenuShareTimeline', 'hideOptionMenu']
    });
    wx.error(function (res) {
      // alert(JSON.stringify(res));
      console.log(res);
    });
  });

  var winUrl = window.location.href;
  var baseUrl = winUrl.split('?')[0];
  var data = {
    title: "收下你的2020年健康关键词",
    desc: "2020年，你健康自由了吗？",
    link: 'https://littleidea.elloworld.cn/we_search',
    imgUrl: 'https://littleidea.elloworld.cn/we-search/img/share.png'
  };
  console.log(data);
  wx.ready(function () {
    wx.checkJsApi({
      jsApiList: ['openWXSearchPage', 'getNetworkType', 'previewImage'],
      success: function success(res) {
        console.log(JSON.stringify(res));
      }
    });
    wx.onMenuShareTimeline({
      title: data.title,
      link: data.link,
      imgUrl: data.imgUrl,
      success: function success(res) {
        console.log("已分享");
      },
      cancel: function cancel(res) {
        console.log("已取消");
      }
    });
    wx.onMenuShareAppMessage({
      title: data.title,
      desc: data.desc,
      link: data.link,
      imgUrl: data.imgUrl,
      trigger: function trigger(res) {
        console.log('用户点击发送给朋友');
      },
      success: function success(res) {
        console.log('已分享');
      },
      cancel: function cancel(res) {
        console.log('已取消');
      },
      fail: function fail(res) {
        console.log(JSON.stringify(res));
      }
    });
  });
}

var _default = wechatShare;
exports["default"] = _default;