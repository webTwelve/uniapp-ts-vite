import { defineStore } from 'pinia'

const useCommonStore = defineStore('common', {
  state: () => {
    return {
      token: ''
    }
  },
  persist: [
    {
      key: 'pinia-common',
      paths: ['token']
    }
  ],
  actions: {
    // setUserInfo(params: IPhoneLoginRes | IUserInfoRes) {
    //   this.userInfo = params
    // },
    // // 手机号登录
    // async _phoneLogin(params: IPhoneLoginParams) {
    //   const res = await PhoneLogin(params)
    //   if (res.success) {
    //     if (res.data.Sign) {
    //       this.token = res.data.Sign
    //       uni.setStorageSync('token', res.data.Sign)
    //     }
    //     this.userInfo = res.data
    //     uni.switchTab({ url: '/pages/main/index' })
    //   }
    // },
    // // 微信登录
    // async _weChatLogin(params: IWeChatLoginParams) {
    //   const res = await WeChatLogin(params)
    //   if (res.success) {
    //     if (res.data.Sign) {
    //       this.token = res.data.Sign
    //       uni.setStorageSync('token', res.data.Sign)
    //     }
    //     this.userInfo = res.data
    //     uni.login({
    //       provider: 'weixin',
    //       success: async (result) => {
    //         const saveRes = await SaveUserCodeAccount({
    //           code: result.code,
    //           userId: res.data.UserId
    //         })
    //         if (saveRes.success) {
    //           uni.switchTab({ url: '/pages/main/index' })
    //         }
    //       },
    //       fail: (error) => {
    //         console.log(error)
    //       }
    //     })
    //   }
    // }
  }
})
export default useCommonStore
