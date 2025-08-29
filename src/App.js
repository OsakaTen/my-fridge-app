import React, { useState, useEffect } from "react";
import AddItemForm from "./components/AddItemForm";
import ItemList from "./components/ItemList";


function App() {
  const [items, setItems] = useState([]);

  // 起動時に localStorage から復元
  useEffect(() => {
    const saved = localStorage.getItem("items");
    if (saved) setItems(JSON.parse(saved));
  }, []);

  // items が変わるたびに保存
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addItem = (name) => {
    setItems([...items, { id: Date.now(), name }]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <h1>🍎 My Fridge</h1>
      <AddItemForm onAdd={addItem} />
      <ItemList items={items} onDelete={deleteItem} />
    </div>
  );
}

export default App;
