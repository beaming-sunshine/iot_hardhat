// pages/statistics/statisticsPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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