var {
  Page
} = require('../../utils/tina.min.js');

Page.define({

  /**
   * 页面的初始数据
   */
  data: {
    shopinfo:{
      title:"海鲜店",
      mode:"意想不到的美食盛宴",
      info: "2018年开业，以当地海鲜为特色，聘请五星级酒店厨师掌勺，菜品以鲜、香为主，开业以来广受百姓喜爱",
      address:"辽宁省营口市西市区渤海大街东9号",
      time:"9:00-22:00",
      tel:"0417-3655755"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '店铺详情',
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})