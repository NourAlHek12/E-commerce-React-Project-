import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";


export default function Navbar(){

    const {searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext);

    console.log(searchParam);

    return <div className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
        <h1 className="text-4xl font-bold text-orange-500">
                <NavLink to={'/'}>
                    ClickCart
                </NavLink>
            </h1>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="search"
            value={searchParam}
            onChange={(event) => setSearchParam(event.target.value)}
            placeholder="Search Item"
            className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-orange-100 focus:shadow-orange-200"
            />
        </form>
        <ul className="flex gap-5">
            <li>
                <NavLink to={'/'} className="text-black hover:text-orange-500 duration-300 font-bold relative">
                    Home
                </NavLink>
            </li>
            <li className="relative">
                <NavLink to={'/cart'} className="text-black hover:text-orange-500 duration-300 font-bold relative">
                    Cart
                </NavLink>
                <div className="relative inline-block"><FaShoppingCart className="absolute top-[-15px] left-2"/></div>
            </li>
        </ul>
        </div>
}