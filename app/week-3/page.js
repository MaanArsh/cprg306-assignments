import ItemList from './item-list.js';

const Page = () => {
  return (
    <main className="container margin-left-4 p-8">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
