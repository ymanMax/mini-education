const app = getApp()
import { getClassrooms, reserveClassroom } from '../../api/mockApi.js'

Page({
  data: {
    classrooms: []
  },

  onLoad: function (options) {
    this.loadClassrooms()
  },

  loadClassrooms: function () {
    const that = this
    try {
      const result = getClassrooms()
      if (result.status === 1) {
        that.setData({
          classrooms: result.results
        })
      }
    } catch (error) {
      console.error('加载教室列表失败:', error)
    }
  },

  reserveClassroom: function (e) {
    const classroomId = e.currentTarget.dataset.id
    try {
      const result = reserveClassroom({ id: classroomId })
      if (result.status === 1) {
        wx.showToast({
          title: result.msg,
          icon: 'success'
        })
      }
    } catch (error) {
      wx.showToast({
        title: '预约失败',
        icon: 'none'
      })
    }
  }
})
