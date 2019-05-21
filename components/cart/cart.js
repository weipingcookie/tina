import { Component } from '../../utils/tina.min.js'

Component.define({

  behaviors: [],

  // 属性定义（详情参见下文）
  properties: {
    myProperty: { // 属性名
      type: String,
      value: ''
    },
    cartList:{
      type:null,
      value:""
    },
    msh:{
      type:null,
      value:""
    },
    myProperty2: String // 简化的定义方式
  },
  compute({cartList}){
    var price=0;
    var sum=0;
    for(var i=0;i<cartList.length;i++){
      price += cartList[i].price * cartList[i].number;
      sum += cartList[i].number;
    }
    return{
      cartSum:sum,
      cartTotalPrice:price
    }
  },
  data: {
    isOpen:false
  }, // 私有数据，可用于模板渲染

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached() { },
    moved() { },
    detached() { }
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached() {

   }, // 此处attached的声明会被lifetimes字段中的声明覆盖
  ready() {

  },

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show() { 
     },
    hide() { },
    resize() { },
  },

  methods: {
    onMyButtonTap() {
      this.setData({
        // 更新属性和数据的方法与更新页面数据的方法类似
      })
    },
    // 内部方法建议以下划线开头
    _myPrivateMethod() {
      // 这里将 data.A[0].B 设为 'myPrivateData'
      this.setData({
        'A[0].B': 'myPrivateData'
      })
    },
    _propertyChange(newVal, oldVal) {

    },
    openDetail(){
      var isOpen=this.data.isOpen;
      if(this.data.cartSum>0)
      this.setData({
        isOpen:!this.data.isOpen
      }) 
    },
    delete(){
      this.setData({
        cartList:[],
        isOpen:false
      })
      var arr={
        obj: this.data.cartList
      }
      //需要修改index页面的cartList为空
      this.triggerEvent('delete', arr)
    },
    pay(){
      wx.navigateTo({
        url: '../orderList/orderList',
      })
    },
    close(){
      this.setData({
        isOpen: false
      })
    }
  }
})