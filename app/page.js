'use client'
import App from "./app"
import { useState ,useEffect} from "react"
import { LightTheme,DarkTheme } from './theme/theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import Header from './Components/Header'
import Landing from './Components/Landing'
import { AuthContextProvider } from "./context"
export default function Home() {
  const[isLoggedIn,setIsloggedIn] = useState(false)
  const [isDark ,setIsDark] = useState(false)
  const SwitchTheme = ()=>{
    setIsDark(!isDark)
  }
 


return (
<>
<ThemeProvider theme={isDark ?DarkTheme:LightTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <AuthContextProvider SwitchTheme={SwitchTheme} >
        {isLoggedIn ? <Landing /> :<App />}
          </AuthContextProvider>

        <CssBaseline />
        </LocalizationProvider>
      </ThemeProvider>
</>

  )
}
