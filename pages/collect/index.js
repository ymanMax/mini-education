// pages/collect/index.js
// 直接使用mock数据，无需API调用
const mockData = require('../../utils/mockData.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    followerData: [],
    length:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getFollowerListData();
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
  
  },
  getFollowerListData: function(){
    const followerList = mockData.getFollowerList()
    console.log(followerList);
    this.setData({
      followerData: followerList,
      length: followerList.length
    })
  }
})