import axios from 'axios'
import React, { useState } from 'react'
import './Create.css'
import { useNavigate } from 'react-router-dom'

const Create = () => {
const [task,setTask] = useState('')
const [details,setDetails] = useState('')


const sendData = async(e) =>{
e.preventDefault()

await axios.post('http://localhost:5000/api/',{task,details})

setTask("")
setDetails("")

alert('posted')

}

const navigate = useNavigate()

  return (
    <div>
        <h1>Add Task and Details</h1>
        <button onClick={()=>{navigate('/')}}>Go to Home</button>
        <form onSubmit={sendData}>
            <label>Task 😁</label>
            <input value={task} type='text' placeholder='Enter Your Task here .....' onChange={(e)=>{setTask(e.target.value)}} />
           <br></br>
            <label>Details 🤣</label>
            <input value={details} type='text' placeholder='Enter Your Details here .....' onChange={(e)=>{setDetails(e.target.value)}} />
            <br></br>
            <input type='submit' value={"Add 😎"} />
        </form>
    </div>
  )
}

export default Create