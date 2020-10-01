import React from 'react'
import { Typography } from 'antd'
import styles from './PageTitle.module.css'

const { Title } = Typography

const PageTitle = ({ children }) => (
  <Title className={styles.title}>{children}</Title>
)

export default PageTitle
