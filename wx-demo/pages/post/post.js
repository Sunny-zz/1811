// pages/post/post.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    post: null,
    completed: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  jump() {
    // 判断
    if (this.data.completed) {
      // 进行跳转
      wx.switchTab({
        url: "/pages/index/index"
      })
    }
  },
  jumpDemo() {
    // 判断
    if (this.data.completed) {
      // 进行跳转
      wx.reLaunch({
        url: "/pages/demo/demo"
      })
    }
  },
  back() {
    wx.navigateBack()
  },
  onLoad: function(options) {
    console.log(options.id)
    // 发请求展示标题
    wx.request({
      // 方法
      method: "GET",
      // 传参
      data: {},
      url: `https://cnodejs.org/api/v1/topic/${options.id}`,
      success: res => {
        this.setData({
          post: res.data.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})
