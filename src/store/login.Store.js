// login module
import { makeAutoObservable } from 'mobx'
import { http } from '../utils'
import { setToken, getToken } from '../utils/token'

class LoginStore {
  token = getToken() || ''
  constructor() {
    // 响应式
    makeAutoObservable(this)
  }
  getToken = async ({ username, password }) => {
    // 调用登录接口
    const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
      username,
      password
    })
    // 存入token
    this.token = res.data.token
    // 存入本地
    setToken(this.token)
  }
}

export default LoginStore