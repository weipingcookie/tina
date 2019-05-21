var {
  Page
} = require('../../utils/tina.min.js');
Page.define({

  /**
   * 页面的初始数据
   */
  data: {
    hasBack: false,
    numToggle: true,
    sroom: {
      id: 1,
      number: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]
    },
    proom: {
      id: 2,
      number: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]
    },
    numData: [],
    tapNum: "",
    dinerRnum: ["1人", "2人", "3人", "4人", "4人以上"],
    index: "",
    routed: false,
    orderData: [{
        id: 1001,
        name: "白蚬子",
        price: 18,
        number: 2
      },
      {
        id: 1002,
        name: "香辣蟹",
        price: 38,
        number: 1
      },
      {
        id: 1003,
        name: "扇贝",
        price: 28,
        number: 1
      },
      {
        id: 1004,
        name: "米饭",
        price: 3,
        number: 2
      }
    ],
    payData: [{
        pid: 1,
        name: "微信支付"
      },
      {
        pid: 2,
        name: "前台支付"
      },
      {
        pid: 3,
        name: "会员卡支付"
      },
    ],
    paySelect: 1,
    pid: 1,

    onFocus: false,    //textarea焦点是否选中
    isShowText:false, //控制显示 textarea 还是 text
    remark:'此处备注',        //用于存储textarea输入内容
  },
  //计算属性
  compute({
    orderData
  }) {
    var price = 0;
    for (var i = 0; i < orderData.length; i++) {
      price += orderData[i].price * orderData[i].number
    }
    return {
      totalPrice: price
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '付款',
    })
    this.setData({
      numData: this.data.sroom.number
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  methods: {
    //更改桌位类型
    tableChoseType(e) {
      var id = e.currentTarget.dataset.rid;
      if (id == 1 && this.data.hasBack == true) {
        this.setData({
          hasBack: !this.data.hasBack,
          numData: this.data.sroom.number,
          tapNum: ""
        })
      }
      if (id == 2 && this.data.hasBack == false) {
        this.setData({
          hasBack: !this.data.hasBack,
          numData: this.data.proom.number,
          tapNum: ""
        })
      }
    },
    //选择桌位号
    choseNumber(e) {
      var num = e.currentTarget.dataset.num;
      this.setData({
        tapNum: num
      })
    },
    //箭头旋转
    routed(e) {
      this.setData({
        routed: true
      })
    },
    //选择用餐人数
    bindPickerChange(e) {
      this.setData({
        index: e.detail.value,
        routed: false
      })
    },
    //选择支付方式
    chosePay(e) {
      var id = e.currentTarget.dataset.pid;
      this.setData({
        paySelect: id
      })
    },
    //订单列表菜品 + 按钮
    add(e) {
      var that = this;
      var number = e.currentTarget.dataset.number;
      number++;
      var id = e.currentTarget.dataset.id;
      var data = that.data.orderData;
      for (var i = 0; i < data.length; i++) {
        if (data[i].id == id) {
          data[i].number = number;
          that.setData({
            orderData: data
          })
        }
      }
    },
    //订单列表菜品 - 按钮
    minus(e) {
      var that = this;
      var number = e.currentTarget.dataset.number;
      if (number > 0) {
        number--;
        var id = e.currentTarget.dataset.id;
        var data = that.data.orderData;
        for (var i = 0; i < data.length; i++) {
          if (data[i].id == id) {
            data[i].number = number;
            that.setData({
              orderData: data
            })
          }
        }
      }
    },
    showPay(){
      this.setData({
        show:true
      })
    },
    close(){
      this.setData({
        show:false
      })
    },
    focus(){
      this.setData({
       onFocus:true
      })
    }, onShowTextare() {       //显示textare
      this.setData({
        isShowText: false,
        onFacus: true
      })
    },
    onShowText() {       //显示text
      this.setData({
        isShowText: true,
        onFacus: false
      })
    },
    onRemarkInput(event) {               //保存输入框填写内容
      var value = event.detail.value;
      this.setData({
        remark: value,
      });
    },
    goToComplete() {
      wx.navigateTo({
        url: '../orderComplete/orderComplete',
      })
    }
  }
})