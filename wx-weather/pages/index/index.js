//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse("button.open-type.getUserInfo"),
    normalWeather: null,
    airQuantity: null
  },
  //事件处理函数
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    wx.getLocation({
      type: "wgs84",
      success: res => {
        console.log(res)
        this.getNormalWeather(`${res.longitude},${res.latitude}`)
      }
    })
  },
  getNormalWeather(location) {
    // 获取常规天气
    //
    // const newCity = this.data.city
    //   .split(",")
    //   .reverse()
    //   .toString()
    //   .replace("市", "")
    wx.request({
      url: `https://free-api.heweather.net/s6/weather/now?location=${location}&key=c35e8d8ac03a41ad9e139de99ffdedc6`,
      success: res => {
        console.log(res.data.HeWeather6[0])
        this.setData({
          normalWeather: res.data.HeWeather6[0]
        })
        wx.stopPullDownRefresh()
      }
    })
  },
  changeCity(event) {
    this.getNormalWeather(event.detail.value[1])
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onPullDownRefresh() {
    this.getNormalWeather(this.data.normalWeather.basic.parent_city)
  }
})
