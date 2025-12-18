// 直接使用mock数据，无需API调用
const mockData = require('../../utils/mockData.js')
const App = getApp()

Page({
	data: {
		userInfo: '',
		items: [
			{
        icon: '../../images/apply.png',
				text: '我的收藏',
				path: '/pages/collect/index',
        name:'collect'
			}, 
			{
        icon: '../../images/apply.png',
				text: '我的发布',
        path: '/pages/tea_publish/details',
        name: 'publish'
			}, 
			{
        icon: '../../images/apply.png',
				text: '我的申请',
        path: '/pages/apply/index',
        name: 'apply'
			}
		
		],
		settings: [
      {
        icon: '../../images/apply.png',
        text: '使用帮助',
        path: '/pages/help/index',
      },
			{
				icon: '../../images/apply.png',
				text: '关于我们',
				path: '/pages/about_us/index'
			}, 
		]
	},
	onLoad() {
		this.getStorageInfo()
	},
  // 点击跳转
	navigateTo(e) {
		const index = e.currentTarget.dataset.index
		const path = e.currentTarget.dataset.path

		switch(index) {
			case 2:
				App.WxService.makePhoneCall({
					phoneNumber: path
				})
				break
			default:
				App.WxService.navigateTo(path)
		}
    },
    getStorageInfo() {
      this.setData({
        userInfo: App.globalData.userInfo
      })
    },
    bindtap(e) {
    	const index = e.currentTarget.dataset.index
		  const path = e.currentTarget.dataset.path
      wx.navigateTo({
        url: path,
      })
    },

    signOut() {
      const signOutResult = mockData.signOut()
      console.log(signOutResult)
      if (signOutResult.meta.code == 0) {
        App.WxService.removeStorageSync('token')
        App.WxService.redirectTo('/pages/login/index')
      }
    },
    isRegister: function(e){
      const registerInfo = mockData.userIsRegister()
      if (registerInfo.user_type == 'no'){
        wx.showModal({
          title: '尚未注册',
          content: '注册后可更快找到合适的家教',
          confirmText: '立即注册',
          confirmColor: '#FF4D61',
          success: function (res) {
            if (res.confirm) {
              wx.navigateTo({
                url: '../register/register'//实际路径要写全
              })
            } 
          }
        })
      }else{
        var url = "";
        var op_type = e.currentTarget.dataset.name;
        //我的发布
        if (op_type == 'publish'){
          if (registerInfo.user_type == 'teacher') {
            url = "/pages/tea_publish/details";
          } else if (registerInfo.user_type == 'student') {
            url = "/pages/stu_publish/details";
          }
          wx.navigateTo({
            url: url
          })
        }else{
          wx.navigateTo({
            url: e.currentTarget.dataset.path
          })
        }
      }
    }
})