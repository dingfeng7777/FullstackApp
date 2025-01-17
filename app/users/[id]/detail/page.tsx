'use client'
import { UserOutlined } from '@ant-design/icons'
import { Row, Col, Card, Avatar, Divider, Descriptions, List, Typography } from 'antd'
import Title from 'antd/es/typography/Title'
import type { DescriptionsProps } from 'antd';
import React from 'react'

const userDetailPage = () => {
  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Account Number',
      children: '1234545'
    },
    {
      key: '2',
      label: 'BSB',
      children: '111-111'
    },
    {
      key: '3',
      label: 'Account Name',
      children: 'jjjjjjjj'
    },
    {
      key: '4',
      label: 'Bank Name',
      children: 'Common Wealth Bank'
    },
  ]

  const data = [
    {code:'FIT9131',name:'Foundation in Java'},
    {code:'FIT9132',name:'Foundation in Database'},
    {code:'FIT9136',name:'Foundation in Python'},
    {code:'FIT9137',name:'Foundation in Computer'}
  ];

  return (
    <Row>
      <Col span={8}>
      <Card title="Personal Information" style={{ width: 350 }}>
      <div className='flex justify-center items-center flex-col gap-4'>
      <Avatar size={72} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      <p>User Name</p>
      <Divider/>
      </div>
      <div>
        <Title level={5}>Email:</Title> 
        <div>12345678@gmail.com</div>
      </div>
      <Divider/>
      <div>
      <Title level={5}>Phone Number:</Title>
      <div>0422867930</div>
      </div>
      </Card>
      </Col>
      <Col span={16}>
      <div>
        <Descriptions title="Bank Info" items={items} bordered/>
      </div>
      <Divider />
      <div>
      <List
      header={<Title level={5}>Courses List</Title>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark>[{item.code}]</Typography.Text> {item.name}
        </List.Item>
      )}
    />
      </div>
      </Col>
    </Row>
  )
}

export default userDetailPage
