// 直接使用mock数据，无需API调用
const mockData = require('./mockData.js')

export const getSchoolsData = () =>{
    const schools = mockData.getSchools()
    console.log('学校', schools);
    return schools;
}

export const getCityData = () => {
    const city = mockData.getCity()
    return city.data;
}