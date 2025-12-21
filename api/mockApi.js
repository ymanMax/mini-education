/**
 * Mock API模块 - 替代真实API调用
 * 使用本地模拟数据，便于开发和测试
 */

import mockData from '../utils/mockData.js';

// 教师list
export const getTeacherList = (data) => mockData.getTeacherList(data);

// students
export const getStudentList = (data) => mockData.getStudentList(data);

// 城市
export const getCity = () => mockData.getCity();

// 学校
export const getSchools = () => mockData.getSchools();

// 学校--带全部
export const getAllSchools = () => mockData.getAllSchools();

// 学历
export const getEduBackground = () => mockData.getEduBackground();

// 科目
export const getCourses = () => mockData.getCourses();

// 科目--带全部科目
export const getAllCourses = () => mockData.getAllCourses();

// 学生特点
export const getStudentType = () => mockData.getStudentType();

// 教学特点
export const getTeacherType = () => mockData.getTeacherType();

// 注册教师
export const registerTeacher = (data) => mockData.registerTeacher(data);

// 修改教师
export const updateTeacher = (param, data) => mockData.updateTeacher(param, data);

// 学生基础
export const getStuBasis = () => mockData.getStuBasis();

// 年级二级联动--获取年级
export const getBaselevel = () => mockData.getBaselevel();

// 获取年级级别
export const getLevel = () => mockData.getLevel();

// 注册学生
export const registerStudent = (data) => mockData.registerStudent(data);

// 教师资质
export const getRequire = () => mockData.getRequire();

// 学生详情
export const getStudentDetail = (data) => mockData.getStudentDetail(data);

// 教师详情
export const getTeacherDetail = (data) => mockData.getTeacherDetail(data);

// 判断是否注册
export const userIsRegister = () => mockData.userIsRegister();

// 我的发布
export const myPublish = () => mockData.myPublish();

// 删除老师
export const deleteTeacher = (data) => mockData.deleteTeacher(data);

// 删除学生
export const deleteStudent = (data) => mockData.deleteStudent(data);

// 收藏
export const followerUser = (data) => mockData.followerUser(data);

// 获取收藏列表
export const getFollowerList = () => mockData.getFollowerList();

// 获取投诉原因
export const getReason = (data) => mockData.getReason(data);

// 提交投诉
export const submitSuggestion = (data) => mockData.submitSuggestion(data);

// 获取帮助
export const getHelps = () => mockData.getHelps();

// 发送申请
export const submitApply = (data) => mockData.submitApply(data);

// 数据看板核心数据
export const getDashboardData = () => mockData.getDashboardData();

// 教学质量分析数据
export const getQualityAnalysis = () => mockData.getQualityAnalysis();

// 生源分析数据
export const getStudentSourceAnalysis = () => mockData.getStudentSourceAnalysis();

// 资源利用率数据
export const getResourceUtilization = () => mockData.getResourceUtilization();

// 招生预测数据
export const getEnrollmentPrediction = () => mockData.getEnrollmentPrediction();

// 导出报表
export const exportReport = (data) => mockData.exportReport(data);