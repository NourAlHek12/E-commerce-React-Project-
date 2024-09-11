import { Link } from "react-router-dom";


export default function ProductTile({product}){

    return <div>
        {/* <div className="flex items-end border-2 border-black gap-1 rounded-xl w-[100px] h-8 bg-black text-white">
            <div className="flex justify-center items-center pl-4">{product?.availabilityStatus}</div>
        </div> */}
        <div className="relative inline-block">
            <span className="absolute top-[57px] left-8 text-red-500 text-lg px-4 py-2 rounded-md w-[130px] flex justify-center items-center">
                {product?.availabilityStatus}
            </span>
        </div>
        <div className="group flex flex-col items-center border-2 border-black gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
            <div className="h-[180px]">
                <img 
                src={product?.images[0]}
                alt={product?.title}
                className="object-cover h-full w-full"
                />
            </div>
            <div>
                <h1 className="w-80 truncate mt-3 text-gray-700 font-bold text-lg flex items-center justify-center">
                    {product?.title}
                </h1>
            </div>
            <div className="flex items-center justify-center w-full mt-2">
                    {product?.price}$
            </div>
            <Link to={`/details-item/${product?.id}`}
            className="text-sm p-3 px-7 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-orange-400 text-black mb-2 -mt-2">
                Product Details
            </Link>
        </div>
    </div>
}
