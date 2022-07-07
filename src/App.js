import React, {useState} from 'react';
import './App.css';

// import compItem from './components/Combutton';
// import deleteItem from './components/DelButton'

const App = () => {

  // State hook - 'useState'
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  // Helper Functions
  function addItem() {
    if (!newItem) {
      alert("You forgot to enter an item.");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };
    setItems(oldList => [...oldList, item]);
    setNewItem("")
  }

// const compItem = (id) => {

// }


// const deleteItem = (id) => {
//   const newArray = items.filter(item => item.id !== id);
//   setItems(newArray);
// }

  return (
    <div className="App">
      <h1>Pete's To Do List</h1>

      {/* Input (input and button) */}
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
            <li key={item.id}>
              {item.value}
              <button className='comBtn' onClick={() => compItem(item.id)}>Complete ✔</button>
              <button className='delBtn' onClick={() => deleteItem(item.id)}>Remove ❌</button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}


const compItem = (id) => {

}


const deleteItem = (id) => {
  const newArray = items.filter(item => item.id !== id);
  setItems(newArray);
}

export default App;
