import React, { Fragment } from 'react'
import { Typography } from 'antd'
import styles from './ContactInfo.module.css'

const { Title, Paragraph } = Typography

const ContactInfo = () => {
  return (
    <Fragment>
      <Title level={2} className={styles.heading}>
        Send Us a Message.
      </Title>

      <Paragraph className={styles.details}>
        We will be happy to get back to you as soon as possible. We appreciate
        your feedback, if you have any suggestions or comments regarding our
        improvement please share your idea with us.
      </Paragraph>
    </Fragment>
  )
}

export default ContactInfo
