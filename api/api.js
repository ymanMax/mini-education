
import request from './index.js'
var p = request.request;
var basePath = 'http://114.112.75.135:7000/api/';
//教师list
export const getTeacherList = (data) => p('GET', basePath+'teacher/',data);
//students
export const getStudentList = (data) => p('GET', basePath + 'students/', data);

//城市
export const getCity = () => p('GET', basePath +'city/');
//学校
export const getSchools = () => p('GET', basePath + 'school/');
//学校--带全部
export const getAllSchools = () => p('GET', basePath + 'schfilter/');

//学历
export const getEduBackground = () => p('GET', basePath + 'learn/');
//科目
export const getCourses = () => p('GET', basePath + 'subject/');
//科目--带全部科目
export const getAllCourses = () => p('GET', basePath + 'subfilter/');

//学生特点
export const getStudentType = () => p('GET', basePath + 'student_type/');
//教学特点
export const getTeacherType = () => p('GET', basePath + 'teacher_type/');

//注册教师
export const registerTeacher = (data) => p('POST', basePath + 'teacher/',data);
//修改教师
export const updateTeacher = (param, data) => p('PUT', basePath + 'teacher/' + param.id +'/', data);

//学生基础
export const getStuBasis = () => p('GET', basePath + 'basis/');

//年级二级联动--获取年级
export const getBaselevel = () => p('GET', basePath + 'baselevel/');
//--获取年级级别
export const getLevel = () => p('GET', basePath + 'level/');
//注册学生
export const registerStudent = (data) => p('POST', basePath + 'students/', data);
//教师资质

export const getRequire = () => p('GET', basePath + 'require/');

//学生详情
export const getStudentDetail = (data) => p('GET', basePath + 'students/'+ data.id +'/');

//教师详情
export const getTeacherDetail = (data) => p('GET', basePath + 'teacher/' + data.id + '/');

//判断是否注册
export const userIsRegister = () => p('GET', basePath + 'customer/info/');

//我的发布
export const myPublish = () => p('GET', basePath + 'customer/info/issue/');

//删除老师
export const deleteTeacher = (data) => p('DELETE', basePath + 'teacher/' + data.id + '/');

//删除学生
export const deleteStudent = (data) => p('DELETE', basePath + 'students/' + data.id + '/');

//收藏
export const followerUser = (data) => p('POST', basePath + 'favorite/', data);
//获取收藏列表
export const getFollowerList = () => p('GET', basePath + 'favorite/');

// 获取投诉原因
export const getReason = (data) => p('GET', basePath + 'reason/?type=' + data.type);
// 提交投诉
export const submitSuggestion = (data) => p('POST', basePath + 'suggestion/', data);

// 获取帮助
export const getHelps = () => p('GET', basePath + 'help/');

//发送申请
export const submitApply = (data) => p('POST', basePath + 'apply/', data);

// ==================== 班级管理相关API ====================

// 班级管理API
export const getClassList = (data) => p('GET', basePath + 'class/', data);
export const getClassDetail = (data) => p('GET', basePath + 'class/' + data.id + '/');
export const createClass = (data) => p('POST', basePath + 'class/', data);
export const updateClass = (param, data) => p('PUT', basePath + 'class/' + param.id + '/', data);
export const deleteClass = (data) => p('DELETE', basePath + 'class/' + data.id + '/');

// 班级学生管理API
export const getClassStudentList = (data) => p('GET', basePath + 'class/students/', data);
export const getClassStudentDetail = (data) => p('GET', basePath + 'class/students/' + data.id + '/');
export const addClassStudent = (data) => p('POST', basePath + 'class/students/', data);
export const updateClassStudent = (param, data) => p('PUT', basePath + 'class/students/' + param.id + '/', data);
export const removeClassStudent = (data) => p('DELETE', basePath + 'class/students/' + data.id + '/');

// 考勤管理API
export const getAttendanceRecord = (data) => p('GET', basePath + 'attendance/', data);
export const recordAttendance = (data) => p('POST', basePath + 'attendance/', data);
export const updateAttendance = (param, data) => p('PUT', basePath + 'attendance/' + param.id + '/', data);

// 公告管理API
export const getNoticeList = (data) => p('GET', basePath + 'notice/', data);
export const getNoticeDetail = (data) => p('GET', basePath + 'notice/' + data.id + '/');
export const createNotice = (data) => p('POST', basePath + 'notice/', data);
export const updateNotice = (param, data) => p('PUT', basePath + 'notice/' + param.id + '/', data);
export const deleteNotice = (data) => p('DELETE', basePath + 'notice/' + data.id + '/');

// 通讯录API
export const getClassContacts = (data) => p('GET', basePath + 'class/contacts/', data);

// 统计API
export const getAttendanceStat = (data) => p('GET', basePath + 'attendance/stat/', data);
export const exportAttendanceData = (data) => p('GET', basePath + 'attendance/export/', data);










