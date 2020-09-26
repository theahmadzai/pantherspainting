import React from "react"
import { Result, Button } from "antd"

const NotFound = ({ message }) => (
  <Result
    status="404"
    title="404"
    subTitle={message || "Sorry, the page you visited does not exist."}
    extra={
      <Button type="primary" onClick={() => window.history.back()}>
        Go Back
      </Button>
    }
  />
)

export default NotFound
