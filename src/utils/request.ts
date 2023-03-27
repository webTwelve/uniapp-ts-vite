import { HTTP_REQUEST_URL } from '../global/config'
import useCommonStore from '../store/common'

const store = useCommonStore()
type TMethods = 'GET' | 'POST'
class LRequest {
  public request<T>(url: string, methods: TMethods, params: any): Promise<T> {
    return new Promise((resolve, reject) => {
      uni.request({
        url: HTTP_REQUEST_URL + url,
        methods,
        data: params,
        success: function (res: any) {
          resolve(res.data)
        },
        fail: function (error) {
          reject(error)
        }
      })
    })
  }
  public Get<T>(url: string, params: any): Promise<T> {
    return this.request<T>(url, 'GET', params)
  }
  public Post<T>(url: string, data: any): Promise<T> {
    return this.request<T>(url, 'POST', data)
  }
}
const request = new LRequest()
export default request
