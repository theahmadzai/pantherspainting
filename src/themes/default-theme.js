import theme from "@chakra-ui/core"
import { merge } from "@chakra-ui/utils"

const defaultTheme = merge(theme, {
  styles: {
    global: {
      "html, body": {
        margin: "0",
        color: "#555",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        fontSize: "18px",
        lineHeight: "1.4",
      },

      "::-webkit-scrollbar": {
        width: "10px",
      },

      "::-webkit-scrollbar-track": {
        backgroundColor: "#eee",
      },

      "::-webkit-scrollbar-thumb, ::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#ccc",
      },
    },
  },
})

export default defaultTheme
