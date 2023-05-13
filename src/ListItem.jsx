function ListItem({el}) {
  return (
    <li>
      <label htmlFor="a">
        <input type="checkbox" name="a" id="a" />
        {el}
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
  )
}
export default ListItem