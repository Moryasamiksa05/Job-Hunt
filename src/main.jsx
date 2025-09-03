import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import theme from './theme'
import { ParallaxProvider } from "react-scroll-parallax";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
        
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
