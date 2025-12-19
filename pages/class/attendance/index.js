// pages/class/attendance/index.js
// 班级考勤记录页面
const mockData = require('../../../utils/mockData.js')
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    classId: '',
    currentDate: new Date().toISOString().split('T')[0],
    isHideLoadMore: true,
    hasNext: false,
    page: 1,
    pageSize: 20,
    attendanceList: [],
    showRecordModal: false,
    selectedStudentId: '',
    selectedStatus: '出勤',
    statusOptions: ['出勤', '迟到', '早退', '缺勤', '请假'],
    remark: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.class_id) {
      this.setData({
        classId: options.class_id
      })
      this.getAttendanceRecord()
    }
  },

  /**
   * 获取考勤记录
   */
  getAttendanceRecord: function (reqData) {
    const attendanceList = mockData.getAttendanceRecord({
      class_id: this.data.classId,
      date: this.data.currentDate,
      page: this.data.page,
      page_size: this.data.pageSize,
      ...reqData
    })
    this.setData({
      attendanceList: attendanceList.results,
      hasNext: attendanceList.has_next,
      page: attendanceList.page,
      isHideLoadMore: true
    })
  },

  /**
   * 选择日期
   */
  selectDate: function (e) {
    this.setData({
      currentDate: e.detail.value,
      page: 1
    })
    this.getAttendanceRecord()
  },

  /**
   * 显示记录考勤模态框
   */
  showRecordModal: function (e) {
    const studentId = e.currentTarget.dataset.studentid
    const studentName = e.currentTarget.dataset.studentname
    this.setData({
      showRecordModal: true,
      selectedStudentId: studentId,
      selectedStudentName: studentName
    })
  },

  /**
   * 关闭记录考勤模态框
   */
  closeRecordModal: function () {
    this.setData({
      showRecordModal: false,
      selectedStudentId: '',
      selectedStudentName: '',
      selectedStatus: '出勤',
      remark: ''
    })
  },

  /**
   * 选择考勤状态
   */
  selectStatus: function (e) {
    this.setData({
      selectedStatus: e.currentTarget.dataset.status
    })
  },

  /**
   * 输入备注
   */
  inputRemark: function (e) {
    this.setData({
      remark: e.detail.value
    })
  },

  /**
   * 记录考勤
   */
  recordAttendance: function () {
    const data = {
      class_id: this.data.classId,
      student_id: this.data.selectedStudentId,
      date: this.data.currentDate,
      status: this.data.selectedStatus,
      remark: this.data.remark
    }

    mockData.recordAttendance(data)
    wx.showToast({
      title: '考勤记录成功',
      icon: 'success'
    })

    this.closeRecordModal()
    this.getAttendanceRecord()
  },

  /**
   * 更新考勤记录
   */
  updateAttendance: function (e) {
    const recordId = e.currentTarget.dataset.id
    const studentId = e.currentTarget.dataset.studentid
    const currentStatus = e.currentTarget.dataset.status

    // 显示状态选择菜单
    wx.showActionSheet({
      itemList: this.data.statusOptions,
      success: (res) => {
        const newStatus = this.data.statusOptions[res.tapIndex]
        if (newStatus !== currentStatus) {
          mockData.updateAttendance({ id: recordId }, {
            status: newStatus
          })
          wx.showToast({
            title: '考勤更新成功',
            icon: 'success'
          })
          this.getAttendanceRecord()
        }
      }
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
      wx.hideNavigationBarLoading(); //完成停止加载
      wx.stopPullDownRefresh(); //停止下拉刷新
      this.getAttendanceRecord({ page: 1, page_size: this.data.pageSize })
    }, 1000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if (this.data.hasNext) {
      this.setData({
        isHideLoadMore: false,
        page: this.data.page + 1
      });
      this.getAttendanceRecord({ page: this.data.page, page_size: this.data.pageSize })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})