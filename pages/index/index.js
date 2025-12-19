//index.js
const app = getApp()

Page({
  data: {
    motto: '校园信息化管理系统',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
  },

  // 导航到各服务页面
  goToClassroom: function () {
    wx.navigateTo({
      url: '/pages/classroom/index'
    })
  },

  goToDevice: function () {
    wx.navigateTo({
      url: '/pages/device/index'
    })
  },

  goToNotice: function () {
    wx.navigateTo({
      url: '/pages/notice/index'
    })
  },

  goToLibrary: function () {
    wx.navigateTo({
      url: '/pages/library/index'
    })
  },

  goToCampusCard: function () {
    wx.navigateTo({
      url: '/pages/campuscard/index'
    })
  },

  goToActivity: function () {
    wx.navigateTo({
      url: '/pages/activity/index'
    })
  }
})
