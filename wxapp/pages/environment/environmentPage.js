var util = require('../../utils/util.js')

Page({
  data: {
    latitude: null,
    longitude: null,
    time:"",
    list1: [{
      color:"#ffc107",
      icon:"dict",
      type:"温度情况",
      text:"正常"
    },{
      color:"#ffc107",
      icon:"collect2",
      type:"湿度情况",
      text:"正常"
    },{
      color:"#ffc107",
      icon:"key-shift",
      type:"瓦斯浓度情况",
      text:"0.41%"
    },{
      color:"#ffc107",
      icon:"ring",
      type:"气压情况",
      text:"0.9MPa"
    }]
  },
  // touch
  start: function (event) {
    this.setData({
      startX: event.changedTouches[0].pageX
    })
  },
  end: function (event) {
    var endX = event.changedTouches[0].pageX
    var dis = this.data.startX - endX
    if(dis > 100){
        wx.switchTab({
          url: '../girl/girl'
        })
    }
  },
  // 下拉刷新
  onPullDownRefresh: function(){
    wx.stopPullDownRefresh()
  },
  // 页面加载
  onLoad: function () {
    var that = this
    var TIME = util.formatTime(new Date());
    this.setData({
      time: TIME,
    });
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })
  },
  // 页面分享
  onShareAppMessage: function () {
    return {
      title: '微信小程序',
      desc: '这是微信小程序的分享功能',
      path: '/page/map'
    }
  }
})
