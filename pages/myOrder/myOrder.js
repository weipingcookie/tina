var {
  Page
} = require('../../utils/tina.min.js');

Page.define({

  /**
   * 页面的初始数据
   */
  data: {
    select:1,
    eatinData: [{
        img: "../../images/cimg.jpg",
        tableNum: "01",
        time: "2019-5.18",
        cprice: 189,
        food: [{
            name: "海鲜粥",
            price: 35
          },
          {
            name: "原味粥",
            price: 28
          }
        ],
        state: "已完成"
      },
      {
        img: "../../images/cimg.jpg",
        tableNum: "02",
        time: "2019-5.19",
        cprice: 201,
        food: [{
            name: "海鲜粥",
            price: 111
          },
          {
            name: "原味粥",
            price: 90
          }
        ],
        state: "已完成"
      }
    ],
    takeoutData: [{
      img: "../../images/cimg.jpg",
      tableNum: "19050001",
      time: "2019-5.18",
      cprice: 29.8,
      food: [{
        name: "海鲜饼",
        price: 35
      },
      {
        name: "原味粥",
        price: 18
      }
      ],
      state: "已完成"
    },
    {
      img: "../../images/cimg.jpg",
      tableNum: "19050002",
      time: "2019-5.19",
      cprice: 28,
      food: [{
        name: "酱汁墨鱼丸",
        price: 111
      },
      {
        name: "原味粥",
        price: 28
      }
      ],
      state: "已完成"
    }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
      wx.setNavigationBarTitle({
        title: '我的订单',
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
    toggleOrder(e){      
      var id=e.currentTarget.dataset.oid;
      this.setData({
        select:id
      })
    }
  }
})