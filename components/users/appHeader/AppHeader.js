import { Button, Space } from "antd"
import React from "react"
import { CgWebsite } from "react-icons/cg"
import { useAuthContext } from "../../../context/AuthContext"
import { useRouter } from "next/router"
import { removeToken } from "../../../lib/helpers"

const AppHeader = () => {
  const { user, setUser } = useAuthContext()
  const router = useRouter()
  const handleLogout = () => {
    removeToken()
    router.push("/users/signin")
    setUser()
  }

  return (
    <Space className="header_space">
      <Button className="header_space_brand" href="/dashboard" type="link">
        <CgWebsite size={64} />
      </Button>
      <Space className="auth_buttons">
        {user ? (
          <>
            <Button
              className="auth_button_login"
              href="/users/profile"
              type="link"
            >
              {user.username}
            </Button>
            <Button
              className="auth_button_signUp"
              type="primary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              className="auth_button_login"
              href="/users/signin"
              type="link"
            >
              Login
            </Button>
            <Button
              className="auth_button_signUp"
              href="/users/signup"
              type="primary"
            >
              SignUp
            </Button>
          </>
        )}
      </Space>
    </Space>
  )
}

export default AppHeader
