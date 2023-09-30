import React from 'react'
import Grid from '@mui/material/Grid';
import { Box, Container } from '@mui/material';
import loginImg from '../../assets/img/login.svg'
import './login.css'

function Login() {
  return (
    <Container maxWidth="xl">
      <Grid container >
        <Grid item xs={6} display='flex' alignItems="center" justifyContent='center' minHeight='100vh' >
          <Box ><img src={loginImg} alt="login" maxWidth="100%" /></Box>
        </Grid>
        <Grid item xs={6} bgcolor=' #FCFCFC' className="formpart">
          <Box>
            <h1>Login</h1>
            <form>

            </form>
          </Box>
        </Grid>

      </Grid>
    </Container>)
}

export default Login