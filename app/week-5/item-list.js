"use client";
import React, { useState, useMemo } from 'react';
import items from './items.json';
import Item from './item';

function SortButton({ sortOption, currentSort, onSortChange }) {
  return (
    <button
      onClick={() => onSortChange(sortOption.value)}
      style={{ backgroundColor: currentSort === sortOption.value ? "#f97316" : "" }}
      className="bg-orange-700 p-1 m-2 w-28"
    >
      {sortOption.label}
    </button>
  );
}

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');
  const sortOptions = [
    { label: 'Name', value: 'name' },
    { label: 'Category', value: 'category' }
  ];

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
  }, [sortBy]);

  return (
    <div>
      <div>
        <span className="m-2">Sort by: </span>
        {sortOptions.map(option => (
          <SortButton
            key={option.value}
            sortOption={option}
            currentSort={sortBy}
            onSortChange={setSortBy}
          />
        ))}
      </div>
      <ul>
        {sortedItems.map(item => <Item key={item.id} {...item} />)}
      </ul>
    </div>
  );
};

export default ItemList;
