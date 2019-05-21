//index.js
//获取应用实例
var {
  Page
} = require('../../utils/tina.min.js')
const app = getApp()
Page.define({
  data: {
    userInfo: {},
    hasUserInfo: false,
    maskHeight: "",
    //pageBottom:"",
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    navData: [{
      name: "点餐",
      icon: "../../images/fish.png",
      url: "../order/order"
    }, {
      name: "预约",
      icon: "../../images/star.png",
      url: "../predeter/predeter"
    }, {
      name: "店铺详情",
      icon: "../../images/bc.png",
      url: "../shopDetail/shopDetail"
    }, {
      name: "优惠券",
      icon: "../../images/xia.png",
      url: "../discounts/discounts"
    }, {
      name: "我的",
      icon: "../../images/px.png",
        url: "../my/my"
    }],
    //热卖商品数据
    hotSellData: [{
        id: 1001,
        name: "生炊龙虾",
        image: "../../images/f-lx.jpg",
        desc: "肉质脆嫩，味道鲜美，蘸上桔油，开胃醒酒。",
        price: 99,
        number: 0
      },
      {
        id: 1002,
        name: "菠萝饭",
        image: "../../images/f-ft.jpg",
        desc: "形式可爱，营养全面，色彩丰富，香甜可口",
        price: 69,
        number: 0
      }
    ],

    //新品数据
    newFoodData: [{
        id: 1003,
        name: "蒜蓉粉丝扇贝",
        image: "../../images/f-hg.jpg",
        desc: "蒜蓉粉丝蒸扇贝是广东省经典菜肴营养十分丰富",
        price: 99,
        number: 0
      },
      {
        id: 1004,
        name: "蒜蓉粉丝扇贝",
        image: "../../images/f-hg.jpg",
        desc: "蒜蓉粉丝蒸扇贝是广东省经典菜肴营养十分丰富",
        price: 99,
        number: 0
      }
    ],
    cartList: []
  },
  compute() {

  },
  onLoad: function() {
    var that=this;
    wx.setNavigationBarTitle({
      title: '首页',
    })
    // wx.getSystemInfo({
    //   success(res) {
    //     var sum = 55 / res.pixelRatio;
    //     that.setData({
    //       pageBottom:sum
    //     })
    //   }
    // })
    //获取定位
    // wx.getLocation({
    //   success: function(res) {
    //     console.log(res)
    //   },
    // })
  },
  
  //事件处理函数统一放在methods中
  methods: {
    
    //首页导航跳转方法
    goToPages: function(e) {
      var url = e.currentTarget.dataset.url;
      wx.navigateTo({
        url: url,
      })
    },
    
    //点击首页热销向购物车加入商品
    addCart: function(e) {
      var id = e.currentTarget.dataset.id;
      var foodData = this.data.hotSellData;
      var listData = this.data.cartList;
      var itemData;
      for (var i = 0; i < foodData.length; i++) {
        if (foodData[i].id == id) {
          foodData[i].number++;
          itemData = foodData[i];
        }
      }
      if (listData.length == 0) {
        listData.push(itemData);
        this.setData({
          cartList: listData
        })
        return;
      } else {
        for (var c = 0; c < listData.length; c++) {
          if (listData[c].id == itemData.id) {
            this.setData({
              cartList: listData
            })
            return;
          }
        }
      }
      listData.push(itemData);
      this.setData({
        cartList: listData
      })

    },

    //点击首页新品商品添加到购物车
    newFoodaddCart: function(e) {
      var id = e.currentTarget.dataset.id;
      var foodData = this.data.newFoodData;
      var listData = this.data.cartList;
      var itemData;
      for (var i = 0; i < foodData.length; i++) {
        if (foodData[i].id == id) {
          foodData[i].number++;
          itemData = foodData[i];
        }
      }
      if (listData.length == 0) {
        listData.push(itemData);
        this.setData({
          cartList: listData
        })
        return;
      } else {
        for (var c = 0; c < listData.length; c++) {
          if (listData[c].id == itemData.id) {
            this.setData({
              cartList: listData
            })
            return;
          }
        }
      }
      listData.push(itemData);
      this.setData({
        cartList: listData
      })
    },

    //首页清空购物车
    indexDelete(e) {
      var data = e.detail.obj;
      var foodData = this.data.hotSellData;
      for (var i = 0; i < foodData.length; i++) {
        foodData[i].number = 0;
      }
      this.setData({
        cartList: data,
        hotSellData: foodData
      })
    },

    //打开购物车时上方的半黑遮罩
    getMask(e) {
      var h = e.detail.mh;
      this.setData({
        maskHeight: h
      })
    },

    //首页扫码结账
    scanPay(){
      wx.scanCode({
        onlyFromCamera: true,
        success(res) {
          console.log(res)
        }
      })
    },
    gotoTakeoutOrder(){
      wx.navigateTo({
        url: '../takeoutOrder/takeoutOrder',
      })
    }
  }
})