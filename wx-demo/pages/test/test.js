// pages/test/test.js
Page({
  /**
   * 页面的初始数据
   */

  //  data 的修改只能使用 setData 不能直接修改

  data: {
    num: 10,
    show: false,
    inputValue: "1111",
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
    ],
    imgUrls: [
      "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640",
      "https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640",
      "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640"
    ],
    posts: []
  },
  // 256  127
  // 600rpx  ?

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
  // id-one  ----> idOne
  del(event) {
    // 删除数组中的某一项需要 id
    const { idOne } = event.currentTarget.dataset
    this.setData({
      // filter 的返回值
      users: this.data.users.filter(user => user.id != idOne)
    })
  },
  addUser() {
    console.log("11")
    if (this.data.inputValue.trim()) {
      const newUser = {
        id: new Date().getTime(),
        name: this.data.inputValue,
        age: 80
      }
      const newUsers = [...this.data.users, newUser]
      this.setData({
        // push 的返回值
        users: newUsers,
        inputValue: ""
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    // const that = this
    wx.request({
      url: "https://cnodejs.org/api/v1/topics?limit=5",
      // success(res) {
      //   console.log(res.data.data)
      //   that.setData({
      //     posts: res.data.data
      //   })
      // }
      success: res => {
        this.setData({
          posts: res.data.data
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
