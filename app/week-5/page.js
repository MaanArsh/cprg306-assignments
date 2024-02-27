import ItemList from "./item-list.js"

export default function Page(){
    return(
        <main>
            <h1 className="text-4xl p-5 font-bold">Shopping List</h1>
            <ItemList></ItemList>

        </main>
    )
}