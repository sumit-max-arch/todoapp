import React, { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleAddItemClick = () => {
    if (inputValue) {
      setItems((prevItems) => [...prevItems, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  }

  const handleItemCompletionClick = (index) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  }

  const handleItemRemovalClick = (index) => {
    setItems((prevItems) => prevItems.filter((item, i) => i !== index));
  }

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          id="todo-input"
          className="todo-input"
          placeholder="Enter a todo item"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleAddItemClick();
            }
          }}
        />
        <button
          id="add-item-button"
          className="add-item-button"
          onClick={handleAddItemClick}
        >
          Add Item
        </button>
      </div>
      <ul id="todo-list" className="todo-list">
        {items.map((item, index) => (
          <li
            key={index}
            className={item.completed ? "completed" : ""}
            onClick={() => handleItemCompletionClick(index)}
            style={{ textDecoration: item.completed ? "line-through" : "none", color: item.completed ? "green" : "none" }}
            >
            {item.text}
            <button
              className="remove-item-button"
              onClick={() => handleItemRemovalClick(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
