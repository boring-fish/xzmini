// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabslist:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleActive(e){
      console.log(e);
      // e.target.dataset.num;
      let {tabslist}=this.data
      tabslist.forEach((item,index)=>{
         index==e.target.dataset.num?item.isActive=true:item.isActive=false;
      })
      this.triggerEvent("item", {index:e.target.dataset.num});
      this.setData({
        tabslist
      })
    }
  }
})
