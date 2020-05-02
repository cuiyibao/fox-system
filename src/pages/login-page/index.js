import React from 'react'
import './index.less'
import { Form, Input, Button } from 'antd';
// import { Button } from 'antd';
// import { post } from '../../utils/request'

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 16,
  },
};


export default class LoginPage extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.form = null
  // }

  // handleSubmit = () => {
  //   const username = this.form.getFieldValue('username') || ''
  //   const password = this.form.getFieldValue('password') || ''
  //   post('/login', {
  //     username,
  //     password: password
  //   }).then(res =>{
  //     console.log('res', res)
  //   }).catch(err => {
  //     // Toast.info(err || '登录报错')
  //   })
  // }

  render() {
    return (
      <div className='login-page'>
        <div className='form-wrp'>
          <h3 className='l-title'>XXX管理系统</h3>
          <Form
            ref={refs => {
              this.form = refs
            }}
            {...layout}
            name="login-form"
            className="form-container"
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[
                {
                  required: true,
                  message: '请输入用户名',
                },
              ]}
              className="user-wrp"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入密码',
                },
              ]}
              className="password-wrp"
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button className='submit-wrp' type="primary" htmlType="submit" onClick={this.handleSubmit}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}