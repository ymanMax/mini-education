const app = getApp()
import { getActivities, registerActivity } from '../../api/mockApi.js'

Page({
  data: {
    activities: []
  },

  onLoad: function (options) {
    this.loadActivities()
  },

  loadActivities: function () {
    const that = this
    try {
      const result = getActivities()
      if (result.status === 1) {
        that.setData({
          activities: result.results
        })
      }
    } catch (error) {
      console.error('加载活动列表失败:', error)
    }
  },

  viewActivity: function (e) {
    const activityId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/activity/detail?id=${activityId}`
    })
  },

  registerActivity: function (e) {
    const activityId = e.currentTarget.dataset.id
    try {
      const result = registerActivity({ id: activityId })
      if (result.status === 1) {
        wx.showToast({
          title: result.msg,
          icon: 'success'
        })
        this.loadActivities()
      }
    } catch (error) {
      wx.showToast({
        title: '报名失败',
        icon: 'none'
      })
    }
  }
})
