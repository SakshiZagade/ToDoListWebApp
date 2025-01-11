import { useEffect, useState } from "react";
import axios from "axios";
import './ToGet.css'
const ToGet = () => {
    const [todo, setTodo] = useState([]);

    const getData = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/");
            console.log(res.data); // Debug the API response
            setTodo(Array.isArray(res.data) ? res.data : []); // Ensure `todo` is an array
        } catch (error) {
            console.error("Error fetching data:", error);
            setTodo([]); // Fallback to an empty array in case of error
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1>Our ToDO List</h1>
            
            {Array.isArray(todo) && todo.length > 0 ? (
                todo.map((y) => (
                    <div key={y._id}>
                        <h2>{y.task}</h2>
                        <h2>{y.details}</h2>
                    </div>
                ))
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

export default ToGet;
