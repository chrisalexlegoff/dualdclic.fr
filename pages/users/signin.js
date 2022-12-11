import {
  Alert,
  Button,
  Card,
  Col,
  Form,
  Input,
  message,
  Row,
  Spin,
  Typography,
} from "antd"
import React, { useState } from "react"
import { useAuthContext } from "../../context/AuthContext"
import useScreenSize from "../../hooks/useScreenSize"
import { useRouter } from "next/router"
import { setToken } from "../../lib/helpers"
import Link from "next/link"
import AppLayout from "../../components/users/appLayout/appLayout"

const SignIn = () => {
  const { isDesktopView } = useScreenSize()
  const router = useRouter()

  const { setUser } = useAuthContext()

  const [isLoading, setIsLoading] = useState(false)

  const [error, setError] = useState("")

  const onFinish = async (values) => {
    setIsLoading(true)
    try {
      const value = {
        identifier: values.email,
        password: values.password,
      }
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/auth/local`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value),
        }
      )

      const data = await response.json()
      if (data?.error) {
        throw data?.error
      } else {
        // set the token
        setToken(data.jwt)

        // set the user
        setUser(data.user)

        message.success(`Bienvenue ${data.user.username}!`)

        router.push("/users/profile")
      }
    } catch (error) {
      console.error(error)
      setError(error?.message ?? "Something went wrong!")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AppLayout>
      <Row align="middle">
        <Col span={isDesktopView ? 8 : 24} offset={isDesktopView ? 8 : 0}>
          <Card title="Se connecter">
            {error ? (
              <Alert
                className="alert_error"
                message={error}
                type="error"
                closable
                afterClose={() => setError("")}
              />
            ) : null}
            <Form
              name="basic"
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                  },
                ]}
              >
                <Input placeholder="Votre adresse mail" />
              </Form.Item>

              <Form.Item
                label="Mot de passe"
                name="password"
                rules={[{ required: true }]}
              >
                <Input.Password placeholder="Mot de passe" />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login_submit_btn"
                >
                  Login {isLoading && <Spin size="small" />}
                </Button>
              </Form.Item>
            </Form>
            <Typography.Paragraph className="form_help_text">
              Nouveau ? <Link href="/users/signup">Enregistrez-vous</Link>
            </Typography.Paragraph>
          </Card>
        </Col>
      </Row>
    </AppLayout>
  )
}

export default SignIn
