// 1. 判断token是否存在
// 2. 如果存在，直接正常渲染
// 3. 如果不存在，跳转到登录页

import { getToken } from '../utils/token'
import { Navigate } from 'react-router-dom'

function AuthComponent({ children }) {
  const token = getToken()
  if (token) {
    return children
  } else {
    return <Navigate to="/login" />
  }
}

export {
  AuthComponent
}