import React, { useState } from 'react'
import NavigationBar from '../components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';

export const ShowDairy = () => {
    const [item,setItem]=useState([]);
    fetch("http://localhost/api/showdata.php")
    .then(res=>res.json())
    .then((result)=>{
        // console.log(result);
        setItem(result);
    })
        
  return (
    <>
        <NavigationBar />
        <p className="h2 text-center mt-5">Below is the Dairy Created by You</p>
        <div className='m-auto mt-5 w-75'>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Date of Creation of Dairy</th>
                    <th>Dairy Message</th>
                </tr>
            </thead>
            <tbody>
                {item.map(item=>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.date}</td>
                        <td>{item.story}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </div>
    </>
  )
}

export default ShowDairy;