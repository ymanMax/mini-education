// pages/admin/dashboard/index.js
import {
  getDashboardData,
  getQualityAnalysis,
  getStudentSourceAnalysis,
  getResourceUtilization
} from '../../../api/mockApi';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyMetrics: [],
    qualityData: [],
    sourceData: [],
    resourceData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadDashboardData();
    this.loadQualityAnalysis();
    this.loadStudentSource();
    this.loadResourceUtilization();
  },

  /**
   * 加载数据看板核心数据
   */
  loadDashboardData: function() {
    const data = getDashboardData();
    this.setData({
      keyMetrics: data.keyMetrics
    });
  },

  /**
   * 加载教学质量分析数据
   */
  loadQualityAnalysis: function() {
    const data = getQualityAnalysis();
    this.setData({
      qualityData: data.qualityData
    });
  },

  /**
   * 加载生源分析数据
   */
  loadStudentSource: function() {
    const data = getStudentSourceAnalysis();
    this.setData({
      sourceData: data.sourceData
    });
  },

  /**
   * 加载资源利用率数据
   */
  loadResourceUtilization: function() {
    const data = getResourceUtilization();
    this.setData({
      resourceData: data.resourceData
    });
  },

  /**
   * 查看教学质量分析详情
   */
  viewQualityAnalysis: function() {
    wx.navigateTo({
      url: '/pages/admin/quality_analysis'
    });
  },

  /**
   * 查看生源分析详情
   */
  viewStudentSource: function() {
    wx.navigateTo({
      url: '/pages/admin/student_source'
    });
  },

  /**
   * 查看资源利用率详情
   */
  viewResourceUtilization: function() {
    wx.navigateTo({
      url: '/pages/admin/resource_utilization'
    });
  },

  /**
   * 导出数据
   */
  exportData: function(format) {
    wx.showToast({
      title: `正在导出${format.toUpperCase()}格式报表`,
      icon: 'success'
    });
    console.log(`导出数据格式: ${format}`);
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
    this.loadDashboardData();
    this.loadQualityAnalysis();
    this.loadStudentSource();
    this.loadResourceUtilization();
    wx.stopPullDownRefresh();
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
