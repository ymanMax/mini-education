/**
 * 统一Mock数据模块
 * 用于替代所有API调用，根据页面展示逻辑生成模拟数据
 */

// 生成随机ID
const generateId = () => Math.floor(Math.random() * 10000) + 1;

// 基础数据配置
const mockConfig = {
  // 城市数据
  cities: [
    { id: 1, name: '北京市' },
    { id: 2, name: '上海市' },
    { id: 3, name: '广州市' },
    { id: 4, name: '深圳市' },
    { id: 5, name: '杭州市' }
  ],

  // 学校数据
  schools: [
    { id: 1, name: '北京大学' },
    { id: 2, name: '清华大学' },
    { id: 3, name: '复旦大学' },
    { id: 4, name: '上海交通大学' },
    { id: 5, name: '浙江大学' },
    { id: 6, name: '南京大学' },
    { id: 7, name: '武汉大学' },
    { id: 8, name: '中山大学' }
  ],

  // 学历数据
  educationBackgrounds: [
    { id: 1, name: '高中' },
    { id: 2, name: '大专' },
    { id: 3, name: '本科' },
    { id: 4, name: '硕士' },
    { id: 5, name: '博士' }
  ],

  // 科目数据
  courses: [
    { id: 1, name: '语文' },
    { id: 2, name: '数学' },
    { id: 3, name: '英语' },
    { id: 4, name: '物理' },
    { id: 5, name: '化学' },
    { id: 6, name: '生物' },
    { id: 7, name: '历史' },
    { id: 8, name: '地理' },
    { id: 9, name: '政治' }
  ],

  // 学生特点数据
  studentTypes: [
    { id: 1, name: '基础薄弱' },
    { id: 2, name: '成绩中等' },
    { id: 3, name: '成绩优秀' },
    { id: 4, name: '需要提高' },
    { id: 5, name: '竞赛辅导' }
  ],

  // 教学特点数据
  teacherTypes: [
    { id: 1, name: '耐心细致' },
    { id: 2, name: '经验丰富' },
    { id: 3, name: '方法独特' },
    { id: 4, name: '互动性强' },
    { id: 5, name: '重点突出' }
  ],

  // 学生基础数据
  studentBasis: [
    { id: 1, name: '小学' },
    { id: 2, name: '初中' },
    { id: 3, name: '高中' }
  ],

  // 年级数据
  baseLevels: [
    { id: 1, name: '一年级' },
    { id: 2, name: '二年级' },
    { id: 3, name: '三年级' },
    { id: 4, name: '四年级' },
    { id: 5, name: '五年级' },
    { id: 6, name: '六年级' }
  ],

  // 教师资质数据
  requirements: [
    { id: 1, name: '教师资格证' },
    { id: 2, name: '普通话证书' },
    { id: 3, name: '英语等级证书' },
    { id: 4, name: '竞赛获奖证书' }
  ],

  // 投诉原因数据
  reasons: [
    { id: 1, name: '信息不实' },
    { id: 2, name: '服务态度差' },
    { id: 3, name: '教学质量差' },
    { id: 4, name: '其他原因' }
  ],

  // 帮助数据
  helps: [
    { id: 1, title: '如何注册教师', content: '在注册页面填写相关信息即可完成教师注册' },
    { id: 2, title: '如何发布需求', content: '在个人中心选择发布需求，填写相关信息' },
    { id: 3, title: '如何联系客服', content: '可以通过投诉建议页面联系客服' }
  ]
};

