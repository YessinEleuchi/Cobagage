import React from 'react'
import {Typography ,Box }from '@mui/material'

const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: '10%',
     
      }}
    >

      <Typography variant="h1" >Accueil</Typography>
    </Box>

  )
}

export default HomePage
