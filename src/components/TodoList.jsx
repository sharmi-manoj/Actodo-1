
import TodoItem from "./TodoItem";

function TodoList(props) 
{
   const activityArr = props.activityArr
   const setactivityArr = props.setactivityArr
  return (
    <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
      <h1 className="text-2xl font-medium">Todo Activity</h1>
      {activityArr.length===0?<p>You Haven't added anything yet</p>:""}
      {
            activityArr.map(function(item,index)
            {
                return <TodoItem id ={item.id} activity={item.activity} index={index} activityArr={activityArr} setactivityArr={setactivityArr}/>
            })
      }
      
    </div>
  );
}

export default TodoList;
