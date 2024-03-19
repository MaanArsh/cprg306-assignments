"use client";
import { useState } from "react";

function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    function generateRandomId(length = 18) {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }

    const item = {
      id: generateRandomId(),
      name,
      quantity,
      category,
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  const options = [
    "Produce", "Dairy", "Bakery", "Meat", "Frozen Foods",
    "Canned Goods", "Dry Goods", "Beverages", "Snacks",
    "Household", "Other"
  ];

  return (
    <form
      className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full"
      onSubmit={handleSubmit}
    >
      <h2 className="text-white text-xl font-bold">Add new Item</h2>
      <div className="mb-2">
        <input
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
          placeholder="Item Name"
          required
          className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
        />
      </div>
      <div className="flex justify-between">
        <input
          type="number"
          value={quantity}
          min="1"
          max="99"
          required
          onChange={({ target }) => setQuantity(parseInt(target.value))}
          className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
        />
        <select
          value={category}
          onChange={({ target }) => setCategory(target.value)}
          className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
        >
          {options.map((option) => (
            <option key={option} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        +
      </button>
    </form>
  );
}

export default NewItem;
