// pages/admin/student_source/index.js
import { getEnrollmentPrediction } from '../../../api/mockApi';

Page({
  data: {
    regionData: [
      { region: '北京市', count: 856, percentage: 25.0 },
      { region: '上海市', count: 723, percentage: 21.1 },
      { region: '广州市', count: 612, percentage: 17.9 },
      { region: '深圳市', count: 543, percentage: 15.9 },
      { region: '杭州市', count: 487, percentage: 14.2 },
      { region: '其他', count: 200, percentage: 5.9 }
    ],
    schoolData: [
      { school: '北京大学', count: 189 },
      { school: '清华大学', count: 167 },
      { school: '复旦大学', count: 145 },
      { school: '上海交通大学', count: 132 },
      { school: '浙江大学', count: 121 },
      { school: '其他', count: 456 }
    ],
    predictionData: []
  },

  onLoad: function (options) {
    this.loadPredictionData();
  },

  loadPredictionData: function() {
    const data = getEnrollmentPrediction();
    this.setData({
      predictionData: data.predictionData
    });
  }
})
