import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <h1>Home</h1>
      <p>Welcome to Panthers Painting</p>
      <Link to="/about">About</Link>
    </Layout>
  )
}
