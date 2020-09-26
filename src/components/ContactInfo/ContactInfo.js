import React, { Fragment } from "react"
import { Typography } from "antd"
import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons"
import styles from "./ContactInfo.module.css"

const { Title, Paragraph, Text } = Typography

const ContactInfo = () => {
  return (
    <Fragment>
      <Title className={styles.heading} level={1}>
        Contact us.
      </Title>

      <Paragraph style={{ fontSize: "1rem" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        nobis totam earum voluptatibus dolore! Excepturi, necessitatibus, error
        ad accusantium dolores.
      </Paragraph>

      <Paragraph style={{ fontSize: "1rem" }}>
        <UserOutlined />
        <Text style={{ paddingLeft: ".5rem", textDecoration: "underline" }}>
          2153 Some Avenue, Some Road
        </Text>
      </Paragraph>
      <Paragraph style={{ fontSize: "1rem" }}>
        <PhoneOutlined />
        <Text style={{ paddingLeft: ".5rem", textDecoration: "underline" }}>
          +312-512-3222
        </Text>
      </Paragraph>
      <Paragraph style={{ fontSize: "1rem" }}>
        <MailOutlined />
        <Text style={{ paddingLeft: ".5rem", textDecoration: "underline" }}>
          info@pantherspainting.com
        </Text>
      </Paragraph>

      <div style={{ marginTop: "2rem" }}></div>
      <FacebookOutlined style={{ fontSize: "2rem", marginRight: "1rem" }} />
      <TwitterOutlined style={{ fontSize: "2rem", marginRight: "1rem" }} />
      <InstagramOutlined style={{ fontSize: "2rem", marginRight: "1rem" }} />
    </Fragment>
  )
}

export default ContactInfo
