import React  from "react";
import Grid from '@mui/material/Grid';
import  Box  from "@mui/material/Box";

const MyGrid = () => {
  return (
    <div>
      <Grid container spacing={2} bgcolor={'lightcoral'}>

      <Grid item xs={8} lg={3} sm={6} md={4} bgcolor={'red'}>
        <Box>
            Box-1
        </Box>

      </Grid>

      <Grid item xs={8} lg={3} sm={6} md={4} bgcolor={'blue'}>
        <Box>
            Box-2
        </Box>
    
      </Grid> 
      <Grid item xs={8} lg={3} sm={6} md={4} bgcolor={'green'}>
        <Box>
            Box-3
        </Box>
      </Grid>

        <Grid item xs={8} lg={3} sm={6} md={4} bgcolor={'yellow'}>
        <Box>
            Box-4
        </Box>
        


      </Grid>
      </Grid>
    </div>
  )
}

export default MyGrid
