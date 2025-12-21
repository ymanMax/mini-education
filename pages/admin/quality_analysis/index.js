// pages/admin/quality_analysis/index.js
Page({
  data: {
    subjectScores: [
      { course: '语文', score: 92, trend: 2.5 },
      { course: '数学', score: 88, trend: 1.8 },
      { course: '英语', score: 95, trend: 3.2 },
      { course: '物理', score: 85, trend: -0.5 },
      { course: '化学', score: 89, trend: 2.1 },
      { course: '生物', score: 91, trend: 1.9 },
      { course: '历史', score: 87, trend: 0.8 },
      { course: '地理', score: 86, trend: 1.2 }
    ],
    teacherRankings: [
      { id: 1, name: '张老师', subject: '数学', score: 98 },
      { id: 2, name: '李老师', subject: '英语', score: 96 },
      { id: 3, name: '王老师', subject: '语文', score: 95 },
      { id: 4, name: '刘老师', subject: '物理', score: 93 },
      { id: 5, name: '陈老师', subject: '化学', score: 92 }
    ],
    monthlyTrend: [
      { month: '1月', average: 85 },
      { month: '2月', average: 87 },
      { month: '3月', average: 88 },
      { month: '4月', average: 90 },
      { month: '5月', average: 91 },
      { month: '6月', average: 92 }
    ]
  },

  onLoad: function (options) {

  }
})
