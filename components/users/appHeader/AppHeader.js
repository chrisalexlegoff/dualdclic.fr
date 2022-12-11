import { Button, Space, Tooltip } from "antd"
import React from "react"
import { CgWebsite } from "react-icons/cg"
import { useAuthContext } from "../../../context/AuthContext"
import { useRouter } from "next/router"
import { removeToken } from "../../../lib/helpers"
import Link from "next/link"
import {
  AiOutlineCloseCircle,
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiTwotoneProfile,
} from "react-icons/ai"

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
      <Link href="/dashboard">
        <Tooltip title="Dashboard">
          <a className="header_space_brand">
            <CgWebsite size={64} />
          </a>
        </Tooltip>
      </Link>
      <Space className="auth_buttons">
        {user ? (
          <>
            <Link
              href="/users/profile"
              className="auth_button_login"
              title="profil"
            >
              <Tooltip title={`Profil de ${user.username}`}>
                <AiTwotoneProfile
                  size={24}
                  style={{ color: "white", cursor: "pointer" }}
                />
                {/* {user.username} */}
              </Tooltip>
            </Link>
            {user.role_dashboard == "admin" && (
              <Link href="/users/signup">
                <Tooltip title="Ajouter un utilisateur">
                  <AiOutlineUserAdd
                    size={24}
                    style={{ color: "white", cursor: "pointer" }}
                  />
                </Tooltip>
              </Link>
            )}
            <Tooltip title="Se deconnecter">
              <AiOutlineCloseCircle
                onClick={handleLogout}
                size={24}
                style={{ color: "red", cursor: "pointer" }}
              />
            </Tooltip>
          </>
        ) : (
          <>
            <Link href="/users/signin">
              <Tooltip title="Se connecter">
                <AiOutlineLogin
                  size={24}
                  style={{ color: "white", cursor: "pointer" }}
                />
              </Tooltip>
            </Link>
            <Link href="/users/signup">
              <Tooltip title="S'enregistrer">
                <AiOutlineUserAdd
                  size={24}
                  style={{ color: "white", cursor: "pointer" }}
                />
              </Tooltip>
            </Link>
          </>
        )}
      </Space>
    </Space>
  )
}

export default AppHeader
