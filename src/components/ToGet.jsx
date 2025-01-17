import axios from "axios";
import { useEffect, useState } from "react";
import './ToGet.css'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const ToGet = () => {
    const [todo, setTodo] = useState([]);

    const getData = async () => {
        
            const res = await axios.get("http://localhost:5000/api/");
            console.log(res.data); // Debug the API response
            setTodo(res.data); // Ensure `todo` is an array
       
    };

    useEffect(() => {
        getData()
    }, [])

    const navigate = useNavigate()
    return (
        <div>
            <h1>Our ToDo List</h1>
            <button onClick={()=>{navigate('/create')}}>Add ToDo</button>
            <div id="todoBox">
            {
                todo.map((todo)=>{
                    return(
                        <div id="todo">
                           <h2>{todo.task}</h2>
                           <p>{todo.details}</p>
                           <button style={{backgroundColor:'blue',border:'none',width:'4rem'}} onClick={()=>{navigate(`/update/${todo._id}`)}}><MdEdit size={35}/></button>
                           <button  style={{backgroundColor:'red',border:'none',width:'4rem'}}><MdDelete size={35}/></button>
                            </div>
                    )
                })
            }
            </div>
            
        </div>
    );
};

export default ToGet
