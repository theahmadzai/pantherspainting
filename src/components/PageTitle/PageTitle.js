import React from 'react'
import { Typography } from 'antd'
import PaintBucket from '../Svgs/PaintBucket'
import styles from './PageTitle.module.css'

const { Title } = Typography

const PageTitle = ({ children }) => (
  <Title className={styles.title}>
    <PaintBucket />
    <span className={styles.titleText}>{children}</span>
  </Title>
)

export default PageTitle
