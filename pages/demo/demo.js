// pages/demo/demo.js
import {request} from "../../require/index"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:0,
        name:"商品",
        isActive:true
      },
      {
        id:1,
        name:"商品1",
        isActive:false
      },
      {
        id:2,
        name:"商品2",
        isActive:false
      },
      {
        id:3,
        name:"商品3",
        isActive:false
      }
  ],
  dataindex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //依次调用
    // request({
    //   url:"",
    // }).then(res=>{
    // })
  },
  itemhandle(e){
    console.log(e);
   var dataindex= e.detail.index
   this.setData({
    dataindex
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