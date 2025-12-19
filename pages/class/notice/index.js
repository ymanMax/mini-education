// pages/class/notice/index.js
// 班级公告页面
const mockData = require('../../../utils/mockData.js')
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    classId: '',
    noticeList: [],
    isHideLoadMore: true,
    hasNext: false,
    page: 1,
    pageSize: 10,
    showAddModal: false,
    showDetailModal: false,
    newNoticeTitle: '',
    newNoticeContent: '',
    selectedNotice: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.class_id) {
      this.setData({
        classId: options.class_id
      })
      this.getNoticeList()
    }
  },

  /**
   * 获取公告列表
   */
  getNoticeList: function(reqData) {
    const noticeList = mockData.getNoticeList({
      class_id: this.data.classId,
      page: this.data.page,
      page_size: this.data.pageSize,
      ...reqData
    })
    this.setData({
      noticeList: noticeList.results,
      hasNext: noticeList.hasNext,
      page: noticeList.page,
      isHideLoadMore: true
    })
  },

  /**
   * 显示添加公告模态框
   */
  showAddModal: function() {
    this.setData({
      showAddModal: true
    })
  },

  /**
   * 关闭添加公告模态框
   */
  closeAddModal: function() {
    this.setData({
      showAddModal: false,
      newNoticeTitle: '',
      newNoticeContent: ''
    })
  },

  /**
   * 输入公告标题
   */
  inputNoticeTitle: function(e) {
    this.setData({
      newNoticeTitle: e.detail.value
    })
  },

  /**
   * 输入公告内容
   */
  inputNoticeContent: function(e) {
    this.setData({
      newNoticeContent: e.detail.value
    })
  },

  /**
   * 创建公告
   */
  createNotice: function() {
    const data = {
      class_id: this.data.classId,
      title: this.data.newNoticeTitle,
      content: this.data.newNoticeContent
    }

    mockData.createNotice(data)
    wx.showToast({
      title: '公告发布成功',
      icon: 'success'
    })

    this.closeAddModal()
    this.getNoticeList({ page: 1 })
  },

  /**
   * 查看公告详情
   */
  viewNoticeDetail: function(e) {
    const noticeId = e.currentTarget.dataset.id
    const notice = mockData.getNoticeDetail({ id: noticeId })
    this.setData({
      selectedNotice: notice,
      showDetailModal: true
    })
  },

  /**
   * 关闭详情模态框
   */
  closeDetailModal: function() {
    this.setData({
      showDetailModal: false,
      selectedNotice: null
    })
  },

  /**
   * 删除公告
   */
  deleteNotice: function(e) {
    const noticeId = e.currentTarget.dataset.id
    wx.showModal({
      title: '删除公告',
      content: '确定要删除这条公告吗？',
      success: (res) => {
        if (res.confirm) {
          mockData.deleteNotice({ id: noticeId })
          wx.showToast({
            title: '删除成功',
            icon: 'success'
          })
          this.getNoticeList({ page: 1 })
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
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
      this.getNoticeList({ page: 1, page_size: this.data.pageSize })
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
      this.getNoticeList({ page: this.data.page, page_size: this.data.pageSize })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
