"use client";

import { useState } from 'react';

const NewItem = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <form onSubmit={handleSubmit} className="text-black max-w-sm w-full p-2 m-4 bg-slate-900">
      <div className="mb-2">
        <input
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
          placeholder="Item Name"
          required
          className="border-gray-300 p-2 rounded-lg font-sans w-full mt-1 border-2"
        />
      </div>
      <div className="flex justify-between">
        <input
          type="number"
          value={quantity}
          min={1}
          max={99}
          required
          onChange={({ target }) => setQuantity(parseInt(target.value, 10))}
          className="border-gray-300 p-2 rounded-lg font-sans w-20 ml-1 border-2"
        />
        <select
          value={category}
          onChange={({ target }) => setCategory(target.value)}
          className="border-gray-300 p-2 rounded-lg font-sans ml-1 border-2"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
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
};

export default NewItem;
