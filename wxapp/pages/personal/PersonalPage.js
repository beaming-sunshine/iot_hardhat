Page({
  data: {

  },

 onLoad:function(options){
  },
 
  navagate: function () {
    wx.navigateBack({
      delta: 1,
    })
  },
  suggetions:function(){
    wx.navigateTo({
      url: 'Suggestions/suggestions',
    })
  }
})