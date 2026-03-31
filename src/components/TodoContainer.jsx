import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { useState } from "react";

function TodoContainer()
 {
 const [activityArr,setactivityArr]= useState([
        {
            id:1,
            activity:"Go for a Walk"
        },
        {
            id:2,
            activity:"Take a Shower"
        },
        {
            id:3,
            activity:"Have a breakfast"
        }
    ])
  return (
    <div>
      <div className="flex gap-5 flex-wrap">
        <AddTodoForm activityArr={activityArr} setactivityArr={setactivityArr}/>
        <TodoList activityArr={activityArr} setactivityArr={setactivityArr}/>
      </div>
    </div>
  );
}
export default TodoContainer;
