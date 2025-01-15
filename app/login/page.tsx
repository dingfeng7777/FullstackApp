'use client'
import Title from 'antd/es/typography/Title'
import React from 'react'
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const LoginPage = () => {
    const onFinish = (userinfo:unknown) => {
        console.log(userinfo)
    }
  return (
    <>
    <div className='mt-36 flex justify-center items-center'>
        <Title>Teaching Invoice Record System</Title>
    </div>
    <div className='flex justify-center items-center'>
    <Form
    name="login"
    onFinish={onFinish}>
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input prefix={<UserOutlined />}/>
    </Form.Item>
    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password prefix={<LockOutlined  />}/>
    </Form.Item>
    </Form>
    </div>
    <div className='flex justify-center items-center flex-center' >
    <Form layout='inline'>
    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
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
