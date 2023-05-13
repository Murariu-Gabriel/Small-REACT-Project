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