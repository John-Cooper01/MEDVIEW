import { extendTheme, ThemeConfig, useColorMode } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'


const config : ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config,
  colors: {
    gray:{
    "900": "#181b23",
    "800": "#1F2029",
    "700": "#353646",
    "600": "#4B4D63",
    "500": "#616480",
    "400": "#797D9A",
    "300": "#9699B0",
    "200": "#B3B5C6",
    "100": "#D1D2DC",
    "50": "#EEEEF2",
  }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: (props) => ( {
      body:  {
        bg: mode('gray.900', 'gray.100')(props),
        color: 'gray.50'
      }
    })
  }
})