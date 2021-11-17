import {useState} from 'react';
import Header from "./Header";
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

const Todo = () =>{
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Default",
            status: "Pending"
        }
    ]);

    const handleDelete = (id) =>{
        setTodos(todos.filter((item) => item.id !== id))
    };
    const handleTaskCreate = (title)=>{
        const payload = {
            title: title,
            status: 'Pending',
            id: todos.length+1
        };
        setTodos([...todos, payload]);
        // console.log(payload);
    };


    const handleToggle = (id) =>{
        setTodos(todos.map((item) => item.id === id ? {...item,status: (item.status === "Done") ? ("Pending") : ("Done")} :item));
    }
    
    // console.log(todos);
    // Delete task
    // const handleDelete = (id)=>{
    //     setTodos(
    //         todos.filter(item => item.id !==id)
    //     )
    // }

    // togle task
    // const handleToggle = (id) =>{
    //     const updatedTodos = todos.map((item) => item.id===id? {...item,status: (item.status==='Done')?('Incomeplete'):'Done'}:item);
    //     setTodos(updatedTodos);
    // }

    return (
    <>
        <Header />
        {todos.map((todos)=>(
            < TodoItem
              title={todos.title}
              status={todos.status}
              key={todos.id} 
              id={todos.id} 
           handleDelete = {handleDelete}
            handleToggle = {handleToggle}
            />
        ))}
        <TodoInput onTaskCreate={handleTaskCreate} />
        
    </>
    );
};
export default Todo;