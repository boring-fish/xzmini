// pages/demo1/demo1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentindex:0,
    leftlist:[{
      name:1,
      id:1,
      children:[
        {
          name:1,
          child:[{
            name:"1-1",
            id:1
          },{
            name:"1-2",
            id:2
          },{
            name:"1-3",
            id:3
          },{
            name:"1-4",
            id:4
          },{
            name:"1-5",
            id:5
          }]
        }
      ]
    },
    {
      name:2,
      id:2,
      children:[
        {
          name:2,
          child:[{
            name:"2-1",
            id:1
          },{
            name:"2-2",
            id:2
          },{
            name:"2-3",
            id:3
          },{
            name:"2-4",
            id:4
          },{
            name:"2-5",
            id:5
          }]
        }
      ]
    }
    ,
    {
      name:3,
      id:3,
      children:[
        {
          name:3,
          child:[{
            name:"3-1",
            id:1
          },{
            name:"3-2",
            id:2
          },{
            name:"3-3",
            id:3
          },{
            name:"3-4",
            id:4
          },{
            name:"3-5",
            id:5
          }]
        }
      ]
    }
    ,
    {
      name:4,
      id:4,
      children:[
        {
          name:4,
          child:[{
            name:"4-1",
            id:1
          },{
            name:"4-2",
            id:2
          },{
            name:"4-3",
            id:3
          },{
            name:"4-4",
            id:4
          },{
            name:"4-5",
            id:5
          }]
        }
      ]
    },
    {
      name:5,
      id:5,
      children:[
        {
          name:5,
          child:[{
            name:"5-1",
            id:1
          },{
            name:"5-2",
            id:2
          },{
            name:"5-3",
            id:3
          },{
            name:"5-4",
            id:4
          },{
            name:"5-5",
            id:5
          }]
        }
      ]
    },
    {
      name:6,
      id:6
    },
    {
      name:7,
      id:7
    },
    {
      name:8,
      id:8
    },
    {
      name:9,
      id:9
    },
    {
      name:10,
      id:10
    },
    {
      name:11,
      id:11
    },
    {
      name:12,
      id:12
    }
    , {
      name:13,
      id:13
    }
  ],
  rightlist:[
    {
    name:1,
    child:[{
      name:"1-1",
      id:1
    },{
      name:"1-2",
      id:2
    },{
      name:"1-3",
      id:3
    },{
      name:"1-4",
      id:4
    },{
      name:"1-5",
      id:5
    }]
  },
  {
    name:2,
    child:[{
      name:"2-1",
      id:1
    },{
      name:"2-2",
      id:2
    },{
      name:"2-3",
      id:3
    },{
      name:"2-4",
      id:4
    },{
      name:"2-5",
      id:5
    }]
  },
  {
    name:3,
    child:[{
      name:"3-1",
      id:1
    },{
      name:"3-2",
      id:2
    },{
      name:"3-3",
      id:3
    },{
      name:"3-4",
      id:4
    },{
      name:"3-5",
      id:5
    }]
  },
  {
    name:4,
    child:[{
      name:"4-1",
      id:1
    },{
      name:"4-2",
      id:2
    },{
      name:"4-3",
      id:3
    },{
      name:"4-4",
      id:4
    },{
      name:"4-5",
      id:5
    },{
      name:"4-5",
      id:5
    }]
  }
  ],
// origindata:
  },
  selectChecked(e){
   console.log(e);
   var that=this.data.leftlist[e.currentTarget.dataset.id-1].children
   this.setData({
     currentindex:e.currentTarget.dataset.id-1,
     rightlist:that
   });
   console.log(this.data.rightlist);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.rightlist=this.data.leftlist.children;
   
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