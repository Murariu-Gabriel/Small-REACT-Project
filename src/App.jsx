import "./styles.css"

// Ok the component is done now you need to break it make use of useState and make functions

const App = () => {
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" name="item" id="item" />
        </div>
        <button type="submit" className="btn">
          Add
        </button>
      </form>
      <h1 className="header">Todos list</h1>
      <ul className="list">
        <li>
          <label htmlFor="a">
            <input type="checkbox" name="a" id="a" />
            Do laundry
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <input type="checkbox" name="b" id="b" />
          <label htmlFor="b">asdasdas</label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  )
}
export default App
