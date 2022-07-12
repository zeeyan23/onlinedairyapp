import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Alert} from 'react-bootstrap';
import { useState } from 'react';
import classes from '../pages/sign-in.module.css'
import { useNavigate } from 'react-router-dom';
import axios, { Axios } from 'axios';

export const SignIn = () => {

  const navigate=useNavigate();
  const [enteredEmail,setEnteredEmail]=useState('');
  const [enteredPassword,setEnteredPassword]=useState('');
  const [missingInput,setMissingInput]=useState(false);
  const [userNotFound,setUserNotFound]=useState(false);


  function changeEmailHandler(event){
    setEnteredEmail(event.target.value);
  }
  function changePasswordHandler(event){
    setEnteredPassword(event.target.value)
  }

  function formHandler(event){
    event.preventDefault();
    
    const FormData={
      enteredEmail,
      enteredPassword
    }

    axios.post('http://localhost/api/login.php',FormData)
    .then((result)=>{
      console.log(result);
      if(result.data==='not found'){
        setUserNotFound(true);
        setMissingInput(false);
        // enteredEmail==null || enteredPassword==null
      }else if(result.data==""){
        setMissingInput(true);
        console.log("excuted")
      }
      else{
        setUserNotFound(false);
        navigate('/dashboard');
      }
    });
    // setEnteredEmail('');
    // setEnteredPassword('')
  }

  return (
    <>
    <h2 className='text-center mt-5'>Let's get started!</h2>
    <h2 className='text-center mt-4'>Sign here</h2>
    <Form onSubmit={formHandler} className={classes.Form}>
    <Form.Group>
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email"  placeholder="Enter email" name="email" value={enteredEmail} onChange={changeEmailHandler}/>
    </Form.Group>
    <Form.Group>
      <Form.Label>Password</Form.Label>
      <Form.Control type="password"  placeholder="Password" name="password" value={enteredPassword} onChange={changePasswordHandler}/>
    </Form.Group>
    <div className={classes.btn}>
    <Button type="submit" name="save" value="Submit" className='btn btn-primary btn-lg mt-4'>Submit</Button>
    </div>
    </Form>
    {missingInput && 
    <Alert variant="danger" className={classes.Alert}>
      <p>
        Something went wrong...You didn't filled all information!!!
      </p>
    </Alert>}
    {userNotFound && <Alert variant="danger" className={classes.Alert}>
      <p>
        User Not Found
      </p>
    </Alert>}
    </>
  )
}

export default SignIn;