// 生成模拟成绩数据
const generateScores = (studentId, count = 5) => {
  const scores = [];
  const subjects = ['语文', '数学', '英语', '物理', '化学', '生物', '历史', '地理', '政治'];

  for (let i = 0; i < count; i++) {
    scores.push({
      id: generateId(),
      student_id: studentId,
      subject: subjects[i % subjects.length],
      score: 60 + Math.floor(Math.random() * 40),
      full_mark: 100,
      exam_type: ['单元测试', '期中考试', '期末考试'][i % 3],
      exam_date: new Date(Date.now() - i * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      rank: Math.floor(Math.random() * 50) + 1,
      class_average: 75 + Math.floor(Math.random() * 15)
    });
  }

  return scores;
};

// 生成模拟考勤数据
const generateAttendance = (studentId, count = 30) => {
  const attendance = [];

  for (let i = 0; i < count; i++) {
    const statuses = ['present', 'absent', 'late', 'leave'];
    const status = statuses[Math.floor(Math.random() * statuses.length)];

    attendance.push({
      id: generateId(),
      student_id: studentId,
      date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      status: status,
      status_text: {
        'present': '出勤',
        'absent': '缺勤',
        'late': '迟到',
        'leave': '请假'
      }[status],
      reason: status === 'leave' ? ['病假', '事假', '公假'][Math.floor(Math.random() * 3)] : '',
      teacher_approval: status === 'leave' ? true : null
    });
  }

  return attendance;
};

// 生成模拟成长档案数据
const generateGrowthRecords = (studentId, count = 10) => {
  const records = [];
  const recordTypes = ['academic', 'behavior', 'award', 'activity'];

  for (let i = 0; i < count; i++) {
    const type = recordTypes[Math.floor(Math.random() * recordTypes.length)];

    records.push({
      id: generateId(),
      student_id: studentId,
      type: type,
      type_text: {
        'academic': '学业表现',
        'behavior': '行为表现',
        'award': '获奖情况',
        'activity': '参与活动'
      }[type],
      title: generateGrowthTitle(type),
      content: generateGrowthContent(type),
      date: new Date(Date.now() - i * 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      teacher_comment: '表现良好，继续努力',
      attachments: []
    });
  }

  return records;
};

// 生成成长档案标题
const generateGrowthTitle = (type) => {
  const titles = {
    'academic': ['数学成绩进步显著', '英语阅读能力提升', '写作水平有所提高', '逻辑思维能力增强'],
    'behavior': ['课堂表现积极', '乐于助人，团结同学', '遵守纪律，自我约束', '责任心强，办事可靠'],
    'award': ['数学竞赛一等奖', '英语演讲比赛二等奖', '优秀学生干部', '三好学生'],
    'activity': ['参加科技创新大赛', '参与志愿者服务活动', '校园文化节表演', '运动会项目获奖']
  };

  const typeTitles = titles[type] || titles['academic'];
  return typeTitles[Math.floor(Math.random() * typeTitles.length)];
};

// 生成成长档案内容
const generateGrowthContent = (type) => {
  const contents = {
    'academic': '在最近的学习中，该生表现出了较强的学习能力和积极的学习态度。通过不懈努力，成绩有了显著提高，特别是在基础知识掌握和解题能力方面进步明显。',
    'behavior': '该生在日常生活中表现出良好的行为习惯和道德品质。尊敬师长，团结同学，乐于助人，积极参与班级活动，起到了良好的模范带头作用。',
    'award': '该生在本次竞赛中表现优异，凭借扎实的基础知识、出色的解题能力和良好的心理素质，最终获得了优异的成绩。这不仅是个人努力的结果，也是平时积累的体现。',
    'activity': '该生积极参与本次活动，在活动中表现出了较高的积极性和较强的组织协调能力。通过参与活动，不仅锻炼了个人能力，也为班级和学校争得了荣誉。'
  };

  return contents[type] || contents['academic'];
};

// 扩展学生数据生成函数
const generateStudentsWithDetails = (count = 20) => {
  const students = [];
  const subjects = ['数学', '英语', '物理', '化学', '语文'];
  const schools = ['北京市第一中学', '上海市实验学校', '广州外国语学校'];

  for (let i = 0; i < count; i++) {
    const studentId = generateId();
    students.push({
      id: studentId,
      name: ['小明', '小红', '小刚', '小丽', '小华'][i % 5],
      sex: i % 2,
      school: schools[i % 3],
      educational_background: mockConfig.educationBackgrounds[i % 5].name,
      profession: subjects[i % 5],
      score: 500 + (i * 15),
      money: 80 + (i * 15),
      subjects: [{ id: (i % 5) + 1, name: subjects[i % 5] }],
      student_types: [{ id: (i % 5) + 1, name: mockConfig.studentTypes[i % 5].name }],
      head_image: '../../images/student.jpg',
      applys: Math.floor(Math.random() * 30),
      reward: Math.floor(Math.random() * 800),
      // 扩展信息
      birthday: '2005-01-15',
      address: '北京市海淀区中关村大街',
      phone: '1380013800' + i,
      emergency_contact: '父亲',
      emergency_phone: '1390013900' + i,
      // 成绩信息
      scores: generateScores(studentId),
      // 考勤信息
      attendance: generateAttendance(studentId),
      // 成长档案
      growth_records: generateGrowthRecords(studentId)
    });
  }

  return students;
};

// 生成模拟教师数据
const generateTeachers = (count = 20) => {
  const teachers = [];
  const subjects = ['语文', '数学', '英语', '物理', '化学'];
  const schools = ['北京大学', '清华大学', '复旦大学', '上海交通大学'];
  
  for (let i = 0; i < count; i++) {
    teachers.push({
      id: generateId(),
      last_name: ['张', '李', '王', '刘', '陈'][i % 5] + '老师',
      sex: i % 2,
      school: { id: (i % 4) + 1, name: schools[i % 4] },
      learn: (i % 5) + 1,
      profession: '计算机科学',
      high_score: 600 + (i * 10),
      money: 100 + (i * 20),
      subjects: [{ id: (i % 5) + 1, name: subjects[i % 5] }],
      teacher_types: [{ id: (i % 5) + 1, name: mockConfig.teacherTypes[i % 5].name }],
      head_image: '../../images/student.jpg',
      confirms: [],
      applys: Math.floor(Math.random() * 50),
      reward: Math.floor(Math.random() * 1000)
    });
  }
  
  return teachers;
};

// 生成模拟学生数据
const generateStudents = (count = 20) => {
  const students = [];
  const subjects = ['数学', '英语', '物理', '化学', '语文'];
  const schools = ['北京市第一中学', '上海市实验学校', '广州外国语学校'];
  
  for (let i = 0; i < count; i++) {
    students.push({
      id: generateId(),
      name: ['小明', '小红', '小刚', '小丽', '小华'][i % 5],
      sex: i % 2,
      school: schools[i % 3],
      educational_background: mockConfig.educationBackgrounds[i % 5].name,
      profession: subjects[i % 5],
      score: 500 + (i * 15),
      money: 80 + (i * 15),
      subjects: [{ id: (i % 5) + 1, name: subjects[i % 5] }],
      student_types: [{ id: (i % 5) + 1, name: mockConfig.studentTypes[i % 5].name }],
      head_image: '../../images/student.jpg',
      applys: Math.floor(Math.random() * 30),
      reward: Math.floor(Math.random() * 800)
    });
  }
  
  return students;
};

// 生成模拟收藏数据
const generateFollowerList = () => {
  return [
    {
      id: 1,
      target_type: 'teacher',
      target_info: generateTeachers(1)[0]
    },
    {
      id: 2,
      target_type: 'student',
      target_info: generateStudents(1)[0]
    }
  ];
};

// 模拟API响应格式
const createSuccessResponse = (data, message = '操作成功') => {
  return {
    status: 1,
    msg: message,
    ...data
  };
};

const createListResponse = (results, page = 1, pageSize = 20) => {
  return {
    status: 1,
    results: results,
    count: results.length,
    page: page,
    page_size: pageSize,
    has_next: results.length >= pageSize
  };
};

// Mock API函数
const mockApi = {
  // 教师列表
  getTeacherList: (data = {}) => {
    const { page = 1, page_size = 20 } = data;
    const teachers = generateTeachers(page_size);
    return createListResponse(teachers, page, page_size);
  },

  // 学生列表
  getStudentList: (data = {}) => {
    const { page = 1, page_size = 20 } = data;
    const students = generateStudentsWithDetails(page_size);
    return createListResponse(students, page, page_size);
  },

  // 获取学生成绩列表
  getStudentScores: (data = {}) => {
    const { student_id } = data;
    const scores = generateScores(student_id, 10);
    return createListResponse(scores);
  },

  // 录入学生成绩
  addStudentScore: (data) => {
    return createSuccessResponse({ id: generateId() }, '成绩录入成功');
  },

  // 更新学生成绩
  updateStudentScore: (param, data) => {
    return createSuccessResponse({}, '成绩更新成功');
  },

  // 删除学生成绩
  deleteStudentScore: (data) => {
    return createSuccessResponse({}, '成绩删除成功');
  },

  // 获取学生考勤列表
  getStudentAttendance: (data = {}) => {
    const { student_id } = data;
    const attendance = generateAttendance(student_id, 30);
    return createListResponse(attendance);
  },

  // 录入学生考勤
  addStudentAttendance: (data) => {
    return createSuccessResponse({ id: generateId() }, '考勤录入成功');
  },

  // 更新学生考勤
  updateStudentAttendance: (param, data) => {
    return createSuccessResponse({}, '考勤更新成功');
  },

  // 请假申请
  applyLeave: (data) => {
    return createSuccessResponse({ id: generateId() }, '请假申请提交成功，等待审批');
  },

  // 审批请假
  approveLeave: (param, data) => {
    return createSuccessResponse({}, '请假审批成功');
  },

  // 获取学生成长档案
  getStudentGrowthRecords: (data = {}) => {
    const { student_id } = data;
    const growthRecords = generateGrowthRecords(student_id, 15);
    return createListResponse(growthRecords);
  },

  // 添加成长记录
  addGrowthRecord: (data) => {
    return createSuccessResponse({ id: generateId() }, '成长记录添加成功');
  },

  // 更新成长记录
  updateGrowthRecord: (param, data) => {
    return createSuccessResponse({}, '成长记录更新成功');
  },

  // 删除成长记录
  deleteGrowthRecord: (data) => {
    return createSuccessResponse({}, '成长记录删除成功');
  },

  // 批量导入学生数据
  importStudents: (data) => {
    return createSuccessResponse({}, '学生数据导入成功');
  },

  // 批量导出学生数据
  exportStudents: (data) => {
    return createSuccessResponse({
      download_url: 'https://example.com/students_export.xlsx',
      file_name: '学生数据导出.xlsx'
    }, '学生数据导出成功');
  },
  
  // 城市数据
  getCity: () => {
    return createListResponse(mockConfig.cities);
  },
  
  // 学校数据
  getSchools: () => {
    return createListResponse(mockConfig.schools);
  },
  
  // 学校数据（带全部选项）
  getAllSchools: () => {
    return [{ id: 0, name: '全部' }, ...mockConfig.schools];
  },
  
  // 学历数据
  getEduBackground: () => {
    return createListResponse(mockConfig.educationBackgrounds);
  },
  
  // 科目数据
  getCourses: () => {
    return createListResponse(mockConfig.courses);
  },
  
  // 科目数据（带全部选项）
  getAllCourses: () => {
    return [{ id: 0, name: '全部' }, ...mockConfig.courses];
  },
  
  // 学生特点数据
  getStudentType: () => {
    return createListResponse(mockConfig.studentTypes);
  },
  
  // 教学特点数据
  getTeacherType: () => {
    return createListResponse(mockConfig.teacherTypes);
  },
  
  // 注册教师
  registerTeacher: (data) => {
    return createSuccessResponse({ id: generateId() }, '教师注册成功');
  },
  
  // 修改教师
  updateTeacher: (param, data) => {
    return createSuccessResponse({}, '教师信息修改成功');
  },
  
  // 学生基础数据
  getStuBasis: () => {
    return createListResponse(mockConfig.studentBasis);
  },
  
  // 年级数据
  getBaselevel: () => {
    return createListResponse(mockConfig.baseLevels);
  },
  
  // 年级级别数据
  getLevel: () => {
    return createListResponse([
      { id: 1, name: '初级' },
      { id: 2, name: '中级' },
      { id: 3, name: '高级' }
    ]);
  },
  
  // 注册学生
  registerStudent: (data) => {
    return createSuccessResponse({ id: generateId() }, '学生注册成功');
  },
  
  // 教师资质数据
  getRequire: () => {
    return createListResponse(mockConfig.requirements);
  },
  
  // 学生详情
  getStudentDetail: (data) => {
    const students = generateStudents(1);
    return createSuccessResponse(students[0]);
  },
  
  // 教师详情
  getTeacherDetail: (data) => {
    const teachers = generateTeachers(1);
    return createSuccessResponse(teachers[0]);
  },
  
  // 判断是否注册
  userIsRegister: () => {
    return createSuccessResponse({ 
      user_type: 'teacher', 
      user_info: generateTeachers(1)[0] 
    });
  },
  
  // 我的发布
  myPublish: () => {
    const teachers = generateTeachers(3);
    const students = generateStudents(2);
    return createListResponse([...teachers, ...students]);
  },
  
  // 删除教师
  deleteTeacher: (data) => {
    return createSuccessResponse({}, '教师删除成功');
  },
  
  // 删除学生
  deleteStudent: (data) => {
    return createSuccessResponse({}, '学生删除成功');
  },
  
  // 收藏用户
  followerUser: (data) => {
    return createSuccessResponse({}, '收藏成功');
  },
  
  // 获取收藏列表
  getFollowerList: () => {
    return generateFollowerList();
  },
  
  // 获取投诉原因
  getReason: (data) => {
    return createListResponse(mockConfig.reasons);
  },
  
  // 提交投诉
  submitSuggestion: (data) => {
    return createSuccessResponse({}, '投诉提交成功');
  },
  
  // 获取帮助
  getHelps: () => {
    return createListResponse(mockConfig.helps);
  },
  
  // 发送申请
  submitApply: (data) => {
    return createSuccessResponse({}, '申请发送成功');
  },
  
  // 退出登录
  signOut: () => {
    return { meta: { code: 0 }, msg: '退出成功' };
  }
};

module.exports = mockApi;