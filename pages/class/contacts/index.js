// pages/class/contacts/index.js
// 班级通讯录页面
const mockData = require('../../../utils/mockData.js')
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    classId: '',
    contactsList: [],
    showTeacherSection: true,
    showParentSection: true,
    showAddModal: false,
    newContactType: 'parent',
    newContactName: '',
    newContactPhone: '',
    newContactRelation: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.class_id) {
      this.setData({
        classId: options.class_id
      })
      this.getClassContacts()
    }
  },

  /**
   * 获取班级通讯录
   */
  getClassContacts: function() {
    const contacts = mockData.getClassContacts({
      class_id: this.data.classId
    })
    this.setData({
      contactsList: contacts
    })
  },

  /**
   * 切换显示教师列表
   */
  toggleTeacherSection: function() {
    this.setData({
      showTeacherSection: !this.data.showTeacherSection
    })
  },

  /**
   * 切换显示家长列表
   */
  toggleParentSection: function() {
    this.setData({
      showParentSection: !this.data.showParentSection
    })
  },

  /**
   * 显示添加联系人模态框
   */
  showAddModal: function() {
    this.setData({
      showAddModal: true
    })
  },

  /**
   * 关闭添加联系人模态框
   */
  closeAddModal: function() {
    this.setData({
      showAddModal: false,
      newContactType: 'parent',
      newContactName: '',
      newContactPhone: '',
      newContactRelation: ''
    })
  },

  /**
   * 选择联系人类别
   */
  selectContactType: function(e) {
    this.setData({
      newContactType: e.currentTarget.dataset.type
    })
  },

  /**
   * 输入联系人姓名
   */
  inputContactName: function(e) {
    this.setData({
      newContactName: e.detail.value
    })
  },

  /**
   * 输入联系人电话
   */
  inputContactPhone: function(e) {
    this.setData({
      newContactPhone: e.detail.value
    })
  },

  /**
   * 输入联系人关系
   */
  inputContactRelation: function(e) {
    this.setData({
      newContactRelation: e.detail.value
    })
  },

  /**
   * 添加联系人
   */
  addContact: function() {
    const data = {
      class_id: this.data.classId,
      type: this.data.newContactType,
      name: this.data.newContactName,
      phone: this.data.newContactPhone,
      relation: this.data.newContactRelation
    }

    mockData.addClassContact(data)
    wx.showToast({
      title: '添加成功',
      icon: 'success'
    })

    this.closeAddModal()
    this.getClassContacts()
  },

  /**
   * 拨打电话
   */
  makePhoneCall: function(e) {
    const phoneNumber = e.currentTarget.dataset.phone
    wx.makePhoneCall({
      phoneNumber: phoneNumber
    })
  },

  /**
   * 发送短信
   */
  sendMessage: function(e) {
    const phoneNumber = e.currentTarget.dataset.phone
    wx.showModal({
      title: '发送短信',
      content: `确定要给 ${phoneNumber} 发送短信吗？`,
      success: (res) => {
        if (res.confirm) {
          wx.showToast({
            title: '短信发送功能演示',
            icon: 'none'
          })
        }
      }
    })
  },

  /**
   * 删除联系人
   */
  deleteContact: function(e) {
    const contactId = e.currentTarget.dataset.id
    wx.showModal({
      title: '删除联系人',
      content: '确定要删除这个联系人吗？',
      success: (res) => {
        if (res.confirm) {
          mockData.deleteClassContact({
            contact_id: contactId
          })
          wx.showToast({
            title: '删除成功',
            icon: 'success'
          })
          this.getClassContacts()
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
      this.getClassContacts()
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
