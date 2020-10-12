/**
 * 微信分享方法
 * 
 */
import axios from 'axios'
var wx = window.wx

function wechatShare() {
  axios.post('https://game.elloworld.cn/wxapi/index/getSignPackage').then((json) => {
    console.log(json)
    var res = json.data.data
    wx.config({
      debug: false,
      appId: res.appId,
      timestamp: res.timestamp,
      nonceStr: res.nonceStr,
      signature: res.signature,
      jsApiList: ['openWXSearchPage', 'updateAppMessageShareData', 'updateTimelineShareData', 'hideOptionMenu']

    });
    wx.error(function (res) {
      console.log(res)
    });
  });
  let data = {
    title: "我是拜耳人，我为“敢想|勇为”代言",
    desc: "做乘风破浪的拜耳人！",
    link: 'https://idea.elloworld.cn/bayer/',
    imgUrl: 'https://idea.elloworld.cn/bayer/img/share.png'
  }
  console.log(data);

  wx.ready(function () {
    wx.checkJsApi({
      jsApiList: ['openWXSearchPage', 'getNetworkType', 'previewImage'],
      success: function (res) {
        console.log(JSON.stringify(res));
      }
    });

    wx.updateTimelineShareData({
      title: data.title,
      link: data.link,
      imgUrl: data.imgUrl,
      success: function (res) {
        console.log("已分享");
      },
      cancel: function (res) {
        console.log("已取消")
      }
    });

    wx.updateAppMessageShareData({
      title: data.title,
      desc: data.desc,
      link: data.link,
      imgUrl: data.imgUrl,
      trigger: function (res) {
        console.log('用户点击发送给朋友');
      },
      success: function (res) {
        console.log('已分享');
      },
      cancel: function (res) {
        console.log('已取消');
      },
      fail: function (res) {
        console.log(JSON.stringify(res));
      }
    });
  })


}


export default wechatShare;
