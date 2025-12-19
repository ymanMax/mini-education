const app = getApp()
import { getNoticeDetail } from '../../api/mockApi.js'

Page({
  data: {
    notice: {}
  },

  onLoad: function (options) {
    const noticeId = options.id
    this.loadNoticeDetail(noticeId)
  },

  loadNoticeDetail: function (id) {
    const that = this
    try {
      const result = getNoticeDetail(id)
      if (result.status === 1) {
        that.setData({
          notice: result
        })
      }
    } catch (error) {
      console.error('加载公告详情失败:', error)
    }
  }
})
