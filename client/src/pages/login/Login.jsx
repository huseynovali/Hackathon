import React from 'react'
import Grid from '@mui/material/Grid';
import { Box, Container, FormControl, InputAdornment, OutlinedInput, TextField, IconButton, Button, Typography } from '@mui/material';
import loginImg from '../../assets/img/login.svg'
import './login.css'
import { object } from "yup";
import { useFormik } from "formik";
import * as Yup from "yup";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",

    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setFieldTouched }) => {
      console.log(values);

    },
  });

  return (
    <Container maxWidth="xl">
      <Grid container >
        <Grid item xs={6} display='flex' alignItems="center" justifyContent='center' minHeight='100vh' >
          <Box ><img src={loginImg} alt="login" maxWidth="100%" /></Box>
        </Grid>
        <Grid item xs={6} bgcolor=' #FCFCFC' className="formpart" display='flex' alignItems="center" justifyContent='center'>
          <Box width='400px'>
            <h1>Login</h1>
            <Box component="form" className="form" onSubmit={formik.handleSubmit} flexDirection='column' display='flex' gap='26px'>
              <FormControl>
                <TextField
                  error={formik.touched.email && formik.errors.email}
                  id="email" name="email"
                  label="Email" variant="outlined" type='text'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                   <Typography marginTop={"12px"}>
                  {formik.touched.email && formik.errors.email ? (
                    <Typography
                      fontSize={"16px"}
                      color={"#B00020"}
                      display={"flex"}
                      alignItems={"center"}
                      gap="8px"
                    >
                      {formik.errors.email}
                    </Typography>
                  ) : null}
                </Typography>
              </FormControl>
              <FormControl>
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                  type={showPassword ? 'text' : 'password'}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && formik.errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={togglePasswordVisibility} edge="end">
                          {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}

                />

                <Typography marginTop={"12px"}>
                  {formik.touched.password && formik.errors.password ? (
                    <Typography
                      fontSize={"16px"}
                      color={"#B00020"}
                      display={"flex"}
                      alignItems={"center"}
                      gap="8px"
                    >
                      {formik.errors.password}
                    </Typography>
                  ) : null}
                </Typography>
              </FormControl>

              <Button
                variant="contained"
                type="submit"
                className="btn-submit"
              >
                Login
                  </Button>
            </Box>
          </Box>
        </Grid>

      </Grid>
    </Container>)
}

export default Login