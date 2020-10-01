import React, { Fragment } from 'react'
import { Typography, Image } from 'antd'
import styles from './QuoteInfo.module.css'

const { Title } = Typography

const QuoteInfo = () => {
  return (
    <Fragment>
      <Title className={styles.heading}>Free Quote.</Title>

      <Image src="/postman.svg" alt="postman" />
    </Fragment>
  )
}

export default QuoteInfo
