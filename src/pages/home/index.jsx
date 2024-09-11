import { useContext, useEffect, useState } from "react"
import { Circles } from "react-loader-spinner";
import ProductTile from "../../components/product-tile";
import { GlobalContext } from "../../context";
import Search from "../../components/search-bar";
import { Link } from "react-router-dom";


export default function Home(){

    //const {searchParam} = useContext(GlobalContext);

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const { searchParam, itemList, Loading, setSearchParam, handleSubmit } = useContext(GlobalContext);

    async function fetchListOfProducts() {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();

        if(data){
            setLoading(false);
            setItems(data);
        }
        
        console.log(data);
        
    }

    useEffect(()=>{
        fetchListOfProducts()
    },[])

    // if (searchParam === ""){
    //     return items;
    // }else{
    //     return <Search/>
    // }

    const filteredProducts = searchParam
        ? itemList
        : items;

    return <div>
        {/* <Search /> */}

        
        {
            loading ? 
            <div className="min-h-screen w-full flex justify-center items-center">
                <Circles
                height={"120"}
                width={"120"}
                color ="rgb(127,29,29)"
                visible={true}
                />
            </div> 
            : 
            <div
            className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-8xl mx-auto p-3">
                {
                    items.products && items.products.length ?
                    items.products.map((productItem) => (
                    <ProductTile product={productItem}/> 
                    ))
                    :null
                }
            </div>
        }
    </div>
    
}


