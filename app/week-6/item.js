export default function Item({name, quantity, category}){
    return (
      <main>
        <div className="">
          <ul className="p-2.5 ml-5 pt2 border-2 mb-3 w-96 h-20  bg-blue-800">
            <li className="font-bold text-xl">{name}</li>
            <li className="">
              Buy {quantity} in {category}
            </li>
          </ul>
        </div>
      </main>
    );
} 