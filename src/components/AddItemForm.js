import React, { useState } from "react";

function AddItemForm({ onAdd }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onAdd(value.trim());
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="食材を入力"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">追加</button>
    </form>
  );
}

export default AddItemForm;
