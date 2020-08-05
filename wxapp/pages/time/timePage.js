// pages/time/timePage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list1: [{
      color:"#ffc107",
      icon:"collect2",
      type:"总工时",
      text:"307h"
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