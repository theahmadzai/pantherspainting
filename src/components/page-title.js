import React from 'react'
import { Typography } from 'antd'
import PaintBucket from './svgs/paint-bucket'
import styles from './page-title.module.less'

const { Title } = Typography

const PageTitle = ({ children }) => (
  <Title className={styles.title}>
    <PaintBucket />
    <span className={styles.titleText}>{children}</span>
  </Title>
)

export default PageTitle
