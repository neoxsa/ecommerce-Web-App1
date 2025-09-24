import { NavLink, useNavigate } from 'react-router-dom'

function SideNavBar({
    closeLinkClick,
    navClass = ""

}) {

    const navigate = useNavigate();
    return (
        <>
            <section
                className=' w-full h-full fixed z-40'
                onClick={closeLinkClick}>
                <nav 
                className={` z-50 bg-white h-screen w-50 sm:w-70 fixed p-5 mt-5 left-0  ${navClass}`}
                onClick={(e) => e.stopPropagation()} // to prevent bubbling effect
                >
                    <ul className=' flex flex-col gap-6'>
                        <li>
                            <NavLink
                                to='/'
                                onClick={closeLinkClick}
                                className={({ isActive }) => `${isActive ? "text-teal-700 underline underline-offset-4" : " text-gray-950"} text-lg font-medium`}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/products'
                                onClick={closeLinkClick}
                                className={({ isActive }) => `${isActive ? "text-teal-700 underline underline-offset-4" : " text-gray-950"} text-lg font-medium`}
                            >
                                Shop
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/about'
                                onClick={closeLinkClick}

                                className={({ isActive }) => `${isActive ? "text-teal-700 underline underline-offset-4" : " text-gray-950"} text-lg font-medium`}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/contact'
                                onClick={closeLinkClick}
                                className={({ isActive }) => `${isActive ? "text-teal-700 underline underline-offset-4" : " text-gray-950"} text-lg font-medium`}
                            >
                                Contact
                            </NavLink>
                        </li>

                    </ul>

                    <div className='absolute bottom-30 gap-2 flex flex-col sm:flex-row justify-center items-center text-center '>
                        <button
                        onClick={()=> navigate('/login')}
                            className='cursor-pointer rounded-lg text-base  md:text-lg font-semibold border-1 bg-teal-700 border-teal-800  py-3 px-12 sm:px-8 mt-2 hover:bg-teal-800 focus:bg-teal-800 text-white'
                        >Login</button>
                        <button
                            className='cursor-pointer rounded-lg text-base md:text-lg font-semibold border-1 bg-gray-700 border-teal-800  py-3 px-10 sm:px-8  mt-2 hover:bg-gray-800 focus:bg-gray-800 text-white'

                        >Sign up</button>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default SideNavBar
