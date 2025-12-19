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

// ==================== 班级管理相关数据生成函数 ====================

// 生成模拟班级数据
const generateClasses = (count = 20) => {
  const classes = [];
  const gradeNames = ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级'];
  const classNumbers = ['1班', '2班', '3班', '4班', '5班'];

  for (let i = 0; i < count; i++) {
    classes.push({
      id: generateId(),
      name: `${gradeNames[i % 6]}${classNumbers[i % 5]}`,
      grade: gradeNames[i % 6],
      class_number: i % 5 + 1,
      head_teacher: ['张老师', '李老师', '王老师', '刘老师', '陈老师'][i % 5],
      student_count: 30 + (i % 15),
      created_at: new Date(Date.now() - i * 86400000).toISOString().split('T')[0],
      updated_at: new Date(Date.now() - Math.floor(i / 2) * 86400000).toISOString().split('T')[0]
    });
  }

  return classes;
};

// 生成模拟班级学生数据
const generateClassStudents = (count = 20) => {
  const students = [];
  const studentNames = ['小明', '小红', '小刚', '小丽', '小华', '小强', '小美', '小伟', '小花', '小杰'];
  const parentNames = ['张三', '李四', '王五', '赵六', '孙七', '周八', '吴九', '郑十'];

  for (let i = 0; i < count; i++) {
    students.push({
      id: generateId(),
      student_id: `S${10000 + i}`,
      name: studentNames[i % 10],
      sex: i % 2,
      age: 6 + Math.floor(i / 5),
      parent_name: parentNames[i % 8],
      parent_phone: `138${String(1000000 + i * 1234).slice(-8)}`,
      address: `北京市海淀区中关村${i + 1}号`,
      enrolled_at: new Date(Date.now() - i * 2592000000).toISOString().split('T')[0],
      status: i % 3 === 0 ? '请假' : '正常'
    });
  }

  return students;
};

// 生成模拟考勤记录数据
const generateAttendanceRecords = (count = 20) => {
  const records = [];
  const attendanceStatus = ['出勤', '迟到', '早退', '缺勤', '请假'];

  for (let i = 0; i < count; i++) {
    records.push({
      id: generateId(),
      student_id: generateId(),
      student_name: ['小明', '小红', '小刚', '小丽', '小华'][i % 5],
      date: new Date(Date.now() - i * 86400000).toISOString().split('T')[0],
      status: attendanceStatus[i % 5],
      remark: i % 3 === 0 ? '病假' : (i % 4 === 0 ? '事假' : ''),
      recorded_by: ['张老师', '李老师'][i % 2],
      recorded_at: new Date(Date.now() - Math.floor(i / 2) * 3600000).toISOString()
    });
  }

  return records;
};

// 生成模拟班级公告数据
const generateClassNotices = (count = 20) => {
  const notices = [];
  const noticeTitles = [
    '关于本周家长会的通知',
    '下周课程安排调整',
    '学生安全注意事项',
    '作业布置通知',
    '考试安排公告',
    '班级活动报名通知'
  ];

  for (let i = 0; i < count; i++) {
    notices.push({
      id: generateId(),
      title: noticeTitles[i % 6],
      content: `这是${noticeTitles[i % 6]}的详细内容...`,
      author: ['张老师', '李老师', '王老师'][i % 3],
      published_at: new Date(Date.now() - i * 43200000).toISOString(),
      is_top: i % 5 === 0,
      read_count: Math.floor(Math.random() * 100)
    });
  }

  return notices;
};

// 生成模拟班级通讯录数据
const generateClassContacts = () => {
  const contacts = [];
  const teacherRoles = ['班主任', '语文老师', '数学老师', '英语老师', '体育老师'];
  const parentNames = ['张三', '李四', '王五', '赵六', '孙七'];

  // 添加教师联系人
  for (let i = 0; i < 5; i++) {
    contacts.push({
      id: generateId(),
      name: `${['张', '李', '王', '刘', '陈'][i]}老师`,
      role: teacherRoles[i],
      phone: `139${String(2000000 + i * 1234).slice(-8)}`,
      email: `teacher${i}@school.com`,
      type: 'teacher'
    });
  }

  // 添加家长联系人
  for (let i = 0; i < 10; i++) {
    contacts.push({
      id: generateId(),
      name: parentNames[i % 5],
      role: `学生家长（${['小明', '小红', '小刚', '小丽', '小华'][i % 5]}）`,
      phone: `138${String(3000000 + i * 1234).slice(-8)}`,
      email: `parent${i}@example.com`,
      type: 'parent'
    });
  }

  return contacts;
};

