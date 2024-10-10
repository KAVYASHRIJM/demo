import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
const Todolist = () => {
    const[todo,setTodo]=useState('');
    const[name,setName]=useState('');
    const[db,setDb]=useState([])
    // data submit
    function datapost(){
       axios.post("http://localhost:3000/posts",{todo,name})
       .then(()=>{
        alert("Data has been submitted")
        setTodo('')
        setName('')
       })
       .catch(()=>{
        alert("Data hasn't submitted")
       })
    }
    function getData(){
        axios.get("http://localhost:3000/posts")
        .then((response)=>{
            setDb(response.data)
            alert("data has been retrived")
        })
        .catch(()=>{
            alert("data has not getted")
    })
    }
    function updateData(id,data)
    {
        axios.put(`http://localhost:3000/posts/${id}`,{todo:data})
        .then(()=>{
            console.log("Data updated")
            getData();
        })
        .catch(()=>{
           console.log("Data not updated")
        })
    }
    function newData(id){
        const data=prompt("Enter the new data")
        updateData(id,data);
    }
    function deleteData(id) {
        axios.delete(`http://localhost:3000/posts/${id}`)
            .then(() => {
                alert("Data has been deleted");
                getData(); 
            })
            .catch(() => {
                alert("Data has not been deleted");
            });
    }
    console.log(db)
  return (
    <div>
        <p>
            {todo}
        </p>
        <p>
            {name}
        </p>
         <TextField 
         id="outlined-basic" 
         label="Todo" variant="outlined"
         value={todo} 
         onChange={(ref)=>setTodo(ref.target.value)} />
         <br />
         <TextField 
         id="outlined-basic" 
         label="Name" variant="outlined"
         value={name} 
         onChange={(ref)=>setName(ref.target.value)} />
         <br />
        <Button variant="outlined" onClick={datapost}>Submit</Button>
        <Button variant="outlined" onClick={getData}>Get</Button>

        <div>
            <ul>
                {
                    db.map((item) =>(
                        <li key={item.id}>{item.todo}<Button onClick={()=>newData(item.id)}>Edit</Button>
                        <Button onClick={() => deleteData(item.id)}>Delete</Button></li>   //id is unique
                    ))
                }
            </ul>
        </div>
    </div>
  )
}
export default Todolist