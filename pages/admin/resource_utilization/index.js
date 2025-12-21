// pages/admin/resource_utilization/index.js
import { getResourceUtilization } from '../../../api/mockApi';

Page({
  data: {
    resourceOverview: [],
    resourceCategories: [
      { category: '教师资源', total: 1500, used: 1305, utilization: 87 },
      { category: '课程资源', total: 200, used: 184, utilization: 92 },
      { category: '设备资源', total: 500, used: 390, utilization: 78 },
      { category: '场地资源', total: 100, used: 85, utilization: 85 },
      { category: '网络资源', total: 20, used: 19, utilization: 95 }
    ],
    usageTrend: [
      { month: '1月', average: 78 },
      { month: '2月', average: 81 },
      { month: '3月', average: 83 },
      { month: '4月', average: 85 },
      { month: '5月', average: 87 },
      { month: '6月', average: 89 }
    ]
  },

  onLoad: function (options) {
    this.loadResourceData();
  },

  loadResourceData: function() {
    const data = getResourceUtilization();
    this.setData({
      resourceOverview: data.resourceData
    });
  }
})
