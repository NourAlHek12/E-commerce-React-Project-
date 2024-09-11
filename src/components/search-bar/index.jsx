import { GlobalContext } from "../../context";
import { useContext} from "react";
import ItemList from "../../components/item-list";


export default function Search(){

    const {itemList,Loading} = useContext(GlobalContext);

    if (Loading) return <div>Loading...Please wait!</div>;

    return <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
    {itemList && itemList.length > 0 ? (
        itemList.map((item) => <ItemList item={item} />)
    ) : (
        <div>
        <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show. Please search something
        </p>
        </div>
    )}
</div>
}
