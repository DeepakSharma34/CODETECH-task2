import AppName from "./compenents/AppName";
import AddTodo from "./compenents/AddTodo";
import TodoItems from "./compenents/todoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./compenents/WelcomeMessage";
function App() {

  const [todoItems , setTodoItems] = useState([]);
  const handleNewItem = (itemName , itemDueDate) => 
 {
  
    const newTodoItem = [...todoItems ,{
      name : itemName,
      dueDate : itemDueDate,
    }];
    setTodoItems(newTodoItem)
  }

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item => item.name != todoItemName));
    setTodoItems(newTodoItems);
  }

  return (
    <center className='todo-container'>
        <AppName></AppName>
        <AddTodo onNewItem = {handleNewItem}></AddTodo>
        {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
        <TodoItems todoItems={todoItems} 
        onDeleteClick={handleDeleteItem}></TodoItems>
        
    </center>
  )
}

export default App
