// pages/class/students/index.js
// 班级学生列表页面
const mockData = require('../../../utils/mockData.js')
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    classId: '',
    isHideLoadMore: true,
    hasNext: false,
    page: 1,
    pageSize: 20,
    studentList: [],
    showAddModal: false,
    newStudentName: '',
    newStudentSex: 0,
    newStudentAge: '',
    newParentName: '',
    newParentPhone: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.class_id) {
      this.setData({
        classId: options.class_id
      })
      this.getStudentList()
    }
  },

  /**
   * 获取学生列表
   */
  getStudentList: function (reqData) {
    const studentList = mockData.getClassStudentList({
      class_id: this.data.classId,
      page: this.data.page,
      page_size: this.data.pageSize,
      ...reqData
    })
    this.setData({
      studentList: studentList.results,
      hasNext: studentList.has_next,
      page: studentList.page,
      isHideLoadMore: true
    })
  },

  /**
   * 显示添加学生模态框
   */
  showAddModal: function () {
    this.setData({
      showAddModal: true
    })
  },

  /**
   * 关闭添加学生模态框
   */
  closeAddModal: function () {
    this.setData({
      showAddModal: false,
      newStudentName: '',
      newStudentSex: 0,
      newStudentAge: '',
      newParentName: '',
      newParentPhone: ''
    })
  },

  /**
   * 输入学生姓名
   */
  inputStudentName: function (e) {
    this.setData({
      newStudentName: e.detail.value
    })
  },

  /**
   * 选择学生性别
   */
  selectStudentSex: function (e) {
    this.setData({
      newStudentSex: parseInt(e.currentTarget.dataset.sex)
    })
  },

  /**
   * 输入学生年龄
   */
  inputStudentAge: function (e) {
    this.setData({
      newStudentAge: e.detail.value
    })
  },

  /**
   * 输入家长姓名
   */
  inputParentName: function (e) {
    this.setData({
      newParentName: e.detail.value
    })
  },

  /**
   * 输入家长电话
   */
  inputParentPhone: function (e) {
    this.setData({
      newParentPhone: e.detail.value
    })
  },

  /**
   * 添加学生
   */
  addStudent: function () {
    if (!this.data.newStudentName || !this.data.newStudentAge || !this.data.newParentName || !this.data.newParentPhone) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      })
      return
    }

    const data = {
      class_id: this.data.classId,
      name: this.data.newStudentName,
      sex: this.data.newStudentSex,
      age: parseInt(this.data.newStudentAge),
      parent_name: this.data.newParentName,
      parent_phone: this.data.newParentPhone
    }

    mockData.addClassStudent(data)
    wx.showToast({
      title: '学生添加成功',
      icon: 'success'
    })

    this.closeAddModal()
    this.getStudentList({ page: 1, page_size: this.data.pageSize })
  },

  /**
   * 查看学生详情
   */
  viewStudentDetail: function (e) {
    const studentId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: './detail/index?id=' + studentId + '&class_id=' + this.data.classId
    })
  },

  /**
   * 删除学生
   */
  deleteStudent: function (e) {
    const studentId = e.currentTarget.dataset.id
    wx.showModal({
      title: '确认删除',
      content: '删除学生将同时删除该学生的所有考勤记录，是否确认删除？',
      success: (res) => {
        if (res.confirm) {
          mockData.removeClassStudent({ id: studentId })
          wx.showToast({
            title: '学生删除成功',
            icon: 'success'
          })
          this.getStudentList({ page: this.data.page, page_size: this.data.pageSize })
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
      this.getStudentList({ page: 1, page_size: this.data.pageSize })
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
      this.getStudentList({ page: this.data.page, page_size: this.data.pageSize })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})