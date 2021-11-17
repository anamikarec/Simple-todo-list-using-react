const TodoItem = ({id,status,title,handleDelete,handleToggle}) =>{
    var listNumber = id;
       // console.log(title,status,id);
   
   if(listNumber === 1)
       return (
           ''
       );
   
     return (
           <div className="container" >
               <span className="i-num">{listNumber-1}.</span>
               <span className="task">{`${title}`}</span>
               <span className="task" id="status">{`${status}`}</span>
               <button onClick = {()=>handleDelete(id)} className="deleteBtn">X</button>
               <button onClick = {()=>handleToggle(id)} className = "toggleBtn">⦿</button>
               {/* <button onClick={()=>handleToggle(id)} className="items toggle-btn">toggle</button>
               <button onClick={()=>handleDelete(id)} className="items delete-btn">X</button> */}
           </div>
       );
   };
   export default TodoItem;