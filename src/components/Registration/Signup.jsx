import axios from 'axios';
import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import * as React from 'react';
// import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { fontWeight } from '@mui/system';

const theme = createTheme();
const Signup = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [mobile, setMobile] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [image, setImage] = useState("")
  useEffect(() => {
    const authentication = localStorage.getItem('user')
    if (authentication) {
      // navigate('/login')
    }
  }, [])
  const handelData = async (e) => {
    e.preventDefault();
    await axios.post('https://shy-rose-fox-tutu.cyclic.app/api/registrations', { name, email, password, mobile, state, city, image }, 
    { headers: { "Content-Type": "application/json" } }).then((res) => {
      console.log(res.data)
    }).then((data) => {
      // console.log(data,"userRegister");
      if (name || email || password === 200) {
        alert(`Register Successful, Welcome ${name}`)
        navigate('/admin');
      } else {
        alert(data.error)
      }
    })
      .catch((error) => {
        console.log(error)
      });
      setName("")
    setEmail("")
    setPassword("")
  }

  return (
    <>
    <div className='signupBox'>
      <ThemeProvider  theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              // marginTop: ,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              colorAdjust:'unset',
              color:'black',
              fontWeight:'bolder',
              '& .MuiTextField-root': { m: 1, width: '40ch', }
              
            }}
          >
            <h1 component="h1" variant="h5" style={{textDecoration:'underline', color:'orangered',mt:5,fontWeight:'bold'}}>
              Registration Form
            </h1>
            {/* {error && <p style={{color:'red'}}>please provide credentials</p>} */}
            <Box component="form" Validate onSubmit={handelData} sx={{ mt: 3}}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="username"
                    required
                    fullWidth
                    id="firstName"
                    label="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="phone"
                    label="Mobile"
                    type='number'
                    id="Mobile"
                    onChange={(e) => setMobile(e.target.value)}
                    value={mobile}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </Grid>
                <Grid item xs={12}>
                {/* <TextField
          id="outlined-select-currency"
          select
          label="State"
          onChange={(e) => setState(e.target.value)}
           value={state}
          // defaultValue="EUR"
          helperText="Please select your currency"
        >
          {states.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> */}
                  <TextField
                    required
                    fullWidth
                    name="state"
                    label="State"
                    type='text'
                    id="State"
                    // autoComplete="new-password"
                    onChange={(e) => setState(e.target.value)}
                    value={state}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="city"
                    label="City"
                    type='text'
                    id="city"
                    // autoComplete="new-password"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="standard-basic"
                    variant="standard"
                    name="image"
                    label="Image"
                    type='file'
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <NavLink to='/login' variant="body2">
                    Already have an account? Sign in
                  </NavLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      </div>
    </>
  )
}

export default Signup