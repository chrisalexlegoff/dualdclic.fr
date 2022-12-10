import React from "react"
import { Col, Layout, Row } from "antd"
import AppHeader from "../appHeader/AppHeader"
const { Header, Content } = Layout

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <Row gutter={[0, 32]}>
        <Col span={24}>
          <Header>
            <AppHeader />
          </Header>
        </Col>
        <Col span={22} offset={1}>
          <Content>{children}</Content>
        </Col>
      </Row>
    </Layout>
  )
}

export default AppLayout
