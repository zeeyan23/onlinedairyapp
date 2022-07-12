import React from 'react'
import {Form,Button,Alert} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from '../pages/sign-up.module.css';
import { useState } from 'react';
import axios, { Axios } from 'axios';
import { useNavigate } from 'react-router-dom';

export const SignUp = (props) => {

  const navigate=useNavigate();
  const [enteredName,setEnteredName]=useState();
  const [enteredEmail,setEnteredEmail]=useState();
  const [enteredPassword,setEnteredPassword]=useState();
  const [missingInput,setMissingInput]=useState(false);
  const [userFound,setUserFound]=useState(false);

  function changeNameHandler(event){
    setEnteredName(event.target.value);
  }
  function changeEmailHandler(event){
    setEnteredEmail(event.target.value);
  }
  function changePasswordHandler(event){
    setEnteredPassword(event.target.value)
  }

  function submitHandler(event){
    event.preventDefault();
    
    const FormData={
      enteredName,
      enteredEmail,
      enteredPassword
    }
    axios.post('http://localhost/api/index.php',FormData)
    .then((result)=>{
      console.log(result);
      if(result.data==='already exist'){
        console.log("excuted");
        setUserFound(true);
        setMissingInput(false);
      }else if(enteredName==null || enteredEmail==null || enteredPassword==null){
        setMissingInput(true);
      }else{
        navigate('/signin');
      }
    });
  }
  return (
    <>
    <h2 className='text-center mt-5'>Create your account</h2>
    <Form onSubmit={submitHandler} >
      <Form.Group className='w-auto'>
        <Form.Label>Name</Form.Label>
        <Form.Control type="name"  placeholder="Enter name" name="name" onChange={changeNameHandler} />
      </Form.Group>
      <Form.Group className='w-auto'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  placeholder="Enter email" name="email" onChange={changeEmailHandler}/>
      </Form.Group>
      <Form.Group className='w-auto'>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  placeholder="Password" name="password" onChange={changePasswordHandler}/>
      </Form.Group>
      <div className={classes.btn}>
      <Button type="submit" name="save" value="Submit" className='btn btn-primary btn-lg mt-4'>Submit</Button>
      </div>
      <Link to="/signin" className="nav-link">Already have an account? Sign in here</Link>
    </Form>
    {missingInput && 
    <Alert variant="danger" className={classes.Alert}>
      <p>
        Something went wrong...You didn't filled all information!!!
      </p>
    </Alert>}
    {userFound && <Alert variant="danger" className={classes.Alert}>
      <p>
        User Already found
      </p>
    </Alert>}
    </>
  )
}

export default SignUp;