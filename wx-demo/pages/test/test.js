// pages/test/test.js
Page({
  /**
   * 页面的初始数据
   */

  //  data 的修改只能使用 setData 不能直接修改

  data: {
    num: 10,
    show: false,
    inputValue: "",
    users: [
      {
        id: "12sd",
        name: "zzt",
        age: 14
      },
      {
        id: "11sd",
        name: "zzt1",
        age: 11
      },
      {
        id: "13sd",
        name: "zzt2",
        age: 12
      },
      {
        id: "14sd",
        name: "zzt3",
        age: 30
      }
    ]
  },
  handleInput(event) {
    // 获取 input 的值
    // console.log(event.detail.value)
    this.setData({
      inputValue: event.detail.value
    })
  },
  onTap() {
    this.setData({
      show: !this.data.show
      // 修改多个 data
      // num: this.data.num + 1
    })
  },
  add() {
    // 获取 data
    console.log(this.data.num)
    // 修改 data
    this.setData({
      num: this.data.num + 1
    })
  },
  sub() {
    const { num } = this.data
    if (num > 1) {
      this.setData({
        num: num - 1
      })
    }
  },
  del(event) {
    // 删除数组中的某一项需要 id
    const { id } = event.currentTarget.dataset
    console.log(id)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

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
