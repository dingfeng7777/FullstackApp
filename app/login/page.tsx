'use client'
import Title from 'antd/es/typography/Title'
import React, { useState } from 'react'
import { Button, Form, Input, message } from 'antd';
import Link from 'next/link';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import axios from 'axios';


const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: {
    username: string;
    password: string;
  }) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/auth/login", values);
      router.push(`/user/${response.data.userId}/info?new=false`);
    } catch (error) {
      message.error("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className='mt-36 flex justify-center items-center'>
        <Title>Teaching Invoice Record System</Title>
      </div>
      <div className='flex justify-center items-center'>
        <Form
          name="login">
          <Form.Item
            //   label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder='Username' />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder='Password' />
          </Form.Item>
        </Form>
      </div>
      <div className='flex justify-center items-center flex-center' >
        <Form layout='inline' onFinish={onFinish}>
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Login
            </Button>
          </Form.Item>
          <Form.Item label={null}>
            <Button htmlType="submit">
              clear
            </Button>
          </Form.Item>
        </Form>
      </div >
      <div className='flex justify-center items-center '>Don&apos;t have an account?  <Link href={'/signup'}><Button type='link'>Click here to register</Button></Link></div>
    </>
  )
}
export default LoginPage
