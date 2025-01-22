'use client'
import { Row, Col, Form, Select, InputNumber, Button, Table } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import Title from 'antd/es/typography/Title'
import React, { useState } from 'react'

const initialData: {
  key: string,
  unitcode: string,
  hours: number,
  rate: number,
  totalStudent: number,
  comment?: string
}[] = [
    {
      key: '1',
      unitcode: 'FIT9131',
      hours: 2,
      rate: 25,
      totalStudent: 10,
      comment: '111'
    }
  ]

interface formValues {
  unitcode: string,
  hours: number,
  rate: number,
  totalStudent: number,
  comment?: string | undefined
}
const formsPage = () => {
  const [forms, setForms] = useState(initialData);
  const columns = [
    {
      title: 'Unit Code',
      dataIndex: 'unitcode',
      key: 'unitcode',
    },
    {
      title: 'Working Hours',
      dataIndex: 'hours',
      key: 'hours',
    },
    {
      title: 'Hourly Rate',
      dataIndex: 'rate',
      key: 'rate',
    },
    {
      title: 'Amount Students',
      dataIndex: 'totalStudents',
      key: 'totalStudents',
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
    }
  ];

  const handleClick = (values: formValues) => {
    const newForm = {
      key: (forms.length + 1).toString(),
      unitcode: values.unitcode,
      hours: values.hours,
      rate: values.rate,
      totalStudent: values.totalStudent,
      comment: values.comment
    }
    setForms([...forms, newForm])
  }
  return (
    <Row>
      <Col span={8}>
        <Form onFinish={handleClick}>
          <Form.Item
            label="Unit Code"
            name="unitcode"
            rules={[{ required: true, message: 'Please input your Unit Code!' }]}
          >
            <Select
              options={[
                { value: 'FIT9131', label: 'FIT 9131' },
                { value: 'FIT9132', label: 'FIT 9132' },
                { value: 'FIT9136', label: 'FIT 9136' },
                { value: 'FIT9137', label: 'FIT 9137' },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Working Hours"
            name="hours"
            rules={[{ required: true, message: 'Please input your Working Hours!' }]}
          >
            <InputNumber min={1} max={20} defaultValue={0} />
          </Form.Item>
          <Form.Item
            label="Hourly Rate"
            name="rate"
            rules={[{ required: true, message: 'Please input your Hourly Rate!' }]}
          >
            <InputNumber min={1} max={200} defaultValue={0} prefix='AUD$' />
          </Form.Item>
          <Form.Item
            label="Amount Students"
            name="totalStudents"
            rules={[{ required: true, message: 'Please input the number of students!' }]}
          >
            <InputNumber min={1} max={200} defaultValue={0} />
          </Form.Item>
          <Form.Item
            label="Comments"
            name="comments"
            rules={[{ message: 'Any Comments?' }]}
          >
            <TextArea rows={6} placeholder='Any Comments?' />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col span={16}>
        <Table dataSource={forms} columns={columns} bordered />
        <div>
          <Title level={5}>Total Salary:</Title>
        </div></Col>

    </Row>
  )
}

export default formsPage
