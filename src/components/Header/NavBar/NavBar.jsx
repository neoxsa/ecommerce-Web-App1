import { Menu, Search, ShoppingBag, User, UserX2Icon, X } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import SideNavBar from "../NavBar/SideNavBar";
import logo from "../../../assets/logo.webp";
import SearchBar from "../../Search Bar/Search Bar";

function NavBar() {
  const authStatus = useSelector((state) => state.auth.status);
  const [hamMenu, setHamMenu] = useState(false);
  const [search, setSearch] = useState(false);
  
  const cartCount = useSelector((state)=> state.ProductToCart.products.length);

  const menuToggle = () => {
    setHamMenu((prev) => !prev);
  };

  const navIconClass = `h-8 w-8 xl:h-9 xl:w-9 hover:rounded-full cursor-pointer hover:bg-gray-100 active:bg-gray-100 hover:scale-105 transition-all duration-200 p-1`;


  return (
    <>
      <nav className="w-full h-16 sm:h-18 md:h-20 sticky top-0 z-50 flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-white border-b border-gray-300 shadow-sm">

        <div className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4">

          <div className="lg:hidden transition-all duration-300 ease-in-out">
            {!hamMenu ? (
              <Menu
                className="w-9 h-9  hover:bg-gray-100 active:bg-gray-100 rounded-full p-1 cursor-pointer transition-colors duration-200"
                onClick={() => menuToggle()}
              />
            ) : (
              <X
                className="w-9 h-9  hover:bg-gray-100 active:bg-gray-100 rounded-full p-1 cursor-pointer transition-colors duration-200"
                onClick={menuToggle}
              />
            )}
            {hamMenu && <SideNavBar closeLinkClick={menuToggle} />}
          </div>

          <div
            className={`${search ? "opacity-0 md:opacity-100" : "opacity-100"} transition-all duration-200 ease-in-out`}
          >
            <Link to="/" className="block">
              <img
                className="w-25 h-20 xl:w-40 xl:h-22 object-contain"
                src={logo}
                alt="logo"
              />
            </Link>
          </div>
        </div>


        <div className="hidden lg:flex items-center justify-center flex-1 max-w-md xl:max-w-lg">
          <ul className="flex items-center gap-6 xl:gap-8 2xl:gap-12">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-sm xl:text-base font-medium transition-colors duration-200 hover:text-teal-600 ${
                    isActive
                      ? "text-teal-700 border-b-2 border-teal-700 pb-1"
                      : "text-gray-700"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `text-sm xl:text-base font-medium transition-colors duration-200 hover:text-teal-600 ${
                    isActive
                      ? "text-teal-700 border-b-2 border-teal-700 pb-1"
                      : "text-gray-700"
                  }`
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-sm xl:text-base font-medium transition-colors duration-200 hover:text-teal-600 ${
                    isActive
                      ? "text-teal-700 border-b-2 border-teal-700 pb-1"
                      : "text-gray-700"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-sm xl:text-base font-medium transition-colors duration-200 hover:text-teal-600 ${
                    isActive
                      ? "text-teal-700 border-b-2 border-teal-700 pb-1"
                      : "text-gray-700"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>


        <div
          className={`flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 ${search ? "flex-1 justify-end lg:justify-normal lg:flex-initial" : ""}`}
        >

          <div className="flex items-center">
            {!search ? (
              <button
                onClick={() => setSearch(true)}
                type="button"
                className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
                aria-label="Open search"
              >
                <Search className={navIconClass} />
              </button>
            ) : (
              <div className="flex items-center w-full max-w-xs sm:max-w-sm md:max-w-md">
                <div className="flex-1">
                  <SearchBar search={() => setSearch(false)} />
                </div>
              </div>
            )}
          </div>

          <div className={`${search ? " md:flex" : "flex"} items-center transition-all duration-200`}>
            {authStatus ? (
              <Link
                to="/profile"
                className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
                aria-label="User profile"
              >
                <User className={navIconClass} />
              </Link>
            ) : (
              <Link
                to="/login"
                className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
                aria-label="Login"
              >
                <UserX2Icon className={navIconClass} />
              </Link>
            )}
          </div>


          <div className={`${search ? " md:flex" : "flex"} items-center transition-all duration-200`}>
            <Link
              to="/cart"
              className="p-1 hover:bg-gray-100  rounded-full transition-colors duration-200"
              aria-label="Shopping cart"
            >
             <div className="relative">
               <ShoppingBag className={navIconClass} />

              <span
                  className={`absolute ${search ? "-top-0.5 -right-0.5 md:-top-1 md:-right-1" : "-top-1 -right-1"} bg-teal-600 text-white text-xs rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center font-medium text-[10px] md:text-xs transition-all duration-200 hover:scale-110`}
              >
                {cartCount}
              </span>
             </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
