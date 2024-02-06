const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-blue-600 p-1 mb-4">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-white-600">Buy {quantity} in {category}</p>
    </li>
  );
};

export default Item;
