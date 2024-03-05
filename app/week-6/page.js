"use client";

import { useState } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import ItemData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(ItemData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [newItem, ...prevItems]);
  };

  return (
    <main className="bg-slate-950">
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList  items={items} />
    </main>
  );
}