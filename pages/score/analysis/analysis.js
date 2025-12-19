const mockApi = require('../../../utils/mockData.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 学生成绩数据
    studentScores: [],
    // 成绩趋势数据
    scoreTrend: [],
    // 班级排名数据
    classRanking: [],
    // 年级排名数据
    gradeRanking: [],
    // 当前选中的学科
    selectedSubject: 'all',
    // 当前查看的学生
    selectedStudent: null,
    // 家长端模式
    parentMode: false,
    // 加载状态
    loading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 检查是否为家长端模式
    if (options.parentMode === 'true') {
      this.setData({
        parentMode: true
      });
    }

    // 加载成绩数据
    this.loadScoreData();
  },

  /**
   * 加载成绩数据
   */
  loadScoreData: function () {
    this.setData({
      loading: true
    });

    // 模拟网络请求
    setTimeout(() => {
      // 调用mock API加载学生成绩数据
      const studentScoresResponse = mockApi.getStudentScores();
      const studentScores = studentScoresResponse.results || [];

      // 调用mock API加载成绩趋势数据
      const scoreTrendResponse = mockApi.getScoreTrend();
      const scoreTrend = scoreTrendResponse.results || [];

      // 调用mock API加载班级排名数据
      const classRankingResponse = mockApi.getClassRanking();
      const classRanking = classRankingResponse.results || [];

      // 调用mock API加载年级排名数据
      const gradeRankingResponse = mockApi.getGradeRanking();
      const gradeRanking = gradeRankingResponse.results || [];

      this.setData({
        studentScores: studentScores,
        scoreTrend: scoreTrend,
        classRanking: classRanking,
        gradeRanking: gradeRanking,
        loading: false
      });

      // 如果是家长端模式，默认选中第一个学生
      if (this.data.parentMode && studentScores.length > 0) {
        this.setData({
          selectedStudent: studentScores[0]
        });
      }
    }, 1000);
  },


  /**
   * 切换学科
   */
  switchSubject: function (e) {
    this.setData({
      selectedSubject: e.currentTarget.dataset.subject
    });
  },

  /**
   * 选择学生
   */
  selectStudent: function (e) {
    const studentId = e.currentTarget.dataset.studentId;
    const selectedStudent = this.data.studentScores.find(student => student.id === studentId);

    this.setData({
      selectedStudent: selectedStudent
    });
  },

  /**
   * 刷新数据
   */
  refreshData: function () {
    this.loadScoreData();
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
    this.loadScoreData();
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
});
