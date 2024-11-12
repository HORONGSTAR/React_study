import { ThemeProvider, createTheme } from '@mui/material/styles'
import Button from '@mui/material/Button'

const theme = createTheme({
   palette: {
      primary: {
         main: '#000',
      },
      secondary: {
         main: '#dc004e',
      },
   },
})

function MUI5() {
   return (
      <ThemeProvider theme={theme}>
         <Button variant="contained" color="primary">
            버튼
         </Button>
         <Button variant="outined" color="secondary">
            버튼
         </Button>
      </ThemeProvider>
   )
}

export default MUI5
