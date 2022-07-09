import React, {useState} from 'react';

// Tasks Function
const TaskItem = (props) => {
  const [colour, setColour] = useState(false);
  return (
    <li className="listItem" key={props.item.id}>
      <p className="listEntry"
        style={{
          backgroundColor: colour===true ? 'green' : '',
          color: colour === true ? 'white' : ''
      }}
      >
      {props.item.value}
      </p>
      <div className="comRemBut">
        <button id='button' className='comBtn' onClick={() => setColour(!colour)(props.item.id)}>Mark as Complete ✔</button>
        <button id='button' className='delBtn' onClick={() => props.deleteItem(props.item.id)}>Remove this Item ❌</button>
      </div>
    </li>
  )
}



export default TaskItem