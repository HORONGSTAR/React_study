import Button from '@mui/material/Button'
import { styled } from '@mui/material'

const CustomButton = styled(Button)(({ theme }) => {
   console.log(theme)

   return {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      padding: theme.spacing(2), // 8px * 2 = 16px
      '&:hover': {
         backgroundColor: theme.palette.secondary.main,
      },
   }
})

function MUI2_4() {
   return <CustomButton>styled Button</CustomButton>
}

export default MUI2_4
