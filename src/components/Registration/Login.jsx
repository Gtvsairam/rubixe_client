
import * as React from 'react';
import axios from 'axios';
import { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
    const navigate = useNavigate();
   
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [error, setError] = useState('');


    const submitHandler = async (e) => {
        axios.post('https://shy-rose-fox-tutu.cyclic.app/api/login',{email,password},{'Header':{'content':'application/json'}})
        ////////////////////////////////////////----------------///////////////
        .then((res) => { console.log(res.data)})
          .then((data)=>{
                  console.log(data,"userRegister");
            
                //   localStorage.setItem('name',data.name)
                  if(data.status === "ok"){
                      alert(`Successfully logged in`)
                      console.log(data,"..........................");
                      // localStorage.setItem("username",data.data.username)
                      // localStorage.setItem("email",data.data.email)
                      navigate('/')
                  }else{
                      alert(data.error)
                      console.log(data.error);
                  }
        })
        e.preventDefault();
        setEmail('')
        setPassword('')


  }
       
        
        // ////////////////////////////////////////----------------///////////////
        // .then((res) => { console.log(res.data)})
        //   .then((data)=>{
        //           console.log(data,"userRegister");
            
        //           // localStorage.setItem('name',data.name)
        //           if(data.status === "200"){
        //               alert(`Successfully logged in`)
        //               navigate('/')
        //             //    return (alert("Welcome "+ res.data.username))
                    
        //           }else{
        //               alert(data.error)
        //               console.log(data.error);
        //           }
        // }).catchcatch((error) => {
        //     console.log(error)
        // })

    
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {/* {error && <p style={{color:'red'}}>please provide credentials</p>} */}
            <Box component="form" Validate onSubmit={submitHandler} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e)=>setEmail(e.target.value)} 
                value={email}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e)=>setPassword(e.target.value)} 
                value={password}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
