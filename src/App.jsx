import { useState } from "react"
import ListItem from "./ListItem"
import "./styles.css"

// Ok the component is done now you need to break it make use of useState and make functions

const App = () => {
  const [newItem, setNewItem] = useState("")
  const [toDos, setToDos ] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    setToDos([...toDos, newItem])
  }

  // Nu uita aici trebuie sa faci un callback cu care contine current todos pe care il actualizezi iar asa vei putea folosi setToDoes de mai multe ori pt a actualiza state-ul. Pe langa trebuie sa faci generatorul de id
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
        {
          toDos.map(el => {
            return <ListItem el/>
          })
        }
        </ul>
    </>
  )
}
export default App
