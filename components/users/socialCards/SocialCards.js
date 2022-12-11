import {
  Button,
  Card,
  Col,
  Image,
  message,
  Popconfirm,
  Row,
  Space,
  Spin,
  Typography,
} from "antd"
import React, { useEffect, useState } from "react"
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineDelete,
} from "react-icons/ai"

import { CgWebsite } from "react-icons/cg"
import { SiGmail } from "react-icons/si"
import { useAuthContext } from "../../../context/AuthContext"
import { API, AVATAR_API } from "../../../lib/constant"
import { getToken } from "../../../lib/helpers"

const SocialCards = () => {
  const [profiles, setProfiles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useAuthContext()
  console.log(user)
  // const confirm = (id) => deleteUser(id)
  // const confirm = (id) => console.log(`${id} delete!`)

  const fetchProfiles = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`${API}/users`)
      const data = await response.json()
      setProfiles(data ?? [])
    } catch (error) {
      console.error(error)
      message.error("Error while fetching profiles!")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchProfiles()
  }, [])

  const deleteUser = async (id, name) => {
    setIsLoading(true)
    try {
      await fetch(`${API}/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          // set the auth token to the user's jwt
          Authorization: `Bearer ${getToken()}`,
        },
      })
      message.success(`${name} supprimé avec succès!`)
    } catch (error) {
      console.error(Error)
      message.error(`Erreur pendant la suppression de ${name}!!`)
    } finally {
      setIsLoading(false)
      fetchProfiles()
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
    <Row gutter={[32, 32]}>
      {profiles.map((profile, index) => (
        <Col md={8} lg={8} sm={24} xs={24} key={`${profile.id}_${index}`}>
          <Card className="social_card">
            <Space
              className="social_card_space"
              direction="vertical"
              align="center"
            >
              <Image
                className="social_image"
                alt={`Image de profil de ${profile.username}`}
                preview={false}
                src={
                  profile.avatar_url ??
                  `${AVATAR_API}?name=${profile.username}&background=1890ff&color=fff`
                }
              />
              <Space wrap>
                <Typography.Title level={5}>
                  {profile.username}
                </Typography.Title>
                {profile.role_dashboard != "admin" &&
                  user?.role_dashboard == "admin" && (
                    <Popconfirm
                      title={`Êtes vous certain de vouloir supprimer ${profile.username}`}
                      onConfirm={() => deleteUser(profile.id, profile.username)}
                      // onOpenChange={() => deleteUser(profile.id)}
                      // onOpenChange={() => console.log("ok")}
                    >
                      <AiOutlineDelete
                        size={16}
                        style={{
                          color: "red",
                          paddingBottom: "0.3rem",
                          height: "24px",
                          cursor: "pointer",
                        }}
                      />
                    </Popconfirm>
                    // <Button
                    //   className="social_button gmail pb-[0.3rem]"
                    //   onClick={() => deleteUser(profile.id)}
                    //   type="link"
                    // >
                    //
                    // </Button>
                  )}
              </Space>

              <Typography.Paragraph>{RX(profile.about)}</Typography.Paragraph>
              <Space size={16} wrap>
                {profile.twitter_username && (
                  <Button
                    className="social_button twitter"
                    href={`https://twitter.com/${profile.twitter_username}`}
                    type="link"
                    target="_blank"
                  >
                    <AiFillTwitterCircle size={24} />
                  </Button>
                )}
                {profile.linkedin_username && (
                  <Button
                    className="social_button linkedin"
                    href={`https://www.linkedin.com/in/${profile.linkedin_username}`}
                    type="link"
                    target="_blank"
                  >
                    <AiFillLinkedin size={24} />
                  </Button>
                )}
                {profile.github_username && (
                  <Button
                    className="social_button github"
                    href={`https://github.com/${profile.github_username}`}
                    type="link"
                    target="_blank"
                  >
                    <AiFillGithub size={24} />
                  </Button>
                )}
                {profile.website_url && (
                  <Button
                    className="social_button website"
                    href={profile.website_url}
                    type="link"
                    target="_blank"
                  >
                    <CgWebsite size={24} />
                  </Button>
                )}
                {profile.email && (
                  <Button
                    className="social_button gmail"
                    href={`mailto:${profile.email}`}
                    type="link"
                    target="_blank"
                  >
                    <SiGmail size={24} />
                  </Button>
                )}
              </Space>
            </Space>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default SocialCards
