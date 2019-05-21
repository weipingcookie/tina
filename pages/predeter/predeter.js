var { Page } = require('../../utils/tina.min.js');

Page.define({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    personNum: ["1人", "2人", "3人", "4人", "4人以上"],
    timeRange: ["早餐:9:00-11:00", "午餐:11:00-17:00", "晚餐:17:00-22:00"],
    date: '2019-04-19',
    time: '',
    index: 0,
    tableindex: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '预约',
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
    toogleBlue(e){
      var id=e.currentTarget.dataset.tid;
      this.setData({
        active:id,
        time:id
      })
    },
    bindPickerChange(e) {
      this.setData({
        index: e.detail.value
      })
    },
    bindTimeChange(e) {
      this.setData({
        time: e.detail.value,
        active: e.detail.value,
      })
    },
    bindDateChange(e) {
      this.setData({
        date: e.detail.value
      })
    },
    bindtableChange(e) {
      this.setData({
        tableindex: e.detail.value
      })
    },
    submit(){
      wx.showToast({
        title: '预定成功',
      })
    }
  }
})