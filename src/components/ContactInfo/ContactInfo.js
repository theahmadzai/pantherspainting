import React, { Fragment } from 'react'
import { Typography } from 'antd'
import styles from './ContactInfo.module.css'

const { Title, Paragraph } = Typography

const ContactInfo = () => {
  return (
    <Fragment>
      <Title className={styles.heading}>Contact us.</Title>

      <Paragraph className={styles.details}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nostrum,
        obcaecati voluptates neque exercitationem debitis asperiores, nam
        facilis natus rem deserunt. Distinctio laudantium ex cum. Adipisci
        possimus repudiandae iure illo?
      </Paragraph>
    </Fragment>
  )
}

export default ContactInfo
