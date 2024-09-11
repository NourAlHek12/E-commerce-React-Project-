import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";
import { GlobalContext } from "../../context";
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";


export default function CartTile({cartItem}){

    const dispatch = useDispatch();
    const {cart} = useSelector(state => state);

    const {itemDetails, setItemDetails,quantity,handleIncrease,handleDecrease} = useContext(GlobalContext);

    function handleRemoveFromCart(){
        dispatch(removeFromCart(cartItem.id));
    }

    return <div>
        <table className="w-full mt-4">
            <thead>
                <tr className="text-left border-b-2">
                    <th className="pb-2">Product</th>
                    <th className="pb-2">Quantity</th>
                    <th className="pb-2">Total</th>
                </tr>
            </thead>
            <tbody>
                    <tr key={cartItem.id} className="border-b">
                    <td className="flex items-center py-4">
                        <img src={cartItem.images[0]} alt={cartItem.title} className="w-[180px] h-[180px] mr-4" />
                        <div>
                        <p className="text-black font-bold w-[150px]">{cartItem.title}</p>
                        <p className="text-gray-500 font-semibold">${cartItem.price.toFixed(2)}</p>
                        </div>
                    </td>
                    <td className="py-4">
                        <div className="inline-flex items-center border border-black rounded-md p-2 text-lg mt-11">
                        <button
                            onClick={handleDecrease}
                            className="px-2 py-1"
                            disabled={quantity <= 1}
                        >
                            -
                        </button>
                        <span className="px-4">{quantity}</span>
                        <button
                            onClick={handleIncrease}
                            className="px-2 py-1 "
                        >
                            +
                        </button>
                        </div>
                        <button
                            onClick={handleRemoveFromCart}
                            className="ml-4 text-orange-500 text-2xl p-4 rounded-lg hover:bg-red-100"
                        >
                            <FaTrash className="text-3xl" />
                        </button>
                    </td>
                    <td className="font-semibold text-xl text-black">${(cartItem.price * quantity).toFixed(2)}</td>
                    </tr>
            
                
            </tbody>
        </table>
        
    </div>
}