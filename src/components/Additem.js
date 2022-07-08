const AddItem = () => {
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

export default AddItem