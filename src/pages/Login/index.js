import { Card } from 'antd'
import logo from '../../assets/logo.png'
import './index.scss'
import { Form, Input, Button, Checkbox, message } from 'antd'
import { useStore } from '../../store/index'
// 登录跳转
import { useNavigate } from 'react-router-dom'

function Login() {
  const { loginStore } = useStore()
  const navigate = useNavigate()

  const onFinish = (values) => {
    console.log('Success:', values);
    loginStore.getToken({
      username: values.username,
      password: values.password
    })
    // 跳转到首页
    navigate('/', { replace: true })
    // 提示用户
    message.success('登录成功')
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* Login Form */}
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}>
            <Input size="large" placeholder="Your username" />
          </Form.Item>
          <Form.Item
            name="password "
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              }
            ]}>
            <Input size="large" placeholder="Your password" />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName='checked'
          >
            <Checkbox className="login-checkbox-label">
              我已阅读并同意「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login