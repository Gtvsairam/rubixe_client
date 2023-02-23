// import axios from 'axios';
import { useState, useEffect } from 'react'
// import {  useNavigate } from 'react-router-dom';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useParams,  Link } from "react-router-dom";





const Update = (props) => {
  // const navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [state, setState] = useState("")
  const params = useParams();

  useEffect(()=>{
    const getUser = async ()=>{
        let data = await fetch(`https://shy-rose-fox-tutu.cyclic.app/api/updateuser/${params.id}`);
        data = await data.json();

        setName(data.name);
        setMobile(data.mobile);
        setEmail(data.email);
        setState(data.state)
        console.log(data);
    }

    getUser()
  },[params.id])
    
  const updateUser = async (e) => {
    let result = await fetch(`https://shy-rose-fox-tutu.cyclic.app/api/updateuser/${params.id}`, {
      method: "Put",
      body: JSON.stringify({
        name,
        mobile,
        email,
        state,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
  
  };


  return (
    <>
  
            <div className='update_form'>
            <h1>
    Update Users
  </h1>
            <Box component="form" Validate sx={{ mt:15}} >
              <Grid  marginLeft={0} container spacing={13}>
                <Grid item xs={5}>
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
                <Grid item xs={5} paddingRight={5} >
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
                <Grid item xs={5} >
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
                <Grid item xs={5} paddingRight={5}>
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

              </Grid>
              <Link to='/admin'>
              <Button
                size='large'
                type="submit"
                variant="contained"
                color="success"
                onClick={updateUser}
                sx={{ mt: 6, mb: 2,ml:62,pl:5,pr:5 }}
              >
                Update
              </Button>
              </Link>
            </Box>
          </div>
      {/* </div> */}
    </>
  )
}

export default Update