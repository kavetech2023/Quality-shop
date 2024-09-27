import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ShopContext } from "../Context/Context";

const categories = [
  { name: "HOME", link: "/" },
  { name: "WIGS", link: "/wigs", subCategories: ["Human Hair Wigs", "Synthetic Wigs", "Lace Front Wigs"] },
  { name: "GLUELESS READY TO WEAR", link: "/glueless" },
  { name: "MORE STYLES", link: "/styles", subCategories: ["Straight", "Curly", "Wavy", "Kinky"] },
  { name: "BEST SELLER", link: "/best-seller" },
  { name: "PROMOTION", link: "/promotion" },
  { name: "NEW IN", link: "/new-in" },
  { name: "BUNDLES & CLOSURE", link: "/bundles-closure" },
  { name: "EXPLORE", link: "/explore", subCategories: ["Hair Care", "Accessories", "Tutorials"] },
];

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to={"/"} className="flex-shrink-0">
            <img src="/placeholder.svg?height=40&width=120" alt="logo" className="h-10" />
          </Link>
          
          <div className="hidden lg:block">
            <div className="flex items-center space-x-4">
              {categories.map((category, index) => (
                <div 
                  key={index} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(category.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <NavLink
                    to={category.link}
                    className="text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-bold"
                  >
                    <div className="flex items-center">
                      {category.name}
                      {category.subCategories && <MdKeyboardArrowDown className="ml-1" />}
                    </div>
                  </NavLink>
                  {category.subCategories && activeDropdown === category.name && (
                    <div className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {category.subCategories.map((subCategory, subIndex) => (
                          <Link
                            key={subIndex}
                            to={`${category.link}/${subCategory.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          >
                            {subCategory}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowSearch(true)}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <FaSearch className="h-5 w-5" />
            </button>
            <div className="relative group">
              <Link to={"/login"} className="text-gray-800 hover:text-gray-600">
                <FaUserCircle className="h-6 w-6" />
              </Link>
              <div className="hidden group-hover:block absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">My Profile</Link>
                  <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Orders</Link>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Logout</button>
                </div>
              </div>
            </div>
            <Link to={"/cart"} className="text-gray-800 hover:text-gray-600 relative">
              <IoCartSharp className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            </Link>
            <button
              onClick={() => setVisible(true)}
              className="text-gray-800 hover:text-gray-600 focus:outline-none lg:hidden"
            >
              <RiMenu3Fill className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out transform ${
          visible ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <Link to={"/"} onClick={() => setVisible(false)}>
              <img src="/placeholder.svg?height=40&width=120" alt="logo" className="h-8" />
            </Link>
            <button
              onClick={() => setVisible(false)}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-grow overflow-y-auto">
            {categories.map((category, index) => (
              <div key={index}>
                <NavLink
                  to={category.link}
                  className="block px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900"
                  onClick={() => !category.subCategories && setVisible(false)}
                >
                  {category.name}
                </NavLink>
                {category.subCategories && (
                  <div className="pl-8">
                    {category.subCategories.map((subCategory, subIndex) => (
                      <Link
                        key={subIndex}
                        to={`${category.link}/${subCategory.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        onClick={() => setVisible(false)}
                      >
                        {subCategory}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;