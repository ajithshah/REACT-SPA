import React from 'react'
import { Grid } from "@mui/material"
import "./index.css";

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div className='container'>
        <h2>New Order</h2>
        </div>
      </Grid>
    </Grid>
  )
}

export default Home