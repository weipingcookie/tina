var {
  Page
} = require('../../utils/tina.min.js')
Page.define({

  /**
   * 页面的初始数据
   */
  data: {
    FN: 0,
    TOTAL: 0,
    active: 1,
    cartList: [],
    maskHeight: "",
    navData: [{
      id: 1,
      name: "推荐"
    }, {
      id: 2,
      name: "炒菜"
    }, {
      id: 3,
      name: "凉菜"
    }, {
      id: 4,
      name: "主食"
    }, {
      id: 5,
      name: "糕点"
    }, {
      id: 6,
      name: "酒水"
    }, {
      id: 7,
      name: "小食"
    }, {
      id: 8,
      name: "贝类"
    }, {
      id: 9,
      name: "饮品"
    }, {
      id: 10,
      name: "特价"
    }, ],
    foodData: [{
        id: 1001,
        name: "澳洲M5精品牛排",
        image: "../../images/beaf.jpg",
        desc: "纯正澳洲牛肉，精心烹制，美味不可挡",
        price: 118,
        sales: 297,
        number: 0
      },
      {
        id: 1002,
        name: "巧克力爆浆冰淇淋",
        image: "../../images/binqilin.jpg",
        desc: "意大利手工工艺,原产地奶油加以非洲纯巧克力制作,给您最奢华美味的享受",
        price: 28,
        sales: 411,
        number: 0
      },
      {
        id: 1003,
        name: "抹茶绿冰沙",
        image: "../../images/nx.jpg",
        desc: "来自韩国的夏日新品，必备解暑凉饮",
        price: 16,
        sales: 97,
        number: 0
      }
    ],
    recommendData: [{
        id: 1004,
        name: "澳洲M5精品牛排",
        image: "../../images/beaf.jpg",
        desc: "纯正澳洲牛肉，精心烹制，美味不可挡",
        price: 118,
        sales: 297,
        number: 0
      },
      {
        id: 1005,
        name: "巧克力爆浆冰淇淋",
        image: "../../images/binqilin.jpg",
        desc: "意大利手工工艺,原产地奶油加以非洲纯巧克力制作,给您最奢华美味的享受",
        price: 28,
        sales: 411,
        number: 0
      },
      {
        id: 1006,
        name: "抹茶绿冰沙",
        image: "../../images/nx.jpg",
        desc: "来自韩国的夏日新品，必备解暑凉饮",
        price: 16,
        sales: 97,
        number: 0
      }
    ],
    firedData: [{
        id: 1007,
        name: "秘制酱爆鸡丁",
        image: "../../images/jd.jpg",
        desc: "秘制配方，做全宇宙最好吃的传统菜肴",
        price: 68,
        sales: 325,
        number: 0
      },
      {
        id: 1008,
        name: "川渝毛血旺",
        image: "../../images/mxw.jpg",
        desc: "正宗川渝风味，麻辣爽滑，爱吃辣口的吃货必备。分量十足，可选大小份",
        price: 48,
        sales: 125,
        number: 0
      },
      {
        id: 1009,
        name: "正宗东坡肉",
        image: "../../images/dpr.jpg",
        desc: "传统名菜，精选半肥半瘦的猪肉，红得透亮，色如玛瑙，软而不烂，肥而不腻。",
        price: 86,
        sales: 99,
        number: 0
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '点餐',
    })

    var id=options["tid"];
    wx.showToast({
      title: '您的桌号是'+id,
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
    //切换分类菜品展示
    toggleNav: function(e) {
      var id = e.currentTarget.dataset.id;
      this.setData({
        active: e.currentTarget.dataset.id
      })
      switch (id) {
        case 1:
          {
            this.setData({
              foodData: this.data.recommendData
            })
          }
          break;
        case 2:
          {
            this.setData({
              foodData: this.data.firedData
            })
          }
      }
    },
    //加入购物车方法
    addCart: function(e) {
      var id = e.currentTarget.dataset.id;
      var foodData = this.data.foodData;
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
    getMask(e) {
      var h = e.detail.mh;
      this.setData({
        maskHeight: h
      })
    }
  }
})