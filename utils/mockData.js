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
  ],

  // 教室数据
  classrooms: [
    { id: 1, name: '教学楼A101', capacity: 50, equipment: '投影仪,音响,空调', status: 'available', location: '教学楼A座1层' },
    { id: 2, name: '教学楼B203', capacity: 80, equipment: '投影仪,空调,白板', status: 'occupied', location: '教学楼B座2层' },
    { id: 3, name: '实验楼C302', capacity: 30, equipment: '计算机,实验设备,空调', status: 'available', location: '实验楼C座3层' },
    { id: 4, name: '多媒体教室D105', capacity: 120, equipment: '投影仪,音响,空调,话筒', status: 'available', location: '多媒体楼D座1层' },
    { id: 5, name: '会议室E201', capacity: 20, equipment: '投影仪,白板,空调', status: 'occupied', location: '行政楼E座2层' }
  ],

  // 设备数据
  devices: [
    { id: 1, name: '投影仪', type: '多媒体设备', status: 'available', location: '设备库', total: 20, available: 15 },
    { id: 2, name: '音响系统', type: '多媒体设备', status: 'available', location: '设备库', total: 10, available: 7 },
    { id: 3, name: '笔记本电脑', type: '计算机设备', status: 'occupied', location: '设备库', total: 50, available: 32 },
    { id: 4, name: '实验仪器', type: '实验设备', status: 'available', location: '实验楼', total: 30, available: 25 }
  ],

  // 公告新闻数据
  notices: [
    { id: 1, title: '关于2024年春季学期选课的通知', content: '各位同学请注意，2024年春季学期选课即将开始，请在规定时间内完成选课...', type: 'notice', author: '教务处', create_time: '2024-01-15', views: 1200 },
    { id: 2, title: '校园春季运动会将于下月举行', content: '为丰富校园生活，提高学生体质，我校将于3月举行春季运动会...', type: 'news', author: '体育部', create_time: '2024-01-14', views: 850 },
    { id: 3, title: '图书馆新增电子图书资源', content: '图书馆新增10万册电子图书资源，涵盖各个学科领域...', type: 'news', author: '图书馆', create_time: '2024-01-13', views: 620 },
    { id: 4, title: '学生证补办通知', content: '需要补办学生证的同学，请于每周一、三、五到学生处办理...', type: 'notice', author: '学生处', create_time: '2024-01-12', views: 480 }
  ],

  // 图书数据
  books: [
    { id: 1, title: 'JavaScript高级程序设计', author: 'Nicholas C. Zakas', isbn: '9787115486647', category: '计算机', status: 'available', total: 5, available: 3 },
    { id: 2, title: 'Python数据分析', author: 'Wes McKinney', isbn: '9787115443213', category: '计算机', status: 'available', total: 4, available: 4 },
    { id: 3, title: '中国通史', author: '吕思勉', isbn: '9787101116138', category: '历史', status: 'occupied', total: 3, available: 1 },
    { id: 4, title: '百年孤独', author: '加西亚·马尔克斯', isbn: '9787544755993', category: '文学', status: 'available', total: 6, available: 5 },
    { id: 5, title: '时间简史', author: '史蒂芬·霍金', isbn: '9787535794567', category: '科学', status: 'occupied', total: 4, available: 2 }
  ],

  // 借阅记录
  borrowRecords: [
    { id: 1, book_id: 3, book_title: '中国通史', borrow_time: '2024-01-01', return_time: null, status: 'borrowed' },
    { id: 2, book_id: 5, book_title: '时间简史', borrow_time: '2024-01-05', return_time: null, status: 'borrowed' },
    { id: 3, book_id: 1, book_title: 'JavaScript高级程序设计', borrow_time: '2023-12-20', return_time: '2024-01-10', status: 'returned' }
  ],

  // 校园卡数据
  campusCard: { id: 1, card_number: '20240001', balance: 156.80, status: 'active' },

  // 消费记录
  consumptionRecords: [
    { id: 1, amount: -15.50, description: '食堂午餐', time: '2024-01-15 12:30:00', location: '第一食堂' },
    { id: 2, amount: -8.00, description: '超市购物', time: '2024-01-14 18:20:00', location: '校园超市' },
    { id: 3, amount: -25.00, description: '打印复印', time: '2024-01-13 10:15:00', location: '打印店' },
    { id: 4, amount: 200.00, description: '充值', time: '2024-01-10 09:00:00', location: '充值中心' }
  ],

  // 校园活动数据
  activities: [
    { id: 1, title: '校园歌手大赛', description: '展现青春风采，唱出校园好声音', start_time: '2024-03-10', end_time: '2024-03-25', location: '大礼堂', organizer: '学生会', max_participants: 100, current_participants: 78, status: 'recruiting' },
    { id: 2, title: '程序设计竞赛', description: '提高编程能力，培养创新思维', start_time: '2024-04-01', end_time: '2024-04-15', location: '实验楼', organizer: '计算机学院', max_participants: 50, current_participants: 45, status: 'recruiting' },
    { id: 3, title: '志愿者招募', description: '为社区服务，传递爱心', start_time: '2024-02-20', end_time: '2024-03-30', location: '校外', organizer: '志愿者协会', max_participants: 80, current_participants: 80, status: 'closed' }
  ]
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
    const students = generateStudents(page_size);
    return createListResponse(students, page, page_size);
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
  },

  // =========== 新增模块API ===========

  // 教室管理
  getClassrooms: () => {
    return createListResponse(mockConfig.classrooms);
  },

  getClassroomDetail: (id) => {
    const classroom = mockConfig.classrooms.find(c => c.id == id);
    return createSuccessResponse(classroom || {});
  },

  reserveClassroom: (data) => {
    return createSuccessResponse({}, '教室预约成功');
  },

  // 设备管理
  getDevices: () => {
    return createListResponse(mockConfig.devices);
  },

  reserveDevice: (data) => {
    return createSuccessResponse({}, '设备预约成功');
  },

  // 公告新闻
  getNotices: (data = {}) => {
    const { type } = data;
    let notices = mockConfig.notices;
    if (type) {
      notices = notices.filter(n => n.type === type);
    }
    return createListResponse(notices);
  },

  getNoticeDetail: (id) => {
    const notice = mockConfig.notices.find(n => n.id == id);
    return createSuccessResponse(notice || {});
  },

  // 图书管理
  getBooks: () => {
    return createListResponse(mockConfig.books);
  },

  borrowBook: (data) => {
    return createSuccessResponse({}, '图书借阅成功');
  },

  returnBook: (data) => {
    return createSuccessResponse({}, '图书归还成功');
  },

  getBorrowRecords: () => {
    return createListResponse(mockConfig.borrowRecords);
  },

  // 校园卡管理
  getCampusCard: () => {
    return createSuccessResponse(mockConfig.campusCard);
  },

  getConsumptionRecords: () => {
    return createListResponse(mockConfig.consumptionRecords);
  },

  rechargeCard: (data) => {
    return createSuccessResponse({}, '充值成功');
  },

  // 校园活动
  getActivities: () => {
    return createListResponse(mockConfig.activities);
  },

  getActivityDetail: (id) => {
    const activity = mockConfig.activities.find(a => a.id == id);
    return createSuccessResponse(activity || {});
  },

  registerActivity: (data) => {
    return createSuccessResponse({}, '活动报名成功');
  }
};

module.exports = mockApi;