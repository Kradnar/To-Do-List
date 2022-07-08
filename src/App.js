import React, {useState} from 'react';
import './App.css';

// import compItem from './components/Combutton';
// import deleteItem from './components/DelButton'
// import AddItem from './components/Additem';

const App = () => {

  // State hook - 'useState'
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [colour, setColour] = useState(false);

  // Functions
  const addItem = () => {
    // If nothing entered in box brings up alert
    if (!newItem) {
      alert("You forgot to enter an item.");
      return;
    }
    // Generates Unique ID for list item
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);
    setNewItem("")
  }

// Button which marks task as complete but doesn't delete it
const compItem = (id) => {
  setColour(current => !current);
  return(
    <div>
      <p>Task complete</p>
      style={{
        backgroundColour: colour===true ? 'green' : '',
        color: (colour === true) ? 'white' : ''
      }}
    </div>
  )
}

// Button which removes the item from the list
const deleteItem = (id) => {
  const newArray = items.filter(item => item.id !== id);
  setItems(newArray);
}

  return (
    <div className="App">
      {/* Title */}
      <h1 id="title" >Pete's To Do List</h1>

      {/* Displays placeholder text in input box */}
      <input
        type="text"
        placeholder='Add an item...'
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <button onClick={() => addItem()}>Add</button>

      {/* Unordered list */}
      <ul>
        
        
        {items.map(item => {
          return(
            <li className="listItem" key={item.id}>
              {item.value}
              
              {/* style={{
                backgroundColour: colour===true ? 'green' : '',
                color: (colour === true) ? 'white' : ''
              }} */}
              
              
              <button className='comBtn' onClick={() => compItem(item.id)}>Complete ✔</button>
              <button className='delBtn' onClick={() => deleteItem(item.id)}>Remove ❌</button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}


// const ListItem = (props) => {
//   const [toDo, setToDo] = useState(true)
//   return(
//       <div className="list-item" style={toDo ? {color:"black"} : {color:"green"}}>
//           <h4>{props.task}</h4>
//           <Buttons toDo={toDo} setToDo={setToDo} handleClick={props.handleClick}/>
//       </div>
//   )
// }

// const Buttons = ({toDo, setToDo, handleClick}) => {
//   return (
//       <div>
//           <button onClick={()=>{setToDo(!toDo)}}>To Do</button>
//           <button onClick={handleClick}>Delete</button>
//       </div>
//   )
// }



export default App;