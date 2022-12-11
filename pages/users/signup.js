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
import { useRouter } from "next/router"
import React, { useState } from "react"
import { useAuthContext } from "../../context/AuthContext"
import useScreenSize from "../../hooks/useScreenSize"
import { API } from "../../lib/constant"
import { setToken } from "../../lib/helpers"
import Link from "next/link"
import AppLayout from "../../components/users/appLayout/appLayout"

const SignUp = () => {
  const { isDesktopView } = useScreenSize()
  const router = useRouter()

  const { setUser } = useAuthContext()

  const [isLoading, setIsLoading] = useState(false)

  const [error, setError] = useState("")

  const onFinish = async (values) => {
    setIsLoading(true)
    try {
      const response = await fetch(`${API}/auth/local/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      const data = await response.json()
      if (data?.error) {
        throw data?.error
      } else {
        // set the token
        setToken(data.jwt)

        // set the user
        setUser(data.user)

        message.success(`Merci et bienvenue ${data.user.username}!`)

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
          <Card title="S'enregistrer">
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
                label="Identifiant"
                name="username"
                rules={[
                  {
                    required: true,
                    type: "string",
                  },
                ]}
              >
                <Input placeholder="Identifiant" />
              </Form.Item>
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
                <Input placeholder="Addresse Email" />
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
                  Submit {isLoading && <Spin size="small" />}
                </Button>
              </Form.Item>
            </Form>
            <Typography.Paragraph className="form_help_text">
              Vous avez déjà un compte ?{" "}
              <Link href="/users/signin">Connectez-vous</Link>
            </Typography.Paragraph>
          </Card>
        </Col>
      </Row>
    </AppLayout>
  )
}

export default SignUp
