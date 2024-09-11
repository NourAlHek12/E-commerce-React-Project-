import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../../components/cart-tile";
import { GlobalContext } from "../../context";





export default function Cart(){

    const {quantity} = useContext(GlobalContext);

    const [totalCart, setTotalCart] = useState(0);

    const {cart} = useSelector(state => state);

    useEffect(() => {
        setTotalCart(cart.reduce((acc,curr) => acc + curr.price,0))
    },[cart]);

    console.log(cart,totalCart);

    return <div>
        {
            cart && cart.length ?<> <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold mb-6">Your cart</h1>
                <div className="flex justify-end">
                    <Link to="/">
                    <a className="bg-orange-400 w-[300px] py-4 flex justify-center items-center rounded-lg p-2 text-lg mt-3 text-black font-semibold">
                        Continue Shopping
                    </a>
                </Link>
                </div>
                <div>
                    {
                        cart.map(cartItem => <CartTile cartItem={cartItem}/>)
                    }
                </div>
            </div>
            <div>
                <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
                    <h1 className="font-bold text-lg text-orange-500">
                        Your cart summary
                    </h1>
                    <p>
                        <span className="text-black font-bold">Total Item</span>
                        <span>: {quantity}</span>
                    </p>
                    <p>
                        <span className="text-black font-bold">Total Amount</span>
                        <span>: {totalCart * quantity}</span>
                    </p>

                </div>
            </div>
            </>
            : <div className="min-h-[80vh] flex flex-col items-center justify-center">
                <h1 className="text-black font-bold text-xl mb-2">Your Cart Is Empty</h1>
                <Link to="/">
                    <button className="bg-orange-400 w-[300px] py-4 flex justify-center items-center rounded-lg p-2 text-lg mt-3 text-black font-semibold">
                        Continue Shopping
                    </button>
                </Link>
            </div>
            
        }
    </div>
}