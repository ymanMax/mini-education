const app = getApp()
import { getDevices, reserveDevice } from '../../api/mockApi.js'

Page({
  data: {
    devices: []
  },

  onLoad: function (options) {
    this.loadDevices()
  },

  loadDevices: function () {
    const that = this
    try {
      const result = getDevices()
      if (result.status === 1) {
        that.setData({
          devices: result.results
        })
      }
    } catch (error) {
      console.error('加载设备列表失败:', error)
    }
  },

  reserveDevice: function (e) {
    const deviceId = e.currentTarget.dataset.id
    try {
      const result = reserveDevice({ id: deviceId })
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
