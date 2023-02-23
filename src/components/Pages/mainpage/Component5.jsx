import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Component5 = () => {
  return (
    <div className='container5'>
    <div className='details'>
      <h2>GET IN TOUCH</h2>
    <p>
    please complete the form and we will get back to you.
    </p>
    </div>
    <Box style={{marginLeft:20}}
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 2, width: '60ch' },
    }}
    Validate
    autoComplete="off"
  >
  <div>
  <TextField label="Name*" 
  id="outlined-size-normal"
  //  defaultValue="Normal" 
    placeholder='Enter Your Name'
   />
   </div>
   <div>
    <TextField label="Email*" 
  id="outlined-size-normal"
  placeholder='Enter Your Email'
  //  defaultValue="Normal"
    />
   </div>
   <div>
    <TextField label="Mobile Number*" 
  id="outlined-size-normal"
  placeholder='Enter Your Mobile Number'
  //  defaultValue="Normal" 

   />
   </div>
   <Button style={{marginLeft:20}}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, width: '66ch' }}
            >
              Register Now
            </Button>
  </Box>
  </div>
  
  )
}

export default Component5