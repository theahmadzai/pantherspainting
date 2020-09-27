import React from 'react'
import {
  Form,
  Input,
  InputNumber,
  Row,
  Col,
  Button,
  Switch,
  Typography,
  Image,
} from 'antd'
import Layout from '../components/Layout/Layout'

const { Title } = Typography
const { Item } = Form
const { TextArea } = Input

export default () => {
  return (
    <Layout>
      <Title
        style={{ fontWeight: 300, textAlign: 'center', marginBottom: '3rem' }}
      >
        Request a Free Quote
      </Title>
      <Row>
        <Col md={16}>
          <Form
            layout="horizontal"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            size="large"
          >
            <Row>
              <Col span={24} md={12}>
                <Item label="First Name">
                  <Input placeholder="First Name" />
                </Item>
              </Col>
              <Col span={24} md={12}>
                <Item label="Last Name">
                  <Input placeholder="Last Name" />
                </Item>
              </Col>
            </Row>
            <Row>
              <Col span={24} md={12}>
                <Item label="Phone">
                  <Input placeholder="Phone" addonBefore="+1" />
                </Item>
              </Col>
              <Col span={24} md={12}>
                <Item label="Email">
                  <Input placeholder="Email" />
                </Item>
              </Col>
            </Row>
            <Item
              label="Zip Code"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 4 }}
            >
              <Input placeholder="Zip Code" />
            </Item>
            <Item
              label="Address"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
            >
              <Input placeholder="Address..." />
            </Item>
            <Row>
              <Col span={12}>
                <Item label="Height">
                  <InputNumber placeholder="Height" />
                </Item>
              </Col>
              <Col span={12}>
                <Item label="Width">
                  <InputNumber placeholder="Width" />
                </Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Item label="Length">
                  <InputNumber placeholder="Length" />
                </Item>
              </Col>
              <Col span={12}>
                <Item label="Linear">
                  <Switch />
                </Item>
              </Col>
            </Row>
            <Item
              label="Description"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
            >
              <TextArea rows={6} />
            </Item>
            <Item wrapperCol={{ offset: 4 }}>
              <Button type="ghost">Request Quote</Button>
            </Item>
          </Form>
        </Col>
        <Col md={8}>
          <Image src="/postbox.svg" style={{ padding: '2rem 0 2rem 5rem' }} />
        </Col>
      </Row>
    </Layout>
  )
}
