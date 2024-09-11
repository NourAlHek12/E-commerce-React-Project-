import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../context";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart-slice";


export default function Details(){

    const {id} = useParams();
    const {itemDetails, setItemDetails,quantity,handleIncrease,handleDecrease} = useContext(GlobalContext);
    
    const dispatch = useDispatch();
    const {cart} = useSelector(state => state);

    function handleAddToCart(){
        dispatch(addToCart(itemDetails));
    }
    function handleRemoveFromCart(){
        dispatch(removeFromCart(itemDetails.id));
    }

    useEffect(() => {
        async function getItemDetails() {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await response.json();
            
            console.log(data);
            if(data){
                setItemDetails(data);
            }
        }
        getItemDetails();
    },[]);

    console.log(itemDetails);

    return <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex justify-center lg:justify-end">
            <div className="h-[650px] w-[650px] overflow-hidden rounded-xl group">
                <img
                src={itemDetails?.images[0]}
                className="w-full h-full object-cover block group-hover:scale-90 duration-300"
                />
            </div>
        </div>
        <div className="flex flex-col justify-center items-start -mt-[150px]">
            <h1 className="font-bold text-2xl text-black">
                {itemDetails?.title}
            </h1>
            <span className=" mt-2 text-xl text-orange-500 font-medium">
                {itemDetails?.price}$
            </span>
            <span className="mt-7 -mb-6 font-semibold">Quantity ({quantity} in cart)</span>
            <div className="inline-flex items-center border border-black rounded-md p-2 text-lg mt-11">
            
                <button 
                    onClick={handleDecrease} 
                    className="bg-white text-black font-bold py-2 px-4"
                >
                    -
                </button>
                <span className="px-6 py-2 text-black">
                    {quantity}
                </span>
                <button 
                    onClick={handleIncrease} 
                    className="bg-white text-black font-bold py-2 px-4"
                >
                    +
                </button>
            </div>

                <button onClick={cart.some(item => item.id === itemDetails.id)? handleRemoveFromCart : handleAddToCart}
                className="w-[300px] py-4 flex justify-center items-center border border-black rounded-lg p-2 text-lg mt-11 text-black font-semibold">
                {
                    cart.some(item => item.id === itemDetails.id)?
                    'Remove from cart'
                    : 'Add to cart'
                }
                </button>
                <button className="bg-orange-400 w-[300px] py-4 flex justify-center items-center rounded-lg p-2 text-lg mt-3 text-black font-semibold">
                Buy it now
                </button>
                <p className="text-xl text-black pt-10">
                    {itemDetails?.description}
                </p>

        </div>


    </div>
}