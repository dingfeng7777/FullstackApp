'use client'
import Title from 'antd/es/typography/Title'
import React from 'react'
import { Button, Form, Input, message } from 'antd';
import { BankOutlined, LockOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const SignupPage = () => {
  const router = useRouter();
  const onFinish = async (values: {
    username: string;
    password: string;
    email: string;
    phone: string;
    accnumber: string;
    bsb: string;
    accname: string;
  }) => {
    try {
      const res = await axios.post("/api/auth/register", values);
      router.push(`/user/${res.data.userId}/info?new=true`)
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    catch (error) {
      message.error("Registration failed");
    }
  }
  return (
    <>
      <div className='mt-36 flex justify-center items-center'>
        <Title>Teaching Invoice Record System</Title>
        <Title level={2}>Please enter your personal information!</Title>
      </div>
      <div className='flex justify-center items-center'>
        <Form
          name="signup"
          onFinish={onFinish}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input prefix={<PhoneOutlined />} />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
          >
            <Input prefix={<MailOutlined />} />
          </Form.Item>
          <Form.Item
            label="Bank Name"
            name="bankname"
            rules={[{ required: true, message: 'Please input your Bank Name!' }]}
          >
            <Input prefix={<BankOutlined />} />
          </Form.Item>
          <Form.Item
            label="Account Number"
            name="accnumber"
            rules={[{ required: true, message: 'Please input your bank account number!' }]}
          >
            <Input prefix={<BankOutlined />} />
          </Form.Item>
          <Form.Item
            label="BSB"
            name="bsb"
            rules={[{ required: true, message: 'Please input your BSB!' }]}
          >
            <Input prefix={<BankOutlined />} />
          </Form.Item>
          <Form.Item
            label="Account Name"
            name="accname"
            rules={[{ required: true, message: 'Please input your account name!' }]}
          >
            <Input prefix={<BankOutlined />} />
          </Form.Item>
        </Form>
      </div>
      <div className='flex justify-center items-center flex-center' >
        <Form layout='inline'>
          <Form.Item label={null}>
            <Link href='/login'><Button type="primary" htmlType="submit" >
              Submit
            </Button></Link>
          </Form.Item>
          <Form.Item label={null}>
            <Button htmlType="submit">
              clear
            </Button>
          </Form.Item>
        </Form>
      </div >
    </>
  )
}

export default SignupPage
