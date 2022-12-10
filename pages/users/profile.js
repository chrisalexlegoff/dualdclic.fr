import React, { useEffect } from "react"
import { Button, Card, Col, Form, Input, message, Row, Spin } from "antd"
import { useState } from "react"
import { useAuthContext } from "../../context/AuthContext"
import { API } from "../../lib/constant"
import { getToken } from "../../lib/helpers"
import AppLayout from "../../components/users/appLayout/appLayout"
import { useRouter } from "next/router"

const Profile = () => {
  const [loading, setLoading] = useState(false)
  const { user, isLoading, setUser } = useAuthContext()
  const router = useRouter()
  useEffect(() => {
    if (!getToken()) router.push("/users/signin")
  }, [])
  const handleProfileUpdate = async (data) => {
    setLoading(true)
    try {
      const response = await fetch(`${API}/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // set the auth token to the user's jwt
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(data),
      })
      const responseData = await response.json()
      setUser(responseData)
      message.success("Data saved successfully!")
    } catch (error) {
      console.error(Error)
      message.error("Error While Updating the Profile!")
    } finally {
      setLoading(false)
    }
  }

  if (isLoading) {
    return <Spin size="large" />
  }
  const RX = (test) => {
    const reg = /<p>/
    return reg.test(test) ? test.slice(3, -4) : test
  }

  return (
    <AppLayout>
      <Card className="profile_page_card">
        <Form
          layout="vertical"
          initialValues={{
            username: user?.username,
            email: user?.email,
            twitter_username: user?.twitter_username,
            linkedin_username: user?.linkedin_username,
            github_username: user?.github_username,
            avatar_url: user?.avatar_url,
            website_url: user?.website_url,
            about: RX(user?.about),
          }}
          onFinish={handleProfileUpdate}
        >
          <Row gutter={[16, 16]}>
            <Col md={8} lg={8} sm={24} xs={24}>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Username is required!",
                    type: "string",
                  },
                ]}
              >
                <Input placeholder="Username" />
              </Form.Item>
            </Col>
            <Col md={8} lg={8} sm={24} xs={24}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Email is required!",
                    type: "email",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
            <Col md={8} lg={8} sm={24} xs={24}>
              <Form.Item
                label="Avatar Url"
                name="avatar_url"
                rules={[
                  {
                    type: "url",
                  },
                ]}
              >
                <Input placeholder="Avatar Url" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="About"
                name="about"
                rules={[
                  {
                    required: true,
                    type: "string",
                    max: 120,
                  },
                ]}
              >
                <Input.TextArea placeholder="About" rows={6} />
              </Form.Item>
            </Col>
            <Col md={8} lg={8} sm={24} xs={24}>
              <Form.Item
                label="Twitter Username"
                name="twitter_username"
                rules={[
                  {
                    type: "string",
                  },
                ]}
              >
                <Input placeholder="Twitter Username" />
              </Form.Item>
            </Col>
            <Col md={8} lg={8} sm={24} xs={24}>
              <Form.Item
                label="LinkedIn Username"
                name="linkedin_username"
                rules={[
                  {
                    type: "string",
                  },
                ]}
              >
                <Input placeholder="LinkedIn Username" />
              </Form.Item>
            </Col>
            <Col md={8} lg={8} sm={24} xs={24}>
              <Form.Item
                label="Github Username"
                name="github_username"
                rules={[
                  {
                    type: "string",
                  },
                ]}
              >
                <Input placeholder="Github Username" />
              </Form.Item>
            </Col>
            <Col md={8} lg={8} sm={24} xs={24}>
              <Form.Item
                label="Website Url"
                name="website_url"
                rules={[
                  {
                    type: "url",
                  },
                ]}
              >
                <Input placeholder="Website Url" />
              </Form.Item>
            </Col>
          </Row>
          <Button
            className="profile_save_btn"
            htmlType="submit"
            type="primary"
            size="large"
          >
            {loading ? (
              <>
                <Spin size="small" /> Saving
              </>
            ) : (
              "Save"
            )}
          </Button>
        </Form>
      </Card>
    </AppLayout>
  )
}

export default Profile
