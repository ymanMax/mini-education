// pages/class/attendance-stat/index.js
// 考勤统计页面
const mockData = require('../../../utils/mockData.js')
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    classId: '',
    statType: 'daily', // 'daily': 日统计, 'weekly': 周统计, 'monthly': 月统计
    currentDate: new Date().toISOString().split('T')[0],
    currentWeek: '',
    currentMonth: '',
    attendanceStat: null,
    statOptions: [
      { value: 'daily', label: '日统计' },
      { value: 'weekly', label: '周统计' },
      { value: 'monthly', label: '月统计' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.class_id) {
      this.setData({
        classId: options.class_id
      })
      this.getAttendanceStat()
      this.setWeekAndMonth()
    }
  },

  /**
   * 设置周和月信息
   */
  setWeekAndMonth: function() {
    const today = new Date()
    const week = this.getWeekNumber(today)
    const month = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0')

    this.setData({
      currentWeek: week,
      currentMonth: month
    })
  },

  /**
   * 获取周数
   */
  getWeekNumber: function(date) {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
    const dayNum = d.getUTCDay() || 7
    d.setUTCDate(d.getUTCDate() + 4 - dayNum)
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
    return Math.ceil((((d - yearStart) / 86400000) + 1) / 7)
  },

  /**
   * 选择统计类型
   */
  selectStatType: function(e) {
    this.setData({
      statType: e.currentTarget.dataset.type
    })
    this.getAttendanceStat()
  },

  /**
   * 选择日期
   */
  selectDate: function(e) {
    this.setData({
      currentDate: e.detail.value
    })
    this.getAttendanceStat()
  },

  /**
   * 获取考勤统计数据
   */
  getAttendanceStat: function() {
    const data = {
      class_id: this.data.classId,
      type: this.data.statType
    }

    // 根据统计类型添加不同的参数
    if (this.data.statType === 'daily') {
      data.date = this.data.currentDate
    } else if (this.data.statType === 'weekly') {
      data.week = this.data.currentWeek
    } else if (this.data.statType === 'monthly') {
      data.month = this.data.currentMonth
    }

    const statData = mockData.getAttendanceStat(data)
    this.setData({
      attendanceStat: statData
    })
  },

  /**
   * 导出考勤数据
   */
  exportAttendance: function() {
    wx.showModal({
      title: '导出考勤',
      content: '确定要导出当前考勤数据吗？',
      success: (res) => {
        if (res.confirm) {
          mockData.exportAttendanceData({
            class_id: this.data.classId,
            type: this.data.statType
          })
          wx.showToast({
            title: '导出成功',
            icon: 'success'
          })
        }
      }
    })
  },

  /**
   * 查看详细记录
   */
  viewDetail: function() {
    wx.navigateTo({
      url: `/pages/class/attendance/index?class_id=${this.data.classId}`
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading();
    setTimeout(() => {
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
      this.getAttendanceStat()
    }, 1000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
