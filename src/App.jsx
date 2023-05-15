import { useState } from "react"
import NewTodoForm from "./NewTodoForm"
// import ListItem from "./ListItem"
import "./styles.css"
import TodoList from "./TodoList"

const App = () => { 
  const [todos, setToDos] = useState([])



  const addTodos = (title) =>{
        setToDos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  const toggleTodo = (id, completed) => {
    setToDos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, completed}
        }

        return todo
      })
    })
  }

  const deleteTodo = (id) => {
    setToDos(currentTodos => {
      return currentTodos.filter((todo) => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm addTodos={addTodos} />
      <h1 className="header">Todos list</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      {/* <ul className="list">
        {todos.length === 0 && "- no todos" }
        {todos.map((todo) => {
           const {id, title, completed} = todo
          return (
            <li key={id}>
              <label>
                <input
                  type="checkbox"
                  checked={completed}
                  onChange={(e) => toggleTodo(id, e.target.checked)}
                />
                {title}
              </label>
              <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
                Delete
              </button>
            </li>
          )
        })}
      </ul> */}
    </>
  )
}
export default App
