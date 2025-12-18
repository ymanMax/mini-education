// 学生管理页面
// 直接使用mock数据，无需API调用
const mockData = require('../../../../utils/mockData.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 学生列表
    studentList: [],
    // 当前选中的学生
    selectedStudent: null,
    // 学生成绩数据
    studentScores: [],
    // 学生考勤数据
    studentAttendance: [],
    // 学生成长档案数据
    studentGrowthRecords: [],
    // 页面加载状态
    loading: false,
    // 弹窗显示状态
    showDetailModal: false,
    showScoreModal: false,
    showAttendanceModal: false,
    showGrowthModal: false,
    // 分页信息
    page: 1,
    pageSize: 20,
    hasNext: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadStudentList()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 页面显示时刷新数据
    this.loadStudentList()
  },

  /**
   * 加载学生列表
   */
  loadStudentList: function (refresh = false) {
    this.setData({ loading: true })

    const page = refresh ? 1 : this.data.page
    const studentList = mockData.getStudentList({
      page: page,
      page_size: this.data.pageSize
    })

    this.setData({
      studentList: refresh ? studentList.results : [...this.data.studentList, ...studentList.results],
      page: page,
      hasNext: studentList.hasNext,
      loading: false
    })
  },

  /**
   * 下拉刷新
   */
  onPullDownRefresh: function () {
    this.loadStudentList(true)
    wx.stopPullDownRefresh()
  },

  /**
   * 上拉加载更多
   */
  onReachBottom: function () {
    if (this.data.hasNext && !this.data.loading) {
      this.loadStudentList()
    }
  },

  /**
   * 查看学生详情
   */
  viewStudentDetail: function (e) {
    const studentId = e.currentTarget.dataset.id
    const studentDetail = mockData.getStudentDetail({ id: studentId })
    this.setData({
      selectedStudent: studentDetail,
      showDetailModal: true
    })
  },

  /**
   * 查看学生成绩
   */
  viewStudentScores: function (e) {
    const studentId = e.currentTarget.dataset.id
    const studentDetail = mockData.getStudentDetail({ id: studentId })
    const scores = mockData.getStudentScores({ student_id: studentId })

    this.setData({
      selectedStudent: studentDetail,
      studentScores: scores.results,
      showScoreModal: true
    })
  },

  /**
   * 查看学生考勤
   */
  viewStudentAttendance: function (e) {
    const studentId = e.currentTarget.dataset.id
    const studentDetail = mockData.getStudentDetail({ id: studentId })
    const attendance = mockData.getStudentAttendance({ student_id: studentId })

    this.setData({
      selectedStudent: studentDetail,
      studentAttendance: attendance.results,
      showAttendanceModal: true
    })
  },

  /**
   * 查看学生成长档案
   */
  viewStudentGrowth: function (e) {
    const studentId = e.currentTarget.dataset.id
    const studentDetail = mockData.getStudentDetail({ id: studentId })
    const growthRecords = mockData.getStudentGrowthRecords({ student_id: studentId })

    this.setData({
      selectedStudent: studentDetail,
      studentGrowthRecords: growthRecords.results,
      showGrowthModal: true
    })
  },

  /**
   * 关闭弹窗
   */
  closeModal: function () {
    this.setData({
      showDetailModal: false,
      showScoreModal: false,
      showAttendanceModal: false,
      showGrowthModal: false
    })
  },

  /**
   * 批量导入学生数据
   */
  importStudents: function () {
    // 模拟选择文件
    wx.showActionSheet({
      itemList: ['从相册选择', '从文件选择'],
      success: function (res) {
        if (res.tapIndex === 0 || res.tapIndex === 1) {
          // 模拟文件上传
          wx.showLoading({
            title: '导入中...',
          })

          setTimeout(() => {
            // 调用mock API
            const result = mockData.importStudents({
              file: 'students_import.xlsx',
              format: 'xlsx'
            })

            wx.hideLoading()

            if (result.status === 1) {
              wx.showToast({
                title: result.msg,
                icon: 'success',
                duration: 2000
              })

              // 刷新学生列表
              setTimeout(() => {
                this.loadStudentList(true)
              }, 2000)
            } else {
              wx.showToast({
                title: result.msg,
                icon: 'none'
              })
            }
          }, 2000)
        }
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },

  /**
   * 导出学生数据
   */
  exportStudents: function () {
    wx.showLoading({
      title: '导出中...',
    })

    setTimeout(() => {
      // 调用mock API
      const result = mockData.exportStudents({
        format: 'xlsx',
        fields: ['name', 'sex', 'school', 'subjects', 'score']
      })

      wx.hideLoading()

      if (result.status === 1) {
        wx.showModal({
          title: '导出成功',
          content: `文件已生成：${result.file_name}`,
          showCancel: false,
          confirmText: '确定',
          success: function (res) {
            if (res.confirm) {
              console.log('开始下载:', result.download_url)
              wx.showToast({
                title: '开始下载',
                icon: 'success'
              })
            }
          }
        })
      } else {
        wx.showToast({
          title: result.msg,
          icon: 'none'
        })
      }
    }, 2000)
  },

  /**
   * 跳转到编辑学生页面
   */
  editStudent: function (e) {
    const studentId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/update_student/index?id=${studentId}`
    })
  }
})
