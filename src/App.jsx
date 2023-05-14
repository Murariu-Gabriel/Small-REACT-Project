import { useState } from "react"
// import ListItem from "./ListItem"
import "./styles.css"

// Ok the component is done now you need to break it make use of useState and make functions

const App = () => {
  const [newItem, setNewItem] = useState("")
  const [todos, setToDos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    setToDos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ]
    })
    setNewItem("")
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

  return (
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            name="item"
            id="item"
          />
        </div>
        <button type="submit" className="btn">
          Add
        </button>
      </form>
      <h1 className="header">Todos list</h1>
      <ul className="list">
        {todos.map((todo) => {
           const {id, title, completed} = todo
          return (
            <li key={id}>
              <label >
                <input
                  type="checkbox"
                  checked={completed}
                  onChange={e =>toggleTodo(id, e.target.checked)}
                />
                {title}
              </label>
              <button className="btn btn-danger">Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default App
