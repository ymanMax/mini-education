const app = getApp()
import { getCampusCard, getConsumptionRecords, rechargeCard } from '../../api/mockApi.js'

Page({
  data: {
    campusCard: {},
    consumptionRecords: [],
    rechargeAmount: ''
  },

  onLoad: function (options) {
    this.loadCardInfo()
    this.loadConsumptionRecords()
  },

  loadCardInfo: function () {
    const that = this
    try {
      const result = getCampusCard()
      if (result.status === 1) {
        that.setData({
          campusCard: result
        })
      }
    } catch (error) {
      console.error('加载校园卡信息失败:', error)
    }
  },

  loadConsumptionRecords: function () {
    const that = this
    try {
      const result = getConsumptionRecords()
      if (result.status === 1) {
        that.setData({
          consumptionRecords: result.results
        })
      }
    } catch (error) {
      console.error('加载消费记录失败:', error)
    }
  },

  onRechargeInput: function (e) {
    this.setData({
      rechargeAmount: e.detail.value
    })
  },

  rechargeCard: function () {
    const { rechargeAmount } = this.data
    if (!rechargeAmount || parseFloat(rechargeAmount) <= 0) {
      wx.showToast({
        title: '请输入有效金额',
        icon: 'none'
      })
      return
    }

    try {
      const result = rechargeCard({ amount: parseFloat(rechargeAmount) })
      if (result.status === 1) {
        wx.showToast({
          title: result.msg,
          icon: 'success'
        })
        this.setData({
          rechargeAmount: ''
        })
        this.loadCardInfo()
        this.loadConsumptionRecords()
      }
    } catch (error) {
      wx.showToast({
        title: '充值失败',
        icon: 'none'
      })
    }
  }
})
