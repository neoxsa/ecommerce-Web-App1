import { Menu, Search, ShoppingBag, User, UserX2Icon, X } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import SideNavBar from "../NavBar/SideNavBar";
import logo from "../../../assets/logo.webp";

function NavBar() {

  const authStatus = useSelector((state) => state.auth.status)
  const [hamMenu, setHamMenu] = useState(false);

  const menuToggle = () => {
    setHamMenu((prev) => !prev);
  };

  const navIconClass = `h-7 w-7 lg:h-9 lg:w-9 hover:rounded-full cursor-pointer hover:bg-gray-100 active:bg-gray-100  lg:p-1`

  return (
    <>
      <nav className="w-full h-20 sticky top-0 z-50  flex items-center justify-between pt-3 md:pt-8 pb-3 md:pb-8 pl-4 pr-4  md:px-15 bg-white border-b border-gray-300">
        <div className="flex justify-center items-center gap-2 lg:gap-5">
          <div className="md:hidden ">
            {!hamMenu ? (
              <Menu
                className="w-9 h-9 md:w-10 md:h-10 hover:bg-gray-100 active:bg-gray-100 rounded-full p-1 "
                onClick={() => menuToggle()} />
            ) : (
              <X
                className="w-8 h-8 md:w-10 md:h-10 hover:bg-gray-100 active:bg-gray-100 rounded-full p-1 "
                onClick={() => menuToggle()} />
            )}
            {hamMenu && <SideNavBar closeLinkClick={menuToggle} />}
          </div>

          <div>
            <Link to="/">
              <img
                className="lg:w-35 lg:h-25 w-30 h-20 mt-2 "
                src={logo}
                alt="logo"
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center md:gap-20 lg:gap-30 xl:gap-70 ">
          <ul className="md:flex md:gap-10 xl:gap-20 hidden ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? "text-teal-700 underline underline-offset-4" : " text-gray-950"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `${isActive ? "text-teal-700 underline underline-offset-4" : " text-gray-950"}`
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${isActive ? "text-teal-700 underline underline-offset-4" : " text-gray-950"}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${isActive ? "text-teal-700 underline underline-offset-4" : " text-gray-950"}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="flex gap-1 md:gap-5 lg:gap-10 ">
            <span>
              {
                authStatus ? (
                  <Link>
                    <User className={navIconClass} />
                  </Link>
                ) : (
                  <Link
                    to="/login"
                  >
                    <UserX2Icon className={navIconClass}/>
                  </Link>

                )
              }
            </span>
            <span>
              <Search className={navIconClass} />
            </span>
            <span>
              <Link to="/cart">
                <ShoppingBag className={navIconClass} />
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
