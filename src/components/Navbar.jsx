import avatar from '../../public/image/nico.jpg'

import { FaBarsStaggered } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";


export default function Navbar() {
    return (
        <header className="sm:flex sm:flex-row-reverse sm:grow ">
        <nav className="flex justify-between">
            <div className="flex justify-center gap-[0] flex-col sm:hidden sm:flex-row sm:items-center">
                <p className="font-[700] text-[1.4rem] font-poppins">Welcome Back!</p>
                <p>Hi, John</p>
            </div>
            <div className="flex justify-center items-center gap-[10px] sm:ml-[20px]">
                <FaRegBell size={45} className="text-[1.8rem] rounded-full border border-gray-300 p-[4px]"/>
                <img className="w-[50px] rounded-full border border-gray-300 p-[4px]" src={avatar}
                    alt=""/>
            </div>
        </nav>
        {/* Search Bar  */}
        <section id="search" className="flex justify-center items-center w-full gap-[10px] font-poppins">
            <div className="flex border border-gray-300 rounded-[5px] p-[10px] grow justify-between">
                <input className="flex justify-center items-center w-full outline-none" type="text"
                    placeholder="Brand, Products, ..."/>
                <button type="reset"><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className="flex justify-center items-center bg-red-700 p-[15px] rounded-[5px] w-[50px]">
                <FaBarsStaggered className="text-white"/>
                <i className="fa-solid fa-bars-staggered text-white "></i>
            </div>
        </section>
    </header>
    )
}