// 生成模拟考勤统计数据
const generateAttendanceStat = () => {
  const stat = {
    total_students: 35,
    present_count: 32,
    absent_count: 3,
    late_count: 1,
    early_count: 1,
    leave_count: 1,
    attendance_rate: 91.43
  };

  return stat;
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

  // ==================== 班级管理相关API ====================

  // 班级管理API
  getClassList: (data = {}) => {
    const { page = 1, page_size = 20 } = data;
    const classes = generateClasses(page_size);
    return createListResponse(classes, page, page_size);
  },

  getClassDetail: (data) => {
    const classDetail = generateClasses(1)[0];
    return createSuccessResponse(classDetail);
  },

  createClass: (data) => {
    return createSuccessResponse({ id: generateId() }, '班级创建成功');
  },

  updateClass: (param, data) => {
    return createSuccessResponse({}, '班级信息更新成功');
  },

  deleteClass: (data) => {
    return createSuccessResponse({}, '班级删除成功');
  },

  // 学生管理API
  getClassStudentList: (data = {}) => {
    const { page = 1, page_size = 20, class_id } = data;
    const students = generateClassStudents(page_size);
    return createListResponse(students, page, page_size);
  },

  getClassStudentDetail: (data) => {
    const studentDetail = generateClassStudents(1)[0];
    return createSuccessResponse(studentDetail);
  },

  addClassStudent: (data) => {
    return createSuccessResponse({ id: generateId() }, '学生添加成功');
  },

  updateClassStudent: (param, data) => {
    return createSuccessResponse({}, '学生信息更新成功');
  },

  removeClassStudent: (data) => {
    return createSuccessResponse({}, '学生移除成功');
  },

  // 考勤管理API
  getAttendanceRecord: (data = {}) => {
    const { page = 1, page_size = 20, class_id, date } = data;
    const records = generateAttendanceRecords(page_size);
    return createListResponse(records, page, page_size);
  },

  recordAttendance: (data) => {
    return createSuccessResponse({}, '考勤记录成功');
  },

  updateAttendance: (param, data) => {
    return createSuccessResponse({}, '考勤信息更新成功');
  },

  // 公告管理API
  getNoticeList: (data = {}) => {
    const { page = 1, page_size = 20, class_id } = data;
    const notices = generateClassNotices(page_size);
    return createListResponse(notices, page, page_size);
  },

  getNoticeDetail: (data) => {
    const noticeDetail = generateClassNotices(1)[0];
    return createSuccessResponse(noticeDetail);
  },

  createNotice: (data) => {
    return createSuccessResponse({ id: generateId() }, '公告创建成功');
  },

  updateNotice: (param, data) => {
    return createSuccessResponse({}, '公告信息更新成功');
  },

  deleteNotice: (data) => {
    return createSuccessResponse({}, '公告删除成功');
  },

  // 通讯录API
  getClassContacts: (data) => {
    const contacts = generateClassContacts();
    const teachers = contacts.filter(contact => contact.type === 'teacher');
    const parents = contacts.filter(contact => contact.type === 'parent');

    // 修改家长数据结构，增加学生姓名和关系字段
    const formattedParents = parents.map((parent, index) => ({
      id: parent.id,
      name: parent.name,
      student_name: ['小明', '小红', '小刚', '小丽', '小华'][index % 5],
      relation: ['父亲', '母亲', '爷爷', '奶奶', '其他'][index % 5],
      phone: parent.phone
    }));

    // 修改教师数据结构
    const formattedTeachers = teachers.map(teacher => ({
      id: teacher.id,
      name: teacher.name,
      role: teacher.role,
      phone: teacher.phone
    }));

    return {
      status: 1,
      teachers: formattedTeachers,
      parents: formattedParents
    };
  },

  // 添加联系人API
  addClassContact: (data) => {
    return createSuccessResponse({ id: generateId() }, '联系人添加成功');
  },

  // 删除联系人API
  deleteClassContact: (data) => {
    return createSuccessResponse({}, '联系人删除成功');
  },

  // 统计API
  getAttendanceStat: (data) => {
    const stat = generateAttendanceStat();
    return createSuccessResponse(stat);
  },

  exportAttendanceData: (data) => {
    return createSuccessResponse({}, '考勤数据导出成功');
  }
};

module.exports = mockApi;