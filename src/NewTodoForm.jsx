import { useState } from "react"

const NewTodoForm = ({addTodos}) => {
  const [newItem, setNewItem] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()

    if(newItem === "") return 

    addTodos(newItem)
    
    setNewItem("")
  }

  return (
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
  )
}
export default NewTodoForm
