// pages/class/detail/index.js
// 班级详情页面
const mockData = require('../../../utils/mockData.js')
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    classId: '',
    classDetail: {},
    showEditModal: false,
    editClassName: '',
    editClassGrade: '',
    editClassTeacher: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id) {
      this.setData({
        classId: options.id
      })
      this.getClassDetail()
    }
  },

  /**
   * 获取班级详情
   */
  getClassDetail: function () {
    const classDetail = mockData.getClassDetail({ id: this.data.classId })
    this.setData({
      classDetail: classDetail,
      editClassName: classDetail.name,
      editClassGrade: classDetail.grade,
      editClassTeacher: classDetail.head_teacher
    })
  },

  /**
   * 显示编辑班级模态框
   */
  showEditModal: function () {
    this.setData({
      showEditModal: true
    })
  },

  /**
   * 关闭编辑班级模态框
   */
  closeEditModal: function () {
    this.setData({
      showEditModal: false
    })
  },

  /**
   * 输入班级名称
   */
  inputClassName: function (e) {
    this.setData({
      editClassName: e.detail.value
    })
  },

  /**
   * 输入班级年级
   */
  inputClassGrade: function (e) {
    this.setData({
      editClassGrade: e.detail.value
    })
  },

  /**
   * 输入班主任
   */
  inputClassTeacher: function (e) {
    this.setData({
      editClassTeacher: e.detail.value
    })
  },

  /**
   * 编辑班级
   */
  editClass: function () {
    if (!this.data.editClassName || !this.data.editClassGrade || !this.data.editClassTeacher) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      })
      return
    }

    const data = {
      name: this.data.editClassName,
      grade: this.data.editClassGrade,
      head_teacher: this.data.editClassTeacher
    }

    mockData.updateClass({ id: this.data.classId }, data)
    wx.showToast({
      title: '班级信息更新成功',
      icon: 'success'
    })

    this.closeEditModal()
    this.getClassDetail()
  },

  /**
   * 跳转到学生列表页面
   */
  goToStudentList: function () {
    wx.navigateTo({
      url: '../students/index?class_id=' + this.data.classId
    })
  },

  /**
   * 跳转到考勤记录页面
   */
  goToAttendance: function () {
    wx.navigateTo({
      url: '../attendance/index?class_id=' + this.data.classId
    })
  },

  /**
   * 跳转到考勤统计页面
   */
  goToAttendanceStat: function () {
    wx.navigateTo({
      url: '../attendance-stat/index?class_id=' + this.data.classId
    })
  },

  /**
   * 跳转到班级通讯录页面
   */
  goToContacts: function () {
    wx.navigateTo({
      url: '../contacts/index?class_id=' + this.data.classId
    })
  },

  /**
   * 跳转到班级公告页面
   */
  goToNotice: function () {
    wx.navigateTo({
      url: '../notice/index?class_id=' + this.data.classId
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
      this.getClassDetail()
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