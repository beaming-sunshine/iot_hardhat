// pages/messages/Messages.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list1: [{
      color:"#ffc107",
      icon:"ring",
      type:"警告",
      date:"2020.5.20",
      time:"9:03",
      text:"您已经很久没动了！"
    },{
      color:"#ffc107",
      icon:"ring",
      type:"警告",
      date:"2020.5.15",
      time:"11:41",
      text:"湿度超过阈值！"
    }]
  },
  navagate: function () {
    wx.navigateBack({
      delta: 1,
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})