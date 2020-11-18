// pages/nxx/nxx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[
      {
        imgnum: ''
      },
    ],
    bigcontainer:[1,2,3,4],
    displaynone:'none',
    displaynones:"none",
    imgstra:'',
    imgstrb: '',
    imgstrc: '',
    imgstrd: '',
    word:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var obj={}; var arrs=[];
    for(var j=1;j<2;j++){
      var brr=[];
      var nums = Math.floor(Math.random() * 40) + 1;
      for (var i = 1; i < 5; i++) {
        // var imgstr = '../img/' + nums + '.jpg';
        var imgstr = '../img/' + (Math.floor(Math.random() * 40) + 1) + '.jpg';
        var imgstra = '../img/' + (Math.floor(Math.random() * 40) + 1) + '.jpg';
        var imgstrb = '../img/' + (Math.floor(Math.random() * 40) + 1) + '.jpg';
        var imgstrc = '../img/' + (Math.floor(Math.random() * 40) + 1) + '.jpg';
        var imgstrd = '../img/' + (Math.floor(Math.random() * 40) + 1) + '.jpg';
        // console.log(imgstr);
       
        obj.imgnum = imgstr;
        arrs.push(obj);
        // console.log(obj.imgnum);
        // console.log(obj);
        // console.log(arrs);
        
      }
      brr.push(nums);
    }
    
    console.log(arrs);
    this.setData({
      arr: arrs,
      imgstr: imgstr,
      imgstra: imgstra,
      imgstrb: imgstrb,
      imgstrc: imgstrc,
      imgstrd: imgstrd
    })
    // console.log(this.setData.arr);
   
  },
  xx: function () {
    var dpn = this.data.displaynone == 'block' ? 'none' : 'block';
   
    this.setData({
      displaynone: dpn,

    })
    // console.log(this.setData.displaynone);
  },
  close:function(){
    var dpns = this.data.displaynones == 'block' ? 'none' : 'block';
    this.setData({
      displaynones: dpns
    })
  },
  imgselect:function(){
    var obj = {}; var arrs = [];
    for (var j = 1; j < 2; j++) {
      for (var i = 1; i <5; i++) {
        var imgstr = '../img/' + (Math.floor(Math.random() * 42) + 1) + '.jpg';
        var imgstra = '../img/' + (Math.floor(Math.random() * 42) + 1) + '.jpg';
        var imgstrb = '../img/' + (Math.floor(Math.random() * 42) + 1) + '.jpg';
        var imgstrc = '../img/' + (Math.floor(Math.random() * 42) + 1) + '.jpg';
        var imgstrd = '../img/' + (Math.floor(Math.random() * 42) + 1) + '.jpg';
        obj.imgnum = imgstr;
        console.log(j,i);
        arrs.push(obj);
      }
      this.setData({
        arr: arrs,
        imgstr: imgstr,
        imgstra: imgstra,
        imgstrb: imgstrb,
        imgstrc: imgstrc,
        imgstrd: imgstrd
      })
    }

  },
  changeselect:function(){
    var word='';
    var dpns = this.data.displaynone == 'block' ? 'none' : 'block';
    var nums = Math.floor(Math.random() * 11) + 1;
    switch(nums){
      case 1: word="鼠";break;
      case 2: word = "牛"; break;
      case 3: word = "虎"; break;
      case 4: word = "兔"; break;
      case 5: word = "龙"; break;
      case 6: word = "蛇"; break;
      case 7: word = "马"; break;
      case 8: word = "羊"; break;
      case 9: word = "猴"; break;
      case 10: word = "鸡"; break;
      case 11: word = "狗"; break;
      case 12: word = "猪"; break;
    }
    this.setData({
      displaynones: dpns,
      word:word
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