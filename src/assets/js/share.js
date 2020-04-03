import axios from 'axios'
// import wx from 'weixin-js-sdk'
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
      jsApiList: ['openWXSearchPage', 'onMenuShareAppMessage', 'onMenuShareTimeline', 'hideOptionMenu']

    });
    wx.error(function (res) {
      // alert(JSON.stringify(res));
      console.log(res)
    });
  });
  var winUrl = window.location.href
  var baseUrl = winUrl.split('?')[0]
  var data = {
    title: "收下你的2020年健康关键词",
    desc: "2020年，你健康自由了吗？",
    link: 'https://littleidea.elloworld.cn/we_search',
    imgUrl: 'https://littleidea.elloworld.cn/we-search/img/share.png'
  }
  console.log(data);

  wx.ready(function () {
    wx.checkJsApi({
      jsApiList: ['openWXSearchPage','getNetworkType', 'previewImage'],
      success: function (res) {
        console.log(JSON.stringify(res));
      }
    });

    wx.onMenuShareTimeline({
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

    wx.onMenuShareAppMessage({
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
