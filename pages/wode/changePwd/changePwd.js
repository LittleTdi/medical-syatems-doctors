// pages/wode/changePwd/changePwd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    input1:null,
    input2: null,
    input3: null,
    input4: null,
    input5: null,
    input6: null,
    inputnum:null,
  },
  inputnum(e) {
    // console.log(e.detail.value.length)
    var num = e.detail.value
    var length = e.detail.value.length
    // console.log(num[0])
    var _this = this
    if (length == 1) {
      _this.setData({
        input1: num[0],
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
      })
    } else if (length == 2) {
      _this.setData({
        input1: num[0],
        input2: num[1],
        input3: '',
        input4: '',
        input5: '',
        input6: '',
      })
    } else if (length == 3) {
      _this.setData({
        input1: num[0],
        input2: num[1],
        input3: num[2],
        input4: '',
        input5: '',
        input6: '',
      })
    } else if (length == 4) {
      _this.setData({
        input1: num[0],
        input2: num[1],
        input3: num[2],
        input4: num[3],
        input5: '',
        input6: '',
      })
    } else if (length == 5) {
      _this.setData({
        input1: num[0],
        input2: num[1],
        input3: num[2],
        input4: num[3],
        input5: num[4],
        input6: '',
      })
    } else if (length == 6) {
      _this.setData({
        input1: num[0],
        input2: num[1],
        input3: num[2],
        input4: num[3],
        input5: num[4],
        input6: num[5],
        inputnum:num
      })
    } else {
      _this.setData({
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
      })
    }
    // console.log(num);
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
      title: '提取密码',
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