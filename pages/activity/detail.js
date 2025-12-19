const app = getApp()
import { getActivityDetail, registerActivity } from '../../api/mockApi.js'

Page({
  data: {
    activity: {}
  },

  onLoad: function (options) {
    const activityId = options.id
    this.loadActivityDetail(activityId)
  },

  loadActivityDetail: function (id) {
    const that = this
    try {
      const result = getActivityDetail(id)
      if (result.status === 1) {
        that.setData({
          activity: result
        })
      }
    } catch (error) {
      console.error('加载活动详情失败:', error)
    }
  },

  registerActivity: function () {
    const { activity } = this.data
    try {
      const result = registerActivity({ id: activity.id })
      if (result.status === 1) {
        wx.showToast({
          title: result.msg,
          icon: 'success'
        })
      }
    } catch (error) {
      wx.showToast({
        title: '报名失败',
        icon: 'none'
      })
    }
  }
})
