import React, { Fragment } from 'react'
import { Typography, Image } from 'antd'
import styles from './QuoteInfo.module.css'

const { Title, Paragraph } = Typography

const QuoteInfo = () => {
  return (
    <Fragment>
      <Title level={2} className={styles.heading}>
        Free estimate.
      </Title>
      <Paragraph className={styles.details}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet, ad
        ab ipsum nulla, sit reiciendis voluptatum magnam doloribus.
      </Paragraph>

      {/* <Image src="/postman.svg" alt="postman" /> */}
    </Fragment>
  )
}

export default QuoteInfo
