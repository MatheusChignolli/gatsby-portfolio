import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { MainStyled } from './styles'
import '../../styles/global.css'

const theme = {
  light: '#FFFFFF',
  dark: '#000C18',
  gray: '#8F8F8F',
  pink: '#F92672',
  green: '#A6E22E',
}

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <MainStyled>{children}teste</MainStyled>
    </ThemeProvider>
  )
}
