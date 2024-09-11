import { createContext, useState } from "react";


export const GlobalContext = createContext(null);

export default function GlobalState({children}){

    const [searchParam, setSearchParam] = useState("");
    const [Loading, setLoading] = useState(false);
    const [itemList, setItemList] = useState([]);
    const [itemDetails, setItemDetails] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [cartList, setCartList] = useState([]);

    const handleIncrease = () => {
        setQuantity((prev) => prev + 1);
      };

      const handleDecrease = () => {
        if (quantity > 1) {
          setQuantity((prev) => prev - 1);
        }
      };

    async function handleSubmit(event) {
        event.preventDefault();
        try{

            const res = await fetch(`https://dummyjson.com/products/search?q=${searchParam}`);
            const data = await res.json();
            if(data?.data?.products){
                setItemList(data?.data?.products);
                setLoading(false);
                setSearchParam('');
            }
            console.log(data);
            setLoading(false);
            setSearchParam('');

        }catch(e){
            console.log(e);
        } 
    }

    function handleAddToCart(getCurrentItem){
        console.log(getCurrentItem);
        let cpyCartList = [...cartList];
        const index = cpyCartList.findIndex(item => item.id === getCurrentItem.id);

        if(index === - 1){
            cpyCartList.push(getCurrentItem)
        }else{
            cpyCartList.splice(index);
        }
        setCartList(cpyCartList);


    }
    console.log(cartList,'cartList');

    console.log(Loading, itemList);

    return <GlobalContext.Provider 
    value={{
        searchParam,
        Loading, 
        itemList, 
        setSearchParam, 
        handleSubmit, 
        itemDetails, 
        setItemDetails,
        quantity, 
        setQuantity,
        handleIncrease,
        handleDecrease,
        handleAddToCart,
        cartList
        }}>
            {children}
        </GlobalContext.Provider>
}