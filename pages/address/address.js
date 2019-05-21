var {
  Page
} = require('../../utils/tina.min.js');

Page.define({

  /**
   * 页面的初始数据
   */
  data: {
    addressData:[
      {
        aid:1,
        name:"张卫平",
        tel:"13130598960",
        address:"营口市西市区京东快捷便利店东侧路口左转15-12号",
        isDefault:true
      },
      {
        aid:2,
        name: "张卫平",
        tel: "13130598960",
        address: "营口市西市区京东快捷便利店东侧路口左转15-12号",
        isDefault: false
      },
      {
        aid:3,
        name: "张卫平",
        tel: "13130598960",
        address: "营口市西市区京东快捷便利店东侧路口左转15-12号",
        isDefault: false
      },
      {
        aid: 4,
        name: "张卫平",
        tel: "13130598960",
        address: "营口市西市区京东快捷便利店东侧路口左转15-12号",
        isDefault: false
      },
      {
        aid: 5,
        name: "张卫平",
        tel: "13130598960",
        address: "营口市西市区京东快捷便利店东侧路口左转15-12号",
        isDefault: false
      },
      {
        aid: 6,
        name: "张卫平",
        tel: "13130598960",
        address: "营口市西市区京东快捷便利店东侧路口左转15-12号",
        isDefault: false
      },
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的地址',
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
    defaultAddress(e){
      var data=this.data.addressData;
      var id=e.currentTarget.dataset.aid;
      for(var i=0;i<data.length;i++){
        data[i].isDefault=false;
        if(data[i].aid==id){
          data[i].isDefault=true;
        }
      }
      this.setData({
        addressData:data
      })
    },
    deleteAddress(e) {
      var arr=[];
      var id = e.currentTarget.dataset.did;
      var data = this.data.addressData;
      for( var key in data){
        if (data[key].aid==id){
          delete data[key]
          for(var key in data){
            if(key!=undefined){
              arr.push(data[key]);
              console.log(arr);
            }
          }
        }
      }
      this.setData({
        addressData:arr
      });
    },
    gotoRedactAddress(){
      wx.navigateTo({
        url: '../redactAddress/redactAddress',
      })
    }
  }
})