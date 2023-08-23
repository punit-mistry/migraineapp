'use client'
import App from "./app"
import { useState } from "react"
import { LightTheme,DarkTheme } from './theme/theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import Header from './Components/Header'
import Landing from './Components/Landing'
export default function Home() {
  const[isLoggedIn,setIsloggedIn] = useState(true)
  const [isDark ,setIsDark] = useState(false)
  const SwitchTheme = ()=>{
    setIsDark(!isDark)
  }
return (
<>
<ThemeProvider theme={isDark ?DarkTheme:LightTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Header SwitchTheme={SwitchTheme} />
        {!isLoggedIn ? <Landing /> :<App />}

        <CssBaseline />
        </LocalizationProvider>
      </ThemeProvider>
</>

  )
}
