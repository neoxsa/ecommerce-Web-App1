import { Heart, Menu, Search, User, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import SideNavBar from '../NavBar/SideNavBar'

function NavBar() {

    const [hamMenu, setHamMenu] = useState(false)

    const openCloseCLick = () => { setHamMenu(prev => !prev)}

    return (
        <>
            <nav className='w-full h-20 sticky top-0 z-50  flex items-center justify-between pt-3 md:pt-8 pb-3 md:pb-8 pl-4 pr-4  md:px-15 bg-white border-b border-gray-300'>
                <div className='flex justify-center items-center gap-2 lg:gap-5'>
                    <div className='md:hidden '>
                        {
                            !hamMenu ? (
                                <Menu
                                    className='w-8 h-8'
                                    onClick={() => openCloseCLick()}
                                />
                            ) : (
                                <X
                                    className='w-8 h-8'
                                    onClick={() => openCloseCLick()}
                                />
                            )
                        }
                        {
                            hamMenu && (
                                <SideNavBar
                                closeLinkClick={openCloseCLick}
                                />
                            )
                        }
                    </div>

                    <div>
                        <Link
                            to='/'
                        >
                            <img className='lg:w-35 lg:h-25 w-30 h-20 mt-2 ' src="src/assets/logo.webp" alt="logo" />
                        </Link>
                    </div>
                </div>
                <div className='flex justify-between items-center md:gap-20 lg:gap-30 xl:gap-70 '>
                    <ul className='md:flex md:gap-10 xl:gap-20 hidden '>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => `${isActive ? "text-teal-700 underline underline-offset-4" : " text-gray-950"}`}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/products'
                                className={({ isActive }) => `${isActive ? "text-teal-700 underline underline-offset-4" : " text-gray-950"}`}
                            >
                                Shop
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/about'
                                className={({ isActive }) => `${isActive ? "text-teal-700 underline underline-offset-4" : " text-gray-950"}`}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/contact'
                                className={({ isActive }) => `${isActive ? "text-teal-700 underline underline-offset-4" : " text-gray-950"}`}
                            >
                                Contact
                            </NavLink>
                        </li>

                    </ul>
                    <div className='flex gap-2 md:gap-5 lg:gap-10 '>
                        <span><User className='h-7 w-7 lg:h-auto lg:w-auto cursor-pointer' /></span>
                        <span><Search className='h-7 w-7 lg:h-auto lg:w-auto cursor-pointer' /></span>
                        <span><Heart className='h-7 w-7 lg:h-auto lg:w-auto cursor-pointer' /></span>

                        <span>
                            <Link
                                to='/cart'
                            >
                                <img className='h-7 w-7 lg:h-auto lg:w-auto text-center' src="src/assets/nav icon/ant-design_shopping-cart-outlined.svg" alt="cart_icon" />
                            </Link>
                        </span>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default NavBar
