// pages/medicalBox/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yp: ['消化系统', '感冒咳嗽', '皮肤用药', '儿童用药', '风湿伤骨', '五官用药', '妇科用药','其他'],
    tab:2,
    disease: ["感冒", "发烧", "咳嗽", "感冒", "发烧", "咳嗽", "感冒", "发烧", "咳嗽"],
    medical: ['vc银翘片', '桑菊感冒冲剂', '牛黄解毒丸', '板蓝根冲剂','清热解毒口服液'],
    istrue:false,
    ypItm:''
  },
  closeDialog:function(){
    this.setData({
      istrue:false
    })
  },
  addYp:function(e){
    console.log(e)
  },
  stopEvent:function(){},
  openDialog:function(){
    this.setData({
      istrue:true
    })
  },
  changeNav1:function(){
    this.setData({
      tab:1
    })
  },
  changeNav2:function(){
    this.setData({
      tab:2
    })
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
    wx.setNavigationBarTitle({
      title: '医药箱',
    })
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