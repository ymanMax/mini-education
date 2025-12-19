const app = getApp()
import { getNotices } from '../../api/mockApi.js'

Page({
  data: {
    notices: [],
    activeTab: 'all'
  },

  onLoad: function (options) {
    this.loadNotices()
  },

  loadNotices: function (type = '') {
    const that = this
    try {
      const result = getNotices({ type: type || undefined })
      if (result.status === 1) {
        that.setData({
          notices: result.results
        })
      }
    } catch (error) {
      console.error('加载公告列表失败:', error)
    }
  },

  switchTab: function (e) {
    const type = e.currentTarget.dataset.type
    this.setData({
      activeTab: type
    })
    this.loadNotices(type === 'all' ? '' : type)
  },

  viewNotice: function (e) {
    const noticeId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/notice/detail?id=${noticeId}`
    })
  }
})
