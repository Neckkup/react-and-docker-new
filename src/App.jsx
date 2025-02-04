import React, { useState, useEffect }from 'react'
import Navbar from './navbar'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Mycard from './mycard';


function App() {
  const [attractions, setAttractions] = useState([])
  useEffect(() => {
    fetch('https://www.melivecode.com/api/attractions')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setAttractions(data)
      })
  }, [])
  return (
    <div>
      <Navbar />
      <Container maxWidth="sm">
      <Typography variant="body1" gutterBottom>
      
      </Typography>
      <Grid container spacing={2}>
      { attractions.map(attraction => (
        <Grid size={{ xs: 6, md: 8 }}>
          <Mycard attraction={attraction} />
        </Grid>
        ))} 
        </Grid>
        </Container>
    </div>   
  )
}

export default App