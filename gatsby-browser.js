import React from 'react'
import { RatingsProvider } from './src/contexts/ratings'
import './src/styles/global.less'

export const wrapPageElement = ({ element, props }) => {
  return <RatingsProvider {...props}>{element}</RatingsProvider>
}
