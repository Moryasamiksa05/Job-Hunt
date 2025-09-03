import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#6C5CE7' },
    secondary: { main: '#00D1B2' },
    background: { default: '#F8FAFC', paper: '#FFFFFF' },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: ['Inter', 'system-ui', 'Arial', 'sans-serif'].join(','),
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 14 } } },
    MuiPaper: { defaultProps: { elevation: 0 }, styleOverrides: { root: { borderRadius: 20 } } }
  }
})

theme = responsiveFontSizes(theme)
export default theme
