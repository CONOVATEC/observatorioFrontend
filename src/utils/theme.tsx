import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const theme = extendTheme({
  ...config,
  colors: {
    brand: {
      500: "#9537D3",
      600: "#9537D3"
    },
  },
})

export default theme
