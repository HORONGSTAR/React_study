import Box from '@mui/material/Box'

function MUI2_3() {
   return (
      <Box
         sx={{
            witdh: '100px',
            height: '100px',
            backgroundColor: 'primary.main',
            '&:hover': {
               backgroundColor: 'secondary.main',
            },
         }}
      >
         hover to change color
      </Box>
   )
}

export default MUI2_3
