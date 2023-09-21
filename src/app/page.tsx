'use client'

import { Container, Typography } from '@mui/material'

const Home: React.FC = () => {

  return (
      <Container
        sx={{
          display: "flex",
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          flexDirection: 'column',
          my: '32px',
          px: '8px'
        }}
      >
       <Typography> Hello, Word !</Typography>
      </Container>
  )
}

export default Home
