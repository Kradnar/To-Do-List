import React, {useState} from 'react';
import './App.css';

// import compItem from './components/Combutton';
// import deleteItem from './components/DelButton'
// import AddItem from './components/Additem';

const App = () => {

  // State hook - 'useState'
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  



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
const compItem = (id, props) => {
  props.setColour(!props.colour);
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
        {items.map((item, index) => {
          return <TaskItem 
          compItem={compItem}
          deleteItem={deleteItem}
          item={item}
          key={index}
          />;
        })}
      </ul>
    </div>
  );
};


// Tasks Function
const TaskItem = (props) => {
  const [colour, setColour] = useState(false);

  <li className="listItem" key={props.item.id}>
    <p 
      style={{
        backgroundColor: colour===true ? 'green' : '',
        color: colour === true ? 'white' : ''
    }}
    >
    {props.item.value}
    </p>
    
    
    <button className='comBtn' onClick={() => props.compItem(props.item.id)}>Complete ✔</button>
    <button className='delBtn' onClick={() => props.deleteItem(props.item.id)}>Remove ❌</button>
  </li>
}



export default App;