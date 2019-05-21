var {
  Page
} = require('../../utils/tina.min.js')

Page.define({

  /**
   * 页面的初始数据
   */
  data: {
    active:1,
    discountData:[
      {
        nominal:300,
        isUsed:false,
        timelinmit:"2019.5.13---2019.5.16",
        restrict:"满1000元可使用"
      },
      {
        nominal: 300,
        isUsed: false,
        timelinmit: "2019.5.13---2019.5.16",
        restrict: "满1000元可使用"
      },
      {
        nominal: 300,
        isUsed: false,
        timelinmit: "2019.5.13---2019.5.16",
        restrict: "满1000元可使用"
      }
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '优惠活动',
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
    
  },
  methods:{
    modeToggle(e){
      var id=e.currentTarget.dataset.tid;
      this.setData({
        active:id
      })
    }
  }
})