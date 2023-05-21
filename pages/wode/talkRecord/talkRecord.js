// pages/wode/talkRecord/talkRecord.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    medical: ['京制黄牛解毒片', '复方穿心莲', '复方穿心莲', 'vc银翘片', '桑菊感冒冲剂', '复方穿心莲', 'vc银翘片', '京制黄牛解毒片', '复方穿心莲', '复方穿心莲', 'vc银翘片', '桑菊感冒冲剂','更多'],
    ks: ["内科", '外科', '儿科', '妇科', '皮肤科', '眼科','骨科']
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
      title: '查找聊天记录',
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