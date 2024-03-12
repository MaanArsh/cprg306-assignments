import React from "react";

const Item = ({name, onSelect, quantity, category}) => {
    return (
        <li className=" hover:bg-red-400 cursor-pointer p-2 m-4 bg-slate-900 max-w-sm" onClick={() => onSelect({ name, quantity, category })}>
            <h2 className="text-xl font-bold">{name}</h2>
            <span className="text-sm">Buy {quantity} in {category}</span>
        </li>
    )
};

export default Item;