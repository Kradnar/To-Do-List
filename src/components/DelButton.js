

const deleteItem = (id) => {
    
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
}

export default deleteItem;
