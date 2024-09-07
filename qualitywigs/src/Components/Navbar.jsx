import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { ShopContext } from "../Context/Context";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch, getCartCount} = useContext(ShopContext)
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to={"/"}><img src="" alt="logo" className="w-36" /> </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to={"/"} className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to={"/collection"}
          className="flex flex-col items-center gap-1"
        >
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/about"} className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/contact"} className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <span onClick={()=>setShowSearch(true)} className="w-5 cursor-pointer"><FaSearch /></span>
        <div className="group relative">
          <Link to={"/login"}><span className="w-5 cursor-pointer"><FaUserAlt /></span></Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <Link to={"/orders"}><p className="cursor-pointer hover:text-black">Orders</p></Link>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to={"/cart"} className="relative">
          <span><IoCart /></span>
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] ">
            {getCartCount()}
          </p>
        </Link>
        <span onClick={() => setVisible(true)}><CiMenuFries /></span>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
            <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                <span className="h-4 rotate-180">ddown</span>
                <p>Back</p>
                </div>
                    <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to={"/"}><p>HOME</p></NavLink>
                    <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to={"/collection"}><p>COLLECTION</p></NavLink>
                    <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to={"/about"}><p>ABOUT</p></NavLink>
                    <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to={"/contact"}><p>CONTACT</p></NavLink>

            </div>
        



      </div>
    </div>
  );
};

export default Navbar;
