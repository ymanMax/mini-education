// pages/class/manage/index.js
// 班级管理页面
const mockData = require('../../../utils/mockData.js')
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    isHideLoadMore: true,
    hasNext: false,
    page: 1,
    pageSize: 20,
    classList: [],
    showCreateModal: false,
    newClassName: '',
    newClassGrade: '',
    newClassTeacher: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 获取班级列表
   */
  getClassList: function (reqData) {
    const classList = mockData.getClassList(reqData)
    this.setData({
      classList: classList.results,
      hasNext: classList.has_next,
      page: classList.page,
      isHideLoadMore: true
    })
  },

  /**
   * 显示创建班级模态框
   */
  showCreateModal: function () {
    this.setData({
      showCreateModal: true
    })
  },

  /**
   * 关闭创建班级模态框
   */
  closeCreateModal: function () {
    this.setData({
      showCreateModal: false,
      newClassName: '',
      newClassGrade: '',
      newClassTeacher: ''
    })
  },

  /**
   * 输入班级名称
   */
  inputClassName: function (e) {
    this.setData({
      newClassName: e.detail.value
    })
  },

  /**
   * 输入班级年级
   */
  inputClassGrade: function (e) {
    this.setData({
      newClassGrade: e.detail.value
    })
  },

  /**
   * 输入班主任
   */
  inputClassTeacher: function (e) {
    this.setData({
      newClassTeacher: e.detail.value
    })
  },

  /**
   * 创建班级
   */
  createClass: function () {
    if (!this.data.newClassName || !this.data.newClassGrade || !this.data.newClassTeacher) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      })
      return
    }

    const data = {
      name: this.data.newClassName,
      grade: this.data.newClassGrade,
      head_teacher: this.data.newClassTeacher
    }

    mockData.createClass(data)
    wx.showToast({
      title: '班级创建成功',
      icon: 'success'
    })

    this.closeCreateModal()
    this.getClassList({ page: 1, page_size: this.data.pageSize })
  },

  /**
   * 查看班级详情
   */
  viewClassDetail: function (e) {
    const classId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../detail/index?id=' + classId
    })
  },

  /**
   * 删除班级
   */
  deleteClass: function (e) {
    const classId = e.currentTarget.dataset.id
    wx.showModal({
      title: '确认删除',
      content: '删除班级将同时删除班级内的所有学生和考勤记录，是否确认删除？',
      success: (res) => {
        if (res.confirm) {
          mockData.deleteClass({ id: classId })
          wx.showToast({
            title: '班级删除成功',
            icon: 'success'
          })
          this.getClassList({ page: this.data.page, page_size: this.data.pageSize })
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
    wx.pageScrollTo({
      scrollTop: 0,
    })
    this.getClassList({ page: 1, page_size: this.data.pageSize })
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
      this.getClassList({ page: 1, page_size: this.data.pageSize })
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
      this.getClassList({ page: this.data.page, page_size: this.data.pageSize })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})