import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
//import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Margins = styled.div`
  margin: 100px;
  margin-left: 300px;
  margin-right: 300px;
`;

// let history = useHistory();

export default class App extends Component {
  goToRegistration = () => {
    // history.push("/register");
  };
    //onFinish = (values) => {};
    //onFinishFailed = (errorInfo) => {};
    NormalLoginForm = () => {}
    onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
  render() {
   
    return (
      <Margins>
        <h1>Login</h1>

        <Form
        name="normal_login"
        className="login-form"
        initialValues={{
            remember: true,
        }}
        onFinish={this.onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                {
                    required: true,
                    message: 'Please input your Username!',
                },
                ]}
      >
                  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />

      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        
      </Form.Item>
          </Form>

        
        <Button onClick={this.goToRegistration}>Register now!</Button>
      </Margins>
    );
  }
}
