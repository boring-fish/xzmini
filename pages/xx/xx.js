// pages/xx/xx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    displaynone:'block',
    displaynones: 'none',
    pageBackgroundColor: '#5cb85c',
    imgsrc:'',
    num:1
  },
   xx:function(){
     var dpn = this.data.displaynone == 'block' ? 'none' : 'block';
     this.setData({
       displaynone: dpn
     })
     console.log(this.setData.displaynone);
   },
   changebig:function(){
     var dpns = this.data.displaynones == 'block' ? 'none' : 'block';
     console.log(dpns);
     var nums = Math.floor(Math.random() * 40)+1;
    console.log(nums);
     var imgstr ="../img/" +nums+'.jpg'
     console.log(imgstr);
     this.setData({
       displaynones: dpns,
       imgsrc: imgstr,
     })
     console.log(this.setData.displaynones);
   },
   handleContact (e) {
    console.log(e)
   var pnum='15002697409'
   
   
    wx.makePhoneCall({
      phoneNumber: pnum, //仅为示例，并非真实的电话号码
      success:function(res){
        console.log(res);
      }
    })
  
},
copy(){
  console.log(wx.setClipboardData)
  if(wx.setClipboardData){
  wx.setClipboardData({
    data: '12345678909',
    success (res) {
      wx.getClipboardData({
        success (res) {
          console.log(res.data) // data
        }
      })
    }
  })
}else{
  wx.showModal({
  title:'版本警告',
  content:'您当前版本太低，请先升级',
  cancelColor: '取消',
})
}   
},
handleShare(){

},
onShareAppMessage: function (res) {
  console.log(res);
  // return custom share data when user share.
},
handlephone(e){
  console.log(e);
},
errors(e){
  console.log(e)
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    
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
    var nums = Math.floor(Math.random() * 40) + 1;
    this.setData({
      num: nums
    })
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