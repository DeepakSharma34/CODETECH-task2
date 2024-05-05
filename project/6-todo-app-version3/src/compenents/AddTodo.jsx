import { useRef} from "react";
import { IoMdAddCircle } from "react-icons/io";
function AddTodo ({onNewItem}) {


  const todoNameElement = useRef();
  const dueDateElement = useRef();

   const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";
    onNewItem(todoName , dueDate)
   }
    return (
        <form className="row kg-row"
        onSubmit={handleAddButtonClicked}> 
            <div className="col-5">
              <input type="text" placeholder="Enter Todo Here"
              ref ={todoNameElement}></input>
            </div>
            <div className="col-4">
              <input type= "date" 
              ref={dueDateElement}/>
            </div>
            <div className="col-2">
            <button 
            className="btn btn-success kg-button">
              <IoMdAddCircle />
            </button>
            </div>
          </form>
    )
};

export default AddTodo;