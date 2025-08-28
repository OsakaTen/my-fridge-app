import React from "react";

function ItemList({ items, onDelete }) {
  if (items.length === 0) return <p>まだ食材がありません。</p>;

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => onDelete(item.id)}>削除</button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
