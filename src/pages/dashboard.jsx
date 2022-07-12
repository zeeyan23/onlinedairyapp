import React from 'react'
import NavigationBar from '../components/NavigationBar';
import {Form, FormGroup, FormLabel,Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from '../pages/dashboard.module.css';
import { useState } from 'react';
import axios, { Axios } from 'axios';

export const Dashboard = () => {

  const [date,setDate]=useState('');
  const [story,setStory]=useState('');
  const [dataStored,setDataStored]=useState(false);
  const [missingInput,setMissingInput]=useState(false);

  function dateChangeHandler(event){
    setDate(event.target.value);
  }
  function storyChangeHandler(event){
    setStory(event.target.value);
  }

  function formSubmit(event){
    event.preventDefault();

    if(date==null || story==null){
      setMissingInput(true);
    }else{
      setDataStored(true);
      setMissingInput(false);
    }
    const userDate={
      date,
      story
    };
    axios.post('http://localhost/api/usrstory.php',userDate);
    setDate('');
    setStory('');
  }
  return (
    <>
      <NavigationBar />
      <Form className={classes.textarea} onSubmit={formSubmit}>
        <FormGroup className={classes.formgroup}>
          <FormLabel>Enter the Date</FormLabel>
          <input type='date' className="form-control mb-3" rows="5" onChange={dateChangeHandler} value={date}></input>
          <FormLabel>Write here about today's day how is it went?</FormLabel>
          <textarea className="form-control ml-5" rows="5" onChange={storyChangeHandler} value={story}></textarea>
          <div className={classes.addbtn}>
            <button type="submit" className="btn btn-primary mt-4 px-5">Add to Dairy</button>
          </div>
        </FormGroup>
      </Form>
      {dataStored && <Alert variant="success" className={classes.Alert}>
      <p>
        Dairy Saved Sucessfully!!!
      </p>
      </Alert>}
      {missingInput && <Alert variant="danger" className={classes.Alert}>
      <p>
        Please Fill all fields!!!
      </p>
      </Alert>}
    </>
  )
}

export default Dashboard;