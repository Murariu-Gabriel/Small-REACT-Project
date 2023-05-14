# Thinking in react

- You have think how the final application is going to look like then break it into components

- React works in a declarative way, here you need to ask for what you want not like in vanilla JS applications where you have to lay out step by step to the computer what to do

## Creating a react app with vite

- Open your folder in VScode and type npm create vite@latest in console

- Then enter a . (dot) this will create the app i the current folder

- Then choose JavaScript or Javascript + SWC, the second one should make it faster if it doesn't work the first should be fine

- Then npm i (install)

- Then npm run dev to launch your application

## Components

- Components start with a capital letter

- You can only return one element in a component and you can you a fragment <></> so you don't add unnecessary elements

## Use State

- Will rerender each time it gets updated

- useState cannot be changed only updated, that's why you always must must must return a new copy by spreading it and changing the value you want to update

## Event listeners

- Here we have an event listener onChange in which we invoke a callback function with the event and we update the state with the event value. We also have a value
  attribute in which we pass the state value that we update. So what we basically do is to take the value we write in the input and pass it into it's value

```JS
const App = () => {
  const [newItem, setNewItem] = useState("")


  return (
    <>
      <form className="new-item-form">
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
      <ul className="list">{<ListItem />}</ul>
    </>
  )
}
```

## Iterating through state so we can display added todos

- Here we have the handleSubmit function in which we update our todos on submit
- We use setToDos which is our state function for updating todo state and in which we pas a callback function. Why? Well, we could just pass a new copy of todos and the object we want to update it with and it would work, but, if we want to call setToDos multiple times then it would not render properly. So, to solve that we pass a callback function which contains currentState which is in fact our current todos and we return a copy of currentTodos and the object we want to add.

```js
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
```

- Here we have our unordered list element in which to pass js functionality we need to use {} curly brackets. The brackets will return the result and render it as a normal html element. In it we iterate through todos with map which returns an array. For each todo we destructure it so we can easily access our keys. We return for each of them a list element that always needs a key prop with unique id so it will be easy for us to identify the element with the html elements that we need. In attribute checked of input we pass the completed key and inside the input element we pass the title with curly brackets and with that it will create an array of li elements each unique and then it will render it as html

```js
<ul className="list">
  {todos.map((todo) => {
    const { id, title, completed } = todo
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
        <button className="btn btn-danger">Delete</button>
      </li>
    )
  })}
</ul>
```
