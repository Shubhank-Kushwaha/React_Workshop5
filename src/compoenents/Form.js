
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Dialog } from '@mui/material';
import axios from 'axios';

const Form = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [open,setOpen] =useState(false);
  
 
  const handleChange = (e) => {
   
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
    // You can handle the form submission logic here
    axios.post("https://dummyjson.com/products/add", formData) 
    
    .then((response)=> 
    {
      console.log(response.data);
    })
  
    .catch ((error)=>
    {
      console.error(error);
    })

  };
const handleClose =() =>
{
    setOpen(false)
}
  return (
            <>
        <Box dispaly= {"flex"} style={{}} border={'4px solid black'}>
    <form onSubmit={handleSubmit}>

      <label>
        First Name:
        <TextField id="outlined-basic" label="FirstName" variant="outlined" 
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          />
    
      </label>
         
      <br />
     
      <label>
        Last Name:
        
        <TextField id="outlined-basic" label="LastName" variant="outlined" 
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          />
      </label>
          
      <br />
  

      <label>
        Email:
        <TextField id="outlined-basic" label="Email" variant="outlined" 
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          />
      </label>
      <br />

      <Button variant="contained" type= "submit">Submit</Button>
    </form>
          </Box>
    <Dialog open= {open}>
        
        <h1>Random</h1>
        <h4>FirstName: {formData.firstName}</h4>
        <h4>LastName: {formData.lastName} </h4>
        <h4>Email: {formData.email} </h4>
        <button onClick={handleClose}>Exit</button>
             
    </Dialog>
</>
  );
};

export default